import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import AppContext from '../../context/AppContext'

import {
  Sider,
  SocialIcon,
  Contact,
  SideContainer,
  Item,
  Title,
  StyledLink,
  ContactCard,
  Text,
} from './styledComponents'

export const tabList = [
  {
    title: 'Home',
    link: '/',
    Icon: AiFillHome,
  },
  {
    title: 'Trending',
    link: '/trending',
    Icon: HiFire,
  },
  {
    title: 'Gaming',
    link: '/gaming',
    Icon: SiYoutubegaming,
  },
  {
    title: 'Saved Videos',
    link: '/saved-videos',
    Icon: BiListPlus,
  },
]

const SideBar = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      const linkParts = document.location.href.split('/')
      const pageLink = `/${linkParts[linkParts.length - 1]}`
      return (
        <Sider isDark={isDark}>
          <SideContainer>
            {tabList.map(each => {
              const {title, link, Icon} = each
              return (
                <StyledLink to={link} key={title}>
                  <Item isDark={isDark} active={pageLink === link}>
                    <Icon />
                    <Title isDark={isDark} active={pageLink === link}>
                      {title}
                    </Title>
                  </Item>
                </StyledLink>
              )
            })}
          </SideContainer>
          <ContactCard>
            <Contact isDark={isDark}>CONTACT US</Contact>
            <SocialIcon
              alt="facebook logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            />
            <SocialIcon
              alt="twitter logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            />
            <SocialIcon
              alt="linked in logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            />
            <Text isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </Text>
          </ContactCard>
        </Sider>
      )
    }}
  </AppContext.Consumer>
)

export default SideBar
