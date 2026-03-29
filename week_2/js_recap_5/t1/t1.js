const REQRES_API_KEY = 'ADD YOUR REQRES API KEY HERE';

const getUser = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users/1', {
            headers: {
                'x-api-key': REQRES_API_KEY,
            }
        });

        if (!response.ok) {
            throw new Error('Request failed');
        }

        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

getUser();
