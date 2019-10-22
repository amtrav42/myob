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
      superRate: 0,
      grossIncome: 0,
      incomeTax: 0,
      netIncome: 0,
      superPaid: 0,
      pay: 0,
      hasFormSubmitted: false,
    };
  }
  //link to button and destructure the state
  handleSubmit(){
    const { salary, superRate } = this.state;
    //calculate gross income
    const grossIncomeCalc = Math.floor(salary/12);
    //calculate super to be paid
    const superCalc = Math.floor(grossIncomeCalc*(superRate/100));
    //calculate income tax ONLY FOR PAY BETWEEN 37001 and 80000
    const incomeTaxCalc = Math.ceil((3572+(salary-37000)*0.325)/12);
    //calculate net income
    const netIncomeCalc = grossIncomeCalc - incomeTaxCalc;
    //calculate pay
    const payCalc = netIncomeCalc - superCalc;
    //update state with calculations
    this.setState({
      grossIncome: grossIncomeCalc,
      superPaid: superCalc,
      incomeTax: incomeTaxCalc,
      netIncome: netIncomeCalc,
      pay: payCalc,
      hasFormSubmitted: true,
    });
  }

  render(){
    const { hasFormSubmitted, superPaid, grossIncome, firstName, lastName } = this.state;
    console.log(this.state);
    return (
      <main>
        <div className="mainWrapper">
          <div className="formWrapper">
            {/* form to collect the required information from the user */}
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
                    <input onChange={(e) => this.setState({superRate: e.target.value})} type="text" className="superRate_input" name="superRate" placeholder="Super Rate"/>
                  </div>
                </div>
              </div>
            </form>
            <div className="formActions">
            <button onClick={() => this.handleSubmit()}>Generate Payslip</button>
            </div>
          </div>
        </div>
          {/* once form has been submitted this will show */}
            {hasFormSubmitted && (
              <div className="reportWrapper">
                <div className="report">
                  <div>{firstName} {lastName} earns</div>
                  <div>Gross Income</div>
                  <div>${grossIncome}</div>
                  <div>per month</div>
                  <div>${superPaid}</div>
                  <div>in super</div>
                </div>
              </div>
            )}
      </main>
    );
  }
}
export default Main;
