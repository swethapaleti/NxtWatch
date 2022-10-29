import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const TrendingItem = styled.li`
  display: flex;
  margin: 20px;
`

export const CardImage = styled.img`
  @media screen and (max-width: 768px) {
    width: 140px;
    height: 200px;
  }
  width: 250px;
`

export const Text = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const TrendLink = styled(Link)`
  text-decoration: none;
`
export const SpanText = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
`
