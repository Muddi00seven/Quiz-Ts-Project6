export const QuestionShuffle = (array :any[]) =>{
    return(
        [...array].sort(() => Math.random() - 0.5)
    )
}