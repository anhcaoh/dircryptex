// INFO: `Dircryptex` as main feature app component
// as the main orchestration layer

import Listing from '@/features/Listing'
import { Col, Row, Space } from 'antd'

export interface IDircryptexProps {
  styles?: {
    title?: string
    description?: string
  }
}
const Dircryptex = ({ styles = {} }: IDircryptexProps) => {
  return (
    <>
      <Col span={24}>
        <h2 className={styles.title}>Dircryptex</h2>
        <p className={styles.description}>
          Directory of cryptocurrency exchanges
        </p>
        <Listing />
      </Col>
    </>
  )
}

export default Dircryptex
