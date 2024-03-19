import React, { useEffect, useState } from "react";
import { getSummary } from "../../api"

interface AboutProps {
    currentURL: string;
}

const About: React.FC<AboutProps> = (props) => {
    const { currentURL } = props;
    const [summary, setSummary] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    // Make a request to https://localhost:8080/summarize/text?url=${currentURL}
    useEffect(() => {
        const fetchSummary = async () => {
            if (!currentURL || !currentURL.startsWith('http://') && !currentURL.startsWith('https://')) {
                console.error('Invalid URL', currentURL);
                return
            }
            const summary = await getSummary(currentURL);
            setSummary(summary);
            setIsLoading(false);
        };

        fetchSummary();
    }, [currentURL]);

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>About</h1>
            <hr />
            <div>{summary}</div>
        </div>
    )
};

export default About;