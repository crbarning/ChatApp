import React from 'react';

export default class ChatForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let name = document.querySelector("[name=name]").value;
    let message = document.querySelector("[name=messages]").value;
    let time = new Date().getTime();
    document.querySelector("[name=name]").value = "";
    document.querySelector("[name=messages]").value = "";
    fetch("https://tvg3vc.sse.codesandbox.io/messages/new", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        messages: message,
      }),
    })
      .then((x) => x.json())
      .then((response) => {
        if (response.status === 200) {
          this.props.loadState();
        }
      });
  }
  render() {
    return (
      <form
        action="https://tvg3vc.sse.codesandbox.io/messages/new"
        method="POST"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <input
          required
          className="name-msg"
          type="text"
          name="name"
          placeholder="Name"
          minlength="2"
          maxlength="10"
        />
        <input
          required
          className="name-msg"
          type="text"
          name="messages"
          placeholder="Message"
          minlength="2"
          maxlength="200"
        />
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}