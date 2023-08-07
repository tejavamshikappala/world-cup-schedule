import {Component} from 'react'

import DetailCard from '../DetailsCard'
import NoResults from '../NoResults'

import ThemeContext from '../../Context'

import './index.css'

class SchedulePage extends Component {
  state = {
    value1: [],
    searchInput: '',
    location: '',
    homeTeam: '',
    show: false,
    forButtonStyle: 'for-filter-button',
    foractiveStyle: 'for-Active',
    ActiveFilter: false,
    ActiveSearch: false,
  }

  componentDidMount() {
    this.getJson()
  }

  onClicking = () => {
    this.setState(prev => ({show: !prev.show, searchInput: ''}))
  }

  onSetting = event => {
    const selectInput = event.target.value
    this.setState({location: selectInput, ActiveFilter: false})
  }

  onSetting1 = event => {
    const selectInput1 = event.target.value
    this.setState({homeTeam: selectInput1, ActiveFilter: false})
  }

  onChanging = event => {
    const inputValue = event.target.value

    this.setState({
      searchInput: inputValue,
      /* placeholder: '', */
      ActiveFilter: false,
      ActiveSearch: !false,
      show: false,
    })
  }

  onSubmitting = event => {
    event.preventDefault()
    this.setState({ActiveFilter: !false, ActiveSearch: false, searchInput: ''})
  }

  getJson = async () => {
    const data = await fetch('./matchSchedule.json')
    const response = await data.json()

    const FormatedData = response.map(each => ({
      matchNo: each['match-no'],
      date: each.date,
      homeTeam: each['home-team'],
      awayTeam: each['away-team'],
      location: each.location,
    }))
    this.setState({value1: FormatedData})
  }

  clicking = () => {
    this.setState({
      show: false,
      location: '',
      homeTeam: '',
      ActiveFilter: false,
    })
  }

  render() {
    const {
      value1,
      show,
      searchInput,
      ActiveFilter,
      ActiveSearch,
      location,
      homeTeam,
      foractiveStyle,
      forButtonStyle,
    } = this.state
    const forOuter = show ? 'align-without-center' : 'for-schedule-page'
    const forInner = show ? 'filter-width' : 'right-mainPart'
    const filterButton = show ? foractiveStyle : forButtonStyle
    let filteredRes = []

    if (ActiveSearch === true && ActiveFilter === false) {
      filteredRes = value1.filter(
        each =>
          each.homeTeam.toLowerCase().replace(' ', '') ===
            searchInput.toLowerCase() ||
          each.awayTeam.toLowerCase().replace(' ', '') ===
            searchInput.toLowerCase() ||
          each.location.toLowerCase().includes(searchInput.toLowerCase()),
      )
    } else if (ActiveFilter === false && ActiveSearch === false) {
      filteredRes = value1.filter(each => each.homeTeam !== searchInput)
    } else if (
      ActiveSearch === false &&
      ActiveFilter === true &&
      homeTeam !== '' &&
      location !== ''
    ) {
      filteredRes = value1.filter(
        each =>
          (each.awayTeam.toLowerCase().replace(' ', '') ===
            homeTeam.toLowerCase().replace(' ', '') ||
            each.homeTeam.toLowerCase().replace(' ', '') ===
              homeTeam.toLowerCase().replace(' ', '')) &&
          each.location.toLowerCase().replace(' ', '') ===
            location.toLowerCase().replace(' ', ''),
      )
    } else if (
      ActiveSearch === false &&
      ActiveFilter === true &&
      homeTeam === '' &&
      location !== ''
    ) {
      filteredRes = value1.filter(
        each =>
          each.location.toLowerCase().replace(' ', '') ===
          location.toLowerCase().replace(' ', ''),
      )
    } else if (
      ActiveSearch === false &&
      ActiveFilter === true &&
      homeTeam !== '' &&
      location === ''
    ) {
      filteredRes = value1.filter(
        each =>
          each.awayTeam.toLowerCase().replace(' ', '') ===
            homeTeam.toLowerCase().replace(' ', '') ||
          each.homeTeam.toLowerCase().replace(' ', '') ===
            homeTeam.toLowerCase().replace(' ', ''),
      )
    } else if (
      ActiveSearch === false &&
      ActiveFilter === true &&
      homeTeam === '' &&
      location === ''
    ) {
      filteredRes = value1.filter(
        each => each.homeTeam !== homeTeam || each.location !== location,
      )
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          const backgroundSchedule =
            activeTheme === 'Light' ? 'white-schedule' : 'black-schedule'
          const backgroundss =
            activeTheme === 'Light' ? 'bttn-black' : 'btt-white'
          const filterPartClass =
            activeTheme === 'Light' ? 'leftPartTrue' : 'leftPartFalse'
          let Auth
          if (filteredRes.length === 0) {
            Auth = <NoResults />
          } else {
            Auth = filteredRes.map(each => (
              <DetailCard details={each} key={each.matchNo} />
            ))
          }

          return (
            <div className={`${forOuter} ${backgroundSchedule}`}>
              <div className="forRow">
                <button
                  className={`${filterButton} ${backgroundss}`}
                  type="button"
                  onClick={this.onClicking}
                >
                  <img
                    src="https://res.cloudinary.com/du1alk3zd/image/upload/v1691404373/downloadfi_ter_i4wl6c.png"
                    className="filterImg"
                    alt="filterIcon"
                  />
                </button>

                {show && (
                  <div className={`left-filterpart ${filterPartClass}`}>
                    <form onSubmit={this.onSubmitting} className="forForm">
                      <div>
                        {' '}
                        <label htmlFor="country">Country</label>
                        <select
                          id="country"
                          className="forSelect"
                          onChange={this.onSetting1}
                        >
                          <option value="">Select</option>
                          <option value="England">England</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="South Africa">South Africa</option>
                          <option value="India">India</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Australia">Australia</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                        </select>{' '}
                      </div>
                      <div>
                        {' '}
                        <label htmlFor="location">Location</label>
                        <select
                          className="forSelect"
                          id="location"
                          onChange={this.onSetting}
                        >
                          <option value="" selected>
                            Select
                          </option>
                          <option value="Narendra Modi Stadium">
                            Narendra Modi Stadium
                          </option>
                          <option value="Rajiv Gandhi International Stadium">
                            Rajiv Gandhi International Stadium
                          </option>
                          <option value="Himachal Pradesh Cricket Association Stadium">
                            Himachal Pradesh Cricket Association Stadium
                          </option>
                          <option value="Arun Jaitley Stadium">
                            Arun Jaitley Stadium
                          </option>
                          <option value="MA Chidambaram Stadium">
                            MA Chidambaram Stadium
                          </option>
                          <option value="Bharat Ratna Shri Atal Bihari Vajpayee Ekana Crick">
                            Bharat Ratna Shri Atal Bihari Vajpayee Ekana Crick
                          </option>
                          <option value="MCA International Stadium">
                            MCA International Stadium
                          </option>
                          <option value="M Chinnaswamy Stadium">
                            M Chinnaswamy Stadium
                          </option>
                          <option value="Wankhede Stadium">
                            Wankhede Stadium
                          </option>
                          <option value="Eden Gardens">Eden Gardens</option>
                        </select>
                      </div>
                      <div className="for-button-reset-go">
                        <button type="submit" className="for-button">
                          Go
                        </button>
                        <button
                          type="button"
                          className="for-reset"
                          onClick={this.clicking}
                        >
                          Reset
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              <div className={forInner}>
                <input
                  type="search"
                  onChange={this.onChanging}
                  value={searchInput}
                  className="for-input"
                  placeholder="Search Here"
                />
                <ul className="for-ul">{Auth}</ul>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SchedulePage
