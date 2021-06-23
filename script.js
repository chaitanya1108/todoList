let ulTasks=$('#ulTasks')
let inpNewTask=$('#inpNewTask')
let btnadd=$('#btnadd')
let btnclear=$('#btnclear')

function additem(){
    let listitem= $('<li>',{ //to create an element u dont need a closing tag
        'class':'list-group-item', //class is a reserved word in js so use quotation
        text: inpNewTask.val()
    })
    listitem.click((event)=>{
        listitem.toggleClass('done') //will toggle the task on itself when clicked (task being disabled)
    })
    ulTasks.append(listitem)
    inpNewTask.val("") //also have to replace it with an empty string after its clicked once
}

inpNewTask.keypress((e)=>{
    if(e.which == 13){ //13 is the keycode for the enter key, can check other key codes by 'console.log(e.which)'
        additem()
    }
})

btnadd.click(()=>{
    additem()
})
btnclear.click(()=>inpNewTask.val(""))