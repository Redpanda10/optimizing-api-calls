import React from 'react'

let a = ["apple", "banana", "cow", "dog", "elephant"];

let user = [
    {"name":"mohit",
        "age":22
    },
    {
        "name":"nabin",
        "age":23
    }

];
function Map() {

  return (<>
    <div>
        nothing
    </div>
    {a && (a.map((item,index)=>
    <h1 key={index}>
        {item}
    </h1>
    ))}
    {user && (user.map((item,index)=>
    <h1 key={index}>
        <ul>
            <li>name : {item.name}</li>
        
            <li>age : {item.age}</li>
        
        </ul>
    </h1>
    ))}
  </>
    
  )
}

export default Map