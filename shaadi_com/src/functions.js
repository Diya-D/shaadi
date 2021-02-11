import axios from 'axios'
const baseUrl="http://localhost:4000";


class Function{

static register(username,password,relation){
    return axios.post(baseUrl+"/users/register",{
        username,
        password,
       relation
    })
}
}
export default Function