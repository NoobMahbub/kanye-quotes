
const loadQuote = async () => {

    const res = await fetch('https://api.kanye.rest/')
    const data = await res.json();
    displayQuote(data);

    // fetch('https://api.kanye.rest/')
    // .then(res => res.json())
    // .then(data => console.log(data));
}


const displayQuote = async data =>{
    console.log(data.quote);
    const quote = document.getElementById('quote');
    quote.innerHTML = `
    <p>${data.quote}</p>
    `
    

}