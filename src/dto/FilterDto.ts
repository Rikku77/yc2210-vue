import type GenreDto from "./GenreDto";

export default class FilterDto{
    rating!: Number;
    min_age!: Number;
    excl_genres!: []
    incl_group!: []
}