// // Here is task one:


// // Todo List App

// // Goal: Simple to-do app with in-memory task storage.
// // Each task should have an: id, title, completed

// // Features:

// // Add task
// // Mark task as done/undone
// // Filter task according to:  completed | pending tasks
// // Delete task



let todo = [];


function addTodo(title,) {
    let taskId = todo.length +1;
    let todoitems = {
        title: title,
        id: taskId,
        completed: false,
    }
    todo.push(todoitems)
    console.log("added items to todo", todo);
}


addTodo("bath") 
addTodo("wash")
addTodo("sleep")
addTodo("code")
addTodo("drink")
addTodo("party")



// // function markTodo() {
// //     let completedTasks = todo.filter(task => task.completed === true);
// //     let pendingTasks = todo.filter(task => task.completed === false);

// //     console.log("checking status of items")
// //     console.log("Completed Tasks:", completedTasks);
// //     console.log("Pending Tasks:", pendingTasks);
// // }

// // markTodo()


function checkTaskStatus() {
    let completedTasks = todo.filter(task => task.completed === true);
    let pendingTasks = todo.filter(task => task.completed === false);

    console.log("checking status of items")
    console.log("Completed Tasks:", completedTasks);
    console.log("Pending Tasks:", pendingTasks);
}

checkTaskStatus();




function deletedTodo() {
    let removedtodo = todo.pop();
    console.log("item deleted from todo", removedtodo)
    console.log("after deleting item from todo", todo)
}

deletedTodo();


// console.log("=======================================================")



// // Task Two

// // Movie Watchlist Manager

// // Each movie should have: id, title, genre, year, watched (boolean)

// // Features:

// // Add a movie
// // Mark as watched/unwatched
// // List by genre or watched status
// // Delete movie
// // Sort by year or title




// let movie = [];



function addMovie(title,) {
let taskId = todo.length +1;
    let movieitems = {
        title: title,
        id: taskId,
        genre: genre,
        year: year,
        watched: false,
    }
    movie.push(movieitems)
    console.log("added movie to watchlist", movie);
}


addMovie("coco", 12, 2008, );
addMovie("frozen", 1, 2012,);
addMovie("Escape", 23, 2020,);
addMovie("PrisonBreak", 47, 2023,);

function movieStatus() {
    let completedmovie = movie.filter(movieitem => movieitem.watched === true);
    let pendingmovie = movie.filter(movieitem => movieitem.watched === false);

    console.log("checking status of movies")
    console.log("Completed Movie:", completedmovie);
    console.log("Pending Movie:", pendingmovie);
}

movieStatus();



// // function movieYear() {
// //     let movieyear = movie.filter(movieitem => movieitem.genre === 12);
// //     let movieyears = movie.filter(movieitem => movieitem.title === "coco");

// //     console.log("checking status of movies")
// //     console.log("Completed Movie:", movieyear);
// //     console.log("Pending Movie:", movieyears);
// // }

// // movieYear();



function deletedMovie() {
    let removedmovie = movie.pop();
    console.log("movie deleted from watchlist", removedmovie)
    console.log("after deleting movie from watchlist", movie)
}

deletedMovie();
