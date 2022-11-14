export default class QuestionDto {
    id!: Number
    text!: String
    orderNR!: Number
    qanswers!: {
        id: Number
        text: String
    }[]
}