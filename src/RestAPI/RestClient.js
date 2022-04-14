import axios from 'axios';

class RestClient {

     static GetRequest = async (getUrl)=>{
          try {
               const response = await axios.get(getUrl);
               return response.data;
          } catch (error) {
               return null;
          }
     }

     static PostRequest = async (postUrl,postJson)=>{
          let config={
               headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
          }
             try {
               const response = await axios.post(postUrl, postJson, config);
               return response.data;
          } catch (error) {
               return null;
          }
     }

}

export default RestClient
