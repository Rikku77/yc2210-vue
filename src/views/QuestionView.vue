<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "question",
    data() {
        return {
            currentId: this.$route.params.id
        }
    }
})
</script>
<template>
    <header>
        <div class="NnG-logo-name d-flex" id="headerN">
        </div>
    </header>
    <main>
        <div class="container p-3 my-3 border">
        <h2>Question {{ $route.params.id }}</h2>
        <p>Question description, start with movie question?</p>
        </div>
        
        
        <div class="choices">
            <button type="button" class="btn btn-danger">Antwoord 1</button>
            <button type="button" class="btn btn-danger">Antwoord 2</button>
            <button type="button" class="btn btn-danger">Antwoord 3</button>
            <button type="button" class="btn btn-danger">Antwoord 4</button>
        </div>
    </main>
    <footer>
        <button type="button" class="btn btn-outline-secondary">Previous</button>
        <button type="button" class="btn btn-outline-secondary">Next</button>
    </footer>
</template>
<style>

</style>