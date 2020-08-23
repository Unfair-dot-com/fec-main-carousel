import axios from 'axios';

// const serverURL = 'http://ec2-3-80-148-248.compute-1.amazonaws.com';
let apiHost = process.env.host || 'http://localhost:5001';
// 3.80.148.248

// query the instance metadata
axios.get('http://169.254.169.254/latest/meta-data/public-ipv4')
  .then((text) => { console.log('metadata query successful! ', text); })
  .catch((error) => { console.log('metadata query not successful ', error); });

// if the url is not valid, set serverURL to localhost
// if the url is valid, set serverURL to http://ec2-3-80-148-248.compute-1.amazonaws.com;

export default apiHost;
