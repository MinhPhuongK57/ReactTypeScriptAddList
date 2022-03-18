import React, { useState } from 'react'
import FormInput from './containers/form-input/FormInput'
import ListInformation from './containers/list-information/ListInformation'
import "./App.css"


//.. const[items, setItems] = useState()...


//Export
export interface IState{
  items:{
    name:string,
    age: number,
    description:string
  }[]
}

export default function App() {

  const[items, setItems] = useState<IState["items"]>([{name: "The Vinh", age:21, description: "Developer"}])

  return (
    <div className="container">
      {/*
        Add items => Component
        setItems = setItems
      */}
      <FormInput items={items} setItems={setItems}/>

      {/*Add items => Component*/}
      <ListInformation items={items}/>
    </div>
  )
}
