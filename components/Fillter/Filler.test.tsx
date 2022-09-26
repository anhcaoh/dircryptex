import { render, screen } from '@testing-library/react'
import Filler from './index'

describe('Filler', () => {
  it('should render without errors without any props', () => {
    render(<Filler />)
    const filler = screen.getByLabelText('filler')
    expect(filler).toBeInTheDocument()
  })
})
