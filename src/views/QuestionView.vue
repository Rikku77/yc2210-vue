<script lang="ts">
import { defineComponent } from "vue";
import QuestionService from '@/services/QuestionService';
import type QuestionDto from '@/dto/QuestionDto';
import QuestionVue from "@/components/Question.vue";
export default defineComponent({
    name: "questions",
    data() {
        return {
            questions: [{}] as QuestionDto[],
            currentQuestion: 1,
            answers:[{
                text: String
            }]
        };
    },
    created() {
        QuestionService.getQuestions()
            .then(response => this.questions = response.data)
            .then(() => console.log(this.questions));
    },
    components: { QuestionVue }
})
</script>
<template>
    <header>
        <div class="NnG-logo-name d-flex" id="headerN">
        </div>
    </header>
    <main>
        <div v-for="(question, index) in questions" :key="index">
            <div v-if="question.id == currentQuestion">
                <QuestionVue :question="question"/>
            </div>
        </div>
    </main>
    <footer>
        <button type="button" v-if="currentQuestion > 1" class="btn btn-outline-secondary" @click="currentQuestion--">Previous</button>
        <button type="button" v-if="currentQuestion < questions.length" class="btn btn-outline-secondary" @click="currentQuestion++">Next</button>
    </footer>
</template>
<style>

</style>