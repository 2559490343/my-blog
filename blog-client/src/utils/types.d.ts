type actionReturnType = {
  type: string;
  payload: any;
};

export type ObjType = Record<string | number, any>;

export type DvaActionsType = (payload: any) => actionReturnType;

export type ListResType<T = ObjType> = {
  list: T[];
  totalCount: number;
};
export interface ResultProps<T = any> {
  data: T;
  code: number;
  message: string;
  success: boolean;
}

export interface RequestOptionsProps {
  headers?: any;
  dataType?: 'json' | 'blob' | 'text' | 'arrayBuffer';
}
