import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Exchange = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/', undefined, { shallow: true })
  }, [router])
}

export default Exchange
