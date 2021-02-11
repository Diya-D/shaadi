import axios from 'axios'
const baseUrl="http://localhost:4000"

class Shaadi{
    static login(username,password){
        return axios.post(baseUrl+"/users/login",{
              username,
              password
          },{ withCredentials:true})
      }
      static register(username,password,relation,fullname,dob,religion,community,place){
          return axios.post(baseUrl+"/users/register",{
              username,
              password,
              relation,
              fullname,dob,religion,community,place

          })
      }
}