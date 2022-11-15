import { FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function AdditionalNotes() {
    return (
        <>
        <div className="container-fluid">
          <Form.Label htmlFor="AdditionalNotes">
            <h2>Additional Taster Notes</h2></Form.Label>
          <Form.Control
            type="text"
            id="AdditionalNotes"
            aria-describedby="AdditionalNotes"
            placeholder="Input any additional tasting notes you may have here."
          />
          <Form.Text id="AdditionalNotes" muted>
          </Form.Text>
        </div>
        </>
      );
}

export default AdditionalNotes;