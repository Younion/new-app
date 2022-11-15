import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// import Manufacturer from "./Manufacturer";
// import SauceName from "./SauceName";
// import ManufacturerLocation from "./ManufacturerLocation";
// import HeatSources from "./HeatSources";

function AddForm() {
  const [manufacturer, setManufacturer] = useState('');
  const [sauce, setSauce] = useState('');
  const [location, setLocation] = useState('');
  const [heat, setHeat] = useState('');

  const handleHeat = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked)
    if(checked) {
      setHeat([
        ...heat, value
      ])
    } else {
      setHeat(heat.filter(( e) => (e !== value)));
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const formSubmit = {
        "fields": {
          "Manufacturer": manufacturer,
          "Sauce Name": sauce,
          "Location": location,
          "Heat Sources": heat
        }
      }

      var Airtable = require('airtable');
      var base = new Airtable({apiKey: process.env.REACT_APP_API_KEY}).base(process.env.REACT_APP_BASE);

      base('Hot Sauces').create([formSubmit
      ], { typecast: true }, function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
      console.log(formSubmit)
    }

    const handleDropDown = (e) => {
      setLocation(e)
  
    };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="white-section" id="addASauce">
        <div className="container-fluid">
          <h2>Add a Sauce</h2><br />
          Trying a new sauce that isn't in our database? Add it for us!        
        <br />
        <br />
        <br />


        <Form.Label htmlFor="Manufacturer">
          <h2>Manufacturer</h2></Form.Label>
          <Form.Control
            type="text"
            id="Manufacturer"
            aria-describedby="Manufacturer"
            placeholder="Input the manufacturer name here."
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
          <Form.Text id="Manufacturer" muted>
          </Form.Text>

          <br />

        <Form.Label htmlFor="SauceName">
          <h2>Sauce Name</h2></Form.Label>
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

        <h2>Manufacturer Location:</h2><br />
        
          <DropdownButton 
            variant="dark"
            id="dropdown-basic-button" 
            title="Dropdown Button" 
            value={location} 
            onSelect={handleDropDown}
            >
              <Dropdown.Item eventKey="Local (Colorado)">Local (Colorado)</Dropdown.Item>
              <Dropdown.Item eventKey="Domestic">Domestic</Dropdown.Item>
              <Dropdown.Item eventKey="International">International</Dropdown.Item>
          </DropdownButton>
          <br />
          <p>You selected: {location}</p><br />
        
        <h2>Heat Sources</h2>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Habanero"
                value="Habanero"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Scorpion"
                value="Scorpion"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Bhut Jolokia"
                value="Bhut Jolokia"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Carolina Reaper"
                value="Carolina Reaper"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Naga Jolokia"
                value="Naga Jolokia"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Ghost"
                value="Ghost"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Herbal"
                value="Herbal"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Generic Yellow / Banana / Wax"
                value="Generic Yellow / Banana / Wax"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Mustard"
                value="Mustard"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Generic Red / Red Pepper Flakes"
                value="Generic Red / Red Pepper Flakes"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Tabasco"
                value="Tabasco"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Scotch Bonnet"
                value="Scotch Bonnet"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Thai Chili"
                value="Thai Chili"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Cayenne"
                value="Cayenne"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Generic Green / Hatch / Green Chili"
                value="Generic Green / Hatch / Green Chili"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Jalapeno"
                value="Jalapeno"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Arbol"
                value="Arbol"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Pequin / Picant"
                value="Pequin / Picant"
                onChange={handleHeat}
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Chipotle"
                value="Chipotle"
                onChange={handleHeat}
              />                
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Serrano"
                value="Serrano"
                onChange={handleHeat}
              />
            </div>
          ))}

        {/* <Manufacturer />
        <SauceName />
        <ManufacturerLocation />
        <HeatSources /> */}
        
        <br />
        <Button variant="dark" type="submit">
          Submit
        </Button>
        </div>
      </div>
    </form>
  );
}

export default AddForm;