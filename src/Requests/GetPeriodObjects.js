import axios from 'axios';

const GetPeriodObjects = async (q, deptId) => {
  const objectIds = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${q}&departmentId=${deptId}`)
    .then(res => res.data)
    .then(data => data.objectIDs);
  const objectList = await Promise.all(objectIds.map(objectId => {
    return axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
      .then(result => result.data);
  }));
  return objectList;
};

export default GetPeriodObjects;
