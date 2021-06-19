/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'jfkmlktrumpwtf.pinata.pinata';
const baseMsgCreateIpfs = {
    creator: '',
    filename: '',
    cid: '',
    tags: '',
    weight: '',
    paid: ''
};
export const MsgCreateIpfs = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.filename !== '') {
            writer.uint32(18).string(message.filename);
        }
        if (message.cid !== '') {
            writer.uint32(26).string(message.cid);
        }
        if (message.tags !== '') {
            writer.uint32(34).string(message.tags);
        }
        if (message.weight !== '') {
            writer.uint32(42).string(message.weight);
        }
        if (message.paid !== '') {
            writer.uint32(50).string(message.paid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateIpfs };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.filename = reader.string();
                    break;
                case 3:
                    message.cid = reader.string();
                    break;
                case 4:
                    message.tags = reader.string();
                    break;
                case 5:
                    message.weight = reader.string();
                    break;
                case 6:
                    message.paid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateIpfs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.filename !== undefined && object.filename !== null) {
            message.filename = String(object.filename);
        }
        else {
            message.filename = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
        }
        if (object.tags !== undefined && object.tags !== null) {
            message.tags = String(object.tags);
        }
        else {
            message.tags = '';
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = String(object.weight);
        }
        else {
            message.weight = '';
        }
        if (object.paid !== undefined && object.paid !== null) {
            message.paid = String(object.paid);
        }
        else {
            message.paid = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.filename !== undefined && (obj.filename = message.filename);
        message.cid !== undefined && (obj.cid = message.cid);
        message.tags !== undefined && (obj.tags = message.tags);
        message.weight !== undefined && (obj.weight = message.weight);
        message.paid !== undefined && (obj.paid = message.paid);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateIpfs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.filename !== undefined && object.filename !== null) {
            message.filename = object.filename;
        }
        else {
            message.filename = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
        }
        if (object.tags !== undefined && object.tags !== null) {
            message.tags = object.tags;
        }
        else {
            message.tags = '';
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        else {
            message.weight = '';
        }
        if (object.paid !== undefined && object.paid !== null) {
            message.paid = object.paid;
        }
        else {
            message.paid = '';
        }
        return message;
    }
};
const baseMsgCreateIpfsResponse = { id: 0 };
export const MsgCreateIpfsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateIpfsResponse };
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
        const message = { ...baseMsgCreateIpfsResponse };
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
        const message = { ...baseMsgCreateIpfsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateIpfs = {
    creator: '',
    id: 0,
    filename: '',
    cid: '',
    tags: '',
    weight: '',
    paid: ''
};
export const MsgUpdateIpfs = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.filename !== '') {
            writer.uint32(26).string(message.filename);
        }
        if (message.cid !== '') {
            writer.uint32(34).string(message.cid);
        }
        if (message.tags !== '') {
            writer.uint32(42).string(message.tags);
        }
        if (message.weight !== '') {
            writer.uint32(50).string(message.weight);
        }
        if (message.paid !== '') {
            writer.uint32(58).string(message.paid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateIpfs };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.filename = reader.string();
                    break;
                case 4:
                    message.cid = reader.string();
                    break;
                case 5:
                    message.tags = reader.string();
                    break;
                case 6:
                    message.weight = reader.string();
                    break;
                case 7:
                    message.paid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateIpfs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.filename !== undefined && object.filename !== null) {
            message.filename = String(object.filename);
        }
        else {
            message.filename = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = String(object.cid);
        }
        else {
            message.cid = '';
        }
        if (object.tags !== undefined && object.tags !== null) {
            message.tags = String(object.tags);
        }
        else {
            message.tags = '';
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = String(object.weight);
        }
        else {
            message.weight = '';
        }
        if (object.paid !== undefined && object.paid !== null) {
            message.paid = String(object.paid);
        }
        else {
            message.paid = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.filename !== undefined && (obj.filename = message.filename);
        message.cid !== undefined && (obj.cid = message.cid);
        message.tags !== undefined && (obj.tags = message.tags);
        message.weight !== undefined && (obj.weight = message.weight);
        message.paid !== undefined && (obj.paid = message.paid);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateIpfs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.filename !== undefined && object.filename !== null) {
            message.filename = object.filename;
        }
        else {
            message.filename = '';
        }
        if (object.cid !== undefined && object.cid !== null) {
            message.cid = object.cid;
        }
        else {
            message.cid = '';
        }
        if (object.tags !== undefined && object.tags !== null) {
            message.tags = object.tags;
        }
        else {
            message.tags = '';
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        else {
            message.weight = '';
        }
        if (object.paid !== undefined && object.paid !== null) {
            message.paid = object.paid;
        }
        else {
            message.paid = '';
        }
        return message;
    }
};
const baseMsgUpdateIpfsResponse = {};
export const MsgUpdateIpfsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateIpfsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateIpfsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateIpfsResponse };
        return message;
    }
};
const baseMsgDeleteIpfs = { creator: '', id: 0 };
export const MsgDeleteIpfs = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteIpfs };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteIpfs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteIpfs };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteIpfsResponse = {};
export const MsgDeleteIpfsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteIpfsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteIpfsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteIpfsResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateIpfs(request) {
        const data = MsgCreateIpfs.encode(request).finish();
        const promise = this.rpc.request('jfkmlktrumpwtf.pinata.pinata.Msg', 'CreateIpfs', data);
        return promise.then((data) => MsgCreateIpfsResponse.decode(new Reader(data)));
    }
    UpdateIpfs(request) {
        const data = MsgUpdateIpfs.encode(request).finish();
        const promise = this.rpc.request('jfkmlktrumpwtf.pinata.pinata.Msg', 'UpdateIpfs', data);
        return promise.then((data) => MsgUpdateIpfsResponse.decode(new Reader(data)));
    }
    DeleteIpfs(request) {
        const data = MsgDeleteIpfs.encode(request).finish();
        const promise = this.rpc.request('jfkmlktrumpwtf.pinata.pinata.Msg', 'DeleteIpfs', data);
        return promise.then((data) => MsgDeleteIpfsResponse.decode(new Reader(data)));
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
