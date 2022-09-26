import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Exchange from './index'
import { store } from '../../app/store'

describe('Exchange', () => {
  it('should render without errors without any props', () => {
    const mock = 'binance'
    render(
      <Provider store={store}>
        <Exchange id={mock} />
      </Provider>
    )
    const noExchangeFoundFor = screen.getByText('No exchange found by ID')
    const binance = screen.getByText(mock)
    expect(noExchangeFoundFor).toBeInTheDocument()
    expect(binance).toBeInTheDocument()
  })
})
