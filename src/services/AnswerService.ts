import http from '@/http-java';

class AnswerService{

    postAnswers(data: Number[]){
        return http.post("/GenreCalc", data);
    }
}

export default new AnswerService();