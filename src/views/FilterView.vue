<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "filters"
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
                        <li>
                            <label class="dropdown-label">
                                <input type="checkbox"> Genre 1
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-label">
                                <input type="checkbox"> Genre 2
                            </label>
                        </li>
                        <li>
                            <label class="dropdown-label">
                                <input type="checkbox"> Genre 3
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <label></label>
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

input[type="checkbox"] {
    margin-right: .5em;
}
</style>