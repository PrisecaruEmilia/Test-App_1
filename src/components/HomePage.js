import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import HomeNavBar from './HomeNavBar';
export class HomePage extends Component {
  render() {
    return (
      <>
        {/* <HomeHeader /> */}
        <HomeNavBar />
        <div style={{ marginTop: '70px' }}>Some context</div>
      </>
    );
  }
}

export default HomePage;
