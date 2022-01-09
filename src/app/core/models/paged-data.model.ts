export interface PagedData<T> {
  meta: any;
  data: T[];
  page: number;
  pageSize: number;
  totalCount: number;
}
