import React from 'react';
import Highlight from './Highlight.jsx';

const HighlightsContainer = (props) => {
  const hostName = props.hostName;
  return (
    <div className='listing-det-highlights-container'>
      <h6 className="home-highlights-title">HOME HIGHLIGHTS</h6>
      {props.highlights.map(highlight => {
          return <Highlight highlight={highlight} hostName={hostName} />
        })}
    </div>
  )
};

export default HighlightsContainer;