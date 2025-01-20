import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";

class Loginpage extends Component {
  state = {
    username: "eve.holt@reqres.in",
    password: "Naveen@123",
    showPopup: false,
    popupMessage: "",
    popupType: "", // 'success' or 'error'
  };

  onSubmitSuccess = () => {
    this.setState({
      showPopup: true,
      popupMessage: "Login successful!",
      popupType: "success",
    });

    // Simulate navigation after a short delay
    setTimeout(() => this.props.navigate("/products"), 4000);
  };

  submitForm = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    // Validation for empty username or password
    if (!username || !password) {
      this.setState({
        showPopup: true,
        popupMessage: "Username and password are required.",
        popupType: "error",
      });
      return;
    }

    // Check if username and password match hardcoded values
    const expectedUsername = "eve.holt@reqres.in";
    const expectedPassword = "Naveen@123";

    if (username === expectedUsername && password === expectedPassword) {
      this.onSubmitSuccess();
    } else {
      this.setState({
        showPopup: true,
        popupMessage: "Invalid username or password.",
        popupType: "error",
      });
    }
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          value={password}
          onChange={this.onChangePassword}
          aria-label="Enter your password"
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="form-input"
          value={username}
          onChange={this.onChangeUsername}
          aria-label="Enter your username"
        />
      </>
    );
  };

  render() {
    const { showPopup, popupMessage, popupType } = this.state;

    return (
      <div className="login-container">
        {showPopup && (
          <div className={`popup ${popupType}`}>
            <p className="popupmessage-paragraph">{popupMessage}</p>
            <button onClick={this.closePopup}>Close</button>
          </div>
        )}
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="Website login"
        />
        <form className="login-form" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-logo"
            alt="Website logo"
          />
          <div className="form-group">{this.renderUsernameField()}</div>
          <div className="form-group">{this.renderPasswordField()}</div>
          <button type="submit" className="form-button">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const LoginpageWithNavigate = (props) => {
  const navigate = useNavigate();
  return <Loginpage {...props} navigate={navigate} />;
};

export default LoginpageWithNavigate;
