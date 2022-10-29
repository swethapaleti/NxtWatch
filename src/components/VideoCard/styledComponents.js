import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 306px;
    margin-bottom: 10px;
  }
`

export const ProfileImg = styled.img`
  height: 50px;
`
export const Flex = styled.div`
  display: flex;
  width: 306px;
`
export const VideoTitle = styled.p`
  margin: 0px;
`
export const Channel = styled.p`
  font-size: 14px;
  margin-top: 6px;
  padding: 0px;
`
export const CountItem = styled.p`
  font-size: 12px;
  padding: 0px;
  margin: 0px;
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const VideoCardItem = styled.div`
  margin: 10px;
`
