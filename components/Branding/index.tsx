import { Space, Typography } from 'antd'

const Branding = ({ styles, title, description, CTA }: any) => {
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
