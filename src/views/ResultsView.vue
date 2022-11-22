<script lang="ts">
    import type MovieResultDto from '@/dto/MovieResultDto';
import type RecipeDto from '@/dto/RecipeDto';
    import RecipeService from '@/services/RecipeService';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: "results",
        data(){
            return {
                movie_results: [] as MovieResultDto[],
                recipe_results: [] as RecipeDto[]
            }
        },
        created(){
            this.movie_results = JSON.parse(localStorage.movie_results);

            for(let i = 0; i < 3; i++){
                RecipeService.getRandomRecipe()
                .then(response => this.recipe_results.push(response.data[0]))
                .catch((e: Error) => {
                    console.log(e);
                });
            }

            console.log(this.recipe_results)

        }
    })
</script>
<template>
    <header>
        <div class="NnG-logo-name d-flex" id="headerN">
            <img src="https://via.placeholder.com/50" alt="picture">
            <h1>Netflix & Grill</h1>
        </div>
    </header>
    <main>
        <div>
            <h1 class="title-header">Your 3 selected movies</h1>
            <div class="row" v-for="movie in movie_results">
                <div class="col-4">
                    <img v-bind:src=movie.poster class="image">
                </div>
                <div class="col-8">
                    <h2 class="text-header">{{movie.title}}</h2>
                    <p>Hier komt het plot</p>
                </div>
            </div>
            <h1 class="title-header">Your 3 selected recipes</h1>
            <div class="row" v-for="recipe in recipe_results">
                <div class="col-4">
                    <img v-bind:src=recipe.img class="image">
                </div>
                <div class="col-8">
                    <h2 class="text-header">{{recipe.titel_x}}</h2>
                    <p>Hier komt het recept</p>
                </div>
            </div>
        </div>
    </main>

</template>
<style>

.text-header{
    margin-top: 0px;
}

.title-header{
    margin-bottom: 25px;
}

.movie-list{
    display: flex;
}

.movie-container{
    flex-direction: column;
}

.image {
    height: 75%;
}
</style>