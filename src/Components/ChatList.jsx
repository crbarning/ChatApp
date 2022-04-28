import React from 'react';

export default class ChatList extends React.Component{
    transformMessage(message) {
        let dateTime = new Date(message.time).toDateString() + " " + new Date(message.time).toLocaleTimeString('en-US');    
   
        return (
          <tr key={message.id}>
            <th>{dateTime}</th> 
            <td>{message.name}</td>
            <td>{message.messages}</td>
          </tr>
        );
    }
    render() {
        let messagesJsx = this.props.messages.map(this.transformMessage);
        return (
          <div className="chat-log">
            <table>
              <tbody>{messagesJsx}</tbody>
            </table>
          </div>
        );
    }
}