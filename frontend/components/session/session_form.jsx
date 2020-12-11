import React, { Component } from "react";
import { Link } from "react-router-dom";

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state)
      .then(() => this.props.history.push("/portfolio"));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
  handleDemo(e){
    e.preventDefault();
    this.props.demoLogin().then(() => this.props.history.push("/portfolio"));
  }
  render() {
    const [title, test, path] = this.props.logProp;
    return (
      <div className="session-form-container">
        <div className="session-display-form">
          <header className="session-header">Welcome to Cobinhood</header>
          <button className="demo-button" onClick={this.handleDemo.bind(this)}>
            Demo Log In
          </button>
          <form onSubmit={this.handleSubmit} className="session-form">
            <span className= "session-errors">{this.renderErrors()}</span>
            <div className="login-form">
              <br />
              <label>
                <span>Username</span>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange("username")}
                  className="login-input"
                />
              </label>
              <br />
              <label>
                <span>Password</span>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                  className="login-input"
                />
              </label>
              <br />
              <button type="submit">{this.props.formType}</button>
            </div>
          </form>
          <div className="session-link">
            <h3>{title}</h3>
            <Link to={path}>{test}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
