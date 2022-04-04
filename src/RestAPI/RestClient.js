import axios from 'axios';

class RestClient{

  static GetRequest = (getUrl)=>{
      return axios.get(getURL).then(response=>{
        return response.data;
      }).catch(error=>{
        return null;
      });
  }
}

export default RestClient
