import React from 'react';
import { timingSafeEqual } from 'crypto';

class Amenities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const am = this.props.amenities;
    const amenities = {
      1: <div><i class='am fas fa-wifi'></i> <span>Wifi</span></div >,
      2: <div><i class='am fas fa-tv'></i> <span>Cable TV</span></div>,
      3: <div><i class='am far fa-snowflake'></i> <span>Air conditioning</span></div>,
      4: <div><i class='am fas fa-parking'></i> <span>Free parking</span></div>,
      5: <div><i class='am fas fa-utensils'></i> <span>Kitchen</span></div>,
      6: <div><i class='am fas fa-laptop'></i> <span>Laptop friendly workspace</span></div>,
      7: <div><i class='am fas fa-swimming-pool'></i> <span>Pool</span></div>,
      8: <div><i class='am fas fa-hot-tub'></i> <span>Hot tub</span></div>,
      9: <div><i class='am fas fa-coffee'></i> <span>Breakfast</span></div>,
    };

    return (
      <section className='amenities-wrapper'>
        <h5>Amenities</h5>
        <div className='amenities-left-col'>
          {amenities[am[0]]}
          {amenities[am[1]]}
          {amenities[am[2]]}
        </div>
        <div className='amenities-right-col'>
          {amenities[am[3]]}
          {amenities[am[4]]}
          {amenities[am[6]]}
        </div>
        <div className='show-amenities'>Show all {this.props.amenities.length} amenities</div>
      </section>
    )
  }
}

export default Amenities;