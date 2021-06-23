let ulTasks = $('#ulTasks')
let inpNewTask = $('#inpNewTask')
let btnadd = $('#btnadd')
let btnclear = $('#btnclear')
let btnsort = $('#btnsort')
let btncleanup = $('#btncleanup')

function additem() { //since pressing 'enter' and clicking on 'add' are the same thing, we make a common function
    let listitem = $('<li>', { //to create an element u dont need a closing tag
        'class': 'list-group-item', //class is a reserved word in js so use quotation
        text: inpNewTask.val()
    })
    listitem.click((event) => {
        listitem.toggleClass('done') //will toggle the task on itself when clicked (task being disabled)
    })
    ulTasks.append(listitem)
    inpNewTask.val("") //also have to replace it with an empty string after its clicked once
    toggleInputBtns()
}

function cleardone() { //making a function to clear all the done items from the list
    $('#ulTasks .done').remove() //it selects all the elements which are 'done' in the task lists and use the prebuilt remove function
    toggleInputBtns()
}

function sort() {
    $('#ulTasks .done').appendTo(ulTasks) //appendto function takes elements from one place to append it to another place,,
    //thus we can use it to append to itself which will send it towards the bottom of the list 5Head
}

function toggleInputBtns() { //this is a check fn,, after all the operations, run this fn to check if length of the list is <1 or theres sm written or not, then we can disable and enable stuff accordingly
    btnclear.prop('disabled', inpNewTask.val() == "")
    btnadd.prop('disabled', inpNewTask.val() == "")
    btnsort.prop('disabled', ulTasks.children().length < 1)
    btncleanup.prop('disabled', ulTasks.children().length < 1)
}
inpNewTask.on('input', toggleInputBtns)

inpNewTask.keypress((e) => {
    if (e.which == 13) { //13 is the keycode for the enter key, can check other key codes by 'console.log(e.which)'
        additem()
    }
})

btnadd.click(additem)

btnclear.click(() => {
    inpNewTask.val("")
    toggleInputBtns()
})

btncleanup.click(cleardone)

btnsort.click(sort)