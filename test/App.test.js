import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../src/App.jsx';

describe ('App', () => {

  const sampleListing = [
    {
      id: 31,
      type: 'AUTEM',
      title: 'Sapiente qui vero quia error quo.',
      city: 'Stantonhaven',
      numGuests: 1,
      numRooms: 3,
      numBeds: 3,
      numBaths: 1,
      hostImg: 'https://s3-us-west-1.amazonaws.com/hs-ld-host-imgs/m/adult-black-background-businessman-262391.jpg',
      hostName: 'Joanie Jacobs',
      highlights: 'Velit eligendi et. Dolores amet id. Aperiam excepturi quia quidem distinctio aut.',
      lede: 'Repudiandae voluptas vel autem voluptate ipsa facilis. Quas qui minus iste qui ullam ut laudantium laudantium. Quis adipisci impedit placeat est et doloremque autem sunt et. Nostrum perspiciatis explicabo quia ut est mollitia quibusdam.',
      space: 'Sit quas et est impedit itaque. Unde et et veniam aperiam esse et fuga earum. Qui error sunt sit rerum reprehenderit et cumque.',
      guestAccess: 'Officia voluptatem nulla voluptatem et qui error cumque.',
      guestInter: 'Aut expedita occaecati magni molestiae dolorem dolorem occaecati sed quibusdam.',
      otherNotes: 'Et maiores commodi qui ea aut minima quibusdam. Enim et dolores aspernatur quo eos et. Natus nostrum occaecati distinctio est.',
      coreAmenities: [
        3, 8, 9, 2, 6, 7,
      ],
      amenities: [
        1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29,
      ],
    },
  ];

  it ('should display "Loading..." before a listing is retrieved from the database', () => {
    const w = mount(<App />);
    expect(w.text()).toEqual('Loading...')
  })

  it ('should not display additional listing detail on initial load', () => {
    const w = mount(<App />);
    w.setState({
      listing: sampleListing[0],
      infoHidden: true,
    });
    expect(w.exists('.main-info-wrapper')).toEqual(false);
  });

  it ('should display additional listing detail when "Read more about the space" is clicked', () => {
    const w = mount(<App />);
    w.setState({
      listing: sampleListing[0],
      infoHidden: true,
    });
    w.find('.hide-show-space').simulate('click');
    expect(w.exists('.main-info-wrapper')).toEqual(true);
  });

  it ('should hide additional listing detail when "Hide" is clicked', () => {
    const w = mount(<App />);
    w.setState({
      listing: sampleListing[0],
      infoHidden: true,
    });
    w.find('.hide-show-space').simulate('click');
    w.find('.hide-show-space').simulate('click');
    expect(w.exists('.main-info-wrapper')).toEqual(false);
  });

  it ('should display correct number of "bed/beds" depending on number of beds', () => {
    const w = mount(<App />);
    w.setState({
      listing: sampleListing[0],
      infoHidden: true,
    });
    expect(w.find('.listing-det-numbeds').text()).toEqual(' 3 beds  ');
  });

  it ('should pass amenities down to Amenities component props', () => {
    const w = mount(<App />);
    w.setState({
      listing: sampleListing[0],
      infoHidden: true,
    });
    expect(w.find('Amenities').prop('amenities')).toEqual(sampleListing[0].amenities)
  });
    
})