const header = document.createElement('h1');
header.innerText = 'The best How I Met Your Mother episode (according to fans)';
document.getElementById('main').appendChild(header);
header.classList.add('title');



const part1 = document.createElement('p');
part1.innerText = 'As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…';
document.getElementById('main').appendChild(part1);
part1.classList.add('imdb');


const subTitle = document.createElement('h2');
subTitle.innerText = 'The Slap Bet (Season 2, Episode 9)';
document.getElementById('main').appendChild(subTitle);
subTitle.classList.add('subtitle');
subTitle.classList.add('header');


const imdb = document.createElement('p');
imdb.innerText = 'IMDB Rating: 9.5';
document.getElementById('main').appendChild(imdb);
header.classList.add('header');
imdb.classList.add('imdb');


const bruh = document.createElement('img');
bruh.setAttribute('src', 'images/robin-sparkles.jpg');
bruh.setAttribute('alt', 'Robin Sparkles');
document.getElementById('main').appendChild(bruh);
bruh.classList.add('bruh');


const huh = document.createElement('p');
huh.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.';
document.getElementById('main').appendChild(huh);
huh.classList.add('imdb');



const plise = document.createElement('p');
plise.innerText = 'In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).';
document.getElementById('main').appendChild(plise);
plise.classList.add('imdb');



const ye = document.createElement('a');
ye.innerText = "Source";
ye.setAttribute('href', 'https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/');
document.getElementById('main').appendChild(ye);
ye.classList.add('ye');



const nuh = document.createElement('link');
nuh.setAttribute('rel', 'stylesheet');
nuh.setAttribute('href', './styles.css');
// style.setAttribute('class', 'css');
document.querySelector('head').appendChild(nuh);


// document.body.style.backgroundImage = "url./images/yellow-umbrella.jpg('yellow-umbrella.jpg')";


// In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.


// console.log();


// bruh.src = "./exercise-1-1/images/robin-sparkles.jpg" alt="Robin Sparkles"
