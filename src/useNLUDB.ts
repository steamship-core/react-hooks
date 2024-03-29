import useSafeGetSet from './util/useSafeGetSet';
import { NLUDB, NLUDBError } from '@nludb/client'
import { useMemo } from 'react'

export interface NLUDBReactConnectionParams {
  client?: NLUDB;
  apiDomain?:string;
  apiVersion?:string;
  apiKey?:string;
  verbose?:boolean;
}

export const useNLUDB = (params: NLUDBReactConnectionParams): [NLUDB | null, NLUDBError | null] => {
  const [getError, setError] = useSafeGetSet<Error | null>(null);

  const nludb = useMemo<NLUDB|null>(() => {
    if (params === null) {
      return null
    } else if (params.client) {
      return params.client
    } else {
      if(!params.apiKey) {
        params.verbose && console.log("useNLUDB:createClient:no API Key");
        setError(new Error("No API Key provided"))
        return null;
      } else {
        return new NLUDB({apiKey: params.apiKey!, apiDomain: params.apiDomain})
      }
    }
  }, [params.client, params?.apiKey, params?.apiDomain, , params?.apiVersion]);

  return [nludb, getError()];
};

