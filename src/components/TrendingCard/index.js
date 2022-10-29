import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../context/AppContext'
import {
  TrendingItem,
  Text,
  CardImage,
  TextCard,
  TrendLink,
  SpanText,
} from './styledComponents'

const TrendingCard = props => {
  const {trendingItem} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = trendingItem
  const date = formatDistanceToNow(new Date(publishedAt))
  return (
    <AppContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TrendLink to={`/videos/${id}`}>
            <TrendingItem isDark={isDark}>
              <CardImage src={thumbnailUrl} alt="video thumbnail" />
              <TextCard>
                <Text isDark={isDark}>{title}</Text>
                <Text isDark={isDark}>{channel.name}</Text>
                <SpanText isDark={isDark}>{viewCount}</SpanText>
                <SpanText isDark={isDark}>{date}</SpanText>
              </TextCard>
            </TrendingItem>
          </TrendLink>
        )
      }}
    </AppContext.Consumer>
  )
}

export default TrendingCard
