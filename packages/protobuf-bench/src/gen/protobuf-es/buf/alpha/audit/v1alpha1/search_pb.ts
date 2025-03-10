// Copyright 2020-2022 Buf Technologies, Inc.
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
// @generated from file buf/alpha/audit/v1alpha1/search.proto (package buf.alpha.audit.v1alpha1, syntax proto3)
/* eslint-disable */

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1SearchFilter
 */
export enum BufAlphaRegistryV1Alpha1SearchFilter {
  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_USER = 1;
   */
  USER = 1,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_ORGANIZATION = 2;
   */
  ORGANIZATION = 2,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_REPOSITORY = 3;
   */
  REPOSITORY = 3,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_PLUGIN = 4;
   */
  PLUGIN = 4,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_TEMPLATE = 5;
   */
  TEMPLATE = 5,

  /**
   * @generated from enum value: BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_TEAM = 6;
   */
  TEAM = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(BufAlphaRegistryV1Alpha1SearchFilter)
proto3.util.setEnumType(BufAlphaRegistryV1Alpha1SearchFilter, "buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1SearchFilter", [
  { no: 0, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_UNSPECIFIED" },
  { no: 1, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_USER" },
  { no: 2, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_ORGANIZATION" },
  { no: 3, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_REPOSITORY" },
  { no: 4, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_PLUGIN" },
  { no: 5, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_TEMPLATE" },
  { no: 6, name: "BUF_ALPHA_REGISTRY_V1_ALPHA1_SEARCH_FILTER_TEAM" },
]);

