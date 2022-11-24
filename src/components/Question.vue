<script lang="ts">
import QuestionDto from '@/dto/QuestionDto';

export default {
    props:{
        question: QuestionDto,
        selectedAnswerId: Number
    },
    methods:{
        selectAnswer(id: Number){
            this.$emit('answerId', id)
        }
    }
    
}
</script>
<template>
<div class="container p-3 my-3 border">
    <h2>Question {{ question?.id }}</h2>
    <p>{{ question?.text}}</p>
</div>
<div class="choices">
    <button type="button" v-for="qanswer in question?.qanswers" @click.prevent="selectAnswer(qanswer.id)" class="btn btn-danger">{{qanswer.text}}</button>
</div>          
</template>
<style>
    .btn-danger:focus{
        background: rgb(6, 6, 68);
    }
</style>