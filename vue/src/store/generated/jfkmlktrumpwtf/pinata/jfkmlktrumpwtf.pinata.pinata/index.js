import { txClient, queryClient, MissingWalletError } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { Ipfs } from "./module/types/pinata/ipfs";
export { Ipfs };
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function mergeResults(value, next_values) {
    for (let prop of Object.keys(next_values)) {
        if (Array.isArray(next_values[prop])) {
            value[prop] = [...value[prop], ...next_values[prop]];
        }
        else {
            value[prop] = next_values[prop];
        }
    }
    return value;
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Ipfs: {},
        IpfsAll: {},
        _Structure: {
            Ipfs: getStructure(Ipfs.fromPartial({})),
        },
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(subscription);
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(subscription);
        }
    },
    getters: {
        getIpfs: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Ipfs[JSON.stringify(params)] ?? {};
        },
        getIpfsAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.IpfsAll[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: jfkmlktrumpwtf.pinata.pinata initialized!');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach(async (subscription) => {
                try {
                    await dispatch(subscription.action, subscription.payload);
                }
                catch (e) {
                    throw new SpVuexError('Subscriptions: ' + e.message);
                }
            });
        },
        async QueryIpfs({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryIpfs(key.id)).data;
                commit('QUERY', { query: 'Ipfs', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryIpfs', payload: { options: { all }, params: { ...key }, query } });
                return getters['getIpfs']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryIpfs', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryIpfsAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryIpfsAll(query)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await queryClient.queryIpfsAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'IpfsAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryIpfsAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getIpfsAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryIpfsAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgDeleteIpfs({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteIpfs(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteIpfs:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteIpfs:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateIpfs({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateIpfs(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateIpfs:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateIpfs:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdateIpfs({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateIpfs(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateIpfs:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateIpfs:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgDeleteIpfs({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteIpfs(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteIpfs:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteIpfs:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateIpfs({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateIpfs(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateIpfs:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateIpfs:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdateIpfs({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateIpfs(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateIpfs:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateIpfs:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
