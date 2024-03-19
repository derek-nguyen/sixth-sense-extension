// This file will hold all frontend network request adapters

const BASE_URL = "http://localhost:8080"
import axios from 'axios';

export const getSummary = async (url: string) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/summarize/text?url=${url}`);
        console.log(data);
        return data
    } catch (err) {
        console.error(err);
        return { healthy: false }
    }
}