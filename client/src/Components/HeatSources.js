import Form from 'react-bootstrap/Form';

function HeatSources() {
    return (
            <div className="container-fluid">
            <h2>Heat Sources</h2>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Habanero"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Scorpion"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Bhut Jolokia"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Carolina Reaper"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Naga Jolokia"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Ghost"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Herbal"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Generic Yellow / Banana / Wax"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Mustard"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Generic Red / Red Pepper Flakes"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Tabasco"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Scotch Bonnet"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Thai Chili"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Cayenne"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Generic Green / Hatch / Green Chili"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Jalapeno"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Arbol"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Pequin / Picant"
              />
                <Form.Check 
                name="HeatSources"
                type={type}
                id={`default-${type}`}
                label="Chipotle"
              />                
              <Form.Check 
              name="HeatSources"
              type={type}
              id={`default-${type}`}
              label="Serrano"
            />
            </div>
          ))}
          </div>
      );
}

export default HeatSources;