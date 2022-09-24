import { createSlice } from "@reduxjs/toolkit"
import {ICryptoExchange} from "@/components/CryptoExchange"

interface ListingSliceState {
  cryptoExchanges: ICryptoExchange[]
}
const initialState: ListingSliceState = {
  cryptoExchanges: []
}
const searchSlice = createSlice({
  name: 'listingSlice',
  initialState,
  reducers: {}
});

export default searchSlice