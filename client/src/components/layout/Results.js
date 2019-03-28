import React, { Component } from "react";
import { getResults } from "../../actions/getResults";
class Results extends Component {
  //component state
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault(); // prevents the submit form
    const categoryAction = "Weather";
    this.props.loginUser(categoryAction);
  }
  render() {
    return (
      <div className="landing landingStyle">
        <div className="landing-inner text-white">
          <div className="container">
            <div className="row" />

            <div className="col-sm-12">
              <div className="card border-0 ">
                <div className="card-body">
                  <h5 className="card-title">
                    Click one of the buttons below!
                  </h5>
                  {/* <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p> */}
                  <div className="bg-info clearfix" />
                  <div
                    className="btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      class="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button type="button" className="btn btn-default">
                        Default
                      </button>
                    </div>
                    <div
                      class="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button type="submit" className="btn btn-default">
                        Weather
                      </button>
                    </div>
                    <div
                      class="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button type="button" className="btn btn-default">
                        Default
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  getResults: PropTypes.func.isRequired
};

export default Results;
