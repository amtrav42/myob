import React, { Component } from "react";
import "./styles.scss";

class Main extends Component {
  constructor(){
    super();
    //set up local state
    this.state = {
      firstName: "",
      lastName: "",
      salary: 0,
      super: 0,
    };
  }
  //log clicking the button
  handleSubmit(){
    console.log(this.state);
  }
  render(){
    return (
      <main>
        <div className="mainWrapper">
          <div className="formWrapper">
            <h2>Employee Info</h2>
            <form>
              <div className="formBoxes">
                <div className="nameBoxes">
                  <input onChange={(e) => this.setState({firstName: e.target.value})} type="text" className="firstName" placeholder="Firstname"/>
                  <input onChange={(e) => this.setState({lastName: e.target.value})} type="text" className="lastName" placeholder="Lastname"/>
                </div>
                <div className="paymentBoxes">
                  <div className="annualSalaryBox">
                    <div className="greyBox dollarSign">$</div>
                    <input onChange={(e) => this.setState({salary: e.target.value})} type="text" className="annualSalary" placeholder="Annual Salary"/>
                    <div className="greyBox zeros"> .00</div>
                  </div>
                  <div className="superRateBox">
                    <div className="greyBox percentSign">%</div>
                    <input onChange={(e) => this.setState({super: e.target.value})} type="text" className="superRate_input" name="superRate" placeholder="Super Rate"/>
                  </div>
                </div>
              </div>
            </form>
            <div className="formActions">
            <button onClick={() => this.handleSubmit()}>Generate Payslip</button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Main;
