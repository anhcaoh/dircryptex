// INFO: per req to use `https://www.coingecko.com/en/api` directly
// Yet, in a more ideal setup, Frontend should make the API requests 
// to some abstraction layer (`coingecko-api` wrapper) where it encapsulates
// the underlying API technical requirements and data designs
// whereas allowing Frontend to simply and implicitly request for the data needed

// NOTE: This NPM pkg `coingecko-api` is outdated (i.e. Published 3 years ago)
// but should still work as-of today 9/24/22
import { succeedCryptoExchanges } from '@/features/Listing/listingSlice';
import CoinGeckoAPI from 'coingecko-api' 
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from './useStore';

const CoinGeckoAPIClient = new CoinGeckoAPI();
export interface IExchangesAllResponse {
  code: 200 | 500 | 404 | number
  message: string
  data: any[],
  success: boolean
}

export interface IUseCryptoExchangesProps {
  limit?: number
}
const useCryptoExchanges =  ({limit}: IUseCryptoExchangesProps = { limit : 10}) => {
  const params = useMemo(() => ({per_page: limit, page: 1}),[limit])
  const [cryptoExchanges, setCryptoExchanges] = useState<any[]>([])
  const [loading, setLoading] = useState(true) //loading started as this hook being used
  const [error, setError] = useState(null)
  const storedExchanges = useAppSelector((state) => state.listing.cryptoExchanges)
  const dispatch = useAppDispatch() 
  const limitRecords = useCallback((records: any[]) => records.slice(0, limit),[limit])
  const fetchCrypoExchanges = useCallback(async() => {
    try {
      let response = await CoinGeckoAPIClient.exchanges.all(params) as IExchangesAllResponse
      if( response.code === 200 && response.data ) {
        setCryptoExchanges(limitRecords(response.data))
        dispatch(succeedCryptoExchanges(response.data))
      }
    }
    catch (error:any) {
      setError(error)
    } finally {
      setTimeout(()=> setLoading(false), 500) // So it doesn't feel too flickery (i.e. pause .5s and render cards)
    }
  },[params, dispatch, limitRecords])
  
  useEffect(() => {
    // if not yet fetched (null) then fetch
    // otherwise set exchanges from store
    if(storedExchanges === null) fetchCrypoExchanges()
    else setCryptoExchanges(limitRecords(storedExchanges))
  },[fetchCrypoExchanges, storedExchanges, limitRecords ])
  
  return [cryptoExchanges, loading, error] as [any[], boolean, any]
}
export default useCryptoExchanges