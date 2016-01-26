// App component - represents the whole app
App = React.createClass({
   mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      messages: Messages.find({}).fetch(),
      currentUser: Meteor.user(),
    }
  },
  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message key={message._id}  message={message} createdAt={message.createdAt}/>;
    });
  },
  // renderUsers() {
  //   return this.data.onlineUsers.map((user) => {
  //     return <User key={user._id}/>;
  //   });
  // },
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Messages.insert({
      text: text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username  // username of logged in user
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  },
  render() {
    return (
      <div className="container">
        <header>
        <AccountsUIWrapper />
        </header>
        { this.data.currentUser ?
          <div>
            <h1>Chat Room</h1>
            <ul>{this.renderMessages()} </ul>
            <form className="new-message" onSubmit={this.handleSubmit} >
              <input type="text" ref="textInput" placeholder="Type to add new message" />
            </form>
          </div>:"Login to Enter Chat"
        }
        </div>
    );
  }
});