import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "jfkmlktrumpwtf.pinata.pinata";
export interface Ipfs {
    creator: string;
    id: number;
    filename: string;
    cid: string;
    tags: string;
    weight: string;
    paid: string;
}
export declare const Ipfs: {
    encode(message: Ipfs, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Ipfs;
    fromJSON(object: any): Ipfs;
    toJSON(message: Ipfs): unknown;
    fromPartial(object: DeepPartial<Ipfs>): Ipfs;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
