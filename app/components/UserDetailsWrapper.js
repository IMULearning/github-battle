import React, { PropTypes } from 'react'

var UserDetailsWrapper = function({player, children}) {
  return (
    <div className="col-sm-6">
      <p className="lead">{player}</p>
      {children}
    </div>
  )
}

UserDetailsWrapper.PropTypes = {
  player: PropTypes.string.isRequired
}

export default UserDetailsWrapper
