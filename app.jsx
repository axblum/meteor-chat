// App component - represents the whole app
App = React.createClass({
   mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      messages: Messages.find({}).fetch()
    }
  },
  renderMessages() {
    return this.data.messages.map((message) => {
      return <Message key={message._id} message={message} createdAt={message.createdAt}/>;
    });
  },
  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();

    Messages.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    React.findDOMNode(this.refs.textInput).value = "";
  },
  render() {
    return (
      <div className="container">
        <header>
          <h1>Chat Room</h1>
        </header>
        <form className="new-message" onSubmit={this.handleSubmit} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new message" />
          </form>
        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
});