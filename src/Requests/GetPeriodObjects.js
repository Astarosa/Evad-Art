import axios from 'axios';

const modernArtObjects = [488098, 488142, 485536, 490210];

const GetPeriodObjects = async (q, deptId) => {
  if (deptId === 9) {
    const objectList = await Promise.all(modernArtObjects.map(objectId => {
      return axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
        .then(result => result.data);
    }));
    return objectList;
  } else {
    const objectIds = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${q}&departmentId=${deptId}`)
      .then(res => res.data)
      .then(data => data.objectIDs);
    const objectList = await Promise.all(objectIds.map(objectId => {
      return axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
        .then(result => result.data);
    }));
    return objectList;
  }
};

export default GetPeriodObjects;
