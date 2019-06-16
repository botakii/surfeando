import React from 'react';

class ActivityCard extends React.Component {

    constructor(props){
        super(props);
        
        this.state = { spans : 0 };
        this.imageRef = React.createRef();
    }
    
    componentDidMount(){
       this.imageRef.current.addEventListener('load', this.setSpans); 
    }
    
    setSpans = () => {
       const height = this.imageRef.current.clientHeight;
        
        const spans = Math.ceil(height / 10);
        
        this.setState({spans});
    }
    
    render(){
        
        // Object[0]=key, Object[1]=array of properties
        const { name, pictureUrl } = this.props.activity[1];
         
        return (
            <div style={{ gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={name} src={pictureUrl} />
            </div>
        );
    }
}

export default ActivityCard;