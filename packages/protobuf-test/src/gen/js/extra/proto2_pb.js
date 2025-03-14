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

// @generated by protoc-gen-es v0.3.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/proto2.proto (package spec, syntax proto2)
/* eslint-disable */

import { proto2, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from enum spec.Proto2Enum
 */
export const Proto2Enum = proto2.makeEnum(
  "spec.Proto2Enum",
  [
    {no: 1, name: "PROTO2_ENUM_YES", localName: "YES"},
    {no: 2, name: "PROTO2_ENUM_NO", localName: "NO"},
  ],
);

/**
 * @generated from message spec.Proto2PackedMessage
 */
export const Proto2PackedMessage = proto2.makeMessageType(
  "spec.Proto2PackedMessage",
  () => [
    { no: 101, name: "packed_double_field", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true, packed: true },
    { no: 102, name: "packed_uint32_field", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true, packed: true },
    { no: 103, name: "packed_uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true, packed: true },
  ],
);

/**
 * @generated from message spec.Proto2UnpackedMessage
 */
export const Proto2UnpackedMessage = proto2.makeMessageType(
  "spec.Proto2UnpackedMessage",
  () => [
    { no: 201, name: "unpacked_double_field", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 202, name: "unpacked_uint32_field", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 203, name: "unpacked_uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ],
);

/**
 * @generated from message spec.Proto2UnspecifiedPackedMessage
 */
export const Proto2UnspecifiedPackedMessage = proto2.makeMessageType(
  "spec.Proto2UnspecifiedPackedMessage",
  () => [
    { no: 1, name: "double_field", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 2, name: "uint32_field", kind: "scalar", T: 13 /* ScalarType.UINT32 */, repeated: true },
    { no: 3, name: "uint64_field", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ],
);

/**
 * @generated from message spec.Proto2OptionalMessage
 */
export const Proto2OptionalMessage = proto2.makeMessageType(
  "spec.Proto2OptionalMessage",
  () => [
    { no: 1, name: "string_field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "bytes_field", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
    { no: 3, name: "enum_field", kind: "enum", T: proto2.getEnumType(Proto2Enum), opt: true },
    { no: 4, name: "message_field", kind: "message", T: Proto2ChildMessage, opt: true },
  ],
);

/**
 * @generated from message spec.Proto2RequiredMessage
 */
export const Proto2RequiredMessage = proto2.makeMessageType(
  "spec.Proto2RequiredMessage",
  () => [
    { no: 1, name: "string_field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bytes_field", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "enum_field", kind: "enum", T: proto2.getEnumType(Proto2Enum) },
    { no: 4, name: "message_field", kind: "message", T: Proto2ChildMessage },
  ],
);

/**
 * @generated from message spec.Proto2RequiredDefaultsMessage
 */
export const Proto2RequiredDefaultsMessage = proto2.makeMessageType(
  "spec.Proto2RequiredDefaultsMessage",
  () => [
    { no: 1, name: "string_field", kind: "scalar", T: 9 /* ScalarType.STRING */, default: "hello \" */ " },
    { no: 2, name: "bytes_field", kind: "scalar", T: 12 /* ScalarType.BYTES */, default: new Uint8Array([0x00, 0x78, 0x5C, 0x78, 0x78, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x08, 0x0C, 0x0A, 0x0D, 0x09, 0x0B]) },
    { no: 3, name: "enum_field", kind: "enum", T: proto2.getEnumType(Proto2Enum), default: Proto2Enum.YES },
    { no: 4, name: "message_field", kind: "message", T: Proto2ChildMessage },
  ],
);

/**
 * @generated from message spec.Proto2DefaultsMessage
 */
export const Proto2DefaultsMessage = proto2.makeMessageType(
  "spec.Proto2DefaultsMessage",
  () => [
    { no: 1, name: "string_field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true, default: "hello \" */ " },
    { no: 2, name: "bytes_field", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true, default: new Uint8Array([0x00, 0x78, 0x5C, 0x78, 0x78, 0x41, 0x41, 0x41, 0x41, 0x41, 0x41, 0x08, 0x0C, 0x0A, 0x0D, 0x09, 0x0B]) },
    { no: 3, name: "int32_field", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true, default: 128 },
    { no: 4, name: "int46_field", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true, default: protoInt64.parse("-256") },
    { no: 5, name: "float_field", kind: "scalar", T: 2 /* ScalarType.FLOAT */, opt: true, default: -512.13 },
    { no: 6, name: "bool_field", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: true },
    { no: 7, name: "enum_field", kind: "enum", T: proto2.getEnumType(Proto2Enum), opt: true, default: Proto2Enum.YES },
    { no: 8, name: "message_field", kind: "message", T: Proto2ChildMessage, opt: true },
  ],
);

/**
 * @generated from message spec.Proto2ChildMessage
 */
export const Proto2ChildMessage = proto2.makeMessageType(
  "spec.Proto2ChildMessage",
  () => [
    { no: 1, name: "string_field", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

