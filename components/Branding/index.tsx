import { Space, Typography } from 'antd'

const Branding = ({ styles, title, description }: any) => {
  return (
    <>
      <Typography.Title level={1} className={styles.title}>
        {title || 'Dircryptex'}
      </Typography.Title>
      <Typography.Paragraph className={styles.description}>
        {description || 'Directory of Top Crypto Exchanges'}
      </Typography.Paragraph>
    </>
  )
}

export default Branding
