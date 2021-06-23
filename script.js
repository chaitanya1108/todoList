let ulTasks=$('#ulTasks')
let inpNewTask=$('#inpNewTask')
let btnadd=$('#btnadd')
let btnclear=$('#btnclear')

btnadd.click(()=>{
    let listitem= $('<li>',{ //to create an element u dont need a closing tag
        'class':'list-group-item', //class is a reserved word in js so use quotation
        text: inpNewTask.val()
    })
    listitem.click((event)=>{
        listitem.toggleClass('done') //will toggle the task on itself when clicked (task being disabled)
    })
    ulTasks.append(listitem)
    inpNewTask.val("") //also have to replace it with an empty string after its clicked once
})
btnclear.click(()=>inpNewTask.val(""))