import React from 'react';
import Amenities from './Amenities.jsx';
import HighlightsContainer from './HighlightsContainer.jsx';
import './stylesheet.css';
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
    const random = Math.floor(Math.random() * 101)
    const listingId = Number(window.location.pathname.replace(/\//, '')) || random;
    $.ajax({
      url: `http://localhost:3002/listing/${listingId}`,
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
            <i className="fas fa-users"></i><span className='listing-det-numguests'> {listing.numGuests} { listing.numGuests > 1 ? 'guests' : 'guest'}  </span>
            <i className="fas fa-door-open"></i><span className='listing-det-numrooms'> {listing.numRooms} { listing.numRooms > 1 ? 'bedrooms' : 'bedroom'}  </span>
            <i className="glyphicon glyphicon-bed"></i><span className='listing-det-numbeds'> {listing.numBeds} { listing.numBeds > 1 ? 'beds' : 'bed'}  </span>
            <i className="fas fa-bath"></i><span className='listing-det-numbaths'> {listing.numBaths} { listing.numBaths > 1 ? 'baths' : 'bath'}  </span>
          </div>

          <div>

            <HighlightsContainer highlights={listing.highlights}/>
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
                <svg className='up-caret' viewBox="0 0 18 18" role="presentation" ><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" ></path></svg> :
                <svg className='down-caret' viewBox="0 0 18 18" role="presentation" ><path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" ></path></svg>
                }
              <div className='contact-host'>Contact host</div>        
            </div>

            <Amenities amenities={listing.amenities} coreAmenities={listing.coreAmenities}/>

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