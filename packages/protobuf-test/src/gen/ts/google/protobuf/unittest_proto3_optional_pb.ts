// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// @generated by protoc-gen-es v0.3.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/protobuf/unittest_proto3_optional.proto (package protobuf_unittest, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message protobuf_unittest.TestProto3Optional
 */
export class TestProto3Optional extends Message<TestProto3Optional> {
  /**
   * Singular
   *
   * @generated from field: optional int32 optional_int32 = 1;
   */
  optionalInt32?: number;

  /**
   * @generated from field: optional int64 optional_int64 = 2;
   */
  optionalInt64?: bigint;

  /**
   * @generated from field: optional uint32 optional_uint32 = 3;
   */
  optionalUint32?: number;

  /**
   * @generated from field: optional uint64 optional_uint64 = 4;
   */
  optionalUint64?: bigint;

  /**
   * @generated from field: optional sint32 optional_sint32 = 5;
   */
  optionalSint32?: number;

  /**
   * @generated from field: optional sint64 optional_sint64 = 6;
   */
  optionalSint64?: bigint;

  /**
   * @generated from field: optional fixed32 optional_fixed32 = 7;
   */
  optionalFixed32?: number;

  /**
   * @generated from field: optional fixed64 optional_fixed64 = 8;
   */
  optionalFixed64?: bigint;

  /**
   * @generated from field: optional sfixed32 optional_sfixed32 = 9;
   */
  optionalSfixed32?: number;

  /**
   * @generated from field: optional sfixed64 optional_sfixed64 = 10;
   */
  optionalSfixed64?: bigint;

  /**
   * @generated from field: optional float optional_float = 11;
   */
  optionalFloat?: number;

  /**
   * @generated from field: optional double optional_double = 12;
   */
  optionalDouble?: number;

  /**
   * @generated from field: optional bool optional_bool = 13;
   */
  optionalBool?: boolean;

  /**
   * @generated from field: optional string optional_string = 14;
   */
  optionalString?: string;

  /**
   * @generated from field: optional bytes optional_bytes = 15;
   */
  optionalBytes?: Uint8Array;

  /**
   * @generated from field: optional string optional_cord = 16;
   */
  optionalCord?: string;

  /**
   * @generated from field: optional protobuf_unittest.TestProto3Optional.NestedMessage optional_nested_message = 18;
   */
  optionalNestedMessage?: TestProto3Optional_NestedMessage;

  /**
   * @generated from field: optional protobuf_unittest.TestProto3Optional.NestedMessage lazy_nested_message = 19;
   */
  lazyNestedMessage?: TestProto3Optional_NestedMessage;

  /**
   * @generated from field: optional protobuf_unittest.TestProto3Optional.NestedEnum optional_nested_enum = 21;
   */
  optionalNestedEnum?: TestProto3Optional_NestedEnum;

  /**
   * Add some non-optional fields to verify we can mix them.
   *
   * @generated from field: int32 singular_int32 = 22;
   */
  singularInt32 = 0;

  /**
   * @generated from field: int64 singular_int64 = 23;
   */
  singularInt64 = protoInt64.zero;

  constructor(data?: PartialMessage<TestProto3Optional>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "protobuf_unittest.TestProto3Optional";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "optional_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "optional_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 3, name: "optional_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
    { no: 4, name: "optional_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true },
    { no: 5, name: "optional_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, opt: true },
    { no: 6, name: "optional_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, opt: true },
    { no: 7, name: "optional_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, opt: true },
    { no: 8, name: "optional_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true },
    { no: 9, name: "optional_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, opt: true },
    { no: 10, name: "optional_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, opt: true },
    { no: 11, name: "optional_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true },
    { no: 12, name: "optional_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 13, name: "optional_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 14, name: "optional_string", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 15, name: "optional_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 16, name: "optional_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 18, name: "optional_nested_message", kind: "message", T: TestProto3Optional_NestedMessage, opt: true },
    { no: 19, name: "lazy_nested_message", kind: "message", T: TestProto3Optional_NestedMessage, opt: true },
    { no: 21, name: "optional_nested_enum", kind: "enum", T: proto3.getEnumType(TestProto3Optional_NestedEnum), opt: true },
    { no: 22, name: "singular_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 23, name: "singular_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestProto3Optional {
    return new TestProto3Optional().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestProto3Optional {
    return new TestProto3Optional().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestProto3Optional {
    return new TestProto3Optional().fromJsonString(jsonString, options);
  }

  static equals(a: TestProto3Optional | PlainMessage<TestProto3Optional> | undefined, b: TestProto3Optional | PlainMessage<TestProto3Optional> | undefined): boolean {
    return proto3.util.equals(TestProto3Optional, a, b);
  }
}

/**
 * @generated from enum protobuf_unittest.TestProto3Optional.NestedEnum
 */
export enum TestProto3Optional_NestedEnum {
  /**
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: FOO = 1;
   */
  FOO = 1,

  /**
   * @generated from enum value: BAR = 2;
   */
  BAR = 2,

  /**
   * @generated from enum value: BAZ = 3;
   */
  BAZ = 3,

  /**
   * Intentionally negative.
   *
   * @generated from enum value: NEG = -1;
   */
  NEG = -1,
}
// Retrieve enum metadata with: proto3.getEnumType(TestProto3Optional_NestedEnum)
proto3.util.setEnumType(TestProto3Optional_NestedEnum, "protobuf_unittest.TestProto3Optional.NestedEnum", [
  { no: 0, name: "UNSPECIFIED" },
  { no: 1, name: "FOO" },
  { no: 2, name: "BAR" },
  { no: 3, name: "BAZ" },
  { no: -1, name: "NEG" },
]);

/**
 * @generated from message protobuf_unittest.TestProto3Optional.NestedMessage
 */
export class TestProto3Optional_NestedMessage extends Message<TestProto3Optional_NestedMessage> {
  /**
   * The field name "b" fails to compile in proto1 because it conflicts with
   * a local variable named "b" in one of the generated methods.  Doh.
   * This file needs to compile in proto1 to test backwards-compatibility.
   *
   * @generated from field: optional int32 bb = 1;
   */
  bb?: number;

  constructor(data?: PartialMessage<TestProto3Optional_NestedMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "protobuf_unittest.TestProto3Optional.NestedMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "bb", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestProto3Optional_NestedMessage {
    return new TestProto3Optional_NestedMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestProto3Optional_NestedMessage {
    return new TestProto3Optional_NestedMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestProto3Optional_NestedMessage {
    return new TestProto3Optional_NestedMessage().fromJsonString(jsonString, options);
  }

  static equals(a: TestProto3Optional_NestedMessage | PlainMessage<TestProto3Optional_NestedMessage> | undefined, b: TestProto3Optional_NestedMessage | PlainMessage<TestProto3Optional_NestedMessage> | undefined): boolean {
    return proto3.util.equals(TestProto3Optional_NestedMessage, a, b);
  }
}

/**
 * @generated from message protobuf_unittest.TestProto3OptionalMessage
 */
export class TestProto3OptionalMessage extends Message<TestProto3OptionalMessage> {
  /**
   * @generated from field: protobuf_unittest.TestProto3OptionalMessage.NestedMessage nested_message = 1;
   */
  nestedMessage?: TestProto3OptionalMessage_NestedMessage;

  /**
   * @generated from field: optional protobuf_unittest.TestProto3OptionalMessage.NestedMessage optional_nested_message = 2;
   */
  optionalNestedMessage?: TestProto3OptionalMessage_NestedMessage;

  constructor(data?: PartialMessage<TestProto3OptionalMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "protobuf_unittest.TestProto3OptionalMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "nested_message", kind: "message", T: TestProto3OptionalMessage_NestedMessage },
    { no: 2, name: "optional_nested_message", kind: "message", T: TestProto3OptionalMessage_NestedMessage, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestProto3OptionalMessage {
    return new TestProto3OptionalMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestProto3OptionalMessage {
    return new TestProto3OptionalMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestProto3OptionalMessage {
    return new TestProto3OptionalMessage().fromJsonString(jsonString, options);
  }

  static equals(a: TestProto3OptionalMessage | PlainMessage<TestProto3OptionalMessage> | undefined, b: TestProto3OptionalMessage | PlainMessage<TestProto3OptionalMessage> | undefined): boolean {
    return proto3.util.equals(TestProto3OptionalMessage, a, b);
  }
}

/**
 * @generated from message protobuf_unittest.TestProto3OptionalMessage.NestedMessage
 */
export class TestProto3OptionalMessage_NestedMessage extends Message<TestProto3OptionalMessage_NestedMessage> {
  /**
   * @generated from field: string s = 1;
   */
  s = "";

  constructor(data?: PartialMessage<TestProto3OptionalMessage_NestedMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "protobuf_unittest.TestProto3OptionalMessage.NestedMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "s", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestProto3OptionalMessage_NestedMessage {
    return new TestProto3OptionalMessage_NestedMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestProto3OptionalMessage_NestedMessage {
    return new TestProto3OptionalMessage_NestedMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestProto3OptionalMessage_NestedMessage {
    return new TestProto3OptionalMessage_NestedMessage().fromJsonString(jsonString, options);
  }

  static equals(a: TestProto3OptionalMessage_NestedMessage | PlainMessage<TestProto3OptionalMessage_NestedMessage> | undefined, b: TestProto3OptionalMessage_NestedMessage | PlainMessage<TestProto3OptionalMessage_NestedMessage> | undefined): boolean {
    return proto3.util.equals(TestProto3OptionalMessage_NestedMessage, a, b);
  }
}

/**
 * @generated from message protobuf_unittest.Proto3OptionalExtensions
 */
export class Proto3OptionalExtensions extends Message<Proto3OptionalExtensions> {
  constructor(data?: PartialMessage<Proto3OptionalExtensions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "protobuf_unittest.Proto3OptionalExtensions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proto3OptionalExtensions {
    return new Proto3OptionalExtensions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proto3OptionalExtensions {
    return new Proto3OptionalExtensions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proto3OptionalExtensions {
    return new Proto3OptionalExtensions().fromJsonString(jsonString, options);
  }

  static equals(a: Proto3OptionalExtensions | PlainMessage<Proto3OptionalExtensions> | undefined, b: Proto3OptionalExtensions | PlainMessage<Proto3OptionalExtensions> | undefined): boolean {
    return proto3.util.equals(Proto3OptionalExtensions, a, b);
  }
}

