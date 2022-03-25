import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getPost = ()=>{
    axios.get(`${BASE_URL}/posts`).then(res=>{
        console.log(res.data);
    }).catch(err=>{
        console.log(err);
    })

}
export {
    getPost
}