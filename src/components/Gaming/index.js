import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import GamingCard from '../GamingCard'
import SideBar from '../SideBar'
import AppContext from '../../context/AppContext'
import {TrendingContainer, Flex, Load, MainContainer} from './styledComponents'

class Gaming extends Component {
  state = {
    phase: '',
    dataList: [],
  }

  componentDidMount() {
    this.getGamingItem()
  }

  getGamingItem = async () => {
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
        `https://apis.ccbp.in/videos/gaming`,
        options,
      )
      const data = await response.json()
      if (response.ok === true) {
        const {videos} = data
        const formattedData = videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          viewCount: each.view_count,
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

  renderGamingData = isDark => {
    const {phase} = this.state
    switch (phase) {
      case 'success':
        return this.renderGamingSuccess(isDark)
      case 'failure':
        return this.renderGamingFailure()
      case 'loading':
        return this.renderGamingLoading(isDark)
      default:
        return null
    }
  }

  renderGamingSuccess = isDark => {
    const {dataList} = this.state
    return (
      <TrendingContainer isDark={isDark}>
        {dataList.map(each => (
          <GamingCard key={each.id} GamingItem={each} />
        ))}
      </TrendingContainer>
    )
  }

  renderGamingFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something went wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again
      </p>
      <button onClick={this.getGamingItem} type="button">
        Retry
      </button>
    </div>
  )

  renderGamingLoading = isDark => (
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
            <MainContainer data-testid="gaming" isDark={isDark}>
              <Header />
              <Flex>
                <SideBar />
                {this.renderGamingData(isDark)}
              </Flex>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming
