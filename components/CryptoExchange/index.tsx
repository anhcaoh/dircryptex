import { Avatar, Button, Card, Col, Tag, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Link from 'next/link'
import styles from './CryptoExchange.module.scss'

export interface ICryptoExchange {
  number: number
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
  number,
  info: { id, name, description, country, url, image, trust_score_rank },
}: ICryptoExchange) => {
  return (
    <Col xs={24} sm={16} md={12} lg={8} id={id}>
      <Card className={styles.card}>
        <Meta
          avatar={
            <>
              <Avatar src={image} />
              <div className={styles.rank}>#{number}</div>
            </>
          }
          title={
            <div className={styles.name}>
              <Link href={`/exchange/${id}`}>
                <a className={styles.link}>{name}</a>
              </Link>
              <Tag
                className={styles.tag}
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
