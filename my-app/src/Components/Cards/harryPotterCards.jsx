

import { Button, Card, Row, Col, Container} from 'react-bootstrap'

const HarryPotterCards = ({displayData}) => (

    <div>
        {

            displayData.map(data => 
        
                    
                        <Col className=" d-flex col-md-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={data.Poster} />
                            </Card>
                        </Col>
                    
      


            )

        }
    </div>

)

export default HarryPotterCards