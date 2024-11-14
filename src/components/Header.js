import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    color: isHovered ? "white" : "#467FCF",
    backgroundColor: isHovered ? "#467FCF" : "transparent",
    borderColor: "#467FCF",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  };
  return (
    <>
      <div className="header py-4">
        <div className="container">
          <div className="d-flex">
            <Link className="header-brand" to={"/dashboard"}>
              <m>SEG EDUCATIONAL GROUP</m>
            </Link>
            <div className="d-flex order-lg-2 ml-auto">
              <div className="nav-item d-none d-md-flex">
                <Link
                  to={"/"}
                  style={buttonStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="btn btn-sm btn-outline-primary"
                >
                  LOGOUT
                </Link>
              </div>
              <div className="dropdown d-none d-md-flex">
                <a className="nav-link icon" data-toggle="dropdown">
                  <i className="fe fe-bell" />
                  <span className="nav-unread" />
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a href="#" className="dropdown-item d-flex">
                    <span
                      className="avatar mr-3 align-self-center"
                      style={{
                        backgroundImage: "url(demo/faces/male/user-ki-img.jpg)",
                      }}
                    />
                    <div>
                      <strong>Nathan</strong> pushed new commit: Fix page load
                      performance issue.
                      <div className="small text-muted">10 minutes ago</div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span
                      className="avatar mr-3 align-self-center"
                      style={{
                        backgroundImage:
                          "url(demo/faces/female/user-ki-img.jpg)",
                      }}
                    />
                    <div>
                      <strong>Alice</strong> started new task: Tabler UI design.
                      <div className="small text-muted">1 hour ago</div>
                    </div>
                  </a>
                  <a href="#" className="dropdown-item d-flex">
                    <span
                      className="avatar mr-3 align-self-center"
                      style={{
                        backgroundImage:
                          "url(demo/faces/female/user-ki-img.jpg)",
                      }}
                    />
                    <div>
                      <strong>Rose</strong> deployed new version of NodeJS REST
                      Api V3
                      <div className="small text-muted">2 hours ago</div>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    href="#"
                    className="dropdown-item text-center text-muted-dark"
                  >
                    Mark all as read
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <a
                  href="#"
                  className="nav-link pr-0 leading-none"
                  data-toggle="dropdown"
                >
                  <span
                    className="avatar"
                    style={{
                      backgroundImage:
                        "url(./demo/faces/female/user-ki-img.jpg)",
                    }}
                  />
                  <span className="ml-2 d-none d-lg-block">
                    <span className="text-default">Jane Pearson</span>
                    <small className="text-muted d-block mt-1">
                      Administrator
                    </small>
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fe fe-user" /> Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fe fe-settings" /> Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <span className="float-right">
                      <span className="badge badge-primary">6</span>
                    </span>
                    <i className="dropdown-icon fe fe-mail" /> Inbox
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fe fe-send" /> Message
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fe fe-help-circle" /> Need help?
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="dropdown-icon fe fe-log-out" /> Sign out
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="header-toggler d-lg-none ml-3 ml-lg-0"
              data-toggle="collapse"
              data-target="#headerMenuCollapse"
            >
              <span className="header-toggler-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 ml-auto">
              <form className="input-icon my-3 my-lg-0">
                <input
                  type="search"
                  className="form-control header-search"
                  placeholder="Search…"
                  tabIndex={1}
                />
                <div className="input-icon-addon">
                  <i className="fe fe-search" />
                </div>
              </form>
            </div>
            <div className="col-lg order-lg-first">
              <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                <li className="nav-item">
                  <Link to={"/dashboard"} className="nav-link active">
                    <i className="fe fe-home" /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="nav-link"
                    data-toggle="dropdown"
                  >
                    <i className="fa-solid fa-user-plus" />
                    &nbsp; Register
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow">
                    <Link to={"/newregistration"} className="dropdown-item">
                      New Registration
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0)"
                    className="nav-link"
                    data-toggle="dropdown"
                  >
                    <i className="fas fa-exchange-alt" />
                    &nbsp; Approval
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow">
                    <a href="#" className="dropdown-item ">
                      Allotment
                    </a>
                    <a href="#" className="dropdown-item ">
                      Center / Batch
                    </a>
                    <a href="#" className="dropdown-item ">
                      User
                    </a>
                    <a href="#" className="dropdown-item ">
                      Course
                    </a>
                    <a href="#" className="dropdown-item ">
                      Question Papers
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0)"
                    className="nav-link"
                    data-toggle="dropdown"
                  >
                    <i className="fa-solid fa-hand-point-right" /> User Rights
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow">
                    <a href="#" className="dropdown-item ">
                      Staff Member
                    </a>
                    <a href="#" className="dropdown-item ">
                      Faculty
                    </a>
                    <a href="#" className="dropdown-item ">
                      Assessor
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0)"
                    className="nav-link"
                    data-toggle="dropdown"
                  >
                    <i className="fas fa-file-pdf" /> Reports
                  </a>
                  <div className="dropdown-menu dropdown-menu-arrow">
                    <a href="#" className="dropdown-item ">
                      ID Card
                    </a>
                    <a href="#" className="dropdown-item ">
                      Admit Card
                    </a>
                    <a href="#" className="dropdown-item ">
                      Result
                    </a>
                    <a href="#" className="dropdown-item ">
                      Assessment Report
                    </a>
                    <a href="#" className="dropdown-item ">
                      Assessor Report
                    </a>
                    <a href="#" className="dropdown-item ">
                      TP / TC Report
                    </a>
                    <a href="#" className="dropdown-item ">
                      Staff Report
                    </a>
                    <a href="#" className="dropdown-item ">
                      Candidate Report
                    </a>
                    <a href="#" className="dropdown-item ">
                      Faculty Report
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fe fe-check-square" /> Question Bank
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fe fe-image" /> Result
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="fe fe-file-text" /> Backup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;