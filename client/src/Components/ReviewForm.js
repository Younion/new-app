import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Viscocity from './Viscocity';
// import Presentation from './Presentation';
// import Spiciness from './Spiciness';
// import FlavorNotes from './FlavorNotes';
// import OverallRating from './OverallRating';
// import LovedIt from './LovedIt';
// import AdditionalNotes from './AdditionalNotes';
// import SauceName from './SauceName';

function ReviewForm() {
  const [sauce, setSauce] = useState('');
  const [presentation, setPresentation] = useState('');
  const [viscocity, setViscocity] = useState('');
  const [spiciness, setSpiciness] = useState('');
  const [flavor, setFlavor] = useState([]);
  const [overall, setOverall] = useState('');
  const [loved, setLoved] = useState('');
  const [notes, setNotes] = useState('');

  const handleFlavor = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked)
    if(checked) {
      setFlavor([
        ...flavor, value
      ])
    } else {
      setFlavor(flavor.filter(( e) => (e !== value)));
    }
  };

  const handleSwitch = () => {
    setLoved(!loved);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const formSubmit = {
          "fields": {
            "Hot Sauce Name": sauce,
            "Presentation": presentation,
            "Viscosity": viscocity,
            "Spiciness Rating": spiciness,
            "Flavor Notes": flavor,
            "Overall Rating": overall,
            "Loved It?": loved,
            "Taster Notes": notes
          }
        }

        var Airtable = require('airtable');
        var base = new Airtable({apiKey: process.env.REACT_APP_API_KEY}).base(process.env.REACT_APP_BASE);

        base('Tasting Form').create([formSubmit
        ], { typecast: true }, function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function (record) {
            console.log(record.getId());
          });
        });

      //   fetch('https://api.airtable.com/v0/app4Kq78nyR93DHLC/Tasting%20Form', {
      //     Authorization: "key5DK4VYamAJtEoK",
      //     method: 'POST',
      //     headers: { 
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify(formSubmit)
      //   })
      //   .then(() => {
      //     // console.log("Post successful")
      //   })
      // console.log(formSubmit);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="color-section" id="reviewASauce">
        <div className="container-fluid">
          <h2>Review a Sauce</h2><br />
            Trying a sauce that is already in our database? Review it!
            <br />
            <br />
            <br />
            <h2>Sauce Name</h2>
          <Form.Label htmlFor="SauceName">
            </Form.Label>
          <Form.Control
            type="text"
            id="SauceName"
            aria-describedby="SauceName"
            placeholder="Input the name of the sauce here."
            value={sauce}
            onChange={(e) => setSauce(e.target.value)}
          />
          <Form.Text id="SauceName" muted>
          </Form.Text>

          <br />
          <br />

        <h2>Presentation</h2>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
                <Form.Check 
                inline
                name="Presentation"
                type={type}
                id={`inline-${type}`}
                label="1"
                onChange={(e) => setPresentation(1)}
              />
                <Form.Check 
                inline
                name="Presentation"
                type={type}
                id={`inline-${type}`}
                label="2"
                onChange={(e) => setPresentation(2)}
              />
                <Form.Check 
                inline
                name="Presentation"
                type={type}
                id={`inline-${type}`}
                label="3"
                onChange={(e) => setPresentation(3)}
              />
                <Form.Check 
                inline
                name="Presentation"
                type={type}
                id={`inline-${type}`}
                label="4"
                onChange={(e) => setPresentation(4)}
              />
                <Form.Check
                inline
                name="Presentation"
                type={type}
                id={`inline-${type}`}
                label="5"
                onChange={(e) => setPresentation(5)}
              />
            </div>
          ))}

          <br />

        <h2>Viscocity</h2>
          {['radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Thin"
                onChange={(e) => setViscocity("Thin")}
              />
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Thin, with chunks"
                onChange={(e) => setViscocity("Thin, with chunks")}
              />
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Average"
                onChange={(e) => setViscocity("Average")}
              />
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Average, with chunks"
                onChange={(e) => setViscocity("Average, with chunks")}
              />
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Thick"
                onChange={(e) => setViscocity("Thick")}
              />
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Thick, with chunks"
                onChange={(e) => setViscocity("Thick, with chunks")}
              />
            </div>
          ))}

          <br />

        <h2>Spiciness Rating</h2>
          <p> 1-2: Suitable for people with very low spice tolerance<br />
              3-4: Suitable for people with low spice tolerance<br />
              5-6: Suitable for people with medium spice tolerance<br />
              7-8: Suitable for people with high spice tolerance<br />
              9-10: Suitable for absolute goddam daredevils
          </p>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`default-${type}`}
                label="1"
                onChange={(e) => setSpiciness(1)}
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="2"
                onChange={(e) => setSpiciness(2)}
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="3"
                onChange={(e) => setSpiciness(3)}
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="4"
                onChange={(e) => setSpiciness(4)}
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="5"
                onChange={(e) => setSpiciness(5)}
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="6"
                onChange={(e) => setSpiciness(6)}
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="7"
                onChange={(e) => setSpiciness(7)}
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="8"
                onChange={(e) => setSpiciness(8)}
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="9"
                onChange={(e) => setSpiciness(9)}
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="10"
                onChange={(e) => setSpiciness(10)}
              />
            </div>
          ))}

          <br />

        <h2>Flavor Notes</h2>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Bitter"
                value="Bitter"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Black Pepper"
                value="Black Pepper"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Constituent Peppers"
                value="Constituent Peppers"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Floral"
                value="Floral"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Fruity"
                value="Fruity"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Garlicky"
                value="Garlicky"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Herbal"
                value="Herbal"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Linger"
                value="Linger"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Mustard"
                value="Mustard"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Onion"
                value="Onion"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Savory"
                value="Savory"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Smokey"
                value="Smokey"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Sour"
                value="Sour"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Sweet"
                value="Sweet"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Sweet"
                value="Sweet"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Vinegar"
                value="Vinegar"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Tangy"
                value="Tangy"
                onChange={handleFlavor}
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Salty"
                value="Salty"
                onChange={handleFlavor}
              />
            </div>
          ))}

          <br />

        <h2>Overall Rating</h2>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
                <Form.Check 
                inline
                name="OverallRating"
                type={type}
                id={`inline-${type}`}
                label="1"
                onChange={(e) => setOverall(1)}
              />
                <Form.Check 
                inline
                name="OverallRating"
                type={type}
                id={`inline-${type}`}
                label="2"
                onChange={(e) => setOverall(2)}
              />
                <Form.Check 
                inline
                name="OverallRating"
                type={type}
                id={`inline-${type}`}
                label="3"
                onChange={(e) => setOverall(3)}
              />
                <Form.Check 
                inline
                name="OverallRating"
                type={type}
                id={`inline-${type}`}
                label="4"
                onChange={(e) => setOverall(4)}
              />
                <Form.Check
                inline
                name="OverallRating"
                type={type}
                id={`inline-${type}`}
                label="5"
                onChange={(e) => setOverall(5)}
              />
            </div>
          ))}

          <br />

        <h2>Loved It?</h2>
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="LovedIt"
              checked={loved}
              onChange={handleSwitch}
            />

          <br />

        <Form.Label htmlFor="AdditionalNotes">
          <h2>Additional Taster Notes</h2></Form.Label>
          <Form.Control
            type="text"
            id="AdditionalNotes"
            aria-describedby="AdditionalNotes"
            placeholder="Input any additional tasting notes you may have here."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <Form.Text id="AdditionalNotes" muted>
          </Form.Text>

        {/* <SauceName /> */}
        {/* <Presentation />
        <Viscocity />
        <Spiciness />
        <FlavorNotes />
        <OverallRating />
        <LovedIt />
        <AdditionalNotes /> */}
        
        <br />
        <br />

        <Button variant="dark" type="submit">
          Submit
        </Button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;