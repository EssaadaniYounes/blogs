import axios from "axios";

export const fetch = async (options) => {
    const url = " http://localhost:3000/posts";

    const { data, method, curstom_headers } = options;

    const headers = {
        'Accept': 'application/json',
        ...curstom_headers
    }
    try {
        const response = await axios({
            method: method ?? 'GET',
            url: url,
            headers,
            data
        });
        return response.data;
    } catch (error) {
        return { error };
    }
}