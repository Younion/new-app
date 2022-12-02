import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TestForm() {
  const [sauce, setSauce] = useState('');
  const [presentation, setPresentation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
       const formSubmit = {
            "test_name": sauce,
            "test_sauce": presentation
      }
    console.log(formSubmit);
    return formSubmit;
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
          <Form.Label htmlFor="test_name">
            </Form.Label>
          <Form.Control
            type="text"
            id="test_name"
            aria-describedby="test_name"
            placeholder="Input the name of the sauce here."
            value={sauce}
            onChange={(e) => setSauce(e.target.value)}
          />
          <Form.Text id="test_name" muted>
          </Form.Text>

          <br />
          <br />

          <Form.Label htmlFor="test_sauce">
            </Form.Label>
          <Form.Control
            type="text"
            id="test_sauce"
            aria-describedby="test_sauce"
            placeholder="Input the name of the sauce here."
            value={presentation}
            onChange={(e) => setPresentation(e.target.value)}
          />
          <Form.Text id="test_sauce" muted>
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