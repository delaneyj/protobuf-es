// Copyright 2021-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v0.3.0 with parameter "target=ts"
// @generated from file proto/service.proto (package example, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum example.EnumWithOptions
 */
export enum EnumWithOptions {
  /**
   * @generated from enum value: UNSET = 0;
   */
  UNSET = 0,

  /**
   * @generated from enum value: ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * @generated from enum value: INACTIVE = 2;
   */
  INACTIVE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(EnumWithOptions)
proto3.util.setEnumType(EnumWithOptions, "example.EnumWithOptions", [
  { no: 0, name: "UNSET" },
  { no: 1, name: "ACTIVE" },
  { no: 2, name: "INACTIVE" },
]);

/**
 * @generated from message example.MessageWithOptions
 */
export class MessageWithOptions extends Message<MessageWithOptions> {
  /**
   * @generated from field: int32 foo = 1;
   */
  foo = 0;

  /**
   * @generated from field: string bar = 2;
   */
  bar = "";

  /**
   * @generated from oneof example.MessageWithOptions.qux
   */
  qux: {
    /**
     * @generated from field: string quux = 3;
     */
    value: string;
    case: "quux";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from field: repeated string many = 4;
   */
  many: string[] = [];

  /**
   * @generated from field: map<string, string> mapping = 5;
   */
  mapping: { [key: string]: string } = {};

  /**
   * @generated from field: string unused = 6;
   */
  unused = "";

  constructor(data?: PartialMessage<MessageWithOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "example.MessageWithOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "foo", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "bar", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quux", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "qux" },
    { no: 4, name: "many", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "mapping", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 6, name: "unused", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageWithOptions {
    return new MessageWithOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageWithOptions {
    return new MessageWithOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageWithOptions {
    return new MessageWithOptions().fromJsonString(jsonString, options);
  }

  static equals(a: MessageWithOptions | PlainMessage<MessageWithOptions> | undefined, b: MessageWithOptions | PlainMessage<MessageWithOptions> | undefined): boolean {
    return proto3.util.equals(MessageWithOptions, a, b);
  }
}

/**
 * @generated from message example.GetRequest
 */
export class GetRequest extends Message<GetRequest> {
  constructor(data?: PartialMessage<GetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "example.GetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRequest {
    return new GetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetRequest | PlainMessage<GetRequest> | undefined, b: GetRequest | PlainMessage<GetRequest> | undefined): boolean {
    return proto3.util.equals(GetRequest, a, b);
  }
}

/**
 * @generated from message example.GetResponse
 */
export class GetResponse extends Message<GetResponse> {
  constructor(data?: PartialMessage<GetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "example.GetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetResponse {
    return new GetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetResponse | PlainMessage<GetResponse> | undefined, b: GetResponse | PlainMessage<GetResponse> | undefined): boolean {
    return proto3.util.equals(GetResponse, a, b);
  }
}

