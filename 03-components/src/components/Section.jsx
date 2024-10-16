import React from "react";


export default function Section() {
    return (
        <section className="py-5 text-center container-fluid section bg-dark">
            <div className="row py-lg-5 ">
                <div className="col-lg-6 col-md-8 mx-auto section-content"> {/* Use a separate class for content */}
                    <div className="bg-transparent-whitesmoke">
                    <h1 className="fw-light bold-text">Camera Lenses</h1>
                    <p className="lead text-warning bold-text">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    <p className='d-flex justify-content-center gap-custom'>
                        <a href="#" className="btn btn-primary my-2">Main call to action</a>
                        <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
