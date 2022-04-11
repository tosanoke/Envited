import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../navigation/routes";

interface Props {
  children: ReactNode;
}

class ErrorBoundary extends Component<Props> {
  state = { hasError: false };
  static getDerivedStateFromError(e: any) {
    return { hasError: true };
  }
  componentDidCatch(error: any, info: any) {
    console.error("ErrorBoundry caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          An error occured <Link to={HOME}>Click here</Link> to go back to
          homepage
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
