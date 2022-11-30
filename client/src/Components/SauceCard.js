import Card from 'react-bootstrap/Card';

const SauceCard = ({ sauceData }) => {
    return (  
        <div className="cards-container">
            <Card className="card">
                <Card.Body>
                    <Card.Title>{sauceData.hot_sauce_name}</Card.Title>
                    <Card.Text>
                    Average Rating: {Math.round(sauceData['hot_sauce_overall'])}
                    </Card.Text>
                    <Card.Text>
                    Spiciness Rating: {Math.round(sauceData['hot_sauce_spiciness'])}
                    </Card.Text>
                    <Card.Text>
                    Tastings: {sauceData['hot_sauce_tastings']}
                    </Card.Text>
                    <Card.Text>
                    {/* Percent Loved: {Math.round(sauceData['love_pct']*100)}% */}
                    </Card.Text>
                    <Card.Text>
                    {/* Heat Sources: {sauceData['Heat Sources String']} */}
                    </Card.Text>
                    <Card.Text>
                    {/* Flavor Notes: {sauceData['Flavor Notes String']} */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export default SauceCard;