import { render, screen } from '@testing-library/react'
import Branding from './index'
import { mock } from './Branding.mock'

describe('Branding', () => {
  it('should render without errors without any props', () => {
    render(<Branding />)
    const defaultDircryptex = screen.getByText('Dircryptex')
    expect(defaultDircryptex).toBeInTheDocument()
  })
  it('should render without errors with given props: title, description, CTA', () => {
    render(<Branding {...mock} />)
    const title = screen.getByText(mock.title ?? 'title')
    const description = screen.getByText(mock.description ?? 'description')
    const CTA = screen.getByRole('button')
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(CTA).toBeInTheDocument()
  })
})
