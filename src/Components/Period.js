import React from 'react';
import '../Styles/Period.css';
import GetPeriodObjects from '../Requests/GetPeriodObjects';

// Ici class Period qui donne le squelette d'une periode affichée, avec les props title, date (remplacer le contneu du h3) plus le contenu

class Period extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false,
      periodObjects: []
    };
  }

  handleOpen = async () => {  
    const open = !this.state.open;
    this.setState({ open });
    const periodObjects = await GetPeriodObjects(this.props.request, this.props.id);
    console.log(periodObjects);
    this.setState({ periodObjects });
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
          <div className='discover-object-container'>
            <h4>Explorer des oeuvres de cette période</h4>
            {this.state.periodObjects.slice(0, 3).map(object => (
              <div className='object-container' key={object.objectURL}>
                <a href={object.objectURL} target='_blank' rel='noopener noreferrer'><div className='object-image-container' style={{backgroundImage: `url(${object.primaryImageSmall})`}}/></a>
                <h5>{object.title}</h5>
                <h6>{object.artistDisplayName}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Period;
