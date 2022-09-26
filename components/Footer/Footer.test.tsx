import { render, screen } from '@testing-library/react'
import Footer from './index'

describe('Footer', () => {
  it('should render without errors without any props', () => {
    render(<Footer />)
    const poweredBy = screen.getByText('Powered by')
    expect(poweredBy).toBeInTheDocument()
  })
})
