import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const SauceCard = ({ sauceData }) => {
    return (
            <div className="card">
                <Card>
                <div className="cardBody">
                <Card.Body>
                    <Card.Title>{sauceData.Name}</Card.Title>
                    <Card.Text>
                    Average Rating: {Math.round(sauceData['Average Rating'])}
                    </Card.Text>
                    <Card.Text>
                    Spiciness Rating: {Math.round(sauceData['Average Spiciness'])}
                    </Card.Text>
                    <Card.Text>
                    Tastings: {sauceData.Tastings}
                    </Card.Text>
                    <Card.Text>
                    Percent Loved: {Math.round(sauceData['Percent Loved']*100)}%
                    </Card.Text>
                    <Card.Text>
                    Heat Sources: {sauceData['Heat Sources String']}
                    </Card.Text>
                    <Card.Text>
                    Flavor Notes: {sauceData['Flavor Notes String']}
                    </Card.Text>
                </Card.Body>
                </div>
                </Card>

                </div>
        
    )
};

export default SauceCard;