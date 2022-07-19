async function fetch (url) {
    let response = await fetch(url)

    if (response === 200) {
        let json = await 
        return response.json
    }
    throw new Error 
}