var React = require('react');
var PropTypes = React.PropTypes;

var UserDetailsWrapper = function(props) {
  return (
    <div className="col-sm-6">
      <p className="lead">{props.player}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.PropTypes = {
  player: PropTypes.string.isRequired
}

module.exports = UserDetailsWrapper;
