import { Space, Typography } from 'antd'

export interface IBrandingProps {
  styles?: object | any
  title?: string
  description?: string
  CTA?: JSX.Element | JSX.Element[] | any
}
const Branding = ({ styles = {}, title, description, CTA }: IBrandingProps) => {
  return (
    <Space direction="vertical" align="center" style={{ width: '100%' }}>
      <Typography.Title level={1} className={styles.title}>
        {title || 'Dircryptex'}
      </Typography.Title>
      <Typography.Paragraph className={styles.description}>
        {description || 'Directory of Top Crypto Exchanges'}
      </Typography.Paragraph>
      {CTA}
    </Space>
  )
}

export default Branding
