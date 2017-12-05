import styles from "./style/_Payment.scss";
import React from "react";

var paymentUrl = process.env.EVENTS_API_URL || "http://localhost:8080/payment";

export default class Payment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: ""
    };
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  };

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  };

  render() {
    return (
      <div className={styles.payment}>
        <form action={paymentUrl} method="post">
          <input type="hidden" name="bookingId" readOnly="readOnly" value={this.props.match.params.bookingId}/>
          <div className={styles.formRow}>
            <div>Name:</div>
            <div>
              <input className={styles.input} type="text" required="required" name="name" value={this.state.name} size="50" onChange={this.onNameChange.bind(this)}/>
            </div>
          </div>
          <div className={styles.formRow}>
            <div>Email:</div>
            <div>
              <input className={styles.input} type="email" required="required" name="email" value={this.state.email} size="50" onChange={this.onEmailChange.bind(this)}/>
            </div>
          </div>
          <div className={styles.formRow}>
            <input type="submit" value="Submit" className={styles.button}/>
          </div>
        </form>
      </div>
    );
  }

}
