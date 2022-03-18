import React, { useState } from 'react'
import "./FormInput.css"
import {IState as IPropsF} from "../../App"


//Create receive items
interface IPropsL{
    items: IPropsF['items'],
    //Instead of using
    // setItems: React.Dispatch<React.SetStateAction<{
    // name: string,
    // age: number,
    // description: string,
    // }[]>>
    
    //Then using =>
    setItems: React.Dispatch<React.SetStateAction<IPropsF['items']>>
}

const FormInput = ({items, setItems}:IPropsL) => {


    //Specified data type |
    const[input, setInput] = useState({name: "", age: "", description: "",});


    //Don't know the data type.... => (e) => onChange = {(e)=>{}}
    //Using: React.ChangeEvent<HTMLInputElement>
    //Then using in hover (e)
    //Input dont' error => textarea => using | React.ChangeEvent<HTMLTextAreaElement>

    //Don't return data type => :void
    const onChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        
        //Update when input type =>  Change input
        setInput({...input, [e.target.name]:e.target.value});
    }

    //Keep hovering and changing onSubmit={(e)=>{}} in <form></form>
    const onSubmit = (e:React.FormEvent<HTMLFormElement>):void => {

        e.preventDefault(); //Research

        //Error Age String...
        //Custom by hand => age: number...
        setItems([...items,{
            name: input.name,
            age: Number(input.age),
            description: input.description,
        }])

        //After Update Successfully
        setInput({name: "", age: "", description: ""})
    }
    return (
        <div className="form__input">
            <h1 className="form__input--title">Form Input</h1>
            <form className="form__input--content" onSubmit={onSubmit}>
                <input type="text" name="name" id="name" placeholder="name" onChange={onChange} value={input.name}/>
                <input type="number" name="age" id="age" placeholder="age" onChange={onChange} value={input.age}/>
                <textarea name="description" id="description" placeholder="Description" onChange={onChange} value={input.description}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormInput