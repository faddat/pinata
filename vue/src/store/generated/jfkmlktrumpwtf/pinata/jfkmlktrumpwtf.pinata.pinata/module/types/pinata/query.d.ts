import { Reader, Writer } from 'protobufjs/minimal';
import { Ipfs } from '../pinata/ipfs';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "jfkmlktrumpwtf.pinata.pinata";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetIpfsRequest {
    id: number;
}
export interface QueryGetIpfsResponse {
    Ipfs: Ipfs | undefined;
}
export interface QueryAllIpfsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllIpfsResponse {
    Ipfs: Ipfs[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetIpfsRequest: {
    encode(message: QueryGetIpfsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetIpfsRequest;
    fromJSON(object: any): QueryGetIpfsRequest;
    toJSON(message: QueryGetIpfsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetIpfsRequest>): QueryGetIpfsRequest;
};
export declare const QueryGetIpfsResponse: {
    encode(message: QueryGetIpfsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetIpfsResponse;
    fromJSON(object: any): QueryGetIpfsResponse;
    toJSON(message: QueryGetIpfsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetIpfsResponse>): QueryGetIpfsResponse;
};
export declare const QueryAllIpfsRequest: {
    encode(message: QueryAllIpfsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllIpfsRequest;
    fromJSON(object: any): QueryAllIpfsRequest;
    toJSON(message: QueryAllIpfsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllIpfsRequest>): QueryAllIpfsRequest;
};
export declare const QueryAllIpfsResponse: {
    encode(message: QueryAllIpfsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllIpfsResponse;
    fromJSON(object: any): QueryAllIpfsResponse;
    toJSON(message: QueryAllIpfsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllIpfsResponse>): QueryAllIpfsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Ipfs(request: QueryGetIpfsRequest): Promise<QueryGetIpfsResponse>;
    IpfsAll(request: QueryAllIpfsRequest): Promise<QueryAllIpfsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Ipfs(request: QueryGetIpfsRequest): Promise<QueryGetIpfsResponse>;
    IpfsAll(request: QueryAllIpfsRequest): Promise<QueryAllIpfsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
