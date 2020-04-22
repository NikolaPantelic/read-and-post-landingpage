import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

axios.interceptors.request.use(request => {
    console.log(request);
    // Here we can edit request configuration
    return request;
},error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Here we can edit request configuration
    return response;
},error => {
    console.log(error);
    return Promise.reject(error);
});

// removing of interceptor : var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);



ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
