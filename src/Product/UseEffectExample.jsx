import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
import Loading from './Loading';
import { TbSortAscendingLetters } from "react-icons/tb";
import { TbSortDescendingLetters } from "react-icons/tb";
import "./Card.css"
const UseEffectExampleData = () => {
  const [user,setUser]=useState(null)
    const [status,setStatus]=useState(true)
    const fetchData=async()=>{
        const{data}=await axios.get("https://fakestoreapi.com/products")
        setUser(data);
        setStatus(false)
    }

  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = (id) => {
    const updateData = user?.filter((ele) => ele.id !== id);
    setUser(updateData);
  };
  
  const sortAscending = () => {
    const sorted = [...user].sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    });
    setUser(sorted);
  };

  const sortDescending = () => {
    const sorted = [...user].sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
      return 0;
    });
    setUser(sorted);
  };

  return (
    <div>
      {status ? (
        <Loading />
      ) : (
        <>
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <button id="btn" onClick={sortAscending}><TbSortAscendingLetters /></button>
            <button id="btn" onClick={sortDescending} style={{ marginLeft: "10px" }}>
              <TbSortDescendingLetters />
            </button>
          </div>
          <Card data={user} deleteItem={deleteItem} />
        </>
      )}
    </div>
  );
};

export default UseEffectExampleData;
