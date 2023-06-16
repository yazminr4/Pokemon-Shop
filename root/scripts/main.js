const url = 'https://pokeapi.co/api/v2/pokemon';

// // const character = fetch(`${url}/character`)
// // .then(res => res.json())
// // .then(data => {
// //     data.results.forEach(character => {
// //         console.log(character.name)
        
// //     });
// // })

const fetchApi = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        
    }
}

fetchApi(url)