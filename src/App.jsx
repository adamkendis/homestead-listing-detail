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
      url: '/listing-details/7',
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
          <div>
            <span style={{float: "right"}}>
              <img className='listing-det-host-img' style={{height: "55px", width: "55px"}} src={listing.hostImg}/>
              <div className='listing-det-host-name'>{listing.hostName}</div>
            </span>
            <span>
              <span className='listing-det-type' style={{color: "#62564b"}}>{listing.type}</span>
              <h3 className='listing-det-title' >{listing.title}</h3>
            </span>
            <span className='listing-det-city'>{listing.city}</span>

          </div>

          <div>
            <span className='listing-det-numguests'>{listing.numGuests} guests  </span>
            <span className='listing-det-numrooms'>{listing.numRooms} bedrooms  </span>
            <span className='listing-det-numbeds'>{listing.numBeds} beds  </span>
            <span className='listing-det-numbaths'>{listing.numBaths} baths  </span>
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