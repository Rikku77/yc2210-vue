<script lang="ts">
    import type MovieResultDto from '@/dto/MovieResultDto';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: "results",
        data(){
            return {
                movie_results: [] as MovieResultDto[]
            }
        },
        created(){
            this.movie_results = JSON.parse(localStorage.movie_results)
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
                    <img :src="movie.poster" class="image">
                    <h2>{{movie.title}}</h2>
                </div>
            </div>
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