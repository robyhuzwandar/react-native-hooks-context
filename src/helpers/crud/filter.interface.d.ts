export interface IFilter {
    offset?: number;
    where?: object;
    whereOr?: object;
    order?: string[];
    limit?: number;
    isShowDraft?: boolean;
    isShowDeleted?: boolean;
    relations?: string[];
    operator?: string;
}