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
      url: `http://homesteaddetails-env.sibehmtscu.us-west-2.elasticbeanstalk.com/listing/${listingId}`,
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

            <HighlightsContainer highlights={listing.highlights} hostName={listing.hostName}/>
            
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
              <a className='contact-host' href='#popup2'>Contact host</a>        
              
              <div id="popup2" className="login-overlay">
                <div className="login-popup">
                  <div className='login-popup-close-wrapper'>
                    <a className="login-close" href="#lc">&times;</a>    
                  </div>
                  <div className="login-content">
                    <div className="facebook-signup-div">
                      <button className="facebook-btn">
                        <span>
                        <svg className="facebook-svg" viewBox="0 0 32 32"><path d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78"></path></svg>
                          Continue with Facebook
                        </span>
                      </button>
                    </div>
                    <div className="google-signup-div">
                      <button className="google-btn">
                        <span>
                        <svg viewBox="0 0 18 18" className="google-svg"><g fill="none" fill-rule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path d="M0 0h18v18H0V0z"></path></g></svg>
                          Continue with Google
                        </span>
                      </button>
                    </div>
                    <div className="login-or-div">
                      <span className="login-or-span">or</span>
                    </div>
                    <div className="email-signup-div">
                      <button className="email-btn">
                        <span>
                        <svg viewBox="0 0 24 24" className="email-svg"><path d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z" fill-rule="evenodd"></path></svg>
                          Sign up with Email
                        </span>
                      </button>
                    </div>
                    <div className="above-have-acct">
                      <div className="above-have-acct-brdr"></div>
                    </div>
                    <div className="login-bottom">
                      <span className="have-airbnb-acct">Already have an Airbnb account?</span>
                      <span className="login-login">Log in</span>
                    </div>
                  </div>
                </div>
              </div>
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