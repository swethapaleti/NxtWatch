import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetails from './components/VideoDetails'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'
import AppContext from './context/AppContext'

// Replace your code here

class App extends Component {
  state = {
    isDark: false,
    savedVideos: [],
  }

  toggleTheme = () => {
    const {isDark} = this.state
    this.setState({
      isDark: !isDark,
    })
  }

  addSavedVideo = video => {
    const {savedVideos} = this.state
    this.setState({
      savedVideos: [...savedVideos, video],
    })
  }

  removeSavedVideo = id => {
    const {savedVideos} = this.state
    this.setState({
      savedVideos: savedVideos.filter(each => each.id !== id),
    })
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <AppContext.Provider
        value={{
          isDark,
          savedVideos,
          toggleTheme: this.toggleTheme,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
