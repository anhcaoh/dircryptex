import { Avatar, Card, Col, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Link from 'next/link'
import styles from './CryptoExchange.module.scss'

export interface ICryptoExchangeInfo {
  id: string
  name: string
  description: string
  country: string
  url: string
  image: string
  trust_score: number
  trust_score_rank: number
  year_established: number
  // year_of_establishment,
  //   year of establishment, social media links, description
}
export interface ICryptoExchange {
  _key?: string
  id: string | string[]
  styles?: object | any
  info: ICryptoExchangeInfo
}
const CryptoExchange = ({
  _key, // e.g. 'exchange-binance
  id, // e.g. 'binance'
  styles: _styles,
  info: {
    name,
    description,
    country,
    url,
    image,
    trust_score_rank,
    year_established,
  },
}: ICryptoExchange) => {
  return (
    <Col
      xs={24}
      sm={24}
      md={12}
      lg={_styles?.span ? _styles?.span : 8}
      offset={_styles?.offset}
      id={_key}
    >
      <Card className={styles.card}>
        <Meta
          avatar={
            <>
              <Avatar src={image} />
              <div className={styles.rank}>#{trust_score_rank}</div>
            </>
          }
          title={
            <div className={styles.name}>
              <Link href={`/exchange/${id}`}>
                <a className={styles.link}>{name}</a>
              </Link>
            </div>
          }
          description={
            <>
              <Typography.Paragraph className={styles.country}>
                {country ? `📍 Location: ${country}` : null}
              </Typography.Paragraph>
              <Typography.Paragraph className={styles.yearEstablished}>
                {year_established ? `🗓 Year Est. ${year_established}` : null}
              </Typography.Paragraph>
              {description && (
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
              )}
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
