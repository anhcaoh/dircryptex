// INFO: `features` vs `components`
// 🚀`features` contains business logics and act as the orchestration-layer
// whereas 👀`components` are self-contained dummy UI view -> gargage-in-gargage-out

import CryptoExchange from '@/components/CryptoExchange'
import { useAppSelector } from '@/hooks/useStore'
import { Row, Typography } from 'antd'
export interface IExchangeFeatProps {
  id: string
}
const ExchangeFeat = <T extends IExchangeFeatProps>({ id }: T) => {
  const exchangeFromStoreById = useAppSelector(
    (store) =>
      store.listing.cryptoExchanges?.filter((exchange) => exchange.id === id)[0]
  )
  if (!exchangeFromStoreById)
    return (
      <Typography style={{ marginTop: '24px' }}>
        No exchange found by ID <code>{id}</code>
      </Typography>
    )
  return (
    <Row>
      <CryptoExchange
        id={id}
        info={exchangeFromStoreById}
        styles={{
          span: 12,
          offset: exchangeFromStoreById?.description ? 6 : null,
        }}
      />
    </Row>
  )
}
export default ExchangeFeat
