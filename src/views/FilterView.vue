<script lang="ts">
import type AgeDto from '@/dto/AgeDto';
import type FilterDto from '@/dto/FilterDto';
import type GenreDto from '@/dto/GenreDto';
import type MovieResultDto from '@/dto/MovieResultDto';
import type ResponseDto from '@/dto/ResponseDto';
import AgeService from '@/services/AgeService';
import FilterService from '@/services/FilterService';
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
            incl_groups: []
        }
    },
    created(){
        this.incl_groups = localStorage.genres
        localStorage.removeItem('genres')
        GenreService.getGenres()
            .then(response => this.genres = response.data)
            .then(() => console.log(this.genres));

        AgeService.getAges()
            .then(response => this.ages = response.data)
            .then(() => console.log(this.ages));

    },
    methods: {
        submitFilter(){
            console.log("Submitted")
            let filter = {
                rating: this.selected_rating,
                min_age: this.selected_age,
                excl_genres: this.excluded_genres,
                incl_group: this.incl_groups
            } as unknown as FilterDto;

            console.log(filter.excl_genres);
            FilterService.postFilter(filter)
            .then((response: ResponseDto) => {
                localStorage.movie_results = JSON.stringify(response.data)
                console.log(response.data)
                this.$router.push("results")
            })
            .catch((e: Error) => {
                console.log(e);
            });
            
        }
    }
})
</script>

<template>
    <header>
        <div class="NnG-logo-name d-flex" id="headerN">
            <img class="ng-logo" src="@/assets/nglogo.png" alt="picture">
            <h1>Netflix & Grill</h1>
        </div>
    </header>
    <main>
        <div class="container p-3 my-3 border">
            <div>
                <p>1. Op welke rating wil je filteren?</p>
                <div class="input" v-for="(element, index) in ratings" :key="index">
                    <input type="radio" v-model="selected_rating" :value="element"/> {{ element }}
                </div>
            </div>
            <div>
                <p>2. Op welke leeftijd wil je filteren?</p>
                <div class="input" v-for="(element, index) in ages" :key="index">
                    <input type="radio" v-model="selected_age" :value="element.min_age"/> {{ element.min_age }} +
                </div>
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
                                <input class="dropdown-input" v-model="excluded_genres" type="checkbox" :value="genre.id"/>
                                {{ genre.genre_text }}
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <button type="button" class="btn btn-center btn-primary" @click="submitFilter">Submit</button>
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