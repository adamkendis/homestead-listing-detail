import React from 'react';
import { timingSafeEqual } from 'crypto';

class Amenities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const am = this.props.coreAmenities;
    const coreAmenities = {
      1: <div><i class='am fas fa-wifi'></i> <span>Wifi</span></div>,
      2: <div><i class='am fas fa-tv'></i> <span>Cable TV</span></div>,
      3: <div><i class='am far fa-snowflake'></i> <span>Air conditioning</span></div>,
      4: <div><i class='am fas fa-parking'></i> <span>Free parking on premises</span></div>,
      5: <div><i class='am fas fa-utensils'></i> <span>Kitchen</span></div>,
      6: <div><i class='am fas fa-laptop'></i> <span>Laptop friendly workspace</span></div>,
      7: <div><i class='am fas fa-swimming-pool'></i> <span>Pool</span></div>,
      8: <div><i class='am fas fa-hot-tub'></i> <span>Hot tub</span></div>,
      9: <div><i class='am fas fa-coffee'></i> <span>Breakfast</span></div>,
    };

    const amenities = {
      1: "Wifi",
      2: "Cable TV",
      3: "Air conditioning",
      4: "Laptop friendly workspace",
      5: "Iron",
      6: "Heating",
      7: "Beach Essentials",
      8: "Hot Water",
      9: "Free parking on premises",
      10: "Hot tub",
      11: "Pool",
      12: "Gym",
      13: "Kitchen",
      14: "Breakfast",
      15: "Coffee maker",
      16: "Microwave",
      17: "Dishes and silverware",
      18: "Refrigerator",
      19: "Long term stays allowed", 
      20: "Luggage dropoff allowed",
      21: "Hangers",
      22: "Hair dryer",
      23: "Shampoo",
      24: "Bed linens",
      25: "Extra pillows and blankets",
      26: "Fire extinguisher",
      27: "Carbon monoxide detector",
      28: "Smoke detector",
      29: "First aid kit"
    }

    return (
      <section className='amenities-wrapper'>
        <h5>Amenities</h5>
        <div className='amenities-left-col'>
          {coreAmenities[am[0]]}
          {coreAmenities[am[1]]}
          {coreAmenities[am[2]]}
        </div>
        <div className='amenities-right-col'>
          {coreAmenities[am[3]]}
          {coreAmenities[am[4]]}
          {coreAmenities[am[5]]}
        </div>

        <div id="popup1" class="amenities-overlay">
          <div class="amenities-popup">
            <div className='popup-close-wrapper'>
              <a class="amenities-close" href="#">&times;</a>    
            </div>
            <h2>Amenities</h2>

            <div class="amenities-content">
              <section className='basic-amenities-container'>
                <div className='amenities-category'>Basic</div>
                {this.props.amenities.map(amenity => {
                  if (amenity < 9) {
                    return <div className='amenity'>{amenities[amenity]}</div>
                  }
                })}
              </section>

              <section className='facils-amenities-container'>
                <div className='amenities-category'>Facilities</div>
                {this.props.amenities.map(amenity => {
                  if (amenity > 8 && amenity < 13) {
                    return <div className='amenity'>{amenities[amenity]}</div>
                  }
                })}
              </section>

              <section className='dining-amenities-container'>
                <div className='amenities-category'>Dining</div>
                {this.props.amenities.map(amenity => {
                  if (amenity > 12 && amenity < 19) {
                    return <div className='amenity'>{amenities[amenity]}</div>
                  }
                })}
              </section>

              <section className='logistics-amenities-container'>
                <div className='amenities-category'>Logistics</div>
                {this.props.amenities.map(amenity => {
                  if (amenity > 18 && amenity < 21) {
                    return <div className='amenity'>{amenities[amenity]}</div>
                  }
                })}
              </section>

              <section className='bedbath-amenities-container'>
                <div className='amenities-category'>Bed and bath</div>
                {this.props.amenities.map(amenity => {
                  if (amenity > 20 && amenity < 26) {
                    return <div className='amenity'>{amenities[amenity]}</div>
                  }
                })}
              </section>

              <section className='safety-amenities-container'>
                <div className='amenities-category'>Safety</div>
                {this.props.amenities.map(amenity => {
                  if (amenity > 25) {
                    return <div className='amenity'>{amenities[amenity]}</div>
                  }
                })}
              </section>

            </div>
          </div>
        </div>

        <a className='show-amenities' href='#popup1'>Show all {this.props.amenities.length} amenities</a>
      </section>
    )
  }
}

export default Amenities;