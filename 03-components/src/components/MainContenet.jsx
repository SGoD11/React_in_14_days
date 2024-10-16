import React from "react";
import Data from "../Data";
import Card from "./Card";

export default function MainContent() {
    return (
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {/* Map through Data and return Card components */}
                    {Data.map((content) => (
                        <Card 
                            key={content.id} // Make sure to include a unique key
                            heading={content.heading} 
                            cardText={content.cardText} 
                            imageUrl={content.imageUrl} 
                            launchDate={content.launchDate} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
