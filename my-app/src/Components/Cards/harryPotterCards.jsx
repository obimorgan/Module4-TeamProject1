
import CardItem from 'react-bootstrap/Card'

const HarryPotterCards = ({displayData}) => (
    <>
        {
            displayData.Search.map(data => 
                <CardItem key={data.imdbID} info={data}/>)
        }
    </>
)

export default HarryPotterCards