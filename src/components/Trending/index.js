import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import TrendingCard from '../TrendingCard'
import SideBar from '../SideBar'
import AppContext from '../../context/AppContext'
import {TrendingContainer, Flex, Load, MainContainer} from './styledComponents'

class Trending extends Component {
  state = {
    phase: '',
    dataList: [],
  }

  componentDidMount() {
    this.getTrendingItem()
  }

  getTrendingItem = async () => {
    this.setState({
      phase: 'loading',
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(
        `https://apis.ccbp.in/videos/trending`,
        options,
      )
      const data = await response.json()
      if (response.ok === true) {
        const {videos} = data
        const formattedData = videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          viewCount: each.view_count,
          publishedAt: each.published_at,
        }))
        this.setState({
          phase: 'success',
          dataList: formattedData,
        })
      } else {
        this.setState({
          phase: 'failure',
        })
      }
    } catch (e) {
      console.log(e)
      this.setState({
        phase: 'failure',
      })
    }
  }

  renderTrendingData = isDark => {
    const {phase} = this.state
    switch (phase) {
      case 'success':
        return this.renderTrendingSuccess(isDark)
      case 'failure':
        return this.renderTrendingFailure(isDark)
      case 'loading':
        return this.renderTrendingLoading(isDark)
      default:
        return null
    }
  }

  renderTrendingSuccess = isDark => {
    const {dataList} = this.state
    return (
      <TrendingContainer isDark={isDark}>
        {dataList.map(each => (
          <TrendingCard key={each.id} trendingItem={each} />
        ))}
      </TrendingContainer>
    )
  }

  renderTrendingFailure = isDark => (
    <div>
      <img
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <h1>Oops! Something went wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again
      </p>
      <button onClick={this.getTrendingItem} type="button">
        Retry
      </button>
    </div>
  )

  renderTrendingLoading = isDark => (
    <Load isDark={isDark} data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </Load>
  )

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <MainContainer isDark={isDark} data-testid="trending">
              <Header />
              <Flex>
                <SideBar />
                {this.renderTrendingData(isDark)}
              </Flex>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Trending
