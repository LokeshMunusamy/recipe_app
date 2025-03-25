// let apiKey = '68a32d20b82e4216bbc04947c8af0512';

// let apiUrl = 'https://api.spoonacular.com/recipes/random'; 

// let cuisinesLink = 'https://api.spoonacular.com/recipes/complexSearch';

// let addNumber = 0; 

// let loader = document.querySelector('.loader-container');

// async function recipeData() {
    
//     let query = `${apiUrl}?apiKey=${apiKey}&number=${12+addNumber}`;
    
//     try {
//         const response = await fetch(query);
//         loader.style.display = 'block';
//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         }
//         const data = await response.json();
//         displayProduct(data.recipes);
//         scrollImg(data.recipes); 
        
//     } catch (error) {
//         console.error(error); 
//     }
// }

// recipeData(); 

// function scrollImg(apiData) {
//     let scroll = document.querySelector('.scroll-recipe');
//     scroll.innerHTML = ''; 

//     apiData.forEach(ele => {
//         scroll.innerHTML += `
//             <div class="recipe-scroll"> 
//                 <img src="${ele.image}" alt="Recipe Image">
//                 <p>${ele.title}</p>
//             </div>`;
//     });
//     loader.style.display = 'none';
// }

// let flag = true;

// function displayProduct(apiData) {
//     let recipesContainer = document.querySelector('.recipe-container');
//     let filterBtn = document.querySelector('.filterbtn');
//     let cuisine=['All']
//     if(!flag)recipesContainer.innerHTML = '';
    
//     apiData.forEach(ele => {
//         const recipeDiv = document.createElement('div');
//         recipeDiv.classList.add('recipe-data');
//         recipeDiv.innerHTML = `
//             <img src="${ele.image}" alt="Recipe Image">
//             <p>${ele.title}</p>
//         `;

//         recipesContainer.appendChild(recipeDiv);
        
//         cuisine = [...cuisine,...ele.cuisines]
//          cuisine=[...new Set(cuisine)];

//          recipeDiv.addEventListener('click',()=>{
//             document.querySelector('.popup').innerHTML = ` <h1>${ele.title}</h1>
//                                                         <img src=${ele.image} alt="Product image">
//                                                         <p>${ele.pricePerServing}</p>
//                                                          <i class="fas fa-times popup-xmark"></i> `;
            
//             document.querySelector('.popup').style.display = 'block';
//          })

//         //  console.log(cuisine);

//     });
//     recipeDiv.querySelector('.popup-xmark').addEventListener('click',()=>{
//         document.querySelector('.popup').style.display = 'none';
//     })

//     loader.style.display = 'none';

//     filterBtn.innerHTML = cuisine.map(x=>`<button class ='filtercountry'>${x}</button>`).join(''); 

//     let filterCuisine = filterBtn.querySelectorAll('.filtercountry');

    
//         filterCuisine.forEach((btn)=>{
//             btn.addEventListener('click',()=>{
        
//             console.log(btn.textContent);
//             searchAndCuisine(country = `${btn.textContent}`) 
                
//         })
//     })
    
// }

// async function searchAndCuisine(search,country){
    
//     let query = `${cuisinesLink}?apiKey=${apiKey}&${search ?`query=${search}`:`type=${country}`}`;

//     loader.style.display = 'block';

//     try {
//         const response = await fetch(query);
//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         }
//         const data = await response.json();
//         if(search){
//             scrollImg(data.results);
//         }else{
//             displayProduct(data.results);
//             flag = false;
//         }
        
        
//     } catch (error) {
//         console.error(error); 
//     }
    
// }

// document.querySelector('.search-btn').addEventListener('click',()=>{
//     let inputValue = document.querySelector('.search').value.trim();
//     searchAndCuisine(search=`${inputValue}`);
// })

// document.querySelector('.add-more').addEventListener('click',()=>{
//     addNumber+=12;
//     recipeData()
// })


let apiKey = '68a32d20b82e4216bbc04947c8af0512';
let apiUrl = 'https://api.spoonacular.com/recipes/random'; 
let cuisinesLink = 'https://api.spoonacular.com/recipes/complexSearch';
let addNumber = 0; 
let loader = document.querySelector('.loader-container');

async function recipeData() {
    let query = `${apiUrl}?apiKey=${apiKey}&number=${12 + addNumber}`;

    try {
        loader.style.display = 'block'; 
        const response = await fetch(query);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        displayProduct(data.recipes);
        scrollImg(data.recipes);
    } catch (error) {
        console.error(error);
        loader.style.display = 'none'; 
    }
}

recipeData();

function scrollImg(apiData) {
    let scroll = document.querySelector('.scroll-recipe');
    scroll.innerHTML = '';

    apiData.forEach(ele => {
        scroll.innerHTML += `
            <div class="recipe-scroll">
                <img src="${ele.image}" alt="Recipe Image">
                <p>${ele.title}</p>
            </div>`;
    });

    loader.style.display = 'none'; 
}

let flag = true;

function displayProduct(apiData) {
    let recipesContainer = document.querySelector('.recipe-container');
    let filterBtn = document.querySelector('.filterbtn');
    let cuisine = ['All'];

    if (!flag) recipesContainer.innerHTML = '';

    apiData.forEach(ele => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe-data');
        recipeDiv.innerHTML = `
            <img src="${ele.image}" alt="Recipe Image">
            <p>${ele.title}</p>
        `;

        recipesContainer.appendChild(recipeDiv);

        
        cuisine = [...cuisine, ...ele.cuisines];
        cuisine = [...new Set(cuisine)];

        recipeDiv.addEventListener('click', () => {
            const popup = document.querySelector('.popup');
            popup.innerHTML = `
                <h1>${ele.title}</h1>
                <img src="${ele.image}" alt="Product image">
                <p>${ele.pricePerServing}</p>
                <i class="fas fa-times popup-xmark"></i>
            `;
            popup.style.display = 'block';

            
            const closeBtn = popup.querySelector('.popup-xmark');
            closeBtn.addEventListener('click', () => {
                popup.style.display = 'none';
            });
        });
    });

    
    filterBtn.innerHTML = cuisine.map(x => `<button class='filtercountry'>${x}</button>`).join('');

    let filterCuisine = filterBtn.querySelectorAll('.filtercountry');
    filterCuisine.forEach((btn) => {
        btn.addEventListener('click', () => {
            console.log(btn.textContent);
            searchAndCuisine(country = `${btn.textContent}`);
        });
    });

    loader.style.display = 'none'; 
}

async function searchAndCuisine(search, country) {
    let query = `${cuisinesLink}?apiKey=${apiKey}&${search ? `query=${search}` : `type=${country}`}`;

    loader.style.display = 'block'; 

    try {
        const response = await fetch(query);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        if (search) {
            scrollImg(data.results);
        } else {
            displayProduct(data.results);
            flag = false;
        }
    } catch (error) {
        console.error(error);
        loader.style.display = 'none'; 
    }
}

document.querySelector('.search-btn').addEventListener('click', () => {
    let inputValue = document.querySelector('.search').value.trim();
    searchAndCuisine(search = `${inputValue}`);
});

document.querySelector('.add-more').addEventListener('click', () => {
    addNumber += 12;
    recipeData();
});

