const getPuzzle = async () => {
    const response = await fetch('http://puzzle.mead.io/puzzle')
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('unable to get puzzle')
    }

}


const getCountry = async (code) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        const myCountry = data.find(country => country.alpha2Code === code)
        return myCountry.name
    } else {
        throw new Error('could not reach server')
    }
}

const getLocation = async () => {
  const data = await fetch('http://ipinfo.io/json?token=6f86111e4ab6a2')
  if (data.status === 200) {
      const response = await data.json()
      return response.country
  }  else {
      throw new Error('unable to fetch location')
  }
}

const getCurrentCountry = async () => {
    const location = await  getLocation()
    const country = await getCountry(location)
    return country
}

