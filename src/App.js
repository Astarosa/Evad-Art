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
    return (
      this.getBackGroundImage()
    );
  }

  render () {
    return (
      <div className='App'>
        <Header backgroundImageUrl={this.state.backgroundImageUrl} />
        <PeriodsList />
      </div>
    );
  }
}

export default App;
