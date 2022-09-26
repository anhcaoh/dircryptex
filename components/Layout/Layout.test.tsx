import { render, screen } from '@testing-library/react'
import Layout from './index'

describe('Layout', () => {
  it('should render without errors without any props', () => {
    render(<Layout />)
    // either variant should serve the similiar layout
    // so only testing one here is fine
    const Dircryptex = screen.getByText('Dircryptex')
    const poweredBy = screen.getByText('Powered by')
    expect(Dircryptex).toBeInTheDocument()
    expect(poweredBy).toBeInTheDocument()
  })
})
