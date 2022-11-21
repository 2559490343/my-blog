// import { useMemo } from 'react';
// import { useParams } from 'react-router-dom';


// export function useQuery<T extends object>() {
//   const query = useParams();
//   const params = useMemo(() => [...query.keys()].reduce((obj, k) => ({ ...obj, [k]: query.get(k) }), {}), [query]);
//   return params as T;
// }
