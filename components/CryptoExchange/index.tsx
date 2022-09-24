export interface ICryptoExchange {
  info?: {
    name: string
    country: string
    url: string
    logo: string
    trustRank: number
  }
}
const CryptoExchange = ({ info }: ICryptoExchange) => {
  return <></>
}
export default CryptoExchange
