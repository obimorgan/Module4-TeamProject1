import { Component } from 'react'
import HarryPotterCards from './HarryPotterCards'

class Cards extends Component {
    state = {
        harryPotter: []
    }

    componentDidMount () {
        this.fetchHarryPotter()
    }
    
    fetchHarryPotter = async () => {
        try {
            const response = await fetch ("http://www.omdbapi.com/?i=tt3896198&apikey=907b4b85&s=harry")
            if (response.ok) {
                const data = await response.json()
                console.log(data.Search)
                
                this.setState({harryPotter: data.Search})
            } else {
                throw response
            }
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <>
                <HarryPotterCards displayData={this.state.harryPotter}/>
               
            </>
        )

    }
}

export default Cards