import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import AppContext from '../../context/AppContext'
import {
  LoginDiv,
  FormStyle,
  Image,
  Label,
  LabelContainer,
  LabelContainerPass,
  LabelPass,
  Input,
  LoginBtn,
  Error,
  UserTag,
} from './styledComponents'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    errMsg: '',
    isPwdVisible: false,
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    }
    try {
      const response = await fetch('https://apis.ccbp.in/login', options)
      const data = await response.json()
      if (response.ok === true) {
        const jwtToken = data.jwt_token
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        const {history} = this.props
        history.replace('/')
      } else {
        this.setState({
          errMsg: data.error_msg,
        })
      }
    } catch (e) {
      this.setState({
        errMsg: e.message,
      })
    }
  }

  userInput = event => {
    this.setState({
      username: event.target.value,
    })
  }

  passwordInput = event => {
    this.setState({
      password: event.target.value,
    })
  }

  showPassword = () => {
    const {isPwdVisible} = this.state
    this.setState({isPwdVisible: !isPwdVisible})
  }

  render() {
    const {username, password, isPwdVisible, errMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginDiv isDark={isDark}>
              <FormStyle isDark={isDark} onSubmit={this.submitForm}>
                <Image
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <LabelContainer>
                  <Label isDark={isDark} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    isDark={isDark}
                    id="username"
                    onChange={this.userInput}
                    value={username}
                    placeholder="NAME"
                  />
                </LabelContainer>
                <LabelContainer>
                  <Label isDark={isDark} htmlFor="password">
                    PASSWORD
                  </Label>
                  <Input
                    id="password"
                    isDark={isDark}
                    onChange={this.passwordInput}
                    value={password}
                    placeholder="PASSWORD"
                    type={isPwdVisible ? 'text' : 'password'}
                  />
                </LabelContainer>
                <LabelContainerPass>
                  <input
                    id="passwordShow"
                    onChange={this.showPassword}
                    type="checkbox"
                  />
                  <LabelPass isDark={isDark} htmlFor="passwordShow">
                    Show Password
                  </LabelPass>
                </LabelContainerPass>
                <LoginBtn type="submit">Login</LoginBtn>
                {errMsg && <Error>*{errMsg}</Error>}
              </FormStyle>
              <UserTag isDark={isDark}>
                *User credentials : Username : rahul , Password : rahul@2021
              </UserTag>
            </LoginDiv>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Login
