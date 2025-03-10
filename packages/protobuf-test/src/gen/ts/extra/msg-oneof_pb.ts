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

// @generated by protoc-gen-es v0.3.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file extra/msg-oneof.proto (package spec, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spec.OneofEnum
 */
export enum OneofEnum {
  /**
   * @generated from enum value: ONEOF_ENUM_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ONEOF_ENUM_A = 1;
   */
  A = 1,

  /**
   * @generated from enum value: ONEOF_ENUM_B = 2;
   */
  B = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(OneofEnum)
proto3.util.setEnumType(OneofEnum, "spec.OneofEnum", [
  { no: 0, name: "ONEOF_ENUM_UNSPECIFIED" },
  { no: 1, name: "ONEOF_ENUM_A" },
  { no: 2, name: "ONEOF_ENUM_B" },
]);

/**
 * @generated from message spec.OneofMessage
 */
export class OneofMessage extends Message<OneofMessage> {
  /**
   * @generated from oneof spec.OneofMessage.scalar
   */
  scalar: {
    /**
     * @generated from field: int32 value = 1;
     */
    value: number;
    case: "value";
  } | {
    /**
     * @generated from field: string error = 2;
     */
    value: string;
    case: "error";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from oneof spec.OneofMessage.message
   */
  message: {
    /**
     * @generated from field: spec.OneofMessageFoo foo = 11;
     */
    value: OneofMessageFoo;
    case: "foo";
  } | {
    /**
     * @generated from field: spec.OneofMessageBar bar = 12;
     */
    value: OneofMessageBar;
    case: "bar";
  } | {
    /**
     * @generated from field: spec.OneofMessageBar baz = 13;
     */
    value: OneofMessageBar;
    case: "baz";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * @generated from oneof spec.OneofMessage.enum
   */
  enum: {
    /**
     * @generated from field: spec.OneofEnum e = 21;
     */
    value: OneofEnum;
    case: "e";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<OneofMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "spec.OneofMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "scalar" },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "scalar" },
    { no: 11, name: "foo", kind: "message", T: OneofMessageFoo, oneof: "message" },
    { no: 12, name: "bar", kind: "message", T: OneofMessageBar, oneof: "message" },
    { no: 13, name: "baz", kind: "message", T: OneofMessageBar, oneof: "message" },
    { no: 21, name: "e", kind: "enum", T: proto3.getEnumType(OneofEnum), oneof: "enum" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OneofMessage {
    return new OneofMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OneofMessage {
    return new OneofMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OneofMessage {
    return new OneofMessage().fromJsonString(jsonString, options);
  }

  static equals(a: OneofMessage | PlainMessage<OneofMessage> | undefined, b: OneofMessage | PlainMessage<OneofMessage> | undefined): boolean {
    return proto3.util.equals(OneofMessage, a, b);
  }
}

/**
 * @generated from message spec.OneofMessageFoo
 */
export class OneofMessageFoo extends Message<OneofMessageFoo> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: bool toggle = 2;
   */
  toggle = false;

  constructor(data?: PartialMessage<OneofMessageFoo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "spec.OneofMessageFoo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "toggle", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OneofMessageFoo {
    return new OneofMessageFoo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OneofMessageFoo {
    return new OneofMessageFoo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OneofMessageFoo {
    return new OneofMessageFoo().fromJsonString(jsonString, options);
  }

  static equals(a: OneofMessageFoo | PlainMessage<OneofMessageFoo> | undefined, b: OneofMessageFoo | PlainMessage<OneofMessageFoo> | undefined): boolean {
    return proto3.util.equals(OneofMessageFoo, a, b);
  }
}

/**
 * @generated from message spec.OneofMessageBar
 */
export class OneofMessageBar extends Message<OneofMessageBar> {
  /**
   * @generated from field: int32 a = 1;
   */
  a = 0;

  /**
   * @generated from field: int32 b = 2;
   */
  b = 0;

  constructor(data?: PartialMessage<OneofMessageBar>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "spec.OneofMessageBar";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "b", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OneofMessageBar {
    return new OneofMessageBar().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OneofMessageBar {
    return new OneofMessageBar().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OneofMessageBar {
    return new OneofMessageBar().fromJsonString(jsonString, options);
  }

  static equals(a: OneofMessageBar | PlainMessage<OneofMessageBar> | undefined, b: OneofMessageBar | PlainMessage<OneofMessageBar> | undefined): boolean {
    return proto3.util.equals(OneofMessageBar, a, b);
  }
}

