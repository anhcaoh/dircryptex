import { render, screen } from '@testing-library/react'
import Head from './index'

describe('Head', () => {
  it('should render without errors without any props', () => {
    render(<Head />)
    // Nothing to test here, as this is <head> tag
    expect(true).toBeTruthy()
  })
})
