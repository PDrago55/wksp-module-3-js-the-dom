// Preset values
const FROGS = 3;

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

// for (i = 1; i <= FROGS; i++){
//     let lane = document.createElement('li');
//     lane.id = i;
//     innerText = i.toString();
//     document.getElementById('track').appendChild(lane);
//     console.log (i);
// }

    // 2. Create li    

    // 3. Create span and add it to the li

    // 4. Assign an id to each lane
