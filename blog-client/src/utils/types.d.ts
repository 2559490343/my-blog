type actionReturnType = {
  type: string;
  payload: any;
};

export type DvaActionsType = (payload: any) => actionReturnType;

type dataProps = {
  msg: string;
  code: number;
  list: any;
};
export interface ResultProps {
  data: dataProps;
  ok: boolean;
  headers: any;
}

export interface RequestOptionsProps {
  headers?: any;
  dataType?: 'json' | 'blob' | 'text' | 'arrayBuffer';
}
