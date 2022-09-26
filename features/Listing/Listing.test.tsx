import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Listing from './index'
import { store } from '../../app/store'

describe('Listing', () => {
  it('should render without errors without any props', () => {
    const { container } = render(
      <Provider store={store}>
        <Listing />
      </Provider>
    )
    // at least component rendered with empty ul li
    const ul = container.querySelector('ul')
    const li = container.querySelector('li')
    expect(ul).toBeInTheDocument()
    expect(li).toBeInTheDocument()
  })
})
