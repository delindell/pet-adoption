console.log('hey yo')

const arrOfPets = [
    {
        image: "https://live.staticflickr.com/5821/23232445753_23b8918c8b_c.jpg",
        name: 'Alfred',
        color: 'Black',
        specialSkill: 'Collector of cuddles and archealogical expert of ancient Egypt. blah blah blah blah blah blah blah blah blah blah blah',
        type: 'Dog'
    },
    {
        image: "https://images.unsplash.com/photo-1558898268-8bfca156542d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        name: 'Rupert',
        color: 'Orange',
        specialSkill: 'Consistently learning topics of mild importance. Staring contest World Champion of the Universe.',
        type: 'Cat'
    },
    {
        image: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s69-ted0721-ae-l.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=ad60d5d060432a28ecdbd0a0c415fdfe",
        name: 'Miles',
        color: 'Yellow',
        specialSkill: 'Ponderer of life\'s greatest questions. Often can be found begging for more treats and belly rubs. blah blah blah',
        type: 'Dog'
    },
    {
        image: "https://blog.modernsetups.com/wp-content/uploads/2019/04/cute-green-dino-cartoon-design.png?x97945",
        name: 'Ricky',
        color: 'Green',
        specialSkill: 'Collector of bones of ancient origin, postage stamps, and early American bank notes.',
        type: 'Dino'
    },
    {
        image: "https://images.unsplash.com/photo-1570018144466-5a3251ecd588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=594&q=80",
        name: 'Julian',
        color: 'Black',
        specialSkill: 'Uses catnip often. Has been known to associate with unsavory kitties. blah blah blah blah blah.',
        type: 'Cat'
    },
    {
        image: "https://images.unsplash.com/photo-1562669769-46f542aadf55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        name: 'Dingus',
        color: 'Grey',
        specialSkill: 'Owns every Land Before Time movie on DVD, has been known to hula dance. blah blah blah blah blah',
        type: 'Dino'
    }
    



];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;

};

//const createButton = () => {
//    let domButton = '';
//    for (let i = 0; i < arrOfPets.length; i++) {
//        if (arrOfPets[i].type === 'Dog') {
//            domButton += `<button class="dbutt">Dogs</button>`
//            console.log('hello')
//        } else if (arrOfPets[i].type === 'Cat') {
//             domButton += `<button class="cbutt">Cats</button>`    
//        } else if (arrOfPets[i].type === 'Dino') {
//            domButton += `<button class="dinobutt">Dinos</button>`
//        } else {
//            domButton += `<button class="abutt">All Pets</button>`
//        }  
//    }
//    printToDom ('button', domButton)
//}

const createButton = () => {
    let domButton = `<button class="dbutt">Dogs</button><button class="cbutt">Cats</button><button class="dinobutt">Dinos</button><button class="abutt">All Pets</button>`
    printToDom ('button', domButton);
    domButton.addEventListener("click", function(){ alert("Hello World!"); });
    

}






const createPetCards = () => {
    let domString = '';
    for (let i = 0; i < arrOfPets.length; i++) {
        if (arrOfPets[i].type === 'Dog'){
        domString += `<div class="cards">`;
        domString += `<header class="dhead"><h1 class="title">${arrOfPets[i].name}</h1></header>`;
        domString += `<section class="image"><img src="${arrOfPets[i].image} alt="Picture of ${arrOfPets[i].name}></section>`
        domString += `<section class="color"><strong>Color</strong>:   ${arrOfPets[i].color}</section>`;
        domString += `<p class="skill"><strong>Special Skills</strong>:    ${arrOfPets[i].specialSkill}</p>`
        domString += `<footer class="fdog">${arrOfPets[i].type}</footer>`
        domString += `</div>`
        }
        else if (arrOfPets[i].type === 'Cat') {
        domString += `<div class="cards">`;
        domString += `<header class="chead"><h1 class="title">${arrOfPets[i].name}</h1></header>`;
        domString += `<section class="image"><img src="${arrOfPets[i].image} alt="Picture of ${arrOfPets[i].name}></section>`
        domString += `<section class="color"><strong>Color</strong>:   ${arrOfPets[i].color}</section>`;
        domString += `<p class="skill"><strong>Special Skills</strong>:    ${arrOfPets[i].specialSkill}</p>`
        domString += `<footer class="fcat">${arrOfPets[i].type}</footer>`
        domString += `</div>`
        }
        else {
        domString += `<div class="cards">`;
        domString += `<header class="dinohead"><h1 class="title">${arrOfPets[i].name}</h1></header>`;
        domString += `<section class="image"><img src="${arrOfPets[i].image} alt="Picture of ${arrOfPets[i].name}></section>`
        domString += `<section class="color"><strong>Color</strong>:   ${arrOfPets[i].color}</section>`;
        domString += `<p class="skill"><strong>Special Skills</strong>:    ${arrOfPets[i].specialSkill}</p>`
        domString += `<footer class="fdino">${arrOfPets[i].type}</footer>`
        domString += `</div>`
        }
    }
    printToDom('pets', domString); 
}
console.log(arrOfPets);
createPetCards();
createButton();