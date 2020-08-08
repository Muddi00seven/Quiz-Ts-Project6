export const shuffleMath = (array: any[]) => {
    return (
        [...array].sort(() => Math.random() - 0.5)
    )
}