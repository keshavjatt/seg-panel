import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    if (!sessionStorage.getItem("isLoggedIn")) {
      navigate("/"); // Redirect to login page if not logged in
    }
  }, [navigate]);
  return (
    <>
      <div className="page">
        <div className="page-main">

          {/** Header Component */ }  
          <Header />
          
          <div className="my-3 my-md-5">
            <div className="container">
              <div className="page-header">
                <h1 className="page-title">Dashboard</h1>
              </div>
              <div className="row row-cards">
                <div className="col-6 col-sm-4 col-lg-2">
                  <div className="card">
                    <div className="card-body p-3 text-center">
                      <div className="text-right text-green">
                        6%
                        <i className="fe fe-chevron-up" />
                      </div>
                      <div className="h1 m-0">891</div>
                      <div className="text-muted mb-4">Assessors</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2">
                  <div className="card">
                    <div className="card-body p-3 text-center">
                      <div className="text-right text-red">
                        -3%
                        <i className="fe fe-chevron-down" />
                      </div>
                      <div className="h1 m-0">17</div>
                      <div className="text-muted mb-4">Faculty</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2">
                  <div className="card">
                    <div className="card-body p-3 text-center">
                      <div className="text-right text-green">
                        9%
                        <i className="fe fe-chevron-up" />
                      </div>
                      <div className="h1 m-0">7</div>
                      <div className="text-muted mb-4">Staff Member</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2">
                  <div className="card">
                    <div className="card-body p-3 text-center">
                      <div className="text-right text-green">
                        3%
                        <i className="fe fe-chevron-up" />
                      </div>
                      <div className="h1 m-0">27.3K</div>
                      <div className="text-muted mb-4">Sectors</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2">
                  <div className="card">
                    <div className="card-body p-3 text-center">
                      <div className="text-right text-red">
                        -2%
                        <i className="fe fe-chevron-down" />
                      </div>
                      <div className="h1 m-0">9500</div>
                      <div className="text-muted mb-4">Questions</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2">
                  <div className="card">
                    <div className="card-body p-3 text-center">
                      <div className="text-right text-red">
                        -1%
                        <i className="fe fe-chevron-down" />
                      </div>
                      <div className="h1 m-0">5</div>
                      <div className="text-muted mb-4">Assessing Body</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Assessment Activity</h3>
                    </div>
                    <div
                      id="chart-development-activity"
                      style={{ height: "10rem" }}
                    />
                    <div className="table-responsive">
                      <table className="table card-table table-striped table-vcenter">
                        <thead>
                          <tr>
                            <th colSpan={2}>User</th>
                            <th>Commit</th>
                            <th>Date</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="w-1">
                              <span
                                className="avatar"
                                style={{
                                  backgroundImage:
                                    "url(./demo/faces/male/user-ki-img.jpg)",
                                }}
                              />
                            </td>
                            <td>Ronald Bradley</td>
                            <td>Initial commit</td>
                            <td className="text-nowrap">May 6, 2018</td>
                            <td className="w-1">
                              <a href="#" className="icon">
                                <i className="fe fe-trash" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="avatar">BM</span>
                            </td>
                            <td>Russell Gibson</td>
                            <td>Main structure</td>
                            <td className="text-nowrap">April 22, 2018</td>
                            <td>
                              <a href="#" className="icon">
                                <i className="fe fe-trash" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="alert alert-primary">
                    Are you in trouble?{" "}
                    <a href="#" className="alert-link">
                      Read our documentation
                    </a>{" "}
                    with code samples.
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Chart title</h3>
                        </div>
                        <div className="card-body">
                          <div id="chart-donut" style={{ height: "12rem" }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Chart title</h3>
                        </div>
                        <div className="card-body">
                          <div id="chart-pie" style={{ height: "12rem" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**Footer Component */}
        <Footer />
        
      </div>
    </>
  );
};

export default Dashboard;