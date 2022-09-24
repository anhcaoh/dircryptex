import { Avatar, Card, Col, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import styles from './CryptoExchange.module.css'

export interface ICryptoExchange {
  info: {
    id: string
    name: string
    description: string
    country: string
    url: string
    image: string
    trust_score: number
    trust_score_rank: number
  }
}
const CryptoExchange = ({
  info: {
    id,
    name,
    description,
    country,
    url,
    image,
    trust_score,
    trust_score_rank,
  },
}: ICryptoExchange) => {
  return (
    <Col span={8}>
      <Card>
        <Meta
          avatar={<Avatar src={image} />}
          title={name}
          description={
            <>
              <Typography.Paragraph className={styles.country}>
                {country ? `📍 ${country}` : null}
              </Typography.Paragraph>
              <Typography.Paragraph
                className={styles.description}
                ellipsis={{
                  rows: 2,
                  expandable: true,
                }}
                title={description}
              >
                {description}
              </Typography.Paragraph>
            </>
          }
        />
      </Card>
    </Col>
  )
}
export default CryptoExchange
