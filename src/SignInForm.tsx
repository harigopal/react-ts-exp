import * as React from "react";

interface Props {}

interface State {
  password: string;
}

type SubmitEvent =
  | React.FormEvent<HTMLFormElement>
  | React.FormEvent<HTMLButtonElement>;

export default class SignInForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      password: ""
    };

    this.submit = this.submit.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  submit(event: SubmitEvent) {
    event.preventDefault();
  }

  updatePassword(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const newPassword = target.value;

    this.setState({ password: newPassword });
  }

  render() {
    return (
      <div>
        <p>Sign in, perhaps? Enter the secret code!</p>
        <form onSubmit={this.submit}>
          <input type="password" onChange={this.updatePassword} />
          <button type="submit" onSubmit={this.submit}>
            Open Sesame
          </button>
        </form>
      </div>
    );
  }
}
