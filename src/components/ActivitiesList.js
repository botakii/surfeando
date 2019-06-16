import './ActivitiesList.css';
import React from 'react';
import ActivityCard from './ActivityCard.js';

const ActivitiesList = props => {

    /*const activities = for( const key of Object.keys(props.activities)){
        //console.log(key, props.activities[key]);
        return <img alt={props.activities[key].name} key={key} src={props.activities[key].pictureUrl} />
    } */
      
    
   /*
   //Solution to map through an Object and return the images
   
   const myactlist =  Object.keys(props.activities).map((item, i) => (
            <img alt={props.activities[item].name} key={i} src={props.activities[item].pictureUrl} /> 
         
    ))
     
     return <div className="activities-list">{myactlist}</div> 
    */
    
    
    //Solution to map through the Object and return each image seperately using the ActivityCard component 
    const myactivities = Object.entries(props.activities).map((activity,i) => {
        return <ActivityCard key={i} activity={Object.values(activity)} />;
    });
    
    return <div className="activities-list">{myactivities}</div>; 
    
        
}; 
    

export default ActivitiesList;
                                            
                                            