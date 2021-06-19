/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Ipfs } from '../pinata/ipfs'
import {
  PageRequest,
  PageResponse
} from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'jfkmlktrumpwtf.pinata.pinata'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetIpfsRequest {
  id: number
}

export interface QueryGetIpfsResponse {
  Ipfs: Ipfs | undefined
}

export interface QueryAllIpfsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllIpfsResponse {
  Ipfs: Ipfs[]
  pagination: PageResponse | undefined
}

const baseQueryGetIpfsRequest: object = { id: 0 }

export const QueryGetIpfsRequest = {
  encode(
    message: QueryGetIpfsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetIpfsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetIpfsRequest } as QueryGetIpfsRequest
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

  fromJSON(object: any): QueryGetIpfsRequest {
    const message = { ...baseQueryGetIpfsRequest } as QueryGetIpfsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetIpfsRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetIpfsRequest>): QueryGetIpfsRequest {
    const message = { ...baseQueryGetIpfsRequest } as QueryGetIpfsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetIpfsResponse: object = {}

export const QueryGetIpfsResponse = {
  encode(
    message: QueryGetIpfsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Ipfs !== undefined) {
      Ipfs.encode(message.Ipfs, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetIpfsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetIpfsResponse } as QueryGetIpfsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Ipfs = Ipfs.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetIpfsResponse {
    const message = { ...baseQueryGetIpfsResponse } as QueryGetIpfsResponse
    if (object.Ipfs !== undefined && object.Ipfs !== null) {
      message.Ipfs = Ipfs.fromJSON(object.Ipfs)
    } else {
      message.Ipfs = undefined
    }
    return message
  },

  toJSON(message: QueryGetIpfsResponse): unknown {
    const obj: any = {}
    message.Ipfs !== undefined &&
      (obj.Ipfs = message.Ipfs ? Ipfs.toJSON(message.Ipfs) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetIpfsResponse>): QueryGetIpfsResponse {
    const message = { ...baseQueryGetIpfsResponse } as QueryGetIpfsResponse
    if (object.Ipfs !== undefined && object.Ipfs !== null) {
      message.Ipfs = Ipfs.fromPartial(object.Ipfs)
    } else {
      message.Ipfs = undefined
    }
    return message
  }
}

const baseQueryAllIpfsRequest: object = {}

export const QueryAllIpfsRequest = {
  encode(
    message: QueryAllIpfsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllIpfsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllIpfsRequest } as QueryAllIpfsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllIpfsRequest {
    const message = { ...baseQueryAllIpfsRequest } as QueryAllIpfsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllIpfsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllIpfsRequest>): QueryAllIpfsRequest {
    const message = { ...baseQueryAllIpfsRequest } as QueryAllIpfsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllIpfsResponse: object = {}

export const QueryAllIpfsResponse = {
  encode(
    message: QueryAllIpfsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Ipfs) {
      Ipfs.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllIpfsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllIpfsResponse } as QueryAllIpfsResponse
    message.Ipfs = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Ipfs.push(Ipfs.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllIpfsResponse {
    const message = { ...baseQueryAllIpfsResponse } as QueryAllIpfsResponse
    message.Ipfs = []
    if (object.Ipfs !== undefined && object.Ipfs !== null) {
      for (const e of object.Ipfs) {
        message.Ipfs.push(Ipfs.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllIpfsResponse): unknown {
    const obj: any = {}
    if (message.Ipfs) {
      obj.Ipfs = message.Ipfs.map((e) => (e ? Ipfs.toJSON(e) : undefined))
    } else {
      obj.Ipfs = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllIpfsResponse>): QueryAllIpfsResponse {
    const message = { ...baseQueryAllIpfsResponse } as QueryAllIpfsResponse
    message.Ipfs = []
    if (object.Ipfs !== undefined && object.Ipfs !== null) {
      for (const e of object.Ipfs) {
        message.Ipfs.push(Ipfs.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Ipfs(request: QueryGetIpfsRequest): Promise<QueryGetIpfsResponse>
  IpfsAll(request: QueryAllIpfsRequest): Promise<QueryAllIpfsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Ipfs(request: QueryGetIpfsRequest): Promise<QueryGetIpfsResponse> {
    const data = QueryGetIpfsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'jfkmlktrumpwtf.pinata.pinata.Query',
      'Ipfs',
      data
    )
    return promise.then((data) => QueryGetIpfsResponse.decode(new Reader(data)))
  }

  IpfsAll(request: QueryAllIpfsRequest): Promise<QueryAllIpfsResponse> {
    const data = QueryAllIpfsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'jfkmlktrumpwtf.pinata.pinata.Query',
      'IpfsAll',
      data
    )
    return promise.then((data) => QueryAllIpfsResponse.decode(new Reader(data)))
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
