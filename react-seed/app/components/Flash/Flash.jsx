import styles from "./style/_Flash.scss";
import React from "react";
import SessionStore from "../../stores/SessionStore";

export default class Flash extends React.Component {

  constructor() {
    super();
    this.state = {
      message: "",
      style: ""
    };
  }

  componentWillMount() {
    SessionStore.addBookingResponseReceiveListener(this.onChange);
  }

  componentWillUnmount() {
    SessionStore.removeBookingResponseReceiveListener(this.onChange);
  }

  onChange = () => {
    var bookingResponse = SessionStore.getBookingResponse();
    if (bookingResponse.hasOwnProperty("bookingId")) {
      this.setState({
        message: "You have successfully booked your tickets with id: " + bookingResponse.bookingId,
        style: "success"
      });
    } else {
      this.setState({
        message: bookingResponse.code + ". Unsuccessful booking. Reason: " + bookingResponse.reason,
        style: "error"
      });
    }

    var self = this;
    setTimeout(function () {
      self.setState({
        message: "",
        style: ""
      })
    }, 3000);
  };

  render() {
    return (
      <div>
        {this.state.message != "" &&
        <div className={[
          styles.flash,
          this.state.style == "success" ? styles.success : styles.error].join(' ')}>
          {this.state.message}
        </div>
        }
      </div>

    );
  }
}
