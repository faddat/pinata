// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteIpfs } from "./types/pinata/tx";
import { MsgCreateIpfs } from "./types/pinata/tx";
import { MsgUpdateIpfs } from "./types/pinata/tx";
const types = [
    ["/jfkmlktrumpwtf.pinata.pinata.MsgDeleteIpfs", MsgDeleteIpfs],
    ["/jfkmlktrumpwtf.pinata.pinata.MsgCreateIpfs", MsgCreateIpfs],
    ["/jfkmlktrumpwtf.pinata.pinata.MsgUpdateIpfs", MsgUpdateIpfs],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeleteIpfs: (data) => ({ typeUrl: "/jfkmlktrumpwtf.pinata.pinata.MsgDeleteIpfs", value: data }),
        msgCreateIpfs: (data) => ({ typeUrl: "/jfkmlktrumpwtf.pinata.pinata.MsgCreateIpfs", value: data }),
        msgUpdateIpfs: (data) => ({ typeUrl: "/jfkmlktrumpwtf.pinata.pinata.MsgUpdateIpfs", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
