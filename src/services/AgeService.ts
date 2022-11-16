import http from '@/http-python'

class AgeService {
    getAges(){
        return http.get('/min_age');
    }
}

export default new AgeService();