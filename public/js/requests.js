const getPuzzle = async () => {
    const response = await fetch('//puzzle.mead.io/puzzle')
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('unable to get puzzle')
    }
}

