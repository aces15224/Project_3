import React from "react";
import Chart from "../components/Chart/Chart"

function UserStats() {
  return (
    <div id="userCardMain" class="card">
      <div id="userCard" class="card-header">
        <h1>User Stats</h1>
      </div>
      <div id="cardBody" class="card-body">
        <h5 id="cardTitle" class="card-title">See where you spend most of your time!</h5>
        <div id="chart"><Chart/></div>
      </div>
    </div>
  );
}

export default UserStats;
