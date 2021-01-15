import React from 'react';
import SignupButton from './SignupButton'

function LandingPage() {
    return (
        <div>
            <div>
                <h1 className="landing-page_intro header">
                    Investing for the People, by the People
                </h1>
                <h2>
                    This is just a demo for a showing of a commodity trading App
                </h2>
                <SignupButton />
            </div>
            <div className="landing-page_image-container">
                <img
                className="landing-page_image"
                src="https://www.openbusinesscouncil.org/wp-content/uploads/2018/03/commodities.jpg"
                />
            </div>
        </div>
    );
}

export default LandingPage;
