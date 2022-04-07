import React from 'react';
import './styles.css';
import ChatList from './Components/ChatList';
import ChatForm from './Components/ChatForm';

export default class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = { messages: [], error: null };
 }
 componentDidMount() {
   fetch("https://t0dbto-5002.sse.codesandbox.io/messages")
     .then((data) => data.json())
     .then((messages) => {
       this.setState({ messages: messages, error: null });
     })
     .catch(error => {
       this.setState({ messages: [], error:'Messages not found' });
     });
 }
  render() {
    return (
      <div className="App">
        <h1>Chat App</h1>
        <ChatList messages={this.state.messages} />
        <p>{this.state.error ?? ''}</p>
    </div>
    );
  }
}
