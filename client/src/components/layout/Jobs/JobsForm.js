import React, { Component } from "react";
import JobsCard from "../Jobs/JobsCard";
import axios from "axios";
import Spinner from "../Spinner";

export default class JobsForm extends Component {
  constructor() {
    super();
    this.state = {
      jobDescription: "Software Developer",
      location: "Sydney",
      showJobsResult: null,
      showSpinner: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    e.preventDefault(); // prevents the submit form
    window.location.reload();
  }
  onChange(e) {
    //set the values entered in the form to the state
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault(); // prevents the submit form
    this.setState({
      showSpinner: true
    });
    if (this.state.jobDescription.length > 0) {
      axios
        .get(
          "/api/category/jobs" +
            "/" +
            this.state.jobDescription +
            "/" +
            this.state.location
        )
        .then(result => {
          if (result) {
            //console.log(result.data);

            this.setState({
              showJobsResult: result.data,
              showSpinner: false
              //showWeatherForm: true
            });
          }
        });
    }
  }
  render() {
    let getJobsButton;
    if (this.state.jobDescription.length > 0) {
      getJobsButton = (
        // <div className="col-3 ">

        <button
          type="submit"
          className="btn btn-outline-info buttonBorder text-dark mx-5 responsive-width whiteBackground"
        >
          Get Jobs
        </button>
        // </div>
      );
    }
    return (
      <div className="landing landingStyle">
        <div className="landing-inner text-white">
          <div className="container">
            <div className="row d-flex justify-content-center">
              {this.state.showSpinner === true ? (
                <div className="landing landingStyle ">
                  <div className="landing-inner text-white">
                    <div className="container ">
                      <div className="d-flex justify-content-center row align-items-center">
                        <div className="col text-center">
                          <Spinner />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form className="form-inline" onSubmit={this.onSubmit}>
                  {/* <div className="col-6 "> */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mx-5 border-0  border-bottom border-dark "
                      id="jobDescription"
                      placeholder="Job Description"
                      name="jobDescription"
                      value={this.state.jobDescription}
                      onChange={this.onChange}
                    />
                  </div>
                  {/* </div> */}{" "}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mx-5 border-0  border-bottom border-dark "
                      id="location"
                      placeholder="Location"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                    />
                  </div>
                  {getJobsButton}
                  {/* <div className="col-3 "> */}
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-outline-info buttonBorder text-dark mx-5 responsive-width whiteBackground"
                      onClick={this.onClick}
                    >
                      Back to Home
                    </button>
                  </div>
                  {/* </div> */}
                </form>
              )}
            </div>
            {this.state.showJobsResult != null &&
            this.state.showSpinner === false ? (
              <JobsCard showJobsResult={this.state.showJobsResult} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
