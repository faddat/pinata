/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Ipfs } from '../pinata/ipfs';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export const protobufPackage = 'jfkmlktrumpwtf.pinata.pinata';
const baseQueryGetIpfsRequest = { id: 0 };
export const QueryGetIpfsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetIpfsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetIpfsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetIpfsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetIpfsResponse = {};
export const QueryGetIpfsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Ipfs !== undefined) {
            Ipfs.encode(message.Ipfs, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetIpfsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Ipfs = Ipfs.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetIpfsResponse };
        if (object.Ipfs !== undefined && object.Ipfs !== null) {
            message.Ipfs = Ipfs.fromJSON(object.Ipfs);
        }
        else {
            message.Ipfs = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Ipfs !== undefined &&
            (obj.Ipfs = message.Ipfs ? Ipfs.toJSON(message.Ipfs) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetIpfsResponse };
        if (object.Ipfs !== undefined && object.Ipfs !== null) {
            message.Ipfs = Ipfs.fromPartial(object.Ipfs);
        }
        else {
            message.Ipfs = undefined;
        }
        return message;
    }
};
const baseQueryAllIpfsRequest = {};
export const QueryAllIpfsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllIpfsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllIpfsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllIpfsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllIpfsResponse = {};
export const QueryAllIpfsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Ipfs) {
            Ipfs.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllIpfsResponse };
        message.Ipfs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Ipfs.push(Ipfs.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllIpfsResponse };
        message.Ipfs = [];
        if (object.Ipfs !== undefined && object.Ipfs !== null) {
            for (const e of object.Ipfs) {
                message.Ipfs.push(Ipfs.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Ipfs) {
            obj.Ipfs = message.Ipfs.map((e) => (e ? Ipfs.toJSON(e) : undefined));
        }
        else {
            obj.Ipfs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllIpfsResponse };
        message.Ipfs = [];
        if (object.Ipfs !== undefined && object.Ipfs !== null) {
            for (const e of object.Ipfs) {
                message.Ipfs.push(Ipfs.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Ipfs(request) {
        const data = QueryGetIpfsRequest.encode(request).finish();
        const promise = this.rpc.request('jfkmlktrumpwtf.pinata.pinata.Query', 'Ipfs', data);
        return promise.then((data) => QueryGetIpfsResponse.decode(new Reader(data)));
    }
    IpfsAll(request) {
        const data = QueryAllIpfsRequest.encode(request).finish();
        const promise = this.rpc.request('jfkmlktrumpwtf.pinata.pinata.Query', 'IpfsAll', data);
        return promise.then((data) => QueryAllIpfsResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
