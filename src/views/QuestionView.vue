<script lang="ts">
import { defineComponent, VueElement } from "vue";
import QuestionService from '@/services/QuestionService';
import type QuestionDto from '@/dto/QuestionDto';
import QuestionVue from "@/components/Question.vue";
import type AnswerDto from "@/dto/AnswerDto";
export default defineComponent({
    name: "questions",
    data() {
        return {
            questions: [{}] as QuestionDto[],
            currentQuestion: 1,
            answers: [{}] as AnswerDto[]
        };
    },
    created() {
        QuestionService.getQuestions()
            .then(response => this.questions = response.data)
            .then(() => console.log(this.questions));
    },
    components: { QuestionVue },
    methods: {
        addAnswer(value: Number){
            console.log(value)
            if(this.answers.find(element => element.questionId == this.currentQuestion) === undefined){
                this.answers.push({ answerId: value, questionId: this.currentQuestion});
            }
            else{
                let answer = this.answers.find(element => element.questionId == this.currentQuestion);
                
                this.answers[answer!.questionId as number - 1].answerId = value
                this.answers.find(element => {
                    if(element.questionId == this.currentQuestion){
                        element.answerId = value;
                    }
                })
            }
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
        <div v-for="(question, index) in questions" :key="index">
            <div v-if="question.id == currentQuestion">
                <QuestionVue @answerId="addAnswer" :question="question"/>
            </div>
        </div>
    </main>
    <footer>
        <button type="button" v-if="currentQuestion > 1" class="btn btn-outline-secondary" @click="currentQuestion--">Previous</button>
        <button type="button" v-if="currentQuestion <= questions.length - 1" class="btn btn-outline-secondary" @click="currentQuestion++">Next</button>
    </footer>
</template>
<style>

</style>