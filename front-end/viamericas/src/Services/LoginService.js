import axios from 'axios';

const LoginService = {
    login: (payload) => new Promise(
        (resolve, reject) => {
            axios.post(
                'https://v45hh4g3q5.execute-api.us-east-1.amazonaws.com/Dev/authentication',
                payload
                )
                .then(
                    res => res.data
                )
                .then(
                    data => resolve(data)
                )
                .catch(
                    err => reject(err)
                )
        }
    )
}

export default LoginService;