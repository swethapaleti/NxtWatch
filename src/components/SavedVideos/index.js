import Header from '../Header'
import SideBar from '../SideBar'
import AppContext from '../../context/AppContext'
import TrendingCard from '../TrendingCard'
import {TrendingContainer, Flex, MainContainer} from './styledComponents'

const renderSavedVideos = (savedVideos, isDark) => {
  if (savedVideos.length === 0) {
    return (
      <TrendingContainer isDark={isDark}>
        <img
          alt="no saved video"
          width="250px"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        />
        <h1>No saved videos found</h1>
        <p>Save your videos by clicking a button</p>
      </TrendingContainer>
    )
  }
  return (
    <TrendingContainer isDark={isDark}>
      <h1>Saved Videos</h1>
      {savedVideos.map(each => (
        <TrendingCard trendingItem={each} key={each.id} />
      ))}
    </TrendingContainer>
  )
}

const SavedVideos = () => (
  <AppContext.Consumer>
    {value => {
      const {savedVideos, isDark} = value
      return (
        <MainContainer data-testid="savedVideos" isDark={isDark}>
          <Header />
          <Flex>
            <SideBar />
            {renderSavedVideos(savedVideos, isDark)}
          </Flex>
        </MainContainer>
      )
    }}
  </AppContext.Consumer>
)

export default SavedVideos
