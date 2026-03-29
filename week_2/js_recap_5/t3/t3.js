const REQRES_API_KEY = 'ADD YOUR REQRES API KEY HERE';

const createUser = async () => {
    try {
        const response = await fetch('https://reqres.in/api/unknown/23', {
            headers: {
                'x-api-key': REQRES_API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`Request error: ${response?.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

createUser();
