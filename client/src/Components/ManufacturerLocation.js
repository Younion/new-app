import Dropdown from 'react-bootstrap/Dropdown';

function ManufacturerLocation() {
    return (
        <div className="container-fluid">
            <Dropdown>
            <h2>Manufacturer Location</h2><br />
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            Select
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Local (Colorado)</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Domestic</Dropdown.Item>
            <Dropdown.Item href="#/action-3">International</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </div>
      );
}

export default ManufacturerLocation;