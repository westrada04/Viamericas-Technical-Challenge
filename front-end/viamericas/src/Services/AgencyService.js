import API from './config';
import ENDPOINTS from './endpoints';

const AgencyService = {
    getAll: () => new Promise(
        
        (resolve, reject) => {
            API.get(
                ENDPOINTS.AGENCIES,
                {
                    headers: {
                        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                    }
                })
                .then(
                    res =>  res.data
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

export default AgencyService;