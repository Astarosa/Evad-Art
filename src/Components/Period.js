import React from 'react';
import '../Styles/Period.css';
import GetPeriodObjects from '../Requests/GetPeriodObjects';

// Ici class Period qui donne le squelette d'une periode affichée, avec les props title, date (remplacer le contneu du h3) plus le contenu

class Period extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = async () => {
    const open = !this.state.open;
    this.setState({ open });
    const periodObjects = await GetPeriodObjects(this.props.request, this.props.id);
  }

  render () {
    return (
      <div className='period-bloc-container'>
        <div className={this.state.open ? 'period-bloc-banner opened' : 'period-bloc-banner closed'} style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${this.props.url})` }}>
          <h2>{this.props.title}</h2>
          <h3>{this.props.date}</h3>
          <button onClick={this.handleOpen} className='open-content-container'>
            <span className={this.state.open ? 'close-content' : 'open-content'} />
          </button>
        </div>
        <div className={this.state.open ? 'period-bloc-content opened' : 'period-bloc-content closed'}>
          <p className='period-content'>{this.props.content.text}</p>
          <img className='period-illustration' src={this.props.content.illustration} alt={this.props.description} />
          <p className='period-description'>{this.props.content.description}</p>
        </div>
      </div>
    );
  }
}

export default Period;
