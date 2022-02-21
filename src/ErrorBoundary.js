import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false};

  static getDerivedStateFromError() {
    return { hasError: true  };
  }

  componentDidCatch(error, errorInfo) {
    //  I log this to Sentry, Azure Monitor, New Relic
    // this.setState({error, errorInfo});
    console.error("Error Boundary caught an error", error, errorInfo);
    setTimeout(() => this.setState({ redirect: true}), 8000)

  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/"/>);
    }
    else if (this.state.hasError) {
      return (
        <h2>
          This is an error. <Link to="/">Click here </Link> to go back to the
          homepage or wait five seconds
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
