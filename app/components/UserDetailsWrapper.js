import React, { PropTypes } from 'react'

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

export default UserDetailsWrapper
