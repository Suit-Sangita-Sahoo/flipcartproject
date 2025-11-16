import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import './Card.css'
const Card = ({ data, deleteItem }) => {
  return (
    <div>
      <table border={1} style={{ width: "100%", height: "100vh", textAlign: "center" }}>
       
          <tr>
            <th>ID</th>
            <th>Product</th>
            
            <th>Remove</th>
          </tr>
      
          {data?.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td  className='product-title'>{user.title}</td>
              <td>
                <span 
                  onClick={() => deleteItem(user.id)} 
                  style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
                >
                  <MdDeleteForever />
                </span>
              </td>
            </tr>
          ))}
      </table>
    </div>
  )
}

export default Card
