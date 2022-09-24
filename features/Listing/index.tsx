import CryptoExchange, { ICryptoExchange } from '@/components/CryptoExchange'
import useCryptoExchanges from '@/hooks/useCryptoExchanges'
import { Row, Skeleton } from 'antd'

const Listing = () => {
  const CryptoExchanges = ({
    exchanges,
  }: {
    exchanges: ICryptoExchange['info'][]
  }) => {
    if (!exchanges?.length) return null
    return (
      <Row>
        {exchanges.splice(0, 10).map((exchange) => {
          return <CryptoExchange key={exchange.id} info={exchange} />
        })}
      </Row>
    )
  }
  const [cryptoExchanges, loading, error] = useCryptoExchanges()
  return (
    <Skeleton loading={loading}>
      <CryptoExchanges exchanges={cryptoExchanges} />
    </Skeleton>
  )
}
export default Listing
