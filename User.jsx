User = React.createClass({
  propTypes: {
  },
  render() {
    return (
      <li> {this.props.user.username} }</li>
    );
  }
});