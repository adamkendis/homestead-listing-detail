import React from 'react';

class Highlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voted: false
    };
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
  }

  handleHelpfulClick() {
    this.setState(function(prevState) {
      return {voted: !prevState.infoHidden}
    });
  }

  render() {

    const highlights = {
      1: {
        type: "Great location",
        text: "95% of recent guests gave this home's location a 5-star rating."
      },
      2: {
        type: "Great check-in experience",
        text: "100% of recent guests gave this home's check-in process a 5-star rating."
      },
      3: {
        type: "Sparkling clean",
        text: "13 recent guests have said that this home was sparkling clean."
      },
      4: {
        type: `${this.props.hostName} is a Superhost`,
        text: "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests."
      }, 
      5: {
        type: "Self check-in",
        text: "Easily check yourself in with the keypad."
      }
    }

    return (
      <div>
        <span className="highlight-type">{highlights[this.props.highlight].type}</span>
        <span> · </span>
        <span className='listing-det-highlights'>{highlights[this.props.highlight].text}</span>
        {
          !this.state.voted ? 
          <div className="highlights-helpful-container">
            <span className="highlights-helpful" onClick={() => this.handleHelpfulClick()}>
              <span>Helpful </span>
              <svg className='thumbs-up' viewBox="0 0 16 16">
              <path className='thumbs-up' d="m8.37 1c-.34 0-.53.43-.64.79l-.04.17c-.17.74-.56 2.47-3.76 3.58-1.97.68-2.93 2.31-2.93 4.96 0 1.68.56 4.5 4.3 4.5h6.2c.3 0 1-.06 1-.63 0-.41-.26-.63-.5-.63a.5.5 0 1 1 0-1c .92 0 1-.31 1-.63 0-.52-.38-.61-.54-.63a.5.5 0 0 1 -.46-.52.5.5 0 0 1 .5-.48c1 0 1-.41 1-.63s0-.62-1-.62a.5.5 0 1 1 0-1c1 0 1-.47 1-.63 0-.58-.77-.63-1-.63h-4.5a1 1 0 0 1 -.83-1.56c.05-.07.16-.19.31-.35.34-.35.92-.93 1.21-1.58.24-.52.35-1.25.28-1.78 0-.01-.12-.74-.62-.74m3.15 15.04h-6.2c-3.32 0-5.3-2.06-5.3-5.5 0-3.09 1.21-5.08 3.61-5.91 2.67-.93 2.97-2.23 3.11-2.86.02-.08.04-.16.05-.22.37-1.31 1.16-1.51 1.6-1.51 1.02 0 1.52.96 1.61 1.61.09.71-.06 1.64-.37 2.32-.37.81-1.02 1.47-1.41 1.86-.09.1-.17.17-.2.21h4.5c1.2 0 2 .65 2 1.63 0 .46-.16.84-.45 1.11.39.37.45.86.45 1.14 0 .34-.09.98-.74 1.35.15.23.24.53.24.9 0 .41-.12 1.01-.74 1.36.15.26.24.56.24.89 0 .97-.8 1.63-2 1.63" fill-rule="evenodd"></path>
              </svg>
            </span>
            <span> · </span>
            <span className="highlights-not-helpful" onClick={() => this.handleHelpfulClick()}>Not helpful</span>
          </div> :
          <div className="highlights-helpful-container">
            <span className="highlights-thanks">Thanks for your feedback.</span>
          </div>
        }
      </div>
    )
  }
}

export default Highlight;
