import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => (
          <Tab selectHandler={props.selectHandler}
          selectedTab={props.selectedTab}
          tab={tab} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectHandler: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.string)
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
 