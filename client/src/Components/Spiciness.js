import Form from 'react-bootstrap/Form';

function Spiciness() {
    return (
            <div className="container-fluid">
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
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="2"
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="3"
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="4"
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="5"
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="6"
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="7"
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="8"
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="9"
              />
                <Form.Check 
                inline
                name="spiciness"
                type={type}
                id={`inline-${type}`}
                label="10"
              />
            </div>
          ))}
          </div>
      );
}

export default Spiciness;