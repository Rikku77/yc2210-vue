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

            for(let i = 0; i< 3; i++){
                RecipeService.getRandomRecipe()
                .then(response => this.recipe_results.push(response.data));
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
            <div class="movie-list">
                <div class="movie-container" v-for="movie in movie_results">
                    <img v-bind:src=movie.poster class="image">
                    <h2>{{movie.title}}</h2>
                </div>
            </div>
            <h1 class="title-header">Your 3 selected recipes</h1>
            <div class="recipe-list">

            </div>
        </div>
    </main>

</template>
<style>

.title-header{
    margin-bottom: 15px;
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