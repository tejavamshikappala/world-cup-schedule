import React from 'react'

import {gsap} from 'gsap'

import ThemeContext from '../../Context'

import './index.css'

const {useEffect} = React
const Home = () => {
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from('h2', {
      x: -400,
      duration: 1.2,
      delay: 0.7,
      opacity: -3,
      stagger: 0.5,
    })
    tl.from('.india,.eng,.aus,.pakis,.new,.ban,.afg,.south,.sri,.nether', {
      scale: 0,
      duration: 0.5,

      opacity: -2,
      stagger: 0.2,
    })
  })

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value
        const backgroundHome =
          activeTheme === 'Light' ? 'whiteHome' : 'blackHome'
        const background1 = activeTheme === 'Light' ? 'white3' : 'black3'

        return (
          <div className={`Outer-Home ${backgroundHome}`}>
            <div>
              <h2>the most awaited</h2>
              <h2>
                <span>Battle</span>
              </h2>
              <h2>is Gonna happen soon...</h2>
            </div>
            <div className="for-image-div">
              {' '}
              <img
                src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/Pngtree_icc_mens_cricket_world_cup_9084479_ptq3ax.png"
                className="fortrophy"
                alt="trophyImg"
              />
            </div>
            <div className="rowInside">
              <img
                src="https://i.pinimg.com/236x/f6/a3/74/f6a3748b7d74f7e7c3c1274a3be51a8f.jpg"
                className={`india ${background1}`}
                alt="india"
              />
              <img
                src="https://i.pinimg.com/236x/d6/ee/79/d6ee79b9e285dc8e7c41cf83b3217cab.jpg"
                className={`eng ${background1}`}
                alt="eng"
              />
              <img
                src="https://wallpapercave.com/dwp1x/wp4899875.jpg"
                alt="Aus"
                className={`aus ${background1}`}
              />
              <img
                src="https://i.pinimg.com/236x/b8/a0/f7/b8a0f7938f7457016f04511e707ddfc1.jpg"
                className={`pakis ${background1}`}
                alt="pakistan"
              />
              <img
                src="https://i.pinimg.com/236x/fc/10/25/fc102518dab21a3421f6732fb057ea40.jpg"
                className={`new ${background1}`}
                alt="newZealand"
              />
              <img
                src="https://i.pinimg.com/236x/e1/08/6d/e1086d2c7a29c2db24e516ff54261244.jpg"
                className={`ban ${background1}`}
                alt="bangladesh"
              />
              <img
                src="https://i.pinimg.com/236x/27/97/a9/2797a98a9ea20e4b76557a19f9396fd1.jpg"
                className={`afg ${background1}`}
                alt="afghanistan"
              />
              <img
                src="https://i.pinimg.com/236x/0f/3c/03/0f3c036dd807831e1809bca0354d1e38.jpg"
                className={`south ${background1}`}
                alt="south-africa"
              />
              <img
                src="https://media.gettyimages.com/id/1478293262/photo/dasun-shanaka-of-sri-lanka-appeals-unsuccessfully-against-will-young-of-new-zealand-during.jpg?s=612x612&w=0&k=20&c=mG2G7Ow-BybW5vlCigebUq4AdHkkAZR47ucbbZFGFnQ="
                className={`sri ${background1}`}
                alt="srilanka"
              />

              <img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322500/322592.png"
                alt="netherlands"
                className={`nether ${background1}`}
              />
            </div>{' '}
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Home
