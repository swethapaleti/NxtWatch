/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Sider = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDark ? 'black' : 'white')};
    min-height: 80vh;
    width: 24%;
  }
`
export const SocialIcon = styled.img`
  width: 30px;
  margin-right: 10px;
`

export const Contact = styled.p`
  font-size: 21px;
  font-weight: 600;
  color: ${props => (props.isDark ? 'white' : '#424242')};
`

export const SideContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
export const Item = styled.li`
  padding-left: 10px;
  background-color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.active ? (props.isDark ? '#383838' : '#cccccc') : ''};
  color: ${props => (props.active ? 'red' : props.isDark ? 'white' : 'black')};
  display: flex;
  align-items: center;
`
export const Title = styled.p`
  color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.isDark ? 'white' : 'black'};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  padding-left: 10px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
export const ContactCard = styled.div`
  padding-left: 10px;
`
export const Text = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
`
