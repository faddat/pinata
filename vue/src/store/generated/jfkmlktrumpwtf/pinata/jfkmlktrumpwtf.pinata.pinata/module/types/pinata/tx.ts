/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'jfkmlktrumpwtf.pinata.pinata'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateIpfs {
  creator: string
  filename: string
  cid: string
  tags: string
  weight: string
  paid: string
}

export interface MsgCreateIpfsResponse {
  id: number
}

export interface MsgUpdateIpfs {
  creator: string
  id: number
  filename: string
  cid: string
  tags: string
  weight: string
  paid: string
}

export interface MsgUpdateIpfsResponse {}

export interface MsgDeleteIpfs {
  creator: string
  id: number
}

export interface MsgDeleteIpfsResponse {}

const baseMsgCreateIpfs: object = {
  creator: '',
  filename: '',
  cid: '',
  tags: '',
  weight: '',
  paid: ''
}

export const MsgCreateIpfs = {
  encode(message: MsgCreateIpfs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.filename !== '') {
      writer.uint32(18).string(message.filename)
    }
    if (message.cid !== '') {
      writer.uint32(26).string(message.cid)
    }
    if (message.tags !== '') {
      writer.uint32(34).string(message.tags)
    }
    if (message.weight !== '') {
      writer.uint32(42).string(message.weight)
    }
    if (message.paid !== '') {
      writer.uint32(50).string(message.paid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateIpfs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateIpfs } as MsgCreateIpfs
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.filename = reader.string()
          break
        case 3:
          message.cid = reader.string()
          break
        case 4:
          message.tags = reader.string()
          break
        case 5:
          message.weight = reader.string()
          break
        case 6:
          message.paid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateIpfs {
    const message = { ...baseMsgCreateIpfs } as MsgCreateIpfs
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = String(object.filename)
    } else {
      message.filename = ''
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid)
    } else {
      message.cid = ''
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = String(object.tags)
    } else {
      message.tags = ''
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = String(object.weight)
    } else {
      message.weight = ''
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = String(object.paid)
    } else {
      message.paid = ''
    }
    return message
  },

  toJSON(message: MsgCreateIpfs): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.filename !== undefined && (obj.filename = message.filename)
    message.cid !== undefined && (obj.cid = message.cid)
    message.tags !== undefined && (obj.tags = message.tags)
    message.weight !== undefined && (obj.weight = message.weight)
    message.paid !== undefined && (obj.paid = message.paid)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateIpfs>): MsgCreateIpfs {
    const message = { ...baseMsgCreateIpfs } as MsgCreateIpfs
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = object.filename
    } else {
      message.filename = ''
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid
    } else {
      message.cid = ''
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = object.tags
    } else {
      message.tags = ''
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight
    } else {
      message.weight = ''
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = object.paid
    } else {
      message.paid = ''
    }
    return message
  }
}

const baseMsgCreateIpfsResponse: object = { id: 0 }

export const MsgCreateIpfsResponse = {
  encode(
    message: MsgCreateIpfsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateIpfsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateIpfsResponse } as MsgCreateIpfsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateIpfsResponse {
    const message = { ...baseMsgCreateIpfsResponse } as MsgCreateIpfsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateIpfsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgCreateIpfsResponse>
  ): MsgCreateIpfsResponse {
    const message = { ...baseMsgCreateIpfsResponse } as MsgCreateIpfsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateIpfs: object = {
  creator: '',
  id: 0,
  filename: '',
  cid: '',
  tags: '',
  weight: '',
  paid: ''
}

export const MsgUpdateIpfs = {
  encode(message: MsgUpdateIpfs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.filename !== '') {
      writer.uint32(26).string(message.filename)
    }
    if (message.cid !== '') {
      writer.uint32(34).string(message.cid)
    }
    if (message.tags !== '') {
      writer.uint32(42).string(message.tags)
    }
    if (message.weight !== '') {
      writer.uint32(50).string(message.weight)
    }
    if (message.paid !== '') {
      writer.uint32(58).string(message.paid)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateIpfs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateIpfs } as MsgUpdateIpfs
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.filename = reader.string()
          break
        case 4:
          message.cid = reader.string()
          break
        case 5:
          message.tags = reader.string()
          break
        case 6:
          message.weight = reader.string()
          break
        case 7:
          message.paid = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateIpfs {
    const message = { ...baseMsgUpdateIpfs } as MsgUpdateIpfs
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = String(object.filename)
    } else {
      message.filename = ''
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid)
    } else {
      message.cid = ''
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = String(object.tags)
    } else {
      message.tags = ''
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = String(object.weight)
    } else {
      message.weight = ''
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = String(object.paid)
    } else {
      message.paid = ''
    }
    return message
  },

  toJSON(message: MsgUpdateIpfs): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.filename !== undefined && (obj.filename = message.filename)
    message.cid !== undefined && (obj.cid = message.cid)
    message.tags !== undefined && (obj.tags = message.tags)
    message.weight !== undefined && (obj.weight = message.weight)
    message.paid !== undefined && (obj.paid = message.paid)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateIpfs>): MsgUpdateIpfs {
    const message = { ...baseMsgUpdateIpfs } as MsgUpdateIpfs
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.filename !== undefined && object.filename !== null) {
      message.filename = object.filename
    } else {
      message.filename = ''
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid
    } else {
      message.cid = ''
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = object.tags
    } else {
      message.tags = ''
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight
    } else {
      message.weight = ''
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = object.paid
    } else {
      message.paid = ''
    }
    return message
  }
}

const baseMsgUpdateIpfsResponse: object = {}

export const MsgUpdateIpfsResponse = {
  encode(_: MsgUpdateIpfsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateIpfsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateIpfsResponse } as MsgUpdateIpfsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateIpfsResponse {
    const message = { ...baseMsgUpdateIpfsResponse } as MsgUpdateIpfsResponse
    return message
  },

  toJSON(_: MsgUpdateIpfsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateIpfsResponse>): MsgUpdateIpfsResponse {
    const message = { ...baseMsgUpdateIpfsResponse } as MsgUpdateIpfsResponse
    return message
  }
}

const baseMsgDeleteIpfs: object = { creator: '', id: 0 }

export const MsgDeleteIpfs = {
  encode(message: MsgDeleteIpfs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteIpfs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteIpfs } as MsgDeleteIpfs
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteIpfs {
    const message = { ...baseMsgDeleteIpfs } as MsgDeleteIpfs
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteIpfs): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteIpfs>): MsgDeleteIpfs {
    const message = { ...baseMsgDeleteIpfs } as MsgDeleteIpfs
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteIpfsResponse: object = {}

export const MsgDeleteIpfsResponse = {
  encode(_: MsgDeleteIpfsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteIpfsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteIpfsResponse } as MsgDeleteIpfsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteIpfsResponse {
    const message = { ...baseMsgDeleteIpfsResponse } as MsgDeleteIpfsResponse
    return message
  },

  toJSON(_: MsgDeleteIpfsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteIpfsResponse>): MsgDeleteIpfsResponse {
    const message = { ...baseMsgDeleteIpfsResponse } as MsgDeleteIpfsResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateIpfs(request: MsgCreateIpfs): Promise<MsgCreateIpfsResponse>
  UpdateIpfs(request: MsgUpdateIpfs): Promise<MsgUpdateIpfsResponse>
  DeleteIpfs(request: MsgDeleteIpfs): Promise<MsgDeleteIpfsResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateIpfs(request: MsgCreateIpfs): Promise<MsgCreateIpfsResponse> {
    const data = MsgCreateIpfs.encode(request).finish()
    const promise = this.rpc.request(
      'jfkmlktrumpwtf.pinata.pinata.Msg',
      'CreateIpfs',
      data
    )
    return promise.then((data) =>
      MsgCreateIpfsResponse.decode(new Reader(data))
    )
  }

  UpdateIpfs(request: MsgUpdateIpfs): Promise<MsgUpdateIpfsResponse> {
    const data = MsgUpdateIpfs.encode(request).finish()
    const promise = this.rpc.request(
      'jfkmlktrumpwtf.pinata.pinata.Msg',
      'UpdateIpfs',
      data
    )
    return promise.then((data) =>
      MsgUpdateIpfsResponse.decode(new Reader(data))
    )
  }

  DeleteIpfs(request: MsgDeleteIpfs): Promise<MsgDeleteIpfsResponse> {
    const data = MsgDeleteIpfs.encode(request).finish()
    const promise = this.rpc.request(
      'jfkmlktrumpwtf.pinata.pinata.Msg',
      'DeleteIpfs',
      data
    )
    return promise.then((data) =>
      MsgDeleteIpfsResponse.decode(new Reader(data))
    )
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
