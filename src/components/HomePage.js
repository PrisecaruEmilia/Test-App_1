import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import HomeNavBar from './HomeNavBar';
import AdvancedDropDown from './AdvancedDropDown';
export class HomePage extends Component {
  render() {
    return (
      <>
        {/* <HomeHeader /> */}
        {/* <HomeNavBar />
        <div style={{ marginTop: '70px' }}>Some context</div> */}
        <AdvancedDropDown />
      </>
    );
  }
}

export default HomePage;
