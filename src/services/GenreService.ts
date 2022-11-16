import http from '@/http-python'

class GenreService {
    getGenres(){
        return http.get('/genres');
    }
}

export default new GenreService();