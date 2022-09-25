import { Avatar, Card, Col, Tag, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import styles from './CryptoExchange.module.scss'

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
    <Col span={8} id={id}>
      <Card>
        <Meta
          avatar={<Avatar src={image} />}
          title={
            <div className={styles.name}>
              {name}
              <Tag
                style={{ marginLeft: '8px' }}
                color={
                  trust_score_rank < 3
                    ? 'volcano'
                    : trust_score_rank < 5
                    ? 'gold'
                    : trust_score_rank >= 5 && trust_score_rank < 7
                    ? 'cyan'
                    : 'success'
                }
              >
                {trust_score_rank} / 10
              </Tag>
            </div>
          }
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
              <a href={url} rel="noreferrer" target="_blank">
                <u>{url}</u> →
              </a>
            </>
          }
        />
      </Card>
    </Col>
  )
}
export default CryptoExchange
