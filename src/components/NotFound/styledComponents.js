import styled from 'styled-components'

export const TrendingContainer = styled.div`
  width: 80%;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Flex = styled.div`
  display: flex;
`

export const Image = styled.img`
  width: 400px;
`

export const Text = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const Heading = styled.h1`
  color: ${props => (props.isDark ? 'white' : 'black')};
`
