// Assuming you have a JSON file named data.json in the same directory
// Structure of data.json:
// [
//   {
//     "storeName": "Store 1",
//     "location": "Location 1",
//     "foodOptions": ["Food 1", "Food 2", ...]
//   },
//   ...
// ]

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar');
    const luckyButton = document.getElementById('luckyButton');
    const randomLocationButton = document.getElementById('randomLocation');
    const pickLocationButton = document.getElementById('pickLocation');
    const locationOptions = document.getElementById('locationOptions');
    const showFoodDiv = document.getElementById('showFood');
    const passButton = document.getElementById('pass');
    const smashButton = document.getElementById('smash');
    let currentStoreIndex = null;
    let storesData = [];

    // Fetch stores data from the JSON file
    storesData = [
        {
            "storeName": "Happy Bites",
            "location": "Downtown",
            "foodOptions": ["Pizza", "Burger", "Salad"]
        },
        {
            "storeName": "Gourmet Hub",
            "location": "Midtown",
            "foodOptions": ["Sushi", "Ramen", "Tempura"]
        },
        {
            "storeName": "Morning Delight",
            "location": "Uptown",
            "foodOptions": ["Pancakes", "Waffles", "Omelette"]
        },
        {
            "storeName": "Sunset Grill",
            "location": "Downtown",
            "foodOptions": ["Steak", "Ribs", "Baked Potato"]
        },
        {
            "storeName": "Green Leaf",
            "location": "Midtown",
            "foodOptions": ["Vegan Burger", "Quinoa Salad", "Green Smoothie"]
        }
    ]
    

    luckyButton.addEventListener('click', () => {
        document.getElementById('luckyOptions').style.display = 'block';
    });

    randomLocationButton.addEventListener('click', () => {
        currentStoreIndex = Math.floor(Math.random() * storesData.length);
        displayFoodOptions(currentStoreIndex);
    });

    pickLocationButton.addEventListener('click', () => {
        locationOptions.style.display = 'block';
        locationOptions.innerHTML = ''; // Clear previous options
        storesData.forEach((store, index) => {
            const button = document.createElement('button');
            button.textContent = store.location;
            button.className = 'btn';
            button.onclick = () => displayFoodOptions(index);
            locationOptions.appendChild(button);
        });
    });

    passButton.addEventListener('click', () => {
        if (currentStoreIndex != null) {
            displayFoodOptions(currentStoreIndex, true);
        }
    });

    smashButton.addEventListener('click', () => {
        window.location.href = 'survey.html'; // Redirect to survey page
    });

    function displayFoodOptions(index, pass = false) {
        const store = storesData[index];
        if (store) {
            showFoodDiv.style.display = 'block';
            showFoodDiv.innerHTML = '<h3>Food Option:</h3>';
            const randomFoodIndex = Math.floor(Math.random() * store.foodOptions.length);
            showFoodDiv.innerHTML += `<p>${store.foodOptions[randomFoodIndex]}</p>`;
        }
        if (pass) {
            currentStoreIndex = (currentStoreIndex + 1) % storesData.length; // Move to next store
        }
    }

    // Search functionality (for preview)
    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredStores = storesData.filter(store => store.storeName.toLowerCase().includes(searchText) || store.location.toLowerCase().includes(searchText));
        // You can display the filteredStores below the search bar as a preview
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    });

    // ... (rest of your code)
});
