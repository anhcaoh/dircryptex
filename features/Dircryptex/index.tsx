// INFO: `Dircryptex` as main feature app component
// as the main orchestration layer
// in most cases, there are more features to add-on here
// but for this we're only Listing, so comps might look redundent i.e. <Dircryptex><Listing /></Dircryptex>

import ListingFeat from '@/features/Listing'

export interface IDircryptexProps {
  title?: string
}
const Dircryptex = () => {
  return (
    <>
      <ListingFeat />
      {/* could have more features here. e.g. search */}
    </>
  )
}

export default Dircryptex
