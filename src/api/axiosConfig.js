import axios from 'axios';

export default axios.create ({
    
    baseURL: 'http://localhost:8080/', // base address of the API endpoints that our app will be calling
    // baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io', // base address of the API endpoints that our app will be calling
    headers: {
        'Content-Type': 'application/json'
    } // need to include ngrok so that our http request will not be blocked by cors
});