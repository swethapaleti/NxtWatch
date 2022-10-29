import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../context/AppContext'

import {
  VideoImg,
  ProfileImg,
  Flex,
  VideoTitle,
  Channel,
  CountItem,
  StyledLink,
  Text,
  VideoCardItem,
} from './styledComponents'

const VideoCard = props => {
  const {videoItem} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoItem
  const date = formatDistanceToNow(new Date(publishedAt))
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <StyledLink to={`/videos/${id}`}>
            <VideoCardItem>
              <VideoImg src={thumbnailUrl} alt="video thumbnail" />
              <Flex>
                <ProfileImg src={channel.profileImageUrl} alt="channel logo" />
                <Text isDark={isDark}>
                  <VideoTitle>{title}</VideoTitle>
                  <Channel>{channel.name}</Channel>
                  <CountItem>
                    {viewCount} &middot; {date}
                  </CountItem>
                </Text>
              </Flex>
            </VideoCardItem>
          </StyledLink>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoCard
