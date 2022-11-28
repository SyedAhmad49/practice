import axios from 'axios'
// import Loader from './Loader'
import './loader.css'
// import  cookie from "react-cookies"
// import $ from "jquery"
// $(".NewPageLoader").css("dispaly", "block");
const request = function (options) {
    // const [loader,setLoader] = useState(true);
    // let showLoader = true;
    // <Loader isShow={showLoader}/>
    let loaderElement = document.getElementById('loader')
    loaderElement.style.display="block"
    const onSuccess = function (response) {
    // $(".NewPageLoader").css("dispaly", "none");
    // showLoader=false;
    loaderElement.style.display="none"
        return response.data
    }
    const onError = function (err) {
        loaderElement.style.display="none"
        if (err.response) {
            if (err.response.status === 401) {
                console.error('Error Message:', err.message)
            }
            // Request was made but server responded with something other than 2xx
            // console.error('Status:', err.response.status);
            // console.error('Data:', err.response.data);
            // console.error('Headers:', err.response.headers);
        } else {

            // Something else happened while setting up the request triggered the error
            console.error('Error Message:', err.message)
        }

        //return Promise.reject(err.response || err.message);
        return Promise.reject(err)
    }
    // { headers: { Authorization: cookie.load('bareer_Token') } }
    const client = axios.create()
    return client(options)
        .then(onSuccess)
        .catch(onError)
}


export default request