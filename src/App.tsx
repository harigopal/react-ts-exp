import * as React from "react";
import "./App.css";
import SignInForm from "./SignInForm";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          Hello there. This is a message from the root <code>App</code>{" "}
          component.
        </p>
        <SignInForm />
      </div>
    );
  }
}

export default App;
