import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7539d332b9015928c6090341a8db8f16cdfed57315b744a51fd038f29ce2491a'
    }
})