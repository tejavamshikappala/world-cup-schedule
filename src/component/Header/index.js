import React from 'react'

import {Link} from 'react-router-dom'

import {gsap} from 'gsap'

import ThemeContext from '../../Context'

import './index.css'

const {useEffect, useRef} = React

const Header = () => {
  const boxRef = useRef()
  const menuRef = useRef()
  useEffect(() => {
    const tl = gsap.timeline()

    tl.from('.HeaderOne div,.HeaderOne h3,.HeaderOne .for-Link1', {
      y: -60,
      duration: 1,

      opacity: -1,
      stagger: 0.2,
    })
  }, [])
  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme, onChanging} = value
        console.log(activeTheme)

        const clickingForLight = () => {
          onChanging('Light')
        }
        const clickingForDark = () => {
          onChanging('Dark')
        }

        const trueValue = activeTheme === 'Light'
        const background = trueValue ? 'white' : 'black'
        const forLink = trueValue ? 'white1' : 'black1'
        const forLogo = trueValue ? (
          <img
            src="https://i.pinimg.com/236x/a7/b8/39/a7b83974b07520de41e0238295b2337f.jpg"
            className="for-logo"
            alt="whiteImage"
          />
        ) : (
          <img
            src="https://i.pinimg.com/236x/0f/a7/fe/0fa7fe5b80843d53decad4408ff70da1.jpg"
            className="for-logo-1"
            alt="blackImage"
          />
        )
        const HomeLogo = trueValue ? (
          <img
            src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402095/home_a5hwsf.png"
            className="forHomeImage1"
            alt="darkHome"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402097/white-home_dvgzpo.png"
            className="forHomeImage"
            alt="whiteHome"
          />
        )
        const MatchesList = trueValue ? (
          <img
            src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402095/elements_gngm2g.png"
            className="forHomeImage1"
            alt="MatchesBlack"
          />
        ) : (
          <img
            src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402095/elements_1_z32y2y.png"
            alt="MatchesWhite"
            className="forHomeImage"
          />
        )

        const buttonElement = trueValue ? (
          <button type="button" className="forMode" onClick={clickingForDark}>
            <img
              src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402097/sun_esiref.png"
              alt="mode"
              className="mode-imgDark"
            />
          </button>
        ) : (
          <button type="button" className="forMode" onClick={clickingForLight}>
            <img
              src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/light_qc1fa3.png"
              alt="mode"
              className="mode-img"
            />
          </button>
        )

        return (
          <div className={`HeaderOne ${background}`} ref={boxRef}>
            <div className="div-row">
              {forLogo}
              <h1>WorldCup</h1>
            </div>

            <div className="menu" ref={menuRef}>
              {buttonElement}

              <Link to="/" className={`for-Link ${forLink}`}>
                {' '}
                <h3> Home</h3>
              </Link>
              <Link to="/price" className={`for-Link ${forLink}`}>
                {' '}
                <h3> Matches</h3>
              </Link>
              <Link to="/" className={`for-Link1 ${forLink}`}>
                {' '}
                {HomeLogo}
              </Link>
              <Link to="/price" className={`for-Link1 ${forLink}`}>
                {' '}
                {MatchesList}{' '}
              </Link>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Header
