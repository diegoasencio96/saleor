import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactSVG from 'react-svg';

import { GitHubLink } from '..';

import css from './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeNewsBar = this.closeNewsBar.bind(this);
    this.state = { mobileMenu: false, visibleNewsBar: true };
  }

  toggleMenu = () => {
    this.setState(({ mobileMenu }) => ({ mobileMenu: !mobileMenu}))
  };

  closeMenu = () => {
    this.setState({ mobileMenu: false });
  }

  closeNewsBar = () => {
    this.setState({visibleNewsBar: false});
  }

  render() {
    return (
      <header>
        {this.state.visibleNewsBar ?
        <div className="news">
          <div className="content">
            <a href="">April release is out. <span className="text-underline">Check out what's new!</span></a>
            <div className="close-icon" onClick={this.closeNewsBar}></div>
          </div>
        </div> : null}
        <div className="container">
          <div className="grid">
            <div className={this.state.mobileMenu ? 'logo open col-xs-3 col-sm-6' : 'logo col-xs-3 col-sm-6'}>
              <NavLink to="/"><ReactSVG className="logo-svg" path="images/saleor-logo.svg" /></NavLink>
            </div>
            <nav className="menu col-xs-9 col-sm-6">
              <ul className={this.state.mobileMenu ? 'menu-mobile hovered' : null}>
                <li><span className="count">01. </span><NavLink exact to="/" onClick={this.closeMenu}>Home</NavLink></li>
                <li><span className="count">02. </span><NavLink to="/features" onClick={this.closeMenu}>Features</NavLink></li>
                <li><span className="count">03. </span><NavLink to="/roadmap" onClick={this.closeMenu}>Roadmap</NavLink></li>
                <li><span className="count">04. </span><a href="https://saleor.readthedocs.io/en/latest/">Docs</a></li>
                <li><span className="count">06. </span><a href="https://medium.com/saleor">Blog</a></li>
                <li className="github-link"><GitHubLink owner="mirumee" name="saleor" /></li>
                <li><span className="count">07. </span><a className={this.state.mobileMenu ? null : 'btn btn-primary'} href="https://mirumee.com/hire-us/">Contact Us</a></li>
              </ul>
              <ul className="mobile-btn">
                <li className={this.state.mobileMenu ? 'github-link open' : 'github-link'} onClick={this.toggleMenu}><GitHubLink owner="mirumee" name="saleor" /></li>
                <li className={this.state.mobileMenu ? 'menu-icon open' : 'menu-icon'} onClick={this.toggleMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);