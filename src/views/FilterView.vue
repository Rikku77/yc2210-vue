<script lang="ts">
import type GenreDto from '@/dto/GenreDto';
import GenreService from '@/services/GenreService';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "filters",
    data() {
        return {
            genres: [] as GenreDto[],
            age_rating: Number,
            excluded_genres: [],
            required_genres: []
        }
    },
    created(){
        GenreService.getGenres()
            .then(response => this.genres = response.data)
            .then(() => console.log(this.genres));
    },
    methods: {
        loggenres(){
            console.log(this.excluded_genres);
        }
    }
})
</script>

<template>
    <main>
        <div class="container p-3 my-3 border">
            <div>
                <p>1. Wat is je leeftijd?</p>
                <input type="text">
            </div>
            <div>
                <p>2. Zijn er genres die je niet wilt zien?</p>
                <div class="btn-group dropdown-filter">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Selecteer Genres
                        <span class="caret"></span> 
                    </button>
                    <ul @click.stop="" class="dropdown-menu">
                        <li v-for="(genre, index) in genres" :key="index">
                            <label class="dropdown-label">
                                <input class="dropdown-input" v-model="excluded_genres" type="checkbox" :value="genre"/>
                                {{ genre.genre_text }}
                            </label>
                        </li>
                    </ul>
                </div>
                <p>{{excluded_genres}}</p>
            </div>
        </div>
    </main>
</template>

<style>
.filter-container{
    display: flex;
}

.btn {
    color: white;
}

.dropdown-label{
    color: black;
}
</style>