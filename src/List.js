import React from 'react';
//import {useState} from 'react';

function List({}) {
  var nameList = [
    { id: "01", firstname: "Ali", lastname: "Muhammad" },
    { id: "02", firstname: "Zaryab", lastname: "Khan" },
    { id: "03", firstname: "Rizwan", lastname: "Kush" },
    { id: "04", firstname: "Rashid", lastname: "Hussain" }
  ];
  const itemList = nameList.map((item) => (
    <li>
       {item.lastname}/ {item.firstname}
    </li>
  ));
  return (
    <div>
      {/* <ol style={{ listStyleType: "none" }}>{itemList}</ol> */}
      {itemList}
    </div>
  );
} export default List;

