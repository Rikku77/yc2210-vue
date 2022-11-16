<script lang="ts">
import type AgeDto from '@/dto/AgeDto';
import type GenreDto from '@/dto/GenreDto';
import AgeService from '@/services/AgeService';
import GenreService from '@/services/GenreService';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "filters",
    data() {
        return {
            genres: [] as GenreDto[],
            ages: [] as AgeDto[],
            ratings: Array.from(Array(10).keys()).map(x => x + 1),
            selected_rating: null,
            selected_age: null,
            excluded_genres: [],
            required_genres: []
        }
    },
    created(){
        GenreService.getGenres()
            .then(response => this.genres = response.data)
            .then(() => console.log(this.genres));

        AgeService.getAges()
            .then(response => this.ages = response.data)
            .then(() => console.log(this.ages));
    }
})
</script>

<template>
    <main>
        <div class="container p-3 my-3 border">
            <div>
                <p>1. Op welke rating wil je filteren?</p>
                <div class="input" v-for="(element, index) in ratings" :key="index">
                    <input type="radio" v-model="selected_rating" :value="element"/> {{ element }}
                </div>
                <p> selected rating: {{ selected_rating }}</p>
            </div>
            <div>
                <p>2. Op welke leeftijd wil je filteren?</p>
                <div class="input" v-for="(element, index) in ages" :key="index">
                    <input type="radio" v-model="selected_age" :value="element.min_age"/> {{ element.min_age }} +
                </div>
                <p>selected age: {{ selected_age }}</p>
            </div>
            <div>
                <p>3. Zijn er genres die je niet wilt zien?</p>
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
            <div>
                <p>4. Zijn er genres die vereist zijn?</p>
                <div class="btn-group dropdown-filter">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Selecteer Genres
                        <span class="caret"></span> 
                    </button>
                    <ul @click.stop="" class="dropdown-menu">
                        <li v-for="(genre, index) in genres" :key="index">
                            <label class="dropdown-label">
                                <input class="dropdown-input" v-model="required_genres" type="checkbox" :value="genre"/>
                                {{ genre.genre_text }}
                            </label>
                        </li>
                    </ul>
                </div>
                <p>{{required_genres}}</p>
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

    .input {
        color: white;
    }
</style>