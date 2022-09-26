// INFO: `features` vs `components`
// 🚀`features` contains business logics and act as the orchestration-layer
// whereas 👀`components` are self-contained dummy UI view -> gargage-in-gargage-out

import CryptoExchange, {
  ICryptoExchange,
  ICryptoExchangeInfo,
} from '@/components/CryptoExchange'
import Filler from '@/components/Fillter'
import useCryptoExchanges from '@/hooks/useCryptoExchanges'
import { Col, Row, Skeleton, Typography } from 'antd'

const ListingFeat = () => {
  const CryptoExchanges = ({
    exchanges,
  }: {
    exchanges: ICryptoExchange['info'][]
  }) => {
    if (!exchanges?.length) return null
    return (
      <Col span={24}>
        <Row>
          {exchanges.map(
            ({ id, name, country, image, url, trust_score_rank }) => {
              const _key = `exchange-${id}`
              // INFO: extract high-level info
              const highLevelInfo = {
                name,
                country,
                image,
                url,
                trust_score_rank,
              } as ICryptoExchangeInfo
              return (
                <CryptoExchange
                  key={_key}
                  _key={_key}
                  id={id}
                  info={highLevelInfo}
                />
              )
            }
          )}
          {/* INFO: Filler for empty space*/}
          <Filler />
          <Filler />
        </Row>
      </Col>
    )
  }
  const [exchanges, loading, error] = useCryptoExchanges()
  if (error)
    return <Typography>Something went wrong. {error?.message}</Typography>
  return (
    <Skeleton loading={loading}>
      <CryptoExchanges exchanges={exchanges} />
    </Skeleton>
  )
}
export default ListingFeat
