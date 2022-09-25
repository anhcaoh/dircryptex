// INFO: `Dircryptex` as main feature app component
// as the main orchestration layer

import Listing from '@/features/Listing'
import { Col } from 'antd'

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
        <p className={styles.description}>Directory of Top Crypto Exchanges</p>
        <Listing />
      </Col>
    </>
  )
}

export default Dircryptex
