const getPuzzle = () => {
    return fetch('http://puzzle.mead.io/puzzle').then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}


const getCountry = (code) => {
    return fetch('https://restcountries.eu/rest/v2/all').then(response => {
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('unable to get data')
    }
  }).then((data) => {
      let result = data.find(e => e.alpha2Code === code)
      return result.name
  })
}

const getLocation = () => {
   return fetch('http://ipinfo.io/json?token=6f86111e4ab6a2').then(response => {
        if (response.status === 200) {
          return  response.json()
        } else {
            throw new Error('will not connect')
        }
    }).then(data => {
        return data.country
    })
}


// const getPuzzle = () => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest() 

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('You have had an error')
//         }
//     })

//     request.open('GET', 'http://puzzle.mead.io/puzzle')
//     request.send()
// })



// const getCountry = (code) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()
//     countryCode = code

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const result = data.find(e => e.alpha2Code === countryCode)
//                 resolve(result)
//         } else if (e.target.readyState === 4) {
//             reject('This is your error')
//         }
//     })
//     request.open('GET', 'https://restcountries.eu/rest/v2/all')
//     request.send()

// })
