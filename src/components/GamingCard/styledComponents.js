import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingItems = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const StyleLink = styled(Link)`
  text-decoration: none;
`

export const Image = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`
export const Text = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const TextContainer = styled.p`
  width: 150px;
`
