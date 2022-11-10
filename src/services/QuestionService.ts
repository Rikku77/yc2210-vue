import type QuestionDto from '@/dto/QuestionDto';
import http from '@/http-common';

class QuestionService{
    getQuestionById(id: number){
        return http.get("/Question/" + id);
    }

    getQuestions(){
        return http.get("/Question");
    }
}

export default new QuestionService();