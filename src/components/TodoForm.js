import React,{useState} from 'react'

const TodoForm = (props) => {
    const [inputValue, setInputValue] = useState("")
    const onHandleSubmit = (e) => {
        e.preventDefault();
        props.onAdd(inputValue)
    }
    const onHandleChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div>
            <form action="" onSubmit={(e)=>onHandleSubmit(e)}>
                <input type="text" onChange={(e)=>onHandleChange(e)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
