// Task component - represents a single message item
Message = React.createClass({
  propTypes: {
    // This component gets the message to display through a React prop.
    // We can use propTypes to indicate it is required
    message: React.PropTypes.object.isRequired,
    createdAt: React.PropTypes.object.isRequired

  },
  formatDate(){
    var date = this.props.createdAt
    return moment(date).format("LLL")
  },
  render() {
    return (
      <li> {this.props.message.username} {this.props.message.text} : {this.formatDate()}</li>
    );
  }
});