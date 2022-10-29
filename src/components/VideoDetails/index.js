import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import SideBar from '../SideBar'
import AppContext from '../../context/AppContext'
import {
  VideoDetailsContainer,
  Flex,
  Title,
  BtnContainer,
  Btn,
  Border,
  Image,
  Text,
  SubText,
  ContainerFlex,
  Failed,
  Load,
  MainContainer,
} from './styledComponents'

import Header from '../Header'

class VideoDetails extends Component {
  state = {
    videoItem: {},
    phase: 'loading',
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoItem()
  }

  getVideoItem = async () => {
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
    const {match} = this.props
    const {params} = match
    const {id} = params
    try {
      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
      const data = await response.json()
      if (response.ok === true) {
        const videoDetails = data.video_details
        const formattedData = {
          id: videoDetails.id,
          title: videoDetails.title,
          videoUrl: videoDetails.video_url,
          thumbnailUrl: videoDetails.thumbnail_url,
          channel: {
            name: videoDetails.channel.name,
            profileImageUrl: videoDetails.channel.profile_image_url,
            subscriberCount: videoDetails.channel.subscriber_count,
          },
          viewCount: videoDetails.view_count,
          publishedAt: videoDetails.published_at,
          description: videoDetails.description,
        }
        this.setState({
          phase: 'success',
          videoItem: formattedData,
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

  renderVideoItem = () => {
    const {phase} = this.state
    switch (phase) {
      case 'success':
        return this.renderVideoSuccess()
      case 'failure':
        return this.renderVideoFailure()
      case 'loading':
        return this.renderVideoLoading()
      default:
        return null
    }
  }

  likeBtn = () => {
    const {like} = this.state
    this.setState({
      like: !like,
      dislike: like,
    })
  }

  dislikeBtn = () => {
    const {dislike} = this.state
    this.setState({
      dislike: !dislike,
      like: dislike,
    })
  }

  renderVideoSuccess = () => {
    const {videoItem, like, dislike} = this.state
    const {
      videoUrl,
      title,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoItem
    return (
      <AppContext.Consumer>
        {value => {
          const {addSavedVideo, removeSavedVideo, savedVideos, isDark} = value
          const isVideoSaved = savedVideos.some(
            each => each.id === videoItem.id,
          )
          const savedVideo = () => {
            addSavedVideo(videoItem)
          }
          const removeVideo = () => {
            removeSavedVideo(videoItem.id)
          }
          return (
            <VideoDetailsContainer isDark={isDark}>
              <ReactPlayer width="100%" url={videoUrl} />
              <Title isDark={isDark}>{title}</Title>
              <Flex>
                <p>
                  <SubText isDark={isDark}>{viewCount} views</SubText>
                  &nbsp;&middot;&nbsp;
                  <SubText isDark={isDark}>
                    {formatDistanceToNow(new Date(publishedAt))}
                  </SubText>
                </p>
                <BtnContainer>
                  <Btn
                    like={like}
                    isDark={isDark}
                    onClick={this.likeBtn}
                    type="button"
                  >
                    <BiLike color={like ? '#2563eb' : '#64748b'} /> Like
                  </Btn>
                  <Btn
                    like={dislike}
                    isDark={isDark}
                    onClick={this.dislikeBtn}
                    type="button"
                  >
                    <BiDislike color={dislike ? '#2563eb' : '#64748b'} />{' '}
                    Dislike
                  </Btn>
                  {isVideoSaved ? (
                    <Btn
                      like={isVideoSaved}
                      isDark={isDark}
                      onClick={removeVideo}
                      type="button"
                    >
                      <MdPlaylistAdd /> Saved
                    </Btn>
                  ) : (
                    <Btn
                      like={isVideoSaved}
                      isDark={isDark}
                      onClick={savedVideo}
                      type="button"
                    >
                      <MdPlaylistAdd /> Save
                    </Btn>
                  )}
                </BtnContainer>
              </Flex>
              <Border isDark={isDark} />
              <ContainerFlex>
                <Image src={channel.profileImageUrl} alt="channel logo" />
                <div>
                  <Text isDark={isDark}>{channel.name}</Text>
                  <Text isDark={isDark}>
                    {channel.subscriberCount} subscribers
                  </Text>
                  <Text isDark={isDark}>{description}</Text>
                </div>
              </ContainerFlex>
            </VideoDetailsContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }

  renderVideoFailure = () => (
    <div>
      <Failed
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something went wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <button onClick={this.getVideoItem} type="button">
        Retry
      </button>
    </div>
  )

  renderVideoLoading = () => (
    <Load data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </Load>
  )

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <MainContainer data-testid="videoItemDetails" isDark={isDark}>
              <Header />
              <ContainerFlex>
                <SideBar />
                {this.renderVideoItem()}
              </ContainerFlex>
            </MainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoDetails
