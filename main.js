console.log('hey yo')

const arrOfPets = [
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Alfred',
        color: 'Black',
        specialSkill: 'Collector of cuddles',
        type: 'Dog'
    },
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Alfred',
        color: 'Black',
        specialSkill: 'Collector of cuddles',
        type: 'Dog'
    },
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Alfred',
        color: 'Black',
        specialSkill: 'Collector of cuddles',
        type: 'Dog'
    },
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Alfred',
        color: 'Black',
        specialSkill: 'Collector of cuddles',
        type: 'Dog'
    },
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Alfred',
        color: 'Black',
        specialSkill: 'Collector of cuddles',
        type: 'Dog'
    },
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Alfred',
        color: 'Black',
        specialSkill: 'Collector of cuddles',
        type: 'Dog'
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
        domString += `<div class="image"><img src="${arrOfPets[i].image} alt="Picture of ${arrOfPets[i].name}>`
        domString += `<section class="color">${arrOfPets[i].color}</section>`;
        domString += `<p class="skill">${arrOfPets[i].specialSkill}</p>`
        domString += `<footer class="foot">${arrOfPets[i].type}</footer>`
        domString += `</div>`
        
    }
    printToDom('pets', domString); 
}
console.log(arrOfPets);
createPetCards();