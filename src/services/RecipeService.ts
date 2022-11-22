import http from '@/http-python'

class RecipeService {
    getRandomRecipe(){
        return http.get('/random_recept/');
    }
}

export default new RecipeService();