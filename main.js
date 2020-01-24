console.log('hey yo')

const arrOfPets = [
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Alfred',
        color: 'Black',
        specialSkill: 'Collector of cuddles and archealogical expert of ancient Egypt.',
        type: 'Dog'
    },
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Rupert',
        color: 'Orange',
        specialSkill: 'Consistently learning topics of mild importance. Staring contest World Champion of the the Universe.',
        type: 'Cat'
    },
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Miles',
        color: 'Yellow',
        specialSkill: 'Ponderer of life\'s greatest questions. Often can be found begging for more treats and belly rubs.',
        type: 'Dog'
    },
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Ricky',
        color: 'Green',
        specialSkill: 'Collector of bones of ancient origin, postage stamps, and early American bank notes.',
        type: 'Dino'
    },
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Julian',
        color: 'Black',
        specialSkill: 'Uses catnip often. Has been known to associate with unsavory kitties.',
        type: 'Cat'
    },
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Dingus',
        color: 'Grey',
        specialSkill: 'Owns every Land Before Time movie on DVD, has been known to hula dance.',
        type: 'Dino'
    }
    



];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;

};


const createPetCards = () => {
    let domString = '';
    for (let i = 0; i < arrOfPets.length; i++) {
        domString += `<div class="cards">`;
        domString += `<header class="head"><h1 class="title">${arrOfPets[i].name}</h1></header>`;
        domString += `<section class="image"><img src="${arrOfPets[i].image} alt="Picture of ${arrOfPets[i].name}></section>`
        domString += `<section class="color">${arrOfPets[i].color}</section>`;
        domString += `<p class="skill">${arrOfPets[i].specialSkill}</p>`
        domString += `<footer class="foot">${arrOfPets[i].type}</footer>`
        domString += `</div>`
        
    }
    printToDom('pets', domString); 
}
console.log(arrOfPets);
createPetCards();