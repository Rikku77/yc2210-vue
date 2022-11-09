export default interface QuestionDto {
    "id": number,
    "text": string,
    "orderNR": number,
    "qanswers":
    {
        "id": number,
        "text": string
    }[]
}