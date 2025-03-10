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
//
// Test schema for proto2 messages.  This test schema is used by:
//
// - conformance tests
//

// LINT: ALLOW_GROUPS

// @generated by protoc-gen-es v0.3.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/test_messages_proto2.proto (package protobuf_test_messages.proto2, syntax proto2)
/* eslint-disable */

import { proto2, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from enum protobuf_test_messages.proto2.ForeignEnumProto2
 */
export const ForeignEnumProto2 = proto2.makeEnum(
  "protobuf_test_messages.proto2.ForeignEnumProto2",
  [
    {no: 0, name: "FOREIGN_FOO"},
    {no: 1, name: "FOREIGN_BAR"},
    {no: 2, name: "FOREIGN_BAZ"},
  ],
);

/**
 * This proto includes every type of field in both singular and repeated
 * forms.
 *
 * Also, crucially, all messages and enums in this file are eventually
 * submessages of this message.  So for example, a fuzz test of TestAllTypes
 * could trigger bugs that occur in any message type in this file.  We verify
 * this stays true in a unit test.
 *
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2
 */
export const TestAllTypesProto2 = proto2.makeMessageType(
  "protobuf_test_messages.proto2.TestAllTypesProto2",
  () => [
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
    { no: 18, name: "optional_nested_message", kind: "message", T: TestAllTypesProto2_NestedMessage, opt: true },
    { no: 19, name: "optional_foreign_message", kind: "message", T: ForeignMessageProto2, opt: true },
    { no: 21, name: "optional_nested_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum), opt: true },
    { no: 22, name: "optional_foreign_enum", kind: "enum", T: proto2.getEnumType(ForeignEnumProto2), opt: true },
    { no: 24, name: "optional_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 25, name: "optional_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 27, name: "recursive_message", kind: "message", T: TestAllTypesProto2, opt: true },
    { no: 31, name: "repeated_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 32, name: "repeated_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 33, name: "repeated_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 34, name: "repeated_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 35, name: "repeated_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true },
    { no: 36, name: "repeated_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 37, name: "repeated_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true },
    { no: 38, name: "repeated_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 39, name: "repeated_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true },
    { no: 40, name: "repeated_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 41, name: "repeated_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 42, name: "repeated_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 43, name: "repeated_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true },
    { no: 44, name: "repeated_string", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 45, name: "repeated_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 48, name: "repeated_nested_message", kind: "message", T: TestAllTypesProto2_NestedMessage, repeated: true },
    { no: 49, name: "repeated_foreign_message", kind: "message", T: ForeignMessageProto2, repeated: true },
    { no: 51, name: "repeated_nested_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum), repeated: true },
    { no: 52, name: "repeated_foreign_enum", kind: "enum", T: proto2.getEnumType(ForeignEnumProto2), repeated: true },
    { no: 54, name: "repeated_string_piece", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 55, name: "repeated_cord", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 75, name: "packed_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true, packed: true },
    { no: 76, name: "packed_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true, packed: true },
    { no: 77, name: "packed_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true, packed: true },
    { no: 78, name: "packed_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true, packed: true },
    { no: 79, name: "packed_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true, packed: true },
    { no: 80, name: "packed_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true, packed: true },
    { no: 81, name: "packed_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true, packed: true },
    { no: 82, name: "packed_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true, packed: true },
    { no: 83, name: "packed_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true, packed: true },
    { no: 84, name: "packed_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true, packed: true },
    { no: 85, name: "packed_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true, packed: true },
    { no: 86, name: "packed_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true, packed: true },
    { no: 87, name: "packed_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true, packed: true },
    { no: 88, name: "packed_nested_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum), repeated: true, packed: true },
    { no: 89, name: "unpacked_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 90, name: "unpacked_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 91, name: "unpacked_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 92, name: "unpacked_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 93, name: "unpacked_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, repeated: true },
    { no: 94, name: "unpacked_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, repeated: true },
    { no: 95, name: "unpacked_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, repeated: true },
    { no: 96, name: "unpacked_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, repeated: true },
    { no: 97, name: "unpacked_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, repeated: true },
    { no: 98, name: "unpacked_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, repeated: true },
    { no: 99, name: "unpacked_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 100, name: "unpacked_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 101, name: "unpacked_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, repeated: true },
    { no: 102, name: "unpacked_nested_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum), repeated: true },
    { no: 56, name: "map_int32_int32", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
    { no: 57, name: "map_int64_int64", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 58, name: "map_uint32_uint32", kind: "map", K: 13 /* ScalarType.UINT32 */, V: {kind: "scalar", T: 13 /* ScalarType.UINT32 */} },
    { no: 59, name: "map_uint64_uint64", kind: "map", K: 4 /* ScalarType.UINT64 */, V: {kind: "scalar", T: 4 /* ScalarType.UINT64 */} },
    { no: 60, name: "map_sint32_sint32", kind: "map", K: 17 /* ScalarType.SINT32 */, V: {kind: "scalar", T: 17 /* ScalarType.SINT32 */} },
    { no: 61, name: "map_sint64_sint64", kind: "map", K: 18 /* ScalarType.SINT64 */, V: {kind: "scalar", T: 18 /* ScalarType.SINT64 */} },
    { no: 62, name: "map_fixed32_fixed32", kind: "map", K: 7 /* ScalarType.FIXED32 */, V: {kind: "scalar", T: 7 /* ScalarType.FIXED32 */} },
    { no: 63, name: "map_fixed64_fixed64", kind: "map", K: 6 /* ScalarType.FIXED64 */, V: {kind: "scalar", T: 6 /* ScalarType.FIXED64 */} },
    { no: 64, name: "map_sfixed32_sfixed32", kind: "map", K: 15 /* ScalarType.SFIXED32 */, V: {kind: "scalar", T: 15 /* ScalarType.SFIXED32 */} },
    { no: 65, name: "map_sfixed64_sfixed64", kind: "map", K: 16 /* ScalarType.SFIXED64 */, V: {kind: "scalar", T: 16 /* ScalarType.SFIXED64 */} },
    { no: 66, name: "map_int32_float", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 2 /* ScalarType.FLOAT */} },
    { no: 67, name: "map_int32_double", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 1 /* ScalarType.DOUBLE */} },
    { no: 68, name: "map_bool_bool", kind: "map", K: 8 /* ScalarType.BOOL */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
    { no: 69, name: "map_string_string", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 70, name: "map_string_bytes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
    { no: 71, name: "map_string_nested_message", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: TestAllTypesProto2_NestedMessage} },
    { no: 72, name: "map_string_foreign_message", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: ForeignMessageProto2} },
    { no: 73, name: "map_string_nested_enum", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum)} },
    { no: 74, name: "map_string_foreign_enum", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "enum", T: proto2.getEnumType(ForeignEnumProto2)} },
    { no: 111, name: "oneof_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "oneof_field" },
    { no: 112, name: "oneof_nested_message", kind: "message", T: TestAllTypesProto2_NestedMessage, oneof: "oneof_field" },
    { no: 113, name: "oneof_string", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "oneof_field" },
    { no: 114, name: "oneof_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "oneof_field" },
    { no: 115, name: "oneof_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "oneof_field" },
    { no: 116, name: "oneof_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "oneof_field" },
    { no: 117, name: "oneof_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, oneof: "oneof_field" },
    { no: 118, name: "oneof_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "oneof_field" },
    { no: 119, name: "oneof_enum", kind: "enum", T: proto2.getEnumType(TestAllTypesProto2_NestedEnum), oneof: "oneof_field" },
    { no: 201, name: "data", kind: "message", T: TestAllTypesProto2_Data, opt: true },
    { no: 241, name: "default_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true, default: -123456789 },
    { no: 242, name: "default_int64", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true, default: protoInt64.parse("-9123456789123456789") },
    { no: 243, name: "default_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true, default: 2123456789 },
    { no: 244, name: "default_uint64", kind: "scalar", T: 4 /* ScalarType.UINT64 */, opt: true, default: protoInt64.uParse("10123456789123456789") },
    { no: 245, name: "default_sint32", kind: "scalar", T: 17 /* ScalarType.SINT32 */, opt: true, default: -123456789 },
    { no: 246, name: "default_sint64", kind: "scalar", T: 18 /* ScalarType.SINT64 */, opt: true, default: protoInt64.parse("-9123456789123456789") },
    { no: 247, name: "default_fixed32", kind: "scalar", T: 7 /* ScalarType.FIXED32 */, opt: true, default: 2123456789 },
    { no: 248, name: "default_fixed64", kind: "scalar", T: 6 /* ScalarType.FIXED64 */, opt: true, default: protoInt64.uParse("10123456789123456789") },
    { no: 249, name: "default_sfixed32", kind: "scalar", T: 15 /* ScalarType.SFIXED32 */, opt: true, default: -123456789 },
    { no: 250, name: "default_sfixed64", kind: "scalar", T: 16 /* ScalarType.SFIXED64 */, opt: true, default: protoInt64.parse("-9123456789123456789") },
    { no: 251, name: "default_float", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true, default: 9000000000 },
    { no: 252, name: "default_double", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true, default: 7e+22 },
    { no: 253, name: "default_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: true },
    { no: 254, name: "default_string", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true, default: "Rosebud" },
    { no: 255, name: "default_bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true, default: new Uint8Array([0x6A, 0x6F, 0x73, 0x68, 0x75, 0x61]) },
    { no: 401, name: "fieldname1", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 402, name: "field_name2", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 403, name: "_field_name3", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 404, name: "field__name4_", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 405, name: "field0name5", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 406, name: "field_0_name6", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 407, name: "fieldName7", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 408, name: "FieldName8", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 409, name: "field_Name9", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 410, name: "Field_Name10", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 411, name: "FIELD_NAME11", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 412, name: "FIELD_name12", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 413, name: "__field_name13", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 414, name: "__Field_name14", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 415, name: "field__name15", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 416, name: "field__Name16", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 417, name: "field_name17__", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 418, name: "Field_name18__", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from enum protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum
 */
export const TestAllTypesProto2_NestedEnum = proto2.makeEnum(
  "protobuf_test_messages.proto2.TestAllTypesProto2.NestedEnum",
  [
    {no: 0, name: "FOO"},
    {no: 1, name: "BAR"},
    {no: 2, name: "BAZ"},
    {no: -1, name: "NEG"},
  ],
);

/**
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage
 */
export const TestAllTypesProto2_NestedMessage = proto2.makeMessageType(
  "protobuf_test_messages.proto2.TestAllTypesProto2.NestedMessage",
  () => [
    { no: 1, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 2, name: "corecursive", kind: "message", T: TestAllTypesProto2, opt: true },
  ],
  {localName: "TestAllTypesProto2_NestedMessage"},
);

/**
 * groups
 *
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.Data
 */
export const TestAllTypesProto2_Data = proto2.makeMessageType(
  "protobuf_test_messages.proto2.TestAllTypesProto2.Data",
  () => [
    { no: 202, name: "group_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 203, name: "group_uint32", kind: "scalar", T: 13 /* ScalarType.UINT32 */, opt: true },
  ],
  {localName: "TestAllTypesProto2_Data"},
);

/**
 * message_set test case.
 *
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect
 */
export const TestAllTypesProto2_MessageSetCorrect = proto2.makeMessageType(
  "protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrect",
  [],
  {localName: "TestAllTypesProto2_MessageSetCorrect"},
);

/**
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1
 */
export const TestAllTypesProto2_MessageSetCorrectExtension1 = proto2.makeMessageType(
  "protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension1",
  () => [
    { no: 25, name: "str", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
  {localName: "TestAllTypesProto2_MessageSetCorrectExtension1"},
);

/**
 * @generated from message protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2
 */
export const TestAllTypesProto2_MessageSetCorrectExtension2 = proto2.makeMessageType(
  "protobuf_test_messages.proto2.TestAllTypesProto2.MessageSetCorrectExtension2",
  () => [
    { no: 9, name: "i", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "TestAllTypesProto2_MessageSetCorrectExtension2"},
);

/**
 * @generated from message protobuf_test_messages.proto2.ForeignMessageProto2
 */
export const ForeignMessageProto2 = proto2.makeMessageType(
  "protobuf_test_messages.proto2.ForeignMessageProto2",
  () => [
    { no: 1, name: "c", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from message protobuf_test_messages.proto2.UnknownToTestAllTypes
 */
export const UnknownToTestAllTypes = proto2.makeMessageType(
  "protobuf_test_messages.proto2.UnknownToTestAllTypes",
  () => [
    { no: 1001, name: "optional_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 1002, name: "optional_string", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 1003, name: "nested_message", kind: "message", T: ForeignMessageProto2, opt: true },
    { no: 1004, name: "optionalgroup", kind: "message", T: UnknownToTestAllTypes_OptionalGroup, opt: true },
    { no: 1006, name: "optional_bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 1011, name: "repeated_int32", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
  ],
);

/**
 * @generated from message protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup
 */
export const UnknownToTestAllTypes_OptionalGroup = proto2.makeMessageType(
  "protobuf_test_messages.proto2.UnknownToTestAllTypes.OptionalGroup",
  () => [
    { no: 1, name: "a", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "UnknownToTestAllTypes_OptionalGroup"},
);

/**
 * @generated from message protobuf_test_messages.proto2.NullHypothesisProto2
 */
export const NullHypothesisProto2 = proto2.makeMessageType(
  "protobuf_test_messages.proto2.NullHypothesisProto2",
  [],
);

/**
 * @generated from message protobuf_test_messages.proto2.EnumOnlyProto2
 */
export const EnumOnlyProto2 = proto2.makeMessageType(
  "protobuf_test_messages.proto2.EnumOnlyProto2",
  [],
);

/**
 * @generated from enum protobuf_test_messages.proto2.EnumOnlyProto2.Bool
 */
export const EnumOnlyProto2_Bool = proto2.makeEnum(
  "protobuf_test_messages.proto2.EnumOnlyProto2.Bool",
  [
    {no: 0, name: "kFalse"},
    {no: 1, name: "kTrue"},
  ],
);

/**
 * @generated from message protobuf_test_messages.proto2.OneStringProto2
 */
export const OneStringProto2 = proto2.makeMessageType(
  "protobuf_test_messages.proto2.OneStringProto2",
  () => [
    { no: 1, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

