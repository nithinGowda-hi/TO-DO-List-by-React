import React,{useState} from "react";

function ToDoList(){

    const [task,setTask]=useState(["eat breakefast","take a shower","walk the dog"]);
    const[newtask,setNewtask]=useState("");

    function handleChange(event){
        setNewtask(event.target.value);
    }

    function addTask(){

        if(newtask.trim()!==""){
      setTask( task=>[...task,newtask]);
        setNewtask("");
    }}
    function deleteTask(index){
        setTask(task=>task.filter((_,i)=>i!==index));
    }

    //! This is for move up and down functionality
    // function moveTaskup(index){
    
    // if(index > 0){
    //    const updatedtask=[...task];
    //     [updatedtask[index],updatedtask[index-1]]=
    //     [updatedtask[index-1],updatedtask[index]];
    //     setTask(updatedtask);
    // }}
    // function moveTaskdown(index){
    //      if(index <task.length -1){
    //    const updatedtask=[...task];
    //     [updatedtask[index],updatedtask[index+1]]=
    //     [updatedtask[index+1],updatedtask[index]];
    //     setTask(updatedtask);
    // }
    // }


  return(
    <div className="to-do-list">
        <h1><i><u>To-Do List</u></i></h1>
        <div>
            <input type="text"
            placeholder="Enter a task...."
            value={newtask} 
            onChange={handleChange}/>
            <button className="add-button" onClick={addTask}>
                Add</button>
        </div>

        <ol>
            {task.map((task,index)=>
            <li
                key={index}>
                    <span classname="text">{task}</span>
                    <button
                    className="delete-button"
                    onClick={()=>deleteTask(index)}>Delete
                    </button>
                    {/* <button
                    className="up-button"
                    onClick={()=>moveTaskup(index)}>MoveUp
                    </button>
                    <button
                    className="down-button"
                    onClick={()=>moveTaskdown(index)}>MoveDown
                    </button> */}
            </li>
            )}
        </ol>
    </div>
  )
}
export default ToDoList;