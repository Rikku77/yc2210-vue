import http from '@/http-common';

class AnswerService{

    postAnswers(data: Number[]){
        return http.post("/GenreCalc", data);
    }
}

export default new AnswerService();