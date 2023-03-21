import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : 'white')};
  min-height: 100vh;
`

export const VideoContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
    height: 80vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
`

export const Videos = styled.div`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`

export const Flex = styled.div`
  display: flex;
`

export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 20px;
  width: 40%;
  min-width: 200px;
  border: 1px solid #cbd5e1;
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
`
export const Image = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-position: center;
  background-size: cover;
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const Cross = styled.button`
  align-self: flex-start;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`

export const Logo = styled.img`
  width: 160px;
`

export const Btn = styled.button`
  background-color: transparent;
  color: black;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid black;
  width: 120px;
  height: 34px;
`

export const Input = styled.input`
  background-color: transparent;
  border: 0px;
  outline: none;
  color: #7e858e;
  font-size: 14px;
  padding: 6px;
  min-width: 200px;
  width: 350px;
`
