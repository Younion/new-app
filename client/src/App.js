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
import TestForm from "./Components/TestForm";
import formSubmit from "./Components/TestForm";

function App() {

  // const [sauces, setSauces] = useState([]);
  // const [names, setNames] = useState([]);
  // const [allSauces, setAllSauces] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  // Postgres GET
  useEffect(() => {
    const getAPI = () => {
        const API = 'http://jyh:3000';
        fetch(API)
            .then((response) => {
                // console.log(response);
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

  useEffect(() => {
    fetch('http://jyh:3000', {
      method: 'POST', 
      body: formSubmit})
  }, []);

  // Pagination
  

  // Airtable API
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
 
  // Intersection Observer
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
  },
  {
    threshold: .25, // Percentage of pixels before card is no longer Intersecting
  }
  );

  cards.forEach(cards => {
    observer.observe(cards)
  })


  // Filter Cards
    const filterCards = event => {
      const value = event.target.value.toLowerCase();
      const filteredData = apiData.filter(
        sauces => (`${sauces['hot_sauce_name']} 
        ${sauces['']} 
        ${"Average Rating: " + Math.round(sauces['avg_overall'])} 
        ${"Spiciness Rating: " + Math.round(sauces['avg_spiciness'])} 
        ${"Percent Loved: " + Math.round('')*100 + "%"}`
        .toLowerCase().includes(value)));
        setApiData(filteredData);
    }
  
  // Render Page
    return (
      <div className="App">
        <NavBar />
        <TitleSection />
        <SauceCarousel sauceName={apiData} />
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
            <br />
          </div>
        </div>
        <div className="cards-container">
        {apiData.map(sauce => 
          <SauceCard key={sauce.hot_sauce_name} sauceData={sauce} />
        )}
        </div>
        <TestForm />
        {/* <ReviewForm /> */}
        <AddForm />
        <Footer />
      </div>
    );
}
  
export default App;
