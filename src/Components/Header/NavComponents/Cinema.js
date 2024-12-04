import { Card, Flex } from "antd";
import ContentCard from "../../Card/ContentCard";
import { context } from "../../../App";
import React, {useState, useContext } from "react";
import "./cityCity.css";
import { useSelector } from "react-redux";


const Cinema = () => {
  const [selectedCity, setSelectedCity] = useState(""); 
  const cinemaData = useSelector((state) => state.data.cinemaData);


  const filteredCinemas = selectedCity && selectedCity !== "Выберите город"
    ? cinemaData.filter(cinema =>
        cinema.cities.some(city => city.name === selectedCity)
      )
    : cinemaData;  

  return (
    <div className="mb-3">
      <label htmlFor="citySelect" className="form-label">Выберите город:</label>
      <select
        id="citySelect"
        className="form-select select-container"  
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="Выберите город">Выберите город</option> 
        <option value="Семей">Семей</option>
        <option value="Алматы">Алматы</option>
        <option value="Нур-Султан">Нур-Султан</option>
      </select>
      <Flex
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: "30px",
          marginTop: "60px",
          flexWrap: "wrap",
          width: "80%",
        }}
      >
        {filteredCinemas.map((movie, index) => (
          <ContentCard
            key={movie.id}
            index={index}
            title={movie.title}
            image={movie.image}
            description={movie.description}
            city={movie.cities}
            id={movie.id}
            category="cinema"
          />
        ))}
      </Flex>
    </div>
  );
};

export default Cinema;