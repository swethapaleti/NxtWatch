import styled from 'styled-components'

export const TrendingContainer = styled.ul`
  width: 100%;
  @media screen and (min-width: 768px) {
    list-style-type: none;
    padding-left: 0px;
    width: 80%;
    min-height: 100vh;
    background-color: ${props => (props.isDark ? 'black' : 'white')};
    margin-left: 10px;
  }
`

export const Flex = styled.div`
  display: flex;
`

export const ContainerDiv = styled.div`
  background-color: ${props => (props.isDark ? 'black' : 'white')};
`

export const Images = styled.img`
  width: '500px';
`

export const MainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : 'white')};
`
