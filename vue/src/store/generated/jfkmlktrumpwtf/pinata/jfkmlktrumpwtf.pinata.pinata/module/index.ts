// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeleteIpfs: (data: MsgDeleteIpfs): EncodeObject => ({ typeUrl: "/jfkmlktrumpwtf.pinata.pinata.MsgDeleteIpfs", value: data }),
    msgCreateIpfs: (data: MsgCreateIpfs): EncodeObject => ({ typeUrl: "/jfkmlktrumpwtf.pinata.pinata.MsgCreateIpfs", value: data }),
    msgUpdateIpfs: (data: MsgUpdateIpfs): EncodeObject => ({ typeUrl: "/jfkmlktrumpwtf.pinata.pinata.MsgUpdateIpfs", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
