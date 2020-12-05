import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import HeaderLink from "./HeaderLink.jsx";

import logo from "../../assets/img/gurumeet-logo.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "" : " collapse";
  }
  activeRoute2(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  render_bkk() {
    return (
      <div id="sidebar" class="sidebar collapsed">
        <div class="sidebar-wrapper collapsed">
          <ul class="nav">
            {/*
            <div>
              <ul class="nav pull-right">
                <li class="dropdown">
                  <a id="basic-nav-dropdown-right" role="button" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false" href="#">Account <span class="caret"/>
                  </a>
                  <ul role="menu" class="dropdown-menu" aria-labelledby="basic-nav-dropdown-right">
                    <li role="presentation" class="">
                      <a role="menuitem" tabindex="-1" href="#">My Profile</a>
                    </li>
                    <li role="presentation" class="">
                      <a role="menuitem" tabindex="-1" href="#">Setting</a>
                    </li>
                    <li role="separator" class="divider"/>
                    <li role="presentation" class="">
                      <a role="menuitem" tabindex="-1" href="#">Sign Out</a>
                    </li>
                  </ul>
                </li>
                <li role="presentation" class="">
                  <a href="#" role="button">Help</a>
                </li>
              </ul>
            </div>
            */}
            <li class="mainSidebar">
              <li>
                <a class="nav-title collapse active" href="/memberSite/dashboard">
                  <i class="pe-7s-graph"/>
                  <p>Dashboard</p>
                </a>
              </li>
            </li>
            <li class="mainSidebar collapse">
              <li>
                <a class="nav-title collapse " href="/memberSite/user">
                  <i class="pe-7s-user"/>
                  <p>User Profile</p>
                </a>
              </li>
            </li>
            <li class="mainSidebar collapse">
              <li>
                <a class="nav-title collapse ">
                  <i class="pe-7s-note2"/>
                  <p>Manage Teacher</p>
                  <span class="caret"/>
                </a>
              </li>
              <li class="nav-title-sub-1 collapse">
                <li>
                  <a class="nav-link " href="/memberSite/table">
                    <p>View Teacher</p>
                  </a>
                </li>
                <li>
                  <a class="nav-link " href="/memberSite/user">
                    <p>Edit Teacher</p>
                  </a>
                </li>
              </li>
            </li>
            <li class="mainSidebar collapse">
              <li>
                <a class="nav-title collapse ">
                  <i class="pe-7s-news-paper"/>
                  <p>Typography</p>
                  <span class="caret"/>
                </a>
              </li>
              <li class="nav-title-sub-1 collapse">
                <li>
                  <a class="nav-link " href="/memberSite/typography">
                    <p>Teacher Edit</p>
                  </a>
                </li>
                <li>
                  <a class="nav-link " href="/memberSite/user">
                    <p>Teacher Edit</p>
                  </a>
                </li>
              </li>
            </li>
            <li class="mainSidebar collapse">
              <li>
                <a class="nav-title collapse ">
                  <i class="pe-7s-science"/>
                  <p>Icons</p>
                  <span class="caret"/>
                </a>
              </li>
              <li class="nav-title-sub-1 collapse">
                <li>
                  <a class="nav-link " href="/memberSite/icons">
                    <p>Teacher Edit</p>
                  </a>
                </li>
                <li>
                  <a class="nav-link " href="/memberSite/user">
                    <p>Teacher Edit</p>
                  </a>
                </li>
              </li>
            </li>
            <li class="mainSidebar collapse">
              <li>
                <a class="nav-title collapse ">
                  <i class="pe-7s-map-marker"/>
                  <p>Maps</p>
                  <span class="caret"/>
                </a>
              </li>
              <li class="nav-title-sub-1 collapse">
                <li>
                  <a class="nav-link " href="/memberSite/maps">
                    <p>Teacher Edit</p>
                  </a>
                </li>
                <li>
                  <a class="nav-link " href="/memberSite/user">
                    <p>Teacher Edit</p>
                  </a>
                </li>
              </li>
            </li>
            <li class="mainSidebar collapse">
              <li>
                <a class="nav-title collapse"  href="/memberSite/notifications">
                  <i class="pe-7s-bell"/>
                  <p>Notifications</p>
                </a>
              </li>
            </li>
          </ul>
        </div>
      </div>
    );
  }


  render() {
    
  const navBarStyle = {
    height:"10px",
    width:"100%",
    margin: "5px 15px",
    display: "block",
    padding: "10px 15px"
  };

    return (
      <div
        id="sidebar"
        className="sidebar collapsed"
        data-color={this.props.color}
        data-image={this.props.image}
      >
        {this.props.hasImage ? (
          <div className="sidebar-background" />
        ) : (
            null
          )}
        <div className="sidebar-wrapper collapsed">
          <ul className="nav">
            {this.state.width <= 991 ? <HeaderLink /> : null}
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <>{/* 
                    <div class="row" style={navBarStyle} >
                      <div class="col">
                        <div class="multi-collapse" id="multiCollapseExample1" style={navBarStyle}>
                          xx testing
                        </div>
                      </div>
                    </div>*/}
                    <li
                      className={["mainSidebar" +
                        ( (prop.sub) ? " collapse" :this.activeRoute(prop.layout + prop.path))
                      ]}
                      key={key}
                    >
                      <li>
                        <NavLink
                          id = {[]}
                          to={(prop.sub) ? "#" : (prop.layout + prop.path)}
                          //to={(prop.layout + prop.path)}
                          className={["nav-title " + ((prop.sub) ? "" : this.activeRoute2(prop.layout + prop.path)) + (" sb"+prop.name.replace(' ', ''))]}
                          activeClassName="collapse"
                        >
                          <i className={prop.icon} />
                          <p>{prop.name}</p>
                        {(prop.sub) && <span class="caret"></span>}
                        </NavLink>
                      </li>
                      {(prop.sub) &&
                        <li className={["nav-title-sub-1" + ((prop.sub) ? " collapse" : this.activeRoute(prop.layout + prop.path)) + (" sb"+prop.name.replace(' ', ''))]}>
                            {prop.sub.map((e, ind) => {
                              return (
                              <li key={ind}>
                                <NavLink
                                  to={e.layout + e.path}
                                  className="nav-link "
                                  activeClassName="active"
                                >
                                  <p>{e.name}</p>
                                </NavLink>
                              </li>
                              )
                            })}
                        </li>
                      }
                    </li>
                  </>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
