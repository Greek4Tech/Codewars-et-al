fetch('https://api.nasa.gov/planetary/apod?api_key=BaNPOrMjYReLgahPgb0o70pJtfxrhVbgDMaV8dDU')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.url)
      document.querySelector('img').src = data.url
    })
    .catch(err => {
        console.log(`error ${err}`)
    });