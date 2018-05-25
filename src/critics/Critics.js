import React, { Component } from 'react';
import CriticsList from './CriticsList';
import CriticDetails from './CriticDetails';
import Api from '../Api';
import './Critics.css';

class Critics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      critics: [],
      critic: {}
    }
  }

  componentDidMount() {
    this.fetchCritics('all').then(() => {
      this.selectCriticByName(this.props.match.params.name)
    });
  }

  render() {
    return (
      <div>
        <div className="critics-section">
          <CriticDetails critic={this.state.critic}/>
        </div>
        <div className="critics-section">
          <span>
            <button onClick={() => this.fetchCritics('all')}>all</button> | 
            <button onClick={() => this.fetchCritics('full-time')}>full time</button> |
            <button onClick={() => this.fetchCritics('part-time')}>part time</button>
          </span>
          <CriticsList critics={this.state.critics} onCriticSelected={this.selectCriticByName.bind(this)}/>
        </div>
      </div>
    )
  }

  fetchCritics(filter) {
    return Api.getCritics(filter).then(critics => {
      this.setState({
        critics
      })
    })
  }

  selectCriticByName(name) {
    const critic = this.state.critics.filter(critic => {
      return critic.display_name === name;
    }).reduce(a => {
      return a;
    });
    this.setState({
      critic
    })
  }
}

export default Critics;