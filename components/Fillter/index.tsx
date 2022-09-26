import { Card, Col, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import styles from '@/components/CryptoExchange/CryptoExchange.module.scss'

const Filler = () => {
  return (
    <>
      <Col xs={24} sm={24} md={12} lg={8}>
        <Card className={styles.card}>
          <Meta
            title={<div className={styles.name}></div>}
            description={
              <>
                <Typography.Paragraph
                  className={styles.country}
                ></Typography.Paragraph>
                <Typography.Paragraph
                  className={styles.description}
                ></Typography.Paragraph>
                <div className={styles.url}></div>
                <div className={styles.filler}></div>
              </>
            }
          ></Meta>
        </Card>
      </Col>
    </>
  )
}

export default Filler
