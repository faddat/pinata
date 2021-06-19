/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Ipfs } from '../pinata/ipfs';
export const protobufPackage = 'jfkmlktrumpwtf.pinata.pinata';
const baseGenesisState = { ipfsCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ipfsList) {
            Ipfs.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.ipfsCount !== 0) {
            writer.uint32(16).uint64(message.ipfsCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.ipfsList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ipfsList.push(Ipfs.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.ipfsCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.ipfsList = [];
        if (object.ipfsList !== undefined && object.ipfsList !== null) {
            for (const e of object.ipfsList) {
                message.ipfsList.push(Ipfs.fromJSON(e));
            }
        }
        if (object.ipfsCount !== undefined && object.ipfsCount !== null) {
            message.ipfsCount = Number(object.ipfsCount);
        }
        else {
            message.ipfsCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ipfsList) {
            obj.ipfsList = message.ipfsList.map((e) => e ? Ipfs.toJSON(e) : undefined);
        }
        else {
            obj.ipfsList = [];
        }
        message.ipfsCount !== undefined && (obj.ipfsCount = message.ipfsCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.ipfsList = [];
        if (object.ipfsList !== undefined && object.ipfsList !== null) {
            for (const e of object.ipfsList) {
                message.ipfsList.push(Ipfs.fromPartial(e));
            }
        }
        if (object.ipfsCount !== undefined && object.ipfsCount !== null) {
            message.ipfsCount = object.ipfsCount;
        }
        else {
            message.ipfsCount = 0;
        }
        return message;
    }
};
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
