import React from 'react';

const BlogPost = (props) => {
    return (


        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title" contentEditable="true">{props.title}</h5>
                        <p className="card-text" contentEditable="true">{props.content}</p>
                        <p className="card-text" contentEditable="true"><small className="text-body-secondary">{props.date}</small></p>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default BlogPost;
