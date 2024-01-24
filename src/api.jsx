import axios from 'axios';

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ytxYBNW0Q7vquselAp3V8i7n3DPh6pe0C4RdoX9UKsk',
        },
        params: {
            query: term,
        }
    });
    return response.data.results
};

export default searchImages;