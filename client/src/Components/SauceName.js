import Form from 'react-bootstrap/Form';

function SauceName() {
    return (
        <>
        <div className="container-fluid">
          <Form.Label htmlFor="SauceName">
            <h2>Sauce Name</h2></Form.Label>
          <Form.Control
            type="text"
            id="SauceName"
            aria-describedby="SauceName"
            placeholder="Input the name of the sauce here."
          />
          <Form.Text id="SauceName" muted>
          </Form.Text>
        </div>
        </>
      );
}

export default SauceName;