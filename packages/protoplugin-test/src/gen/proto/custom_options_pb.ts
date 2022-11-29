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
// @generated from file proto/custom_options.proto (package example, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum example.ServiceStatus
 */
export enum ServiceStatus {
  /**
   * @generated from enum value: UNDEFINED = 0;
   */
  UNDEFINED = 0,

  /**
   * @generated from enum value: EXPERIMENTAL = 1;
   */
  EXPERIMENTAL = 1,

  /**
   * @generated from enum value: STABLE = 2;
   */
  STABLE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ServiceStatus)
proto3.util.setEnumType(ServiceStatus, "example.ServiceStatus", [
  { no: 0, name: "UNDEFINED" },
  { no: 1, name: "EXPERIMENTAL" },
  { no: 2, name: "STABLE" },
]);

/**
 * @generated from message example.Configuration
 */
export class Configuration extends Message<Configuration> {
  /**
   * @generated from field: int32 foo = 1;
   */
  foo = 0;

  /**
   * @generated from field: string bar = 2;
   */
  bar = "";

  /**
   * @generated from oneof example.Configuration.qux
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
  mapping: Map<string, string> = new Map();;

  /**
   * @generated from field: string unused = 6;
   */
  unused = "";

  constructor(data?: PartialMessage<Configuration>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "example.Configuration";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "foo", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "bar", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quux", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "qux" },
    { no: 4, name: "many", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "mapping", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 6, name: "unused", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Configuration {
    return new Configuration().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Configuration {
    return new Configuration().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Configuration {
    return new Configuration().fromJsonString(jsonString, options);
  }

  static equals(a: Configuration | PlainMessage<Configuration> | undefined, b: Configuration | PlainMessage<Configuration> | undefined): boolean {
    return proto3.util.equals(Configuration, a, b);
  }
}

