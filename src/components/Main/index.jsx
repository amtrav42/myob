import React, { Component } from "react";
import "./styles.scss";

class Main extends Component {
  render(){
    return (
      <main>
        <div className="mainWrapper">
          <div className="formWrapper">
            <h2>Employee Info</h2>
            <form>
              <div className="formBoxes">
                <div className="nameBoxes">
                  <input type="text" name="firstName" placeholder="Firstname"/>
                  <input type="text" name="lastName" placeholder="Lastname"/>
                </div>
                <div className="paymentBoxes">
                  <div className="annualSalaryBox">
                    <div className="dollarSign">$</div>
                    <input type="text" name="annualSalary" placeholder="Annual Salary"/>
                    <div className="zeros"> .00</div>
                  </div>
                  <div className="superRateBox">
                    <div className="percentSign">%</div>
                    <input type="text" className="superRate_input" name="superRate" placeholder="Super Rate"/>
                  </div>
                </div>
              </div>
            </form>
            <button>Generate Payslip</button>
          </div>
        </div>
      </main>
    );
  }
}
export default Main;
