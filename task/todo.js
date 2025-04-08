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
    let todoitems = {
        title: title,
        id: taskId,
        genre: genre,
        year: year,
        watched: false,
    }
    movie.push(movieitems)
    console.log("added movie to watchlist", movie);
}


addMovie("coco", 12, 2008, false);
addMovie("frozen", 1, 2012, true);
addMovie("Escape", 23, 2020, false);
addMovie("PrisonBreak", 47, 2023, true);

// function movieStatus() {
//     let completedmovie = movie.filter(movieitem => movieitem.watched === true);
//     let pendingmovie = movie.filter(movieitem => movieitem.watched === false);

//     console.log("checking status of movies")
//     console.log("Completed Movie:", completedmovie);
//     console.log("Pending Movie:", pendingmovie);
// }

// movieStatus();



// // function movieYear() {
// //     let movieyear = movie.filter(movieitem => movieitem.genre === 12);
// //     let movieyears = movie.filter(movieitem => movieitem.title === "coco");

// //     console.log("checking status of movies")
// //     console.log("Completed Movie:", movieyear);
// //     console.log("Pending Movie:", movieyears);
// // }

// // movieYear();



// function deletedMovie() {
//     let removedmovie = movie.pop();
//     console.log("movie deleted from watchlist", removedmovie)
//     console.log("after deleting movie from watchlist", movie)
// }

// deletedMovie();




// let task = []
// function  addTask (title){

//     let newTask =  {
//         title : title,
//         id : Date.now(),
//         completed:false

//     }
//     task.push(newTask)
   
       
    
// }
// addTask('go to class');
// addTask('to to church');
// addTask('recreational activities')
// console.log(task)

// function taskDone (taskId){
//     task.forEach((task) => {
//        if (task.id === id){
//         task.completed = true
//         console.log(task)
//        }
//     });

    // for (let tasks in task){
    //     if (task[tasks].id !== taskId){
    //         task[tasks].completed === true
    //     }
    // }
    
    // let notComplete = false
    
    // for (let i = 0; i < task.length; i++){
    //     if (task[i].id === taskId){
    //     task[i].completed  = true
    //         notComplete = true
    //         console.log(task)

    //     }
    // }
    
// }
// console.log(task)
// taskDone (1743896792604)