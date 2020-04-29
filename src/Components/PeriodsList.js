import React from 'react';
import Period from './Period';
import periods from '../Requests/periods';
import axios from 'axios';

class PeriodsList extends React.Component {
/*     constructor(props) {
        super(props);
        this.state = {
            periodsId: '',
        }
    } */
/*     getPeriodsId = async() => {
        const periodsId = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments')
        .then(res => res.data)
        .then(data => data.departments)
        this.setState({ periodsId });
      } */

      getPeriodObjects = async() => {
        const egyptianIds = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?q=egypt&departmentId=10')
        .then(res => res.data)
        .then(data => data.objectIDs);
        const egyptianObjectList = await Promise.all(egyptianIds.map(egyptianId => {
            return axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${egyptianId}`)
            .then(result => result.data)
        }))
        console.log(egyptianObjectList)
    }
    componentDidMount() {
      return this.getPeriodObjects();
    }

  render() {
    return (
      <div>
        {periods.map(period => (
          <Period key={period.id} title={period.title} date={period.date} content={period.content} url={period.url} />
        ))}
      </div>
    )
  }
  
};

export default PeriodsList;