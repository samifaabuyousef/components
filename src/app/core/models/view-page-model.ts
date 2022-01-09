export interface ViewPagedData<T> {
    data: attributeVal<T>[];
  }

// tslint:disable-next-line:class-name
export class attributeVal<T>{
      attribue: string;
      value ?: T;
  }
