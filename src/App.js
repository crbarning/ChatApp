import React from 'react';
import './styles.css';
import ChatForm from "./Components/ChatForm";
import ChatList from './Components/ChatList';
import Navbar from './Components/Navbar';
import chatBubble from './Components/img/dots.svg';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadState = this.loadState.bind(this);
    this.state = { messages: [], error: null };
  }
  loadState() {
    fetch("https://7l2i1f.sse.codesandbox.io/messages")
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
        <Navbar />
        <div className="main">
          <h1>Chat App <img src={chatBubble} alt="Chat Bubble"/></h1>
          <ChatForm loadState={this.loadState} />
          <p>{this.state.error ?? ""}</p>
        </div>
        <ChatList messages={this.state.messages} />
      </div>
    );
  }
}
