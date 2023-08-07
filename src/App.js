import {Component} from 'react'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Header from './component/Header'

import SchedulePage from './component/SchedulePage'

import Home from './component/Home'

import ThemeContext from './Context'

import NotFound from './component/NotFound'

import './App.css'

class App extends Component {
  state = {
    activeTheme: 'Light',
  }

  onChanging = value => {
    this.setState({activeTheme: value})
  }

  render() {
    const {activeTheme} = this.state

    return (
      <BrowserRouter>
        <ThemeContext.Provider
          value={{activeTheme, onChanging: this.onChanging}}
        >
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/price" element={<SchedulePage />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
