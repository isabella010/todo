import { useState } from "react"
export function TodoForm(props){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault() //so it dosent refresh
        if(newItem === "") return    
        props.addTodo(newItem)
        setNewItem("");
      }

    return(
      <form onSubmit={handleSubmit} className="new-item-form"> 
        <div className="form-row">
          <label htmlFor="item">Add a New Item</label>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            type="text" 
            id="item">
          </input>
        </div>
        <button className="btn">Add Item</button>
      </form>
    ) 
}