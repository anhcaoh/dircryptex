import { render, screen } from '@testing-library/react'
import CryptoExchange from './index'
import { mock } from './CryotoExchange.mock'

describe('CryptoExchange', () => {
  it('should render without errors with given props: id, info.*', () => {
    render(<CryptoExchange {...mock} />)
    const name = screen.getByText(mock.info.name)
    const location = screen.getByText(mock.info.country)
    const yearEstablished = screen.getByText(mock.info.year_established)
    const description = screen.getByText(mock.info.description, {
      exact: false, //in case text broken up into multiple elements
    })
    const trustScoreRank = screen.getByText(mock.info.trust_score_rank, {
      exact: false, //in case text broken up into multiple elements
    })
    const facebookUrl = screen.getAllByText(mock.info.facebook_url, {
      exact: false,
    }) // in case same text w/ multiple elements
    const twitterHandle = screen.getAllByText(mock.info.twitter_handle, {
      exact: false,
    })
    const redditUrl = screen.getAllByText(mock.info.reddit_url, {
      exact: false,
    })
    const telegramUrl = screen.getAllByText(mock.info.telegram_url, {
      exact: false,
    })
    const slackUrl = screen.getAllByText(mock.info.slack_url, {
      exact: false,
    })
    const otherUrl1 = screen.getAllByText(mock.info.other_url_1, {
      exact: false,
    })
    const otherUrl2 = screen.getAllByText(mock.info.other_url_2, {
      exact: false,
    })

    // high level info asserts
    expect(name).toBeInTheDocument()
    expect(location).toBeInTheDocument()
    expect(yearEstablished).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(trustScoreRank).toBeInTheDocument()

    // links asserts
    expect(facebookUrl).toBeTruthy()
    expect(twitterHandle).toBeTruthy()
    expect(redditUrl).toBeTruthy()
    expect(telegramUrl).toBeTruthy()
    expect(slackUrl).toBeTruthy()
    expect(otherUrl1).toBeTruthy()
    expect(otherUrl2).toBeTruthy()
  })
})
