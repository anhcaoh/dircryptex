import CryptoExchange, { ICryptoExchange } from '@/components/CryptoExchange'
import Filler from '@/components/Fillter'
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
        {exchanges.splice(0, 10).map((exchange, index) => {
          return (
            <CryptoExchange
              key={exchange.id}
              number={index + 1}
              info={exchange}
            />
          )
        })}
        {/* INFO: Filler for empty space*/}
        <Filler />
        <Filler />
      </Row>
    )
  }
  const [cryptoExchanges, loading, error] = useCryptoExchanges()
  if (error) return <h2>Something went wrong. {error?.message}</h2>
  return (
    <Skeleton loading={loading}>
      <CryptoExchanges exchanges={cryptoExchanges} />
    </Skeleton>
  )
}
export default Listing
