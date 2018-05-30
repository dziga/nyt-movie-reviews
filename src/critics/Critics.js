import React, { Component } from 'react';
import { connect } from 'react-redux';
import CriticsList from './CriticsList';
import CriticDetails from './CriticDetails';
import { bindActionCreators } from 'redux';
import { selectCritic, getCritics } from '../actions';
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
    this.props.getCritics('all', this.props.match.params.name);
  }

  render() {
    return (
      <div>
        <div className="critics-section">
          <CriticDetails critic={this.props.critic}/>
        </div>
        <div className="critics-section">
          <span>
            <button onClick={() => this.props.getCritics('all')}>all</button> | 
            <button onClick={() => this.props.getCritics('full-time')}>full time</button> |
            <button onClick={() => this.props.getCritics('part-time')}>part time</button>
          </span>
          <CriticsList critics={this.props.critics} onCriticSelected={this.props.selectCritic}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return {
    critics: state.critics,
    critic: state.critic
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getCritics, selectCritic}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(Critics);