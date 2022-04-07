import React from 'react';
import './styles.css';
import ChatForm from "./Components/ChatForm";
import ChatList from './Components/ChatList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadState = this.loadState.bind(this);
    this.state = { messages: [], error: null };
  }
  loadState() {
    fetch("https://t0dbto-5002.sse.codesandbox.io/messages")
      .then((data) => data.json())
      .then((messages) => {
        this.setState({ messages: messages, error: null });
      })
      .catch((error) => {
        this.setState({ messages: [], error: "Messages not found" });
      });
  }
  componentDidMount() {
    this.loadState();
  }
  render() {
    return (
      <div className="App">
        <h1>Chat App</h1>
        <ChatForm loadState={this.loadState} />
        <p>{this.state.error ?? ""}</p>
        <ChatList messages={this.state.messages} />
      </div>
    );
  }
}
