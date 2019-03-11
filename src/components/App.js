import React from 'react';
import surfeando from '../api/Surfeando';
import SearchBar from './SearchBar';
import ActivitiesList from './ActivitiesList';

class App extends React.Component {
    
    state = { activities: {} };
    
    onSearchSubmit = async term => {
        const response = await surfeando.get('/activities.json', {
            params: { query: term }
        });
        
        this.setState({ activities: response.data });
    }; 
     
    render() {
    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ActivitiesList activities={this.state.activities}/>
        </div>
    );
    }
}

export default App;
