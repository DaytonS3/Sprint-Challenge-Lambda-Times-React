import React from 'react';
import propTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      //console.log(props)
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'Tab' }
      onClick={() => {
        props.selectHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: propTypes.string
}

export default Tab;
