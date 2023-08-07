import ThemeContext from '../../Context'

import './index.css'

const DetailCard = props => {
  const {details} = props

  const {matchNo, date, location, homeTeam, awayTeam} = details
  let image
  switch (homeTeam) {
    case 'England':
      image = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402095/england_yi2ekm.png"
          alt="england"
        />
      )
      break
    case 'India':
      image = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/india_wj2pgu.png"
          alt="india"
        />
      )
      break
    case 'Bangladesh':
      image = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402094/bangladesh_3371885_m6tobd.png"
          alt="bangladesh"
        />
      )
      break
    case 'Pakistan':
      image = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/pakistan_323352_cm61zk.png"
          alt="pakistan"
        />
      )
      break
    case 'South Africa':
      image = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/south-africa_r04dpn.png"
          alt="South Africa"
        />
      )
      break
    case 'New Zealand':
      image = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/new-zealand_chaaoq.png"
          alt="New Zealand"
        />
      )
      break
    case 'Sri Lanka':
      image = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402097/sri-lanka_bqj7l7.png"
          alt="Sri Lanka"
        />
      )
      break
    case 'Netherlands':
      image = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/netherlands_jqn5fl.png"
          alt="Netherlands"
        />
      )
      break
    case 'Afghanistan':
      image = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402094/afghanistan_qnacld.png"
          alt="Afghanistan"
        />
      )
      break
    case 'Australia':
      image = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402094/australia_ml8csx.png"
          alt="Australia"
        />
      )
      break
    default:
      image = null
  }
  let imageAway
  switch (awayTeam) {
    case 'England':
      imageAway = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402095/england_yi2ekm.png"
          alt="england"
        />
      )
      break
    case 'India':
      imageAway = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/india_wj2pgu.png"
          alt="india"
        />
      )
      break
    case 'Bangladesh':
      imageAway = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402094/bangladesh_3371885_m6tobd.png"
          alt="bangladesh"
        />
      )
      break
    case 'Pakistan':
      imageAway = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/pakistan_323352_cm61zk.png"
          alt="pakistan"
        />
      )
      break
    case 'South Africa':
      imageAway = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/south-africa_r04dpn.png"
          alt="South Africa"
        />
      )
      break
    case 'New Zealand':
      imageAway = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/new-zealand_chaaoq.png"
          alt="New Zealand"
        />
      )
      break
    case 'Sri Lanka':
      imageAway = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402097/sri-lanka_bqj7l7.png"
          alt="Sri Lanka"
        />
      )
      break
    case 'Netherlands':
      imageAway = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402096/netherlands_jqn5fl.png"
          alt="Netherlands"
        />
      )
      break
    case 'Afghanistan':
      imageAway = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402094/afghanistan_qnacld.png"
          alt="Afghanistan"
        />
      )
      break
    case 'Australia':
      imageAway = (
        <img
          src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691402094/australia_ml8csx.png"
          alt="Australia"
        />
      )
      break
    default:
      imageAway = null
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value
        const backGround = activeTheme === 'Light' ? 'whiteOne' : 'BlackOne'
        return (
          <li className="for-Match-card">
            <div className={backGround}>
              <div className="for-match">
                <h4>{`Match: ${matchNo}`}</h4>
              </div>
              <div className="inside-div">
                <div className="for-inner-one">
                  <div className="row-image-team">
                    {image}
                    <h3 className="team">
                      {homeTeam}
                      <span className="for-span-style"> HomeTeam </span>
                    </h3>
                  </div>
                  <div className="row-image-team">
                    {imageAway}
                    <h3 className="team">
                      {awayTeam}
                      <span className="for-span-style"> AwayTeam </span>
                    </h3>
                  </div>
                </div>

                <div className="venue-1">
                  <h2 className="venue-header-1">
                    Venue:<span className="for-location-style">{location}</span>
                  </h2>

                  <h2 className="venue-header-1 date">
                    Date:<span className="for-location-style">{date}</span>
                  </h2>
                </div>
              </div>
            </div>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default DetailCard
