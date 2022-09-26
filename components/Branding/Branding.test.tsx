import { render, screen } from '@testing-library/react'
import Branding from './index'

describe('Branding', () => {
  it('should render without errors without any props', () => {
    render(<Branding />)
    const defaultDircryptex = screen.getByText('Dircryptex')
    expect(defaultDircryptex).toBeInTheDocument()
  })
  it('should render without errors with given props: title, description, CTA', () => {
    const _mock = {
      title: 'Dircryptex',
      description: 'Directory of Top Crypto Exchanges',
      CTA: <button type="button">CTA</button>,
    }
    render(<Branding {..._mock} />)
    const title = screen.getByText(_mock.title)
    const description = screen.getByText(_mock.description)
    const CTA = screen.getByRole('button')
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(CTA).toBeInTheDocument()
  })
})
