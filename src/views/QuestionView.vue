<script lang="ts">
import { defineComponent } from "vue";
import QuestionService from '@/services/QuestionService';
import type QuestionDto from '@/dto/QuestionDto';
import type { text } from "@fortawesome/fontawesome-svg-core";
export default defineComponent({
    name: "question",
    data() {
        return {
            questionData: {} as QuestionDto,
            currentId: this.$route.params.id
        }
    },
    created(){
        QuestionService.getQuestionById(Number(this.$route.params.id))
        .then(response => this.questionData = response.data)
        .then(() => console.log(this.questionData));
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
        <h2>Question {{ questionData.id }}</h2>
        <p>{{ questionData.text }}</p>
        </div>
        
        
        <div class="choices">
            <button v-for="{ text } in questionData.qanswers" type="button" class="btn btn-danger">{{ text }}</button>
        </div>
    </main>
    <footer>
        <button type="button" class="btn btn-outline-secondary">Previous</button>
        <button type="button" class="btn btn-outline-secondary">Next</button>
    </footer>
</template>
<style>

</style>