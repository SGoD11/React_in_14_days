import React,{useState} from "react";
export default function Card(props){
    // State to toggle between showing full or truncated text
    const [showFullText, setShowFullText] = useState(false);
    // Function to toggle text view
    const toggleText = () => {
        setShowFullText(!showFullText);
    };
    // Function to limit words to any length based on parameter
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };
    return(
        <div class="col">
                            <div class="card shadow-sm">
                                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={props.imageUrl}   />
                                <div className="card-body">
                                    <h1 className="card-title">{props.heading}</h1>
                                    {/* Show truncated or full text based on state */}
                                    <p className="card-text text-wrap">
                                        {showFullText
                                            ? props.cardText
                                            : truncateText(props.cardText, 20)}
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={toggleText}
                                            >
                                                {showFullText ? "Show Less" : "Details"}
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary bg-warning text-light" > Buy Now</button>
                                        </div>
                                        <small className="text-body-secondary">{props.launchDate}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}