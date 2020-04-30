import React from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import axios from 'axios';
import PeriodsList from './Components/PeriodsList';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      backgroundImageUrl: ''
    };
  }

  getBackGroundImage = async () => {
    const backgroundIndex = Math.round(Math.random() * 714);
    const ids = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=a&departmentIds=9')
      .then(res => res.data)
      .then(data => data.objectIDs);

    const url = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[backgroundIndex]}`)
      .then(result => result.data)
      .then(data => data.primaryImageSmall);

    this.setState({ backgroundImageUrl: url });
  }

  componentDidMount () {
    this.getBackGroundImage();
    this.timerID = setInterval(() => {
      this.getBackGroundImage();
    }, 4000);
  }

  componentWillUnmount () {
    clearInterval(this.timerID);
  }

  render () {
    return (
      <div className='App'>
        <Header backgroundImageUrl={this.state.backgroundImageUrl} />
        <h2 className='intro'>Au fil des époques, l'art s'est exprimé de différentes manières. S'il est difficile l'appréhender, rien n'est laissé au hasard. Pour voyager au sein du MetMuseum et découvrir l'art à différentes époques depuis votre canapé, suivez le guide !</h2>
        <PeriodsList />
        <h2 className='intro'>"L'histoire des artistes ne peut être racontée qu'une fois que sont devenues claires, après un certain laps de temps, l'influence que leur oeuvre a exercé sur d'autres et les contributions qu'ils ont faites à l'histoire de l'art en tant que telle"</h2>
        <h3 className='author-quote'>Ernst Gombrich</h3>
      </div>
    );
  }
}

export default App;
