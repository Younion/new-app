import { useState, useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SauceCard from "./Components/SauceCard";
import ReviewForm from "./Components/ReviewForm";
import CallToAction from "./Components/CallToAction";
import SauceCarousel from "./Components/SauceCarousel";
import TitleSection from "./Components/TitleSection";
import NavBar from "./Components/NavBar";
import AddForm from "./Components/AddForm";
import Footer from "./Components/Footer";

function App() {

  const [sauces, setSauces] = useState([]);
  const [names, setNames] = useState([]);
  const [allSauces, setAllSauces] = useState([]);


  useEffect(() => {
    const getAPI = () => {
        const API = 'http://127.0.0.1:3000';
        fetch(API)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setLoading(false);
                setApiData(data);
            });
    };
    getAPI();
}, []);

const [apiData, setApiData] = useState([]);
const [loading, setLoading] = useState(true);

// GET API Data
  // useEffect(() => {
  //     const url = "https://api.airtable.com/v0/app4Kq78nyR93DHLC/hot%20sauces?filterByFormula=NOT({Average+Rating}+%3D+%27%27)&api_key=";
  //     const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  //     fetch(url + REACT_APP_API_KEY)
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(sauceData => {
  //         setSauces(sauceData.records)
  //         setAllSauces(sauceData.records)
  //         setNames(sauceData.records)
  //       });
  //     }, []);
 
// Filter Cards
  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredData = allSauces.filter(
      sauces => (`${sauces.fields.Name} 
      ${sauces['Heat Sources String']} 
      ${"Average Rating: " + Math.round(sauces.fields['Average Rating'])} 
      ${"Spiciness Rating: " + Math.round(sauces.fields['Spiciness Dots'])} 
      ${"Percent Loved: " + Math.round(sauces.fields['Percent Loved'])*100 + "%"}`
      .toLowerCase().includes(value)));
      setSauces(filteredData);
  }
  
// Render Page
  return (
    <div className="App">
      <NavBar />
      <TitleSection />
      <SauceCarousel sauceName={names} />
      <CallToAction />
      <div className="container-fluid" id="cta">
        <h1>Hot Sauce Reviews</h1>
      </div>
      <div className="searchBar">
      <input className="search" placeholder="Search..." onInput={filterCards}/>
      <div className="list">
      Search Tips:
      <ul>
        <li key="1">Search by Average Rating by typing "Average Rating: [some number here 1-5]"</li>
        <li key="2">Search by Spiciness Rating by typing "Spiciness Rating: [some number here 1-10]"</li>
      </ul>
      </div>
      </div>
      <div className="cards-container">
      {sauces.map(sauce => 
        <SauceCard key={sauce.id} sauceData={sauce.fields} />
      )}
      </div>
      <ReviewForm />
      <AddForm />
      <Footer />
    </div>
  );
}
  
export default App;
