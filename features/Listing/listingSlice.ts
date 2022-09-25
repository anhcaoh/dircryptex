import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICryptoExchange, ICryptoExchangeInfo } from "@/components/CryptoExchange"

interface ListingSliceState {
  cryptoExchanges: ICryptoExchangeInfo[] | null
}
const initialState: ListingSliceState = {
  cryptoExchanges: null //null as being not yet fetched
}
const listingSlice = createSlice({
  name: 'listingSlice',
  initialState,
  reducers: {
    succeedCryptoExchanges: (state, action:PayloadAction<ICryptoExchangeInfo[]>) => {
       //INFO: this does not actually mutate `state` here because Immer is at work
      state.cryptoExchanges = action.payload
    }
  }
});
export const { succeedCryptoExchanges } = listingSlice.actions
export default listingSlice.reducer