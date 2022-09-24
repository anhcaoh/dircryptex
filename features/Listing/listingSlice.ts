import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICryptoExchange } from "@/components/CryptoExchange"

interface ListingSliceState {
  cryptoExchanges: ICryptoExchange[]
}
const initialState: ListingSliceState = {
  cryptoExchanges: []
}
const listingSlice = createSlice({
  name: 'listingSlice',
  initialState,
  reducers: {
    getCryptoExchanges: (state, action:PayloadAction<ICryptoExchange[]>) => {
       //INFO: this does not actually mutate `state` here because Immer is at work
      state.cryptoExchanges = action.payload
    }
  }
});
export const { getCryptoExchanges } = listingSlice.actions
export default listingSlice.reducer