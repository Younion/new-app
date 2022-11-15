import Form from 'react-bootstrap/Form';

function Manufacturer() {
    return (
        <>
        <div className="container-fluid">
          <Form.Label htmlFor="Manufacturer">
            <h2>Manufacturer</h2></Form.Label>
          <Form.Control
            type="text"
            id="Manufacturer"
            aria-describedby="Manufacturer"
            placeholder="Input the manufacturer name here."
          />
          <Form.Text id="Manufacturer" muted>
          </Form.Text>
        </div>
        </>
      );
}

export default Manufacturer;