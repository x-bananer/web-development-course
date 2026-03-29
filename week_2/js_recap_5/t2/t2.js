const REQRES_API_KEY = 'ADD YOUR REQRES API KEY HERE';

const createUser = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'x-api-key': REQRES_API_KEY,
            },
            body: JSON.stringify({
                name: 'Ksenia',
                job: 'developer'
            }),
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

createUser();
