import { NludbResponse, InsertRequest, NLUDB, CreateIndexRequest, SearchRequest, SearchResult } from '@nludb/client';
export interface State {
    results: NludbResponse<SearchResult> | null;
    isReady: boolean;
    isSearching: boolean;
    error: Error | null;
}
export interface StableActions {
    reset: () => void;
    search: (request: SearchRequest) => void;
    insert: (request: InsertRequest) => void;
}
export interface Actions extends StableActions {
}
export interface UseIndexParams extends CreateIndexRequest {
    nludb: NLUDB | null;
    verbose?: boolean;
}
export declare const useEmbeddingIndex: (params: UseIndexParams) => [State, Actions];
