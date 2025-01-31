import { Pagination } from "./Pagination";
import { EqualsFilter, RangeFilter, MultiFilter } from "./SearchFilter";
import { Association } from "./Association";
import { Aggregation } from "./Aggregation";
import { TotalCountMode } from "./TotalCountMode";

export interface Sort {
  field: string;
  desc?: boolean;
}
export interface SearchCriteria {
  filters?: EqualsFilter[] | RangeFilter[] | MultiFilter[];
  pagination?: Pagination;
  sort?: Sort;
  term?: string;
  configuration?: {
    associations?: Association[];
    aggregations?: Aggregation[];
    totalCountMode?: TotalCountMode;
  };
}
