import React, { Component } from 'react';
import logo from '../assets/images/home/logo.png';
import img1 from '../assets/images/home/img1.png';
import img2 from '../assets/images/home/img2.png';
import img3 from '../assets/images/home/img3.png';
import thumb1 from '../assets/images/home/thumb1.png';
import thumb2 from '../assets/images/home/thumb2.png';
import thumb3 from '../assets/images/home/thumb3.png';
import facebook from '../assets/images/home/facebook.png';
import twitter from '../assets/images/home/twitter.png';
import instagram from '../assets/images/home/instagram.png';
export class HomeHeader extends Component {
  constructor(props) {
    super(props);
  }

  imgSlider = (anything, color) => {
    console.log(anything);
    document.querySelector('.starbucks').src = anything;
    const circle = document.querySelector('.circle');
    circle.style.background = color;
  };

  render() {
    return (
      <div>
        <section>
          <div className="circle"></div>
          <header>
            <a href="#">
              <img src={logo} alt="logo" className="logo" />
            </a>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">What's new</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </header>
          <div className="content">
            <div className="textBox">
              <h2>
                It's not just Coffee
                <br />
                It's <span>Starbucks</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                voluptatibus perferendis nesciunt non doloribus perspiciatis
                veritatis harum corrupti eius commodi!
              </p>
              <a href="#">Learn More</a>
            </div>
            <div className="imgBox">
              <img src={img1} alt={img1} className="starbucks" />
            </div>
          </div>
          <ul className="thumb">
            <li>
              <img
                src={thumb1}
                alt={thumb1}
                onClick={() => this.imgSlider(img1, '#017143')}
              />
            </li>

            <li>
              <img
                src={thumb2}
                alt={thumb2}
                onClick={() => this.imgSlider(img2, '#eb7495')}
              />
            </li>

            <li>
              <img
                src={thumb3}
                alt={thumb3}
                onClick={() => this.imgSlider(img3, '#d752b1')}
              />
            </li>
          </ul>
          <ul className="sci">
            <li>
              <a href="#">
                <img src={facebook} alt={facebook} />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={twitter} alt={twitter} />
              </a>
            </li>

            <li>
              <a href="#">
                <img src={instagram} alt={instagram} />
              </a>
            </li>
          </ul>
        </section>
        {/* <div>This is a test div</div> */}
      </div>
    );
  }
}

export default HomeHeader;
