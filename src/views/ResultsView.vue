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
    <div class="container">
        <div v-for="movie in movie_results">
            <h2>{{movie.title}}</h2>
        </div>
    </div>
</template>
<style>

</style>