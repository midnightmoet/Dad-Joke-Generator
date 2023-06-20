const btnEl = document.getElementById('btn');

const apiKey = "zdmC6GimnTQU2Y+PvjrrBA==g408NLaBe8DdGVYx";

const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'X-Api-Key': apiKey,
    }
}

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// THIS HAS TO BE AN ASYNC FUNCTION
async function getJoke(){
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    // console.log('clicked');  // test
}

btnEl.addEventListener('click', getJoke);