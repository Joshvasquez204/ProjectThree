/* eslint-disable jsx-a11y/anchor-is-valid */
import { action as toggleMenu } from "redux-burger-menu";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import React from "react";
import { Icon, ToolTip } from "..";

class Header extends React.Component {
  openMainMenu = event => {
    event.preventDefault();
    const { actions, state } = this.props;
    const isOpen = !state.burgerMenu.left.isOpen;
    actions.toggleMenu(isOpen, "left");
    actions.toggleMenu(false, "right");
  };

  render = () => (
    <nav
      className="navbar is-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="" className="navbar-item" onClick={this.openMainMenu}>
          <Icon icon={["fas", "car-mechanic"]} size="2x" />
        </Link>
        <div className="navbar-item">
          <h4>Welcome to AO!</h4>
        </div>
        <div className="navbar-item">
          <span className="subtitle">Auto Organizer</span>
        </div>
      </div>
    </nav>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        toggleMenu
      },
      dispatch
    )
  };
}

function mapStateToProps(state) {
  // trim the fat from the state
  const { burgerMenu } = state;
  return { state: { burgerMenu } };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
