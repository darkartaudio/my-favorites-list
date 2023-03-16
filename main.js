// Create a hyperlink and append to page
let a = document.createElement('a');
a.href = "http://hackertyper.com";
a.textContent = "Hack!";

document.body.appendChild(a);


// Use my-favorite-movies example to create
//     * my-favorite-books
//         * use insertBefore() to each list
let bookList = document.getElementById("my-favorite-books");
let bookListArray = [...bookList.children];
      
let newBook = document.createElement("li");
newBook.textContent = "Breakfast of Champions";

bookList.insertBefore(newBook, bookListArray[bookListArray.length - 1]);

//     * my-closet
//         * use insertBefore() to each list
let closetList = document.querySelector('#my-closet');
let closetListItems = closetList.children;

let newClosetListItem = document.createElement('li');
newClosetListItem.textContent = "shoes";

closetList.insertBefore(newClosetListItem, closetListItems[closetListItems.length - 1]);

// Moving Elements: Create the dinner section using JavaScript only
let dinner = document.createElement("h1");
dinner.textContent = "Dinner";
let dinnerList = document.createElement("ul");
dinnerList.id = "dinner-foods";

// grab lunch ul and insert dinner after
let lunch = document.querySelector('#lunch-foods');
lunch.parentNode.insertBefore(dinnerList, lunch.nextSibling);
lunch.parentNode.insertBefore(dinner, lunch.nextSibling);

function moveToDinner (e) {
    const breakfastList = document.querySelector('#breakfast-foods');
    const breakfastItems = breakfastList.children;

    const lunchList = document.querySelector('#lunch-foods');
    const lunchItems = lunchList.children;
    
    // if breakfast list isn't empty, move last item to dinner list
    if (breakfastItems.length > 0) {
        let foodToMove = breakfastList.removeChild(breakfastItems[breakfastItems.length - 1]);
        dinnerList.appendChild(foodToMove);
    // if breakfast list is empty, do the same with lunch list
    } else if (lunchItems.length > 0) {
        let foodToMove = lunchList.removeChild(lunchItems[lunchItems.length - 1]);
        dinnerList.appendChild(foodToMove);
    }
}

let dinnerButton = document.querySelector('#dinner');
dinnerButton.addEventListener('click', moveToDinner);