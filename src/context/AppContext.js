import React from 'react'

const AppContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
  savedVideos: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
})

export default AppContext
