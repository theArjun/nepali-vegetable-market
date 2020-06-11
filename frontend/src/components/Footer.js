import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="jumbotron jumbotron-fluid bg-success mt-5 mb-0">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <div className="card bg-success border-0">
                  <div className="card-body text-light text-center">
                    <p className="text-white">Fruits & Vegetables Nepal</p>
                    <p className=" ">
                      theArjun © 2020
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="card bg-success border-0">
                  <div className="card-body text-center">
                    <div
                      className="text-light d-block "
                      style={{ marginLeft: "-20px" }}
                      href=""
                    >
                      <i className="fa fa-phone mr-2"></i>+98XXXXXXXXXX
                    </div>
                    <a
                      className="text-light d-block "
                      href="mailto:arjun@biodiversitynepal.org"
                    >
                      <i className="fa fa-envelope mr-2"></i>
                      arjun@biodiversitynepal.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="card bg-success border-0">
                  <div className="card-body text-center">
                    <a
                      className="text-light"
                      href="https://github.com/thearjun"
                    >
                      <i className="fa fa-github fa-fw fa-2x"></i>
                    </a>

                    <a className="text-light" href="https://thearjun.tech">
                      <i className="fa fa-globe fa-fw fa-2x"></i>
                    </a>

                    <a
                      className="text-light"
                      href="https://linkedin.com/in/thearjun"
                    >
                      <i className="fa fa-linkedin fa-fw fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
