// INFO: `Dircryptex` as main feature app component
// as the main orchestration layer

import Branding from '@/components/Branding'
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
        <Branding styles={styles} />
        <Listing />
      </Col>
    </>
  )
}

export default Dircryptex
