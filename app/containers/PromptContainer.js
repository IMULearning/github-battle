import React, { Component } from 'react'
import Prompt from '../components/Prompt'

class PromptContainer extends Component {

  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleSubmitUser(e) {
    e.preventDefault();

    const { username } = this.state
    const { playerOne } = this.props.routeParams

    this.setState({
      username: ''
    });

    if (playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne,
          playerTwo: username
        }
      });
    } else {
      this.context.router.push(`/playerTwo/${username}`);
    }
  }

  render() {
    return (
      <Prompt
        onSubmitUser={(e) => this.handleSubmitUser(e)}
        onUpdateUser={(e) => this.handleUpdateUser(e)}
        header={this.props.route.header}
        username={this.state.username} />
    );
  }

}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired // direct access this.context without going on param hierarchy
}

export default PromptContainer
