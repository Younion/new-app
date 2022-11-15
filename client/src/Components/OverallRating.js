import Form from 'react-bootstrap/Form';

function OverallRating() {
    return (
            <div className="container-fluid">
            <h2>Overall Rating</h2>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
                <Form.Check 
                inline
                name="OverallRating"
                type={type}
                id={`inline-${type}`}
                label="1"
              />
                <Form.Check 
                inline
                name="OverallRating"
                type={type}
                id={`inline-${type}`}
                label="2"
              />
                <Form.Check 
                inline
                name="OverallRating"
                type={type}
                id={`inline-${type}`}
                label="3"
              />
                <Form.Check 
                inline
                name="OverallRating"
                type={type}
                id={`inline-${type}`}
                label="4"
              />
                <Form.Check
                inline
                name="OverallRating"
                type={type}
                id={`inline-${type}`}
                label="5"
              />
            </div>
          ))}
          </div>
    );
}

export default OverallRating;