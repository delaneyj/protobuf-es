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
// @generated from file extra/msg-maps.proto (package spec, syntax proto3)
/* eslint-disable */

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spec.MapsEnum
 */
export const MapsEnum = proto3.makeEnum(
  "spec.MapsEnum",
  [
    {no: 0, name: "MAPS_ENUM_ANY", localName: "ANY"},
    {no: 1, name: "MAPS_ENUM_YES", localName: "YES"},
    {no: 2, name: "MAPS_ENUM_NO", localName: "NO"},
  ],
);

/**
 * @generated from message spec.MapsMessage
 */
export const MapsMessage = proto3.makeMessageType(
  "spec.MapsMessage",
  () => [
    { no: 1, name: "str_str_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 2, name: "str_int32_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
    { no: 3, name: "str_int64_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 4, name: "str_bool_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
    { no: 5, name: "str_bytes_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 12 /* ScalarType.BYTES */} },
    { no: 6, name: "int32_str_field", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 7, name: "int64_str_field", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 8, name: "bool_str_field", kind: "map", K: 8 /* ScalarType.BOOL */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 9, name: "str_msg_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: MapsMessage} },
    { no: 10, name: "int32_msg_field", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "message", T: MapsMessage} },
    { no: 11, name: "int64_msg_field", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "message", T: MapsMessage} },
    { no: 12, name: "str_enu_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "enum", T: proto3.getEnumType(MapsEnum)} },
    { no: 13, name: "int32_enu_field", kind: "map", K: 5 /* ScalarType.INT32 */, V: {kind: "enum", T: proto3.getEnumType(MapsEnum)} },
    { no: 14, name: "int64_enu_field", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "enum", T: proto3.getEnumType(MapsEnum)} },
  ],
);

