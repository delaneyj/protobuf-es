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

// Author: kenton@google.com (Kenton Varda)
//
// This is like unittest_import.proto but with optimize_for = LITE_RUNTIME.

// @generated by protoc-gen-es v0.3.0 with parameter "ts_nocheck=false,target=ts"
// @generated from file google/protobuf/unittest_import_lite.proto (package protobuf_unittest_import, syntax proto2)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";

/**
 * @generated from enum protobuf_unittest_import.ImportEnumLite
 */
export enum ImportEnumLite {
  /**
   * @generated from enum value: IMPORT_LITE_FOO = 7;
   */
  IMPORT_LITE_FOO = 7,

  /**
   * @generated from enum value: IMPORT_LITE_BAR = 8;
   */
  IMPORT_LITE_BAR = 8,

  /**
   * @generated from enum value: IMPORT_LITE_BAZ = 9;
   */
  IMPORT_LITE_BAZ = 9,
}
// Retrieve enum metadata with: proto2.getEnumType(ImportEnumLite)
proto2.util.setEnumType(ImportEnumLite, "protobuf_unittest_import.ImportEnumLite", [
  { no: 7, name: "IMPORT_LITE_FOO" },
  { no: 8, name: "IMPORT_LITE_BAR" },
  { no: 9, name: "IMPORT_LITE_BAZ" },
]);

/**
 * @generated from message protobuf_unittest_import.ImportMessageLite
 */
export class ImportMessageLite extends Message<ImportMessageLite> {
  /**
   * @generated from field: optional int32 d = 1;
   */
  d?: number;

  constructor(data?: PartialMessage<ImportMessageLite>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime = proto2;
  static readonly typeName = "protobuf_unittest_import.ImportMessageLite";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "d", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImportMessageLite {
    return new ImportMessageLite().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImportMessageLite {
    return new ImportMessageLite().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImportMessageLite {
    return new ImportMessageLite().fromJsonString(jsonString, options);
  }

  static equals(a: ImportMessageLite | PlainMessage<ImportMessageLite> | undefined, b: ImportMessageLite | PlainMessage<ImportMessageLite> | undefined): boolean {
    return proto2.util.equals(ImportMessageLite, a, b);
  }
}

