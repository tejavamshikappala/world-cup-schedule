import {Link} from 'react-router-dom'

import React from 'react'

import {gsap} from 'gsap'

import ThemeContext from '../../Context'

import './index.css'

const {useEffect} = React
const NotFound = () => {
  const timeLineEle = gsap.timeline()
  useEffect(() => {
    timeLineEle.from('.fff', {
      y: -200,
      duration: 1.5,
      opacity: -4,
    })
    timeLineEle.from('.forImageNotFound', {
      scale: 0,
      repeat: -1,
      yoyo: true,
      duration: 1.6,
      scrub: 2,
    })
  })

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value
        const backgroundForNotFound =
          activeTheme === 'Light' ? 'whiteBackground' : 'blackBackground'
        const buttonBackgroundNot =
          activeTheme === 'Light' ? 'forButtonWhite' : 'forButtonBlack'

        return (
          <div className={`outer-one-class ${backgroundForNotFound}`}>
            <img
              src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402095/5203299_lvmzjw.jpg"
              className="forImageNotFound"
              alt="notFound"
            />
            <div className="fff">
              {' '}
              <Link to="/" className={buttonBackgroundNot}>
                Home
              </Link>{' '}
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default NotFound
