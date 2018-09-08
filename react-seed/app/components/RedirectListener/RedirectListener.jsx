import React from "react";
import {hashHistory} from 'react-router';
import SessionStore from "../../stores/SessionStore";

export default class RedirectListener extends React.Component {

  constructor() {
    super();
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
      setTimeout(function () {
        hashHistory.push("/payment/" + bookingResponse.bookingId)
      }, 3000);
    }
  };

  render() {
    return (
      <div/>
    );
  }
}
