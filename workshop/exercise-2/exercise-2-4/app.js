// Preset values
const FROGS = 3;
// const frogStable = [
//     {
//         name: 'Hopper',
//         color: 'blue',
//         number: '32',
//     },
//     {
//         name: 'Legs',
//         color: 'red',
//         number: '79',
//     },
//     {
//         name: 'Bouncer',
//         color: 'brown',
//         number: '6',
//     },
//     {
//         name: 'Springs',
//         color: 'purple',
//         number: '48',
//     },
//     {
//         name: 'Fred',
//         color: 'black',
//         number: '8',
//     }  
// ]
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
}
// Part 2// 

    let racers = []; 
    for (x = 0; x < FROGS; x++){
        racers.push(frogStable[x]);
        console.log(racers);
    }

    // part 3//
    racers.forEach(function(racer, id){
        const gamble = document.createElement('span');
        gamble.innerText = `frog ${racer, number}`;
        gamble.classList.add('bro');
        gamble.style.backgroundColor = racer.color;
        document.getElementById(`frog-${id +1}`).appendChild(gamble);
        // console.log(gamble);

        racers[id].progress = 0;
        racers[id].lane = `frog-${id+1}`;  
        
        const frogProgress = document.createElement('span');
        frogProgress.id = racers[id].name;
        document.getElementById(`frog-${id+1}`).appendChild(frogProgress);
        
        });


        // Part 4//

        function racingFrog(racer) {
            let progress = racer.progress;
            const trackwidth =track.offsetWidth;
            const hopHop = Math.floor(Math.random() * 100) + 1; //need to loop this around..?
            const bounce = setInterval(function(){
                progress +=  hopHop;
                if (progress > 100) {
                    progress = 100.1;
                    console.log(racer.name, 'fucking sucks');
                    clearInterval(bounce);
                }
                document.querySelector(`#${racer.lane}.frog`).style.left = `${progress}%`;
            }, Math.random() * 1000);
        }
    
        racers.forEach(function(racer) {
        racingFrog(racer);
});



//         let racingFrog = function(racers){ {
//             let progress = racer.progress;
//             const trackWidth = track.offsetWidth;
//             Math.racingFrog(Math.random() * 100) + 1 + '%'; //need to loop this around..?
//             setInterval(racers, 100);
//             clearInterval(racers);
//         }
// }


