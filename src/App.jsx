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
          listing: listing
        })
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          <span className='listing-det-type' style={{color: "#62564b"}}>Entire Loft</span>
        </div>

        <div>
          <span style={{float: "right"}}>
            <img className='listing-det-host-img' src='https://placeimg.com/55/55/people'/>
            <div className='listing-det-host-name'>Darrel</div>
          </span>
          <span>
            <h3 className='listing-det-title' >Downtown LA HUGE & FUN Loft (St. V 503)</h3>
          </span>
          <span className='listing-det-city'>Los Angeles</span>

        </div>

        <div>
          <span className='listing-det-numguests'>16 guests  </span>
          <span className='listing-det-numrooms'>2 bedrooms  </span>
          <span className='listing-det-numbeds'>6 beds  </span>
          <span className='listing-det-numbaths'>2 baths  </span>
        </div>

        <div>
          <div style={{border: "1px solid black"}}>
            <h6>HOME HIGHLIGHTS</h6>
            <div className='listing-det-highlights'>Self check-in - You can easily check in with the doorman</div>
            <span>Helpful ^ - Not helpful</span>
          </div>

          <div className='listing-det-lede'>Huge (Phone number hidden by Airbnb) sqft loft in the heart of downtown LA. 2 big private bedrooms, 3 queen beds, 3 twins, big couch and roll aways for sleeping lots of extra people comfortably. Pool table & games. </div>

          <div>
            <h5>The space</h5>
            <div className='listing-det-space'>ATTN: PARKING: Read all listing details for further information about parking. A Huge 2200 sqft loft in the heart of downtown LA. 2 big private bedrooms, 3 queen bed, 3 twins, 1 couch, 2 roll always for sleeping lots of extra people comfortably. Best area of downtown. Located in a very unique ally called St.Vincent court. Great for fun lovers.</div>
            <h5>Guest access</h5>
            <div className='listing-det-guestaccess'>2 elevators in building. Private parking garage next to building. Unit has a secured parking structure next door.</div>
            <h5>Interaction with guests</h5>
            <div className='listing-det-guestinter'>I'm here to make your stay enjoyable.This is an entire home rental. I do not occupy the unit with you.</div>
            <h5>Other things to note</h5>
            <div className='listing-det-othernotes'>Available for small parties but no huge events. Meetings and small gatherings are ok. Different rates apply.5 parking passes are available for $25 each per day (this includes in and out privileges) You will want these as parking is tough Downtown. Let me know in advance because my other tenants request them.</div>
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
  }
}

export default App;