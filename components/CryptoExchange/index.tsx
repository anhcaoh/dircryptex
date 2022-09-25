import { Avatar, Card, Col, Typography } from 'antd'
import {
  RedditOutlined,
  FacebookOutlined,
  TwitterOutlined,
  SlackOutlined,
  GlobalOutlined,
} from '@ant-design/icons'
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
  facebook_url: string
  reddit_url: string
  telegram_url: string
  slack_url: string
  other_url_1: string
  other_url_2: string
  twitter_handle: string
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
    facebook_url,
    reddit_url,
    telegram_url,
    slack_url,
    other_url_1,
    other_url_2,
    twitter_handle,
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
              <Typography.Paragraph>
                <GlobalOutlined />
                {'  '}
                <a href={url} rel="noreferrer" target="_blank">
                  {url} →
                </a>
              </Typography.Paragraph>
              {facebook_url && (
                <Typography.Paragraph>
                  <FacebookOutlined />
                  {'  '}
                  <a href={facebook_url} rel="noreferrer" target="_blank">
                    {facebook_url} →
                  </a>
                </Typography.Paragraph>
              )}
              {twitter_handle && (
                <Typography.Paragraph>
                  <TwitterOutlined />
                  {'  '}
                  <a
                    href={`https://twitter.com/ ${twitter_handle}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    @{twitter_handle} →
                  </a>
                </Typography.Paragraph>
              )}
              {reddit_url && (
                <Typography.Paragraph>
                  <RedditOutlined />{' '}
                  <a href={reddit_url} rel="noreferrer" target="_blank">
                    {reddit_url} →
                  </a>
                </Typography.Paragraph>
              )}
              {telegram_url && (
                <Typography.Paragraph>
                  <GlobalOutlined />
                  {'  '}
                  <a href={telegram_url} rel="noreferrer" target="_blank">
                    {telegram_url} →
                  </a>
                </Typography.Paragraph>
              )}
              {slack_url && (
                <Typography.Paragraph>
                  <SlackOutlined />
                  {'  '}
                  <a href={slack_url} rel="noreferrer" target="_blank">
                    {slack_url} →
                  </a>
                </Typography.Paragraph>
              )}
              {other_url_1 && (
                <Typography.Paragraph>
                  <GlobalOutlined />
                  {'  '}
                  <a href={other_url_1} rel="noreferrer" target="_blank">
                    {other_url_1} →
                  </a>
                </Typography.Paragraph>
              )}
              {other_url_2 && (
                <Typography.Paragraph>
                  <GlobalOutlined />
                  {'  '}
                  <a href={other_url_2} rel="noreferrer" target="_blank">
                    {other_url_2} →
                  </a>
                </Typography.Paragraph>
              )}
            </>
          }
        />
      </Card>
    </Col>
  )
}
export default CryptoExchange
