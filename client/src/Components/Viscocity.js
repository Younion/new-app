import Form from 'react-bootstrap/Form';

function Viscocity() {
    return (
            <div className="container-fluid">
            <h2>Viscocity</h2>
          {['radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Thin"
              />
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Thin, with chunks"
              />
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Average"
              />
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Average, with chunks"
              />
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Thick"
              />
                <Form.Check 
                name="viscocity"
                type={type}
                id={`default-${type}`}
                label="Thick, with chunks"
              />
            </div>
          ))}
          </div>
      );
}

export default Viscocity;