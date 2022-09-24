// INFO: per req to use `https://www.coingecko.com/en/api` directly
// Yet, in a more ideal setup, Frontend should make the API requests 
// to some abstraction layer (`coingecko-api` wrapper) where it encapsulates
// the underlying API technical requirements and data designs
// whereas allowing Frontend to simply and implicitly request for the data needed

// NOTE: This NPM pkg `coingecko-api` is outdated (i.e. Published 3 years ago)
// but should still work as-of today 9/24/22
import CoinGeckoAPI from 'coingecko-api' 
import { useCallback, useEffect, useMemo, useState } from 'react';
const CoinGeckoAPIClient = new CoinGeckoAPI();

export interface IExchangesAllResponse {
  code: 200 | 500 | 404 | number
  message: string
  data: any[],
  success: boolean
}

const useCryptoExchanges =  () => {
  const params = useMemo(() => ({per_page: 10, page: 1}),[])
  const [cryptoExchanges, setCryptoExchanges] = useState<any[]>([])
  const [loading, setLoading] = useState(true) //loading started as this hook being used
  const [error, setError] = useState(null)
  
  const fetchCrypoExchanges = useCallback(async() => {
    try {
      let response = await CoinGeckoAPIClient.exchanges.all(params) as IExchangesAllResponse
      if( response.code === 200 && response.data ) setCryptoExchanges(response.data)
    }
    catch (error:any) {
      setError(error)
    } finally {
      setTimeout(()=> setLoading(false), 1000)
    }
  },[params])
  
  useEffect(() => {
    fetchCrypoExchanges()
  },[fetchCrypoExchanges])
  
  return [cryptoExchanges, loading, error] as [any[], boolean, any]
}
export default useCryptoExchanges