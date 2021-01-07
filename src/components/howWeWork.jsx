import React, { Component } from "react";

export class howWeWork extends Component {
  
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>How we work</h2>
          </div>
          <div className="row">
            {this.props.data
              ? 
                <div className="col-xs-6 col-md-12">
                  <img src={this.props.data.img}/>
                </div>
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default howWeWork;