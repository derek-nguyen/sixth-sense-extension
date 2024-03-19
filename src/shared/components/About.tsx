import React from "react";

interface AboutProps {
    currentURL: string;
}

const About: React.FC<AboutProps> = (props) => {
    const { currentURL } = props;

    return (
        <div>
            <h1>About</h1>
            <hr />
        </div>
    )
};

export default About;