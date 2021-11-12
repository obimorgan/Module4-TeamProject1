import { Component } from 'react'
import harryPotterCards from './HarryPotterCards'

class cards extends Component {
    state = {
        harryPotter: []
    }

    componentDidMount () {
        this.fetchData()
    }
    
    fetchData = async () => {
        try {
            const response = await fetch ("http://www.omdbapi.com/?i=tt3896198&apikey=907b4b85&s=harry")
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                this.setState({harryPotter: data})
            } else {
                throw response
            }
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        <div>
            <HarryPotterCards displayData={this.state.harryPotter}/>
        </div>
    }
}

export default cards