export const incrementCount = count => {
    const incremented = count+1;

    return {
        type: "INCREMENT_COUNT",
        count: incremented,
    }
}
