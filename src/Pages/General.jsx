// import React from "react";

const General = () => {
  return (
    <div>
<form>
  <label >Choose a car:</label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>

  <br></br>
  <input type="submit" value="Submit"/>
</form>

    </div>
  );
};

export default General;