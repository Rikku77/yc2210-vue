import type QuestionDto from '@/dto/QuestionDto';
import http from '@/http-common';

class QuestionService{
    getQuestionById(id: number){
        return http.get("/Question/" + id);
    }
}

export default new QuestionService();