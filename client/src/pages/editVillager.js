import React, { useState, useEffect } from "react";
import API from "../utils/API";

function EditVillager() {
  var agrippa = document.getElementById("agrippa");
  const [villagers, setVillagers] = useState([])

  useEffect(() => {
    loadVillagers()
  }, [])

  function loadVillagers() {
    API.getVillagers()
      .then(res => 
        setVillagers(res.data)
      )
      .catch(err => console.log(err));
  };
  agrippa.appendChild(res.data)
  return (
    <div>
      <div>
        <div>
          <h2>Add Your Villagers!</h2>
        </div>
        <div className="searchBox">
          <input className="input" type="text" placeholder="Search For a Villager"/>
        </div>
        <div className="searchBtn">
          <button className="button">Search</button>
          <a href="/#/calendar" className="button">Calendar</a>
        </div>
      </div>
      <div id="agrippa"></div>
    </div>
  );
  
}

export default EditVillager;