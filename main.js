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
        domString += `<header><h1>${arrOfPets[i].name}</h1></header>`;
        domString += `<div class="image"><img src="${arrOfPets[i].image} alt="Picture of ${arrOfPets[i].name}></div>`
        domString += `<section>${arrOfPets[i].color}</section>`;
        domString += `<p>${arrOfPets[i].specialSkill}</p>`
        domString += `<footer>${arrOfPets[i].type}</footer>`
        domString += `</div>`
        
    }
    printToDom('pets', domString); 
}
console.log(arrOfPets);
createPetCards();