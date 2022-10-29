/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ebebeb')};
  width: 100%;
`
export const MainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ebebeb')};
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContainerFlex = styled.div`
  display: flex;
`

export const Title = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`

export const Btn = styled.button`
  background-color: transparent;
  border: 0px;
  // eslint-disable-next-line no-nested-ternary
  color: ${props =>
    props.like ? '#2563eb' : props.isDark ? 'white' : '#64748b'};
`

export const BtnContainer = styled.div`
  display: flex;
`
export const Border = styled.hr`
  border: 1px solid ${props => (props.isDark ? 'white' : '#cbd5e1')};
  width: 100%;
`

export const Image = styled.img`
  margin-right: 20px;
  height: 60px;
`

export const Text = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const SubText = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin: 0px;
`

export const PlayerDiv = styled.div`
  width: 100%;
`
export const Failed = styled.img`
  width: 300px;
`

export const Load = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`
