import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => (
          <Tab selectTabHandler={props.selectHandler}
          selectedTab={props.selectedTab}
          tab={tab} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectTabHandler: PropTypes.func,
  tabs: PropTypes.array
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
 