import { Card, Col, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import styles from '@/components/CryptoExchange/CryptoExchange.module.css'

const Filler = () => {
  return (
    <>
      <Col span={8}>
        <Card>
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
              </>
            }
          ></Meta>
        </Card>
      </Col>
    </>
  )
}

export default Filler
