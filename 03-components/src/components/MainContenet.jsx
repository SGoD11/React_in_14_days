import React from "react";
import Album from "./Album";

export default function MainContent(props) {
    return (
        <div>
                {/* Pass the props down to the Album component */}
                <Album 
                    imageUrl={props.imageUrl} 
                    heading={props.heading} 
                    cardText={props.cardText} 
                    launchDate={props.launchDate} 
                />
            
        </div>
    );
}
