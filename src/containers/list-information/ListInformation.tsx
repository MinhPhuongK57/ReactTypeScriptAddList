import React from 'react'
import "./ListInformation.scss"
import {IState as IPropsL} from "../../App"


//Reuse IState
// interface IProps{
//   items:{
//     name:string,
//     age: number,
//     description:string
//   }[]
// }


//=> Props
const ListInformation = ({items}: IPropsL) => {

    //Return type: JSX Element
    //Add JSX.Element[] => Specify return type
    const renderListInformation = () :JSX.Element[] =>{
        return items.map(item=>{
            return( 
                <div className="list__information--content">
                    {item.name} - {item.age} - {item.description}
                </div>
            );
        })
    }
   return (
        <div className="list__information">
            <h1 className="list__information--title">List</h1>

            {/*Render List Information */}
            {renderListInformation()}
        </div>
    )
}

export default ListInformation