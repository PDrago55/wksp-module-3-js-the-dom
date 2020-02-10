// Preset values
const FROGS = 3;
const frogStable = [
    {
        name: 'Hopper',
        color: 'blue',
        number: '32',
    },
    {
        name: 'Legs',
        color: 'red',
        number: '79',
    },
    {
        name: 'Bouncer',
        color: 'brown',
        number: '6',
    },
    {
        name: 'Springs',
        color: 'purple',
        number: '48',
    },
    {
        name: 'Fred',
        color: 'black',
        number: '8',
    }  
]
// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for (i = 1; i <= FROGS; i++){
    let lane = document.createElement('li');
    lane.id = `frog-${i}`;
    // lane.innerText = i.toString();
    document.getElementById('track').appendChild(lane);
    
    let number = document.createElement('span');
    number.innerText = lane.id;
    console.log(lane);
    
    lane.appendChild(number);

    let racers = []; 
    for (x = 0; x < FROGS; x++){
        racers.push(frogStable[x]);
        console.log(racers);
    }

    racers.forEach(function(racers, id){
        const gamble = document.createElement('span');
        gamble.innerText = `frog ${racers, id}`;
        gamble.classList.add('bro');
        // gamble.style.backgroundColor = racer.color;
        // document.getElementsById(`frogs-${id =1}`).appendChild(gamble);
        console.log(gamble);
        racers[id].progress = 0;
        racers[id].lane = `frog-${id+1}`;   
        const frogProgress = document.createElement('span');
        frogProgress.id = racers[id].name;
        document.getElementById(`frog-${id+1}`).appendChild(frogProgress);
        
        })
}


