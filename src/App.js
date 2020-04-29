import React from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Period from './Components/Period';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      backgroundImageUrl: '',
    };
  }

  getBackGroundImage = async() => {
    const backgroundIndex = Math.round(Math.random()*40);
    const ids = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentIds=9&q=amelie')
      .then(res => res.data)
      .then(
        data => data.objectIDs,
        /*(error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }*/
      );
      const url = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[backgroundIndex]}`)
      .then(result => result.data)
      .then(data => data.primaryImageSmall)

      this.setState({ backgroundImageUrl: url })
  }

  componentDidMount () {
    return this.getBackGroundImage();
  }

  render () {
    return (
      <div className='App'>
        <Header backgroundImageUrl={this.state.backgroundImageUrl}/>
        <Home />
      </div>
    );
  }
}

export default App;
