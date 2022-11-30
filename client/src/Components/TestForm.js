import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TestForm() {
  const [sauce, setSauce] = useState('');
  const [presentation, setPresentation] = useState('');

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

        <Button variant="dark" type="submit">
          Submit
        </Button>
        </div>
      </div>
    </form>
  );
}

export default TestForm;