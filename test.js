async function loadJson(url) {
  let response = await fetch(url)
      if (response.status == 200) {
        return response.json();
      }
    };

loadJson('https://javascript.info/no-such-user.json')