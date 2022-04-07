import React from 'react';

export default class ChatForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        let name = document.querySelector('[name=name]').value;
        let message = document.querySelector("[name=message]").value;
        let time = new Date().getTime();
        document.querySelector("[name=name]").value = '';
        document.querySelector("[name=message]").value = '';
        fetch("https://t0dbto-5002.sse.codesandbox.io/messages/new", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
          method: "POST",
          body: JSON.stringify({
              name: name,
              message: message
          })
        }).then((x) => x.json()).then((response) => {
            if (response.status === 200) {
                this.props.loadState();
            }
        })
    }

    render() {
        return (
          <form
            action="https://t0dbto-5002.sse.codesandbox.io/messages/new"
            method="POST"
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="message" placeholder="Message" />
            <button type="submit">Submit</button>
          </form>
        );
    }
}



