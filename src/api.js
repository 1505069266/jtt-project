import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded'

//请求拦截器
axios.interceptors.request.use(function(config){
  config.method === 'post'?config.data = qs.stringify({...config.data}):config.params = {...config.params};
  config.headers['Content-Type'] ='application/x-www-from-urlencoded';
  return config;
},function(error){
  return Promise.reject(error)
  }

)

//响应拦截器
axios.interceptors.response.use(function(response){
  return response.data;
},function(error){
  return Promise.reject(error)
  }
)



//封装axios的post请求

export function fetch(url,params){
  return new Promise((resolve,reject)=>{
      axios.post(url,params)
        .then(response => {
          resolve(response);
        })
        .catch((error)=>{
          reject(error);
        })
  })
}


export default {
  data(url,params){
    return fetch(url,params);
  }
}
