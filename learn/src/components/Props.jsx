// import React from 'react'

// function Props(props) {

//     console.log(props.data)
//   return (
//     <div>display : {props.data}</div>
//   )
// }

// export default Props


function Props({data,name,age}) {
  return (
    <div>
        <ul>
            <lli>{data}</lli>
            <lli>{name}</lli>
            <lli>{age}</lli>
        </ul>
    </div>
  )
}

export default Props