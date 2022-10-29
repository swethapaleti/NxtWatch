import Header from '../Header'
import SideBar from '../SideBar'
import AppContext from '../../context/AppContext'
import {TrendingContainer, Flex, Image, Text, Heading} from './styledComponents'

const NotFound = () => (
  <div>
    <Header />
    <Flex>
      <SideBar />
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingContainer isDark={isDark}>
              <Image
                alt="not found"
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
              />
              <Heading isDark={isDark}>Page Not Found</Heading>
              <Text isDark={isDark}>
                we are sorry, the page you requested could not be found.
              </Text>
            </TrendingContainer>
          )
        }}
      </AppContext.Consumer>
    </Flex>
  </div>
)

export default NotFound
