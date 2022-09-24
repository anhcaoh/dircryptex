import CryptoExchange from '@/components/CryptoExchange'
import useCryptoExchanges from '@/hooks/useCryptoExchanges'
import { Skeleton } from 'antd'

const Listing = () => {
  const renderCryptoExchange = () => {
    return <></>
  }
  const [cryptoExchanges, loading, error] = useCryptoExchanges()
  return (
    <Skeleton loading={true}>
      <CryptoExchange />
    </Skeleton>
  )
}
export default Listing
