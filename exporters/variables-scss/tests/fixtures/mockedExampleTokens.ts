import {
  DimensionToken,
  DimensionTokenValue,
  StringToken,
  StringTokenValue,
  Token,
  TokenGroup,
  TokenType,
  Unit,
} from '@supernovaio/sdk-exporters';
import { TokenGroupRemoteModel } from '@supernovaio/sdk-exporters/build/sdk-typescript/src/model/groups/SDKTokenGroup';

const testDimension: DimensionTokenValue = {
  measure: 32,
  unit: Unit.pixels,
  referencedTokenId: null,
};

const testString: StringTokenValue = {
  text: '12',
  referencedTokenId: null,
};

export const exampleMockedTokens = new Map<string, Token>();
exampleMockedTokens.set('dimensionRef', {
  id: 'dimensionRef',
  name: 'desktop',
  tokenType: TokenType.dimension,
  parentGroupId: '1',
  origin: {
    name: 'Grid/spacing/desktop',
  },
  value: testDimension,
} as DimensionToken);
exampleMockedTokens.set('stringRef', {
  id: 'stringRef',
  name: 'Columns',
  tokenType: TokenType.string,
  parentGroupId: '2',
  origin: {
    name: 'Grid/Columns',
  },
  value: testString,
} as StringToken);

export const groupFunctions = {
  addChild(): void {},
  addChildren(): void {},
  setParentGroupId(): void {},
  setPath(): void {},
  setSortOrder(): void {},
  toMutatedObject(): TokenGroup {
    return new TokenGroup({
      id: this.id,
      parentId: this.parentGroupId,
      brandId: this.brandId,
      tokenType: this.tokenType,
      designSystemVersionId: this.designSystemVersionId,
      isRoot: this.isRoot,
      meta: {
        name: this.name,
        description: this.description,
      },
      childrenIds: this.childrenIds,
    });
  },
  toWriteObject(): TokenGroupRemoteModel {
    return {
      id: this.id,
      brandId: this.brandId,
      designSystemVersionId: this.designSystemVersionId,
      isRoot: this.isRoot,
      tokenType: this.tokenType,
      childrenIds: this.childrenIds,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      meta: {
        name: this.name,
        description: this.description,
      },
    };
  },
};

export const exampleMockedGroups: TokenGroup[] = [
  {
    ...groupFunctions,
    id: '1',
    idInVersion: 'idInVersionValue',
    brandId: 'brandIdValue',
    designSystemVersionId: 'designSystemVersionIdValue',
    name: 'spacing',
    description: '',
    isRoot: false,
    tokenType: TokenType.dimension,
    childrenIds: ['dimensionRef'],
    path: ['Grid'],
    tokenIds: ['dimensionRef'],
    subgroupIds: [],
    parentGroupId: 'parent1',
    sortOrder: -1,
    createdAt: null,
    updatedAt: null,
  },
  {
    ...groupFunctions,
    id: '2',
    idInVersion: 'idInVersionValue',
    brandId: 'brandIdValue',
    designSystemVersionId: 'designSystemVersionIdValue',
    name: 'Grid',
    description: '',
    isRoot: false,
    tokenType: TokenType.string,
    childrenIds: ['stringRef'],
    path: [],
    tokenIds: ['stringRef'],
    subgroupIds: [],
    parentGroupId: 'parent2',
    sortOrder: -1,
    createdAt: null,
    updatedAt: null,
  },
  {
    ...groupFunctions,
    id: '3',
    idInVersion: 'idInVersionValue',
    brandId: 'brandIdValue',
    designSystemVersionId: 'designSystemVersionIdValue',
    name: 'Typography',
    description: '',
    isRoot: false,
    tokenType: TokenType.typography,
    childrenIds: ['stringRef'],
    path: [],
    tokenIds: ['stringRef'],
    subgroupIds: [],
    parentGroupId: 'parent3',
    sortOrder: -1,
    createdAt: null,
    updatedAt: null,
  },
];

export const exampleMockedInvariantTokens = new Map<string, Token>();
exampleMockedInvariantTokens.set('radiiRef', {
  id: 'radiiRef',
  name: 'radius-full',
  tokenType: TokenType.dimension,
  parentGroupId: '1',
  origin: {
    name: 'Radius/radius-full',
  },
  value: {
    unit: 'Pixels',
    measure: 9999,
    referencedTokenId: null,
  },
} as DimensionToken);
