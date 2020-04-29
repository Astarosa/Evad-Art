import React from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ids: []
    };
  }

  getBackGroundImage = () => {
    axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=9')
      .then(res => res.data)
      .then(
        (data) => {
          console.log(data.objectIDs);
          console.log(Object.keys(data));
          this.setState({
            isLoaded: true,
            ids: data.objectIDs
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentDidMount () {
    return this.getBackGroundImage();
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
