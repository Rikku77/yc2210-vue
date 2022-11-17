import type FilterDto from '@/dto/FilterDto';
import http from '@/http-python'

class FilterService {
    postFilter(filter: FilterDto){
        return http.post('/filter_movies', filter);
    }
}

export default new FilterService();