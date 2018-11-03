import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Amenities from '../src/Amenities.jsx';



describe ('Amenities', () => {

  const coreAmenities =[1, 2, 3, 4, 5, 6];
  const amenities = [1, 2, 4, 5, 7, 8, 11, 12, 15, 16, 17, 20, 21, 22, 24, 26, 27, 29]

  it ('renders a single <Amenities /> component', () => {
    const w = mount(<Amenities amenities={amenities} coreAmenities={coreAmenities} />)
    console.log(w)

  })
})