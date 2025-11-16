import { useState } from "react"
import { Atom } from "react-loading-indicators"

const Loading=()=>{
    
    return(
        <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Atom color="#444eddff" size="large" text="Loading" textColor="black" />
        </div>
    )
}
export default Loading