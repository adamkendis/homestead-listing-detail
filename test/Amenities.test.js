import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Amenities from '../src/Amenities.jsx';



describe ('Amenities', () => {

  //8 core amenities. Only 6 should render.
  const coreAmenities =[1, 2, 3, 4, 5, 6, 7, 8];
  //18 amenities
  const amenities = [1, 2, 4, 5, 7, 8, 11, 12, 15, 16, 17, 20, 21, 22, 24, 26, 27, 29]

  it ('should render six core amenities', () => {
    const w = mount(<Amenities amenities={amenities} coreAmenities={coreAmenities} />);
    expect(w.find('.am').length).toEqual(6);
  });

  it ('should not display any core amenities after the first six', () => {
    const w = mount(<Amenities amenities={amenities} coreAmenities={coreAmenities} />);
    expect(w.exists('.fa-swimming-pool')).toEqual(false);
  }); 

  it ('should display the correct number of amenities in the popup', () => {
    const w = mount(<Amenities amenities={amenities} coreAmenities={coreAmenities} />);
    w.find('.show-amenities').simulate('click');
    expect(w.find('.amenity').length).toEqual(18)
  });

  it ('should not display amenities not offered', () => {
    const w = mount(<Amenities amenities={amenities} coreAmenities={coreAmenities} />);
    //Smoke detector is amenity 28
    expect(w.contains('Smoke detector')).toEqual(false);
  });

});