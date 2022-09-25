// INFO: `features` vs `components`
// 🚀`features` contains business logics and act as the orchestration-layer
// whereas 👀`components` are self-contained dummy UI view -> gargage-in-gargage-out

import CryptoExchange from '@/components/CryptoExchange'
import useCryptoExchanges from '@/hooks/useCryptoExchanges'
import { useAppSelector } from '@/hooks/useStore'
import { Row, Typography } from 'antd'
export interface IExchangeFeatProps {
  id: string
}
const ExchangeFeat = <T extends IExchangeFeatProps>({ id }: T) => {
  const [exchanges, loading, error] = useCryptoExchanges({ id: id })
  const exchangeFromStoreById = useAppSelector(
    (store) =>
      store.listing.cryptoExchanges?.filter((exchange) => exchange.id === id)[0]
  )
  if (!loading && error) return <Typography>Something went wrong</Typography>
  if (!exchanges?.length)
    return (
      <Typography style={{ marginTop: '2.5rem' }}>
        No exchange found by ID <code>{id}</code>
      </Typography>
    )
  return (
    <Row style={{ marginTop: '2.5rem' }}>
      <CryptoExchange
        id={id}
        info={exchanges[0]}
        styles={{
          span: 12,
          offset: exchangeFromStoreById?.description ? 6 : null,
        }}
      />
    </Row>
  )
}
export default ExchangeFeat
