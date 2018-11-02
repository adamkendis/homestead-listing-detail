import React from 'react';
import Amenities from './Amenities.jsx';
const $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: undefined,
      infoHidden: true
    };

    this.handleClickHideInfo.bind(this);
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    $.ajax({
      url: '/listing-details/25',
      type: 'GET',
      contentType: 'application/json',
      success: (listing) => {
        this.setState({
          listing: listing[0]
        })
      }
    });
  }

  handleClickHideInfo() {
    this.setState(function(prevState) {
      return {infoHidden: !prevState.infoHidden}
    });
  }

  handleClickAmenities() {

  }

  render() {
    if (this.state.listing) {
      const listing = this.state.listing;
      return (
        <div className="module-wrapper">
          <div className='listing-det-top-container'>
            <div className='listing-det-top-wrapper1'>
              <span className='listing-det-type' >{listing.type}</span>
              <h3 className='listing-det-title' >{listing.title}</h3>
              <span className='listing-det-city'>{listing.city}</span>
            </div>
            <div className='listing-det-top-wrapper2'>
              <img className='listing-det-host-img' src={listing.hostImg}/>
              <div className='listing-det-host-name'>{listing.hostName}</div>
            </div>
          </div>

          <div className='listing-det-nums'>
            <i class="fas fa-users"></i><span className='listing-det-numguests'> {listing.numGuests} { listing.numGuests > 1 ? 'guests' : 'guest'}  </span>
            <i class="fas fa-door-open"></i><span className='listing-det-numrooms'> {listing.numRooms} { listing.numRooms > 1 ? 'bedrooms' : 'bedroom'}  </span>
            <i class="glyphicon glyphicon-bed"></i><span className='listing-det-numbeds'> {listing.numBeds} { listing.numBeds > 1 ? 'beds' : 'bed'}  </span>
            <i class="fas fa-bath"></i><span className='listing-det-numbaths'> {listing.numBaths} { listing.numBaths > 1 ? 'baths' : 'bath'}  </span>
          </div>

          <div>
            <div className='listing-det-highlights-container'>
              <h6 className="home-highlights-title">HOME HIGHLIGHTS</h6>
              <span className="highlight-type">Sparkling clean</span>
              <span> · </span>
              <span className='listing-det-highlights'>{listing.highlights}</span>
              <div className="highlights-helpful-container">
                <span className="highlights-helpful">
                  <span>Helpful </span>
                  <svg className='thumbs-up' viewBox="0 0 16 16">
                  <path className='thumbs-up' d="m8.37 1c-.34 0-.53.43-.64.79l-.04.17c-.17.74-.56 2.47-3.76 3.58-1.97.68-2.93 2.31-2.93 4.96 0 1.68.56 4.5 4.3 4.5h6.2c.3 0 1-.06 1-.63 0-.41-.26-.63-.5-.63a.5.5 0 1 1 0-1c .92 0 1-.31 1-.63 0-.52-.38-.61-.54-.63a.5.5 0 0 1 -.46-.52.5.5 0 0 1 .5-.48c1 0 1-.41 1-.63s0-.62-1-.62a.5.5 0 1 1 0-1c1 0 1-.47 1-.63 0-.58-.77-.63-1-.63h-4.5a1 1 0 0 1 -.83-1.56c.05-.07.16-.19.31-.35.34-.35.92-.93 1.21-1.58.24-.52.35-1.25.28-1.78 0-.01-.12-.74-.62-.74m3.15 15.04h-6.2c-3.32 0-5.3-2.06-5.3-5.5 0-3.09 1.21-5.08 3.61-5.91 2.67-.93 2.97-2.23 3.11-2.86.02-.08.04-.16.05-.22.37-1.31 1.16-1.51 1.6-1.51 1.02 0 1.52.96 1.61 1.61.09.71-.06 1.64-.37 2.32-.37.81-1.02 1.47-1.41 1.86-.09.1-.17.17-.2.21h4.5c1.2 0 2 .65 2 1.63 0 .46-.16.84-.45 1.11.39.37.45.86.45 1.14 0 .34-.09.98-.74 1.35.15.23.24.53.24.9 0 .41-.12 1.01-.74 1.36.15.26.24.56.24.89 0 .97-.8 1.63-2 1.63"></path>
                  </svg>
                </span>
                <span> · </span>
                <span className="highlights-not-helpful">Not helpful</span>
              </div>
            </div>

            <div className='listing-det-lede'>{listing.lede}</div>

            { this.state.infoHidden ? 
                null : 
                <div className='main-info-wrapper'>
                  <h5>The space</h5>
                  <div className='listing-det-space'>{listing.space}</div>
                  <h5>Guest access</h5>
                  <div className='listing-det-guestaccess'>{listing.guestAccess}</div>
                  <h5>Interaction with guests</h5>
                  <div className='listing-det-guestinter'>{listing.guestInter}</div>
                  <h5>Other things to note</h5>
                  <div className='listing-det-othernotes'>{listing.otherNotes}</div>
                </div>          
            }

            <div className='hide-info-host-contact-wrapper' >
              <div className='hide-show-space' onClick={() => this.handleClickHideInfo()}>
                { this.state.infoHidden ? 
                  "Read more about the space" :
                  "Hide" }
              </div>
                { this.state.infoHidden ? 
                <svg className='up-caret' viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" ><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fill-rule="evenodd"></path></svg> :
                <svg className='down-caret' viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" ><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fill-rule="evenodd"></path></svg>
                }
              <div className='contact-host'>Contact host</div>        
            </div>

            <Amenities amenities={listing.amenities}/>

            <div style={{borderBottom: "1px solid black"}}>
              <h5>Sleeping Arrangements</h5>

              <div><bold>Bedroom 1</bold></div>
              <div>1 queen bed</div>
            </div>

          </div>
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

export default App;