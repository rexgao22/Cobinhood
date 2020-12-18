import React from "react";
import { fetchCompanyData } from "../../util/external_util";

class CompanyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { CEO: "", employees: "",city: "", state: "", sector: "", industry: "" };
  }

  componentDidMount() {
    fetchCompanyData(this.props.tickerSymbol).then(
      ({ CEO, employees, city, state, sector, industry }) => {
        this.setState({ CEO, employees, city, state, sector, industry });
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.tickerSymbol !== prevProps.tickerSymbol) {
      fetchCompanyData(this.props.ticker).then(
        ({ CEO, employees, city, state, sector, industry }) => {
          this.setState({ CEO, employees, city, state, sector, industry });
        }
      );
    }
  }

  render() {
    const employ = this.state.employees ?
      this.state.employees.toLocaleString('en-US') : '-';
    return (
      <section className="company-info">
        <h2>About</h2>
        <p>{this.state.industry}</p>
        <div className="others-info">
          <div>
            <span>CEO</span>
            <span>{this.state.CEO}</span>
          </div>
          <div>
            <span>Employees</span>
            <span>{employ}</span>
          </div>
          <div>
            <span>Headquarters</span>
            <span>{`${this.state.city}, ${this.state.state}`}</span>
          </div>
          <div>
            <span>Sector</span>
            <span>{this.state.sector}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default CompanyInfo;
