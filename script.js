// cuisines
// https://api.spoonacular.com/recipes/complexSearch?cuisine=indian&apiKey=61ba7261179a496cb67d893408817c48;

// search particular resipe

// https://api.spoonacular.com/recipes/complexSearch?query=Rice and Peas with Coconut Curry Mackerel&apiKey=61ba7261179a496cb67d893408817c48

// https://api.spoonacular.com/recipes/random?apiKey=61ba7261179a496cb67d893408817c48


// nested ternary

// let age = 25;

// let category = age < 18 ? 'Child' :
//                (age < 21 ? 'Young Adult' : 
//                (age < 60 ? 'Adult' : 'Senior'));

// console.log(category);



let apiKey = '059bae3dc36242be90a54696706936f8';
let apiUrl = 'https://api.spoonacular.com/recipes/random'; 
let cuisinesLink = 'https://api.spoonacular.com/recipes/complexSearch';

let cuisine;

async function recipeData(cuisine) {
    let query = cuisine ? `${cuisinesLink}?cuisine=${cuisine}&apiKey=${apiKey}` : `${apiUrl}?apiKey=${apiKey}&number=15`;
    try {
        const response = await fetch(query);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json(); 

        displayProduct(data.recipes); 
        scrollImg(data.recipes); 
        
    } catch (error) {
        console.error(error); 
    }
}

recipeData(); 

function scrollImg(apiData,){
    let scroll = document.querySelector('.scroll-recipe');
    scroll.innerHTML = ''; 

    apiData.forEach(ele => {
        scroll.innerHTML += `
            <div class="recipe-scroll"> 
                <img src="${ele.image}" alt="Recipe Image">
                <p>${ele.title}</p>
            </div>`;

    });

}

function displayProduct(apiData) {
    let recipesContainer = document.querySelector('.recipe-container');

    apiData.forEach(ele => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe-data');
        recipeDiv.innerHTML = `
            <img src="${ele.image}" alt="Recipe Image">
            <p>${ele.title}</p>
        `;


        recipeDiv.addEventListener('click', () => {
            console.log(ele.title); 
        });

        recipesContainer.appendChild(recipeDiv);

    });
};

document.querySelector('.add-more').addEventListener('click',()=>{
    recipeData();
})

async function searchAndCuisines(recipeName,counry){

    let query = `${cuisinesLink}?query=${recipeName}&apiKey=${apiKey}`; 
    try {
        const response = await fetch(query);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json(); 

       
        scrollImg(data.recipes); 
        
        
    } catch (error) {
        console.error(error); 
    }
}

let searchBtn = document.querySelector('.search-btn'); 

searchBtn.addEventListener('click',()=>{
    let searchRecipe = document.querySelector('.search').value.trim();
    searchAndCuisines(recipeName = `${searchRecipe}`);

})


let country = document.querySelectorAll('li');

country.forEach(ele => {
    ele.addEventListener('click', () => {

        if(ele.textContent == 'All'){
            recipeData();
        }else{
            recipeData(cuisine=`${ele.textContent.toLowerCase()}`)
        }
        console.log(ele.textContent); 
    });
});














// let cuisines;

// let apiKey = '61ba7261179a496cb67d893408817c48'; 
// let apiUrl = 'https://api.spoonacular.com/recipes/random'; 
// let cuisinesLink = 'https://api.spoonacular.com/recipes/complexSearch';

// async function recipeData(search, cuisines) {
    
//     let query = search ? `${cuisinesLink}?query=${search}&apiKey=${apiKey}&number=15`
//                 : cuisines ? `${cuisinesLink}?cuisine=${cuisines}&apiKey=${apiKey}&number=15`
//                 : `${apiUrl}?apiKey=${apiKey}&number=15`;  

//     try {
//         const response = await fetch(query);
//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         }
//         const data = await response.json();
//         cuisines = response.cuisines
//         console.log(cuisines);
        
        
//         const recipes = data.results || data.recipes || [];

        
//         if (recipes.length > 0) {
//             displayProduct(recipes);
//         } else {
//             console.log("No recipes found.");
//         }

//     } catch (error) {
//         console.error('Error:', error); 
//     }
// }


// recipeData(); 

// function displayProduct(apiData) {
//     let recipesContainer = document.querySelector('.recipe-container');
//     // recipesContainer.innerHTML = '';      
//     apiData.forEach(ele => {
//         recipesContainer.innerHTML += `
//             <div class="recipe-data">
//                 <img src="${ele.image}" alt="Recipe Image">
//                 <p class='api-title'>${ele.title}</p>
//             </div>`;
//     });
// }





