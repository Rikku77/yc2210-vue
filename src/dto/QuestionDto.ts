export default class QuestionDto {
    id!: Number
    text!: String
    orderNR!: Number
    qanswers!: {
        text: String
    }[]
}