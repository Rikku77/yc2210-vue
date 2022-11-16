import http from '@/http-java';

class QuestionService{
    getQuestionById(id: number){
        return http.get("/Question/" + id);
    }

    getQuestions(){
        return http.get("/Question");
    }
}

export default new QuestionService();