import Button from 'react-bootstrap/Button';

function TitleSection() {
    return (
        <div className="color-section" id="title">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="big-heading">Review hot sauces from around the world!</h1>
                    <>
                    <a href="#reviewASauce">
                    <Button variant="btn btn-outline-dark btn-lg download-button">Review a Sauce</Button>
                    </a>
                    <a href="#addASauce">
                    <Button variant="btn btn-outline-dark btn-lg download-button">Add a Sauce</Button>
                    </a>
                    </>
                <div className="col-lg-6">
                    <img className="title-image" src="image.png" alt="cool-pepper"></img>
                </div>
                </div>
            </div>
        </div>
    );
}

export default TitleSection