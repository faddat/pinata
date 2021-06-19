import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "jfkmlktrumpwtf.pinata.pinata";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateIpfs {
    creator: string;
    filename: string;
    cid: string;
    tags: string;
    weight: string;
    paid: string;
}
export interface MsgCreateIpfsResponse {
    id: number;
}
export interface MsgUpdateIpfs {
    creator: string;
    id: number;
    filename: string;
    cid: string;
    tags: string;
    weight: string;
    paid: string;
}
export interface MsgUpdateIpfsResponse {
}
export interface MsgDeleteIpfs {
    creator: string;
    id: number;
}
export interface MsgDeleteIpfsResponse {
}
export declare const MsgCreateIpfs: {
    encode(message: MsgCreateIpfs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateIpfs;
    fromJSON(object: any): MsgCreateIpfs;
    toJSON(message: MsgCreateIpfs): unknown;
    fromPartial(object: DeepPartial<MsgCreateIpfs>): MsgCreateIpfs;
};
export declare const MsgCreateIpfsResponse: {
    encode(message: MsgCreateIpfsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateIpfsResponse;
    fromJSON(object: any): MsgCreateIpfsResponse;
    toJSON(message: MsgCreateIpfsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateIpfsResponse>): MsgCreateIpfsResponse;
};
export declare const MsgUpdateIpfs: {
    encode(message: MsgUpdateIpfs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateIpfs;
    fromJSON(object: any): MsgUpdateIpfs;
    toJSON(message: MsgUpdateIpfs): unknown;
    fromPartial(object: DeepPartial<MsgUpdateIpfs>): MsgUpdateIpfs;
};
export declare const MsgUpdateIpfsResponse: {
    encode(_: MsgUpdateIpfsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateIpfsResponse;
    fromJSON(_: any): MsgUpdateIpfsResponse;
    toJSON(_: MsgUpdateIpfsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateIpfsResponse>): MsgUpdateIpfsResponse;
};
export declare const MsgDeleteIpfs: {
    encode(message: MsgDeleteIpfs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteIpfs;
    fromJSON(object: any): MsgDeleteIpfs;
    toJSON(message: MsgDeleteIpfs): unknown;
    fromPartial(object: DeepPartial<MsgDeleteIpfs>): MsgDeleteIpfs;
};
export declare const MsgDeleteIpfsResponse: {
    encode(_: MsgDeleteIpfsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteIpfsResponse;
    fromJSON(_: any): MsgDeleteIpfsResponse;
    toJSON(_: MsgDeleteIpfsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteIpfsResponse>): MsgDeleteIpfsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateIpfs(request: MsgCreateIpfs): Promise<MsgCreateIpfsResponse>;
    UpdateIpfs(request: MsgUpdateIpfs): Promise<MsgUpdateIpfsResponse>;
    DeleteIpfs(request: MsgDeleteIpfs): Promise<MsgDeleteIpfsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateIpfs(request: MsgCreateIpfs): Promise<MsgCreateIpfsResponse>;
    UpdateIpfs(request: MsgUpdateIpfs): Promise<MsgUpdateIpfsResponse>;
    DeleteIpfs(request: MsgDeleteIpfs): Promise<MsgDeleteIpfsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
