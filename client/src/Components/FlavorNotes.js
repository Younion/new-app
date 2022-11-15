import Form from 'react-bootstrap/Form';

function FlavorNotes() {
    return (
            <div className="container-fluid">
            <h2>Flavor Notes</h2>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Bitter"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Black Pepper"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Constituent Peppers"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Floral"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Fruity"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Garlicky"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Herbal"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Linger"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Mustard"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Onion"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Savory"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Smokey"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Sour"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Sweet"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Sweet"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Vinegar"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Tangy"
              />
                <Form.Check 
                name="flavornotes"
                type={type}
                id={`default-${type}`}
                label="Salty"
              />
            </div>
          ))}
          </div>
      );
}

export default FlavorNotes;