/* import axios from 'axios';

const GetPeriodObjects = async() => {
  const egyptianIds = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=egypt&departmentId=10`)
  .then(res => res.data)
  .then(data => data.objectIDs);
  const egyptianObjectList = await Promise.all(egyptianIds.map(egyptianId => {
      return axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${egyptianId}`)
      .then(result => result.data)
  }))
}

export default GetPeriodObjects; */