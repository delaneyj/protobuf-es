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
// @generated from file buf/alpha/registry/v1alpha1/repository_branch.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message buf.alpha.registry.v1alpha1.RepositoryBranch
 */
export class RepositoryBranch extends Message<RepositoryBranch> {
  /**
   * primary key, unique, immutable
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * immutable
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * We reserve field number '3' for the update_time.
   * google.protobuf.Timestamp update_time = 3;
   * The name of the repository branch, i.e. "v1".
   *
   * @generated from field: string name = 4;
   */
  name = "";

  /**
   * The ID of the repository this branch belongs to.
   *
   * @generated from field: string repository_id = 5;
   */
  repositoryId = "";

  constructor(data?: PartialMessage<RepositoryBranch>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.registry.v1alpha1.RepositoryBranch";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "create_time", kind: "message", T: Timestamp },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "repository_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RepositoryBranch {
    return new RepositoryBranch().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RepositoryBranch {
    return new RepositoryBranch().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RepositoryBranch {
    return new RepositoryBranch().fromJsonString(jsonString, options);
  }

  static equals(a: RepositoryBranch | PlainMessage<RepositoryBranch> | undefined, b: RepositoryBranch | PlainMessage<RepositoryBranch> | undefined): boolean {
    return proto3.util.equals(RepositoryBranch, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateRepositoryBranchRequest
 */
export class CreateRepositoryBranchRequest extends Message<CreateRepositoryBranchRequest> {
  /**
   * The ID of the repository this branch should be created on.
   *
   * @generated from field: string repository_id = 1;
   */
  repositoryId = "";

  /**
   * The name of the repository branch, i.e. v1.
   *
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * The name of the parent branch. The latest commit on this
   * branch will be used as the branch's parent.
   *
   * @generated from field: string parent_branch = 3;
   */
  parentBranch = "";

  constructor(data?: PartialMessage<CreateRepositoryBranchRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.registry.v1alpha1.CreateRepositoryBranchRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "repository_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "parent_branch", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRepositoryBranchRequest {
    return new CreateRepositoryBranchRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRepositoryBranchRequest {
    return new CreateRepositoryBranchRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRepositoryBranchRequest {
    return new CreateRepositoryBranchRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateRepositoryBranchRequest | PlainMessage<CreateRepositoryBranchRequest> | undefined, b: CreateRepositoryBranchRequest | PlainMessage<CreateRepositoryBranchRequest> | undefined): boolean {
    return proto3.util.equals(CreateRepositoryBranchRequest, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateRepositoryBranchResponse
 */
export class CreateRepositoryBranchResponse extends Message<CreateRepositoryBranchResponse> {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.RepositoryBranch repository_branch = 1;
   */
  repositoryBranch?: RepositoryBranch;

  constructor(data?: PartialMessage<CreateRepositoryBranchResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.registry.v1alpha1.CreateRepositoryBranchResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "repository_branch", kind: "message", T: RepositoryBranch },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRepositoryBranchResponse {
    return new CreateRepositoryBranchResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRepositoryBranchResponse {
    return new CreateRepositoryBranchResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRepositoryBranchResponse {
    return new CreateRepositoryBranchResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateRepositoryBranchResponse | PlainMessage<CreateRepositoryBranchResponse> | undefined, b: CreateRepositoryBranchResponse | PlainMessage<CreateRepositoryBranchResponse> | undefined): boolean {
    return proto3.util.equals(CreateRepositoryBranchResponse, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryBranchesRequest
 */
export class ListRepositoryBranchesRequest extends Message<ListRepositoryBranchesRequest> {
  /**
   * The ID of the repository whose branches should be listed.
   *
   * @generated from field: string repository_id = 1;
   */
  repositoryId = "";

  /**
   * @generated from field: uint32 page_size = 2;
   */
  pageSize = 0;

  /**
   * The first page is returned if this is empty.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  /**
   * @generated from field: bool reverse = 4;
   */
  reverse = false;

  constructor(data?: PartialMessage<ListRepositoryBranchesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.registry.v1alpha1.ListRepositoryBranchesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "repository_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "reverse", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRepositoryBranchesRequest {
    return new ListRepositoryBranchesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRepositoryBranchesRequest {
    return new ListRepositoryBranchesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRepositoryBranchesRequest {
    return new ListRepositoryBranchesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListRepositoryBranchesRequest | PlainMessage<ListRepositoryBranchesRequest> | undefined, b: ListRepositoryBranchesRequest | PlainMessage<ListRepositoryBranchesRequest> | undefined): boolean {
    return proto3.util.equals(ListRepositoryBranchesRequest, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryBranchesResponse
 */
export class ListRepositoryBranchesResponse extends Message<ListRepositoryBranchesResponse> {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.RepositoryBranch repository_branches = 1;
   */
  repositoryBranches: RepositoryBranch[] = [];

  /**
   * There are no more pages if this is empty.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListRepositoryBranchesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.registry.v1alpha1.ListRepositoryBranchesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "repository_branches", kind: "message", T: RepositoryBranch, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRepositoryBranchesResponse {
    return new ListRepositoryBranchesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRepositoryBranchesResponse {
    return new ListRepositoryBranchesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRepositoryBranchesResponse {
    return new ListRepositoryBranchesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListRepositoryBranchesResponse | PlainMessage<ListRepositoryBranchesResponse> | undefined, b: ListRepositoryBranchesResponse | PlainMessage<ListRepositoryBranchesResponse> | undefined): boolean {
    return proto3.util.equals(ListRepositoryBranchesResponse, a, b);
  }
}

