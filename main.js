
fetch("https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20", {
    "method":"GET",
    "headers": { 'X-RapidAPI-Key': '21103a6e2cmsh1b060e66b481e1ep13b2dajsn63885e2516fb',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'}
})
.then (response => response.json() )
.then ( data => {
    const list = data.d;
    list.map((item) => {
       const name = item.l;
       const poster = item.i.imageUrl;
       const movie = `<li><img src= "${poster}"> <h2>${name}</h2></li>`
       document.querySelector('.movies').innerHTML += movie
    })
} )
// .catch(err => {
//     console.error(err);
// });



