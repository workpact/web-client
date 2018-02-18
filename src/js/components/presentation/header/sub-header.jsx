import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import AccountDropdownContainer from 'components/navigation/account-dropdown'
import HamburgerButton from 'layout/hamburger-button'

import 'styles/components/subheader.scss'

// this has only ui-level logic, no app logic, so even though it's a class, it's presentational
class SubHeader extends React.Component {
  state = {
    showDropdown: false,
    showMobileMenu: false
  };

  toggleDropdown = e => {
    if (e) {
      e.preventDefault()
    }

    this.setState({
      showDropdown: !this.state.showDropdown
    })
  };

  toggleMobileMenu = e => {
    if (e) {
      e.preventDefault()
    }
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    })
  };

  componentWillReceiveProps = newProps => {
    if (!newProps.user.id) {
      this.setState({
        showDropdown: false
      })
    }
  };

  render() {
    const { location, user } = this.props
    const { showDropdown, showMobileMenu } = this.state

    return (
      <div className='SubHeader-wrapper'>
        <div className={`SubHeader ${showDropdown ? 'is-open' : ''}`}>
          <Link
            to='/how-it-works'
            className={`SubHeader-link ${
              location.pathname.indexOf('how-it-works') > -1 ? 'is-active' : ''
            }`}
          >
            How it Works
          </Link>
          <Link
            to='/contractors'
            className={`SubHeader-link ${
              location.pathname.indexOf('contractors') > -1 ? 'is-active' : ''
            }`}
          >
            Contractors
          </Link>
          <Link
            to='/projects'
            className={`SubHeader-link ${
              location.pathname.indexOf('projects') > -1 ? 'is-active' : ''
            }`}
          >
            Project Listings
          </Link>

          {user &&
            user.loaded &&
            user.username && (
              <Link
                to='/home'
                className={`SubHeader-link ${
                  location.pathname.indexOf('home') > -1 ? 'is-active' : ''
                }`}
              >
                Dashboard
              </Link>
            )}

          {user && user.username ? (
            <a
              href='#'
              onClick={this.toggleDropdown}
              className='SubHeader-user SubHeader-link'
            >
              <span className='u-sr-only'>
                User Actions for {user.username}
              </span>
            </a>
          ) : (
            <Link to='/login' className='SubHeader-link'>
              Sign In
            </Link>
          )}
          <AccountDropdownContainer
            show={showDropdown}
            close={this.toggleDropdown}
          />
        </div>
        <div className='SubHeader--mobile'>
          <HamburgerButton
            id='sub-header-hamburger'
            isOpen={showMobileMenu}
            onClick={this.toggleMobileMenu}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(SubHeader)
