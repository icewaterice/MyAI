import axios from   'axios'
import QS from 'qs'

axios.defaults.baseURL = "http://svn.next-store.cn/py"

//用户拦截
// axios.interceptors.request.use(
//     async config => {
//         config.headers.token = sessionStorage.getItem('token')
//         return config;
//     },
//     error => {
//         return Promise.error(error);
//     }
// )

axios.interceptors.response.use(
    response => {
        if(response.status === 200){
            return Promise.resolve(response);
        }else{
            return Promise.reject(response);
        }
    },
    error => {
        if(error.response.status){
            switch (error.response.status){
                case 401:
                    break
                
                case 403:
                    break
                
                case 404:
                    break
                
                default:
                    
            }

            return Promise.reject(error.response);
        }
    }
)

const $get = (url,params) => {
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params: params,
        })
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err.data)
        })
    });
}

const $post = (url,params) => {
    return new Promise((resolve,reject) => {
        axios.post(url,QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data);
            })
    })
}

export default{
    install: (app) => {
        app.config.globalProperties['$get'] = $get;
        app.config.globalProperties['$post'] = $post;
        app.config.globalProperties['$axios'] = axios;
    }
}