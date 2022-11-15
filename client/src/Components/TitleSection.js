import Button from 'react-bootstrap/Button';

function TitleSection() {
    return (
        <div className="color-section" id="title">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="big-heading">Review hot sauces from around the world!</h1>
                    <>
                    <Button variant="btn btn-outline-dark btn-lg download-button">Review a Sauce</Button>
                    <Button variant="btn btn-outline-dark btn-lg download-button">Add a Sauce</Button>
                    </>
                <div className="col-lg-6">
                    <img className="title-image" src="breathingfire.png" alt="fire-breathing-chicken"></img>
                </div>
                </div>
            </div>
        </div>
    );
}

export default TitleSection