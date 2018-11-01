import React from 'react';
const $ = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: undefined
    };
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    $.ajax({
      url: '/listing-details/6',
      type: 'GET',
      contentType: 'application/json',
      success: (listing) => {
        this.setState({
          listing: listing[0]
        })
      }
    });
  }

  render() {
    if (this.state.listing) {
      const listing = this.state.listing;
      return (
        <div>
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
            <div style={{border: "1px solid black"}}>
              <h6>HOME HIGHLIGHTS</h6>
              <div className='listing-det-highlights'>{listing.highlights}</div>
              <span>Helpful ^ - Not helpful</span>
            </div>

            <div className='listing-det-lede'>{listing.lede}</div>

            <div>
              <h5>The space</h5>
              <div className='listing-det-space'>{listing.space}</div>
              <h5>Guest access</h5>
              <div className='listing-det-guestaccess'>{listing.guestAccess}</div>
              <h5>Interaction with guests</h5>
              <div className='listing-det-guestinter'>{listing.guestInter}</div>
              <h5>Other things to note</h5>
              <div className='listing-det-othernotes'>{listing.otherNotes}</div>
            </div>

            <div>Hide ^</div>
            <div>Contact host</div>

            <div style={{borderTop: "1px solid black", borderBottom: "1px solid black"}}>
              <h5>Amenities</h5>

              <div>Show all 35 amenities</div>
            </div>

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