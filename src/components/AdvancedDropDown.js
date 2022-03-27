import React, { Component } from 'react';

export class AdvancedDropDown extends Component {
  constructor(props) {
    super(props);
  }

  initializeComponent = () => {
    console.log('initializeComponent');
    const drop_btn = document.querySelector('.drop-btn span');
    const tooltip = document.querySelector('.tooltip');
    const menu_wrapper = document.querySelector('.wrapper');
    const menu_bar = document.querySelector('.menu-bar');
    const setting_drop = document.querySelector('.setting-drop');
    const help_drop = document.querySelector('.help-drop');
    const setting_item = document.querySelector('.setting-item');
    const help_item = document.querySelector('.help-item');
    const setting_btn = document.querySelector('.back-setting-btn');
    const help_btn = document.querySelector('.back-help-btn');
    drop_btn.onclick = () => {
      menu_wrapper.classList.toggle('show');
      tooltip.classList.toggle('show');
    };
    setting_item.onclick = () => {
      menu_bar.style.marginLeft = '-400px';
      setTimeout(() => {
        setting_drop.style.display = 'block';
      }, 100);
    };
    help_item.onclick = () => {
      menu_bar.style.marginLeft = '-400px';
      setTimeout(() => {
        help_drop.style.display = 'block';
      }, 100);
    };
    setting_btn.onclick = () => {
      menu_bar.style.marginLeft = '0px';
      setting_drop.style.display = 'none';
    };
    help_btn.onclick = () => {
      help_drop.style.display = 'none';
      menu_bar.style.marginLeft = '0px';
    };
  };

  componentDidMount() {
    this.initializeComponent();
  }

  render() {
    return (
      <div className="bodyOfDropDown">
        <nav>
          <div className="drop-btn">
            Drop down <span className="fas fa-caret-down"></span>
          </div>
          <div className="tooltip"></div>
          <div className="wrapper">
            <ul className="menu-bar">
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-home"></span>
                  </div>
                  Home
                </a>
              </li>
              <li className="setting-item">
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-cog"></span>
                  </div>
                  Settings and privacy <i className="fas fa-angle-right"></i>
                </a>
              </li>
              <li className="help-item">
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-question-circle"></span>
                  </div>
                  Help and support <i className="fas fa-angle-right"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-user"></span>
                  </div>
                  About us
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-comment-alt"></span>
                  </div>
                  Feedback
                </a>
              </li>
            </ul>
            {/* <!-- Settings & privacy Menu-items --> */}
            <ul className="setting-drop">
              <li className="arrow back-setting-btn">
                <span className="fas fa-arrow-left"></span>Settings and privacy
              </li>
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-user"></span>
                  </div>
                  Personal info
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-lock"></span>
                  </div>
                  Password
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-address-book"></span>
                  </div>
                  Activity log
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-globe-asia"></span>
                  </div>
                  Languages
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-sign-out-alt"></span>
                  </div>
                  Log out
                </a>
              </li>
            </ul>
            {/* <!-- Help & support Menu-items --> */}
            <ul className="help-drop">
              <li className="arrow back-help-btn">
                <span className="fas fa-arrow-left"></span>Help & support
              </li>
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-question-circle"></span>
                  </div>
                  Help centre
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-envelope"></span>
                  </div>
                  Support Inbox
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-comment-alt"></span>
                  </div>
                  Send feedback
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="icon">
                    <span className="fas fa-exclamation-circle"></span>
                  </div>
                  Report problem
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default AdvancedDropDown;
