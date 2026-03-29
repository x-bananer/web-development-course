const REQRES_API_KEY = 'ADD YOUR REQRES API KEY HERE';

const fetchData = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Request error: ${response?.status}`);
        }

        return await response.json();
    } catch (err) {
        throw err;
    }
}

const t4Test = async () => {
    try {
        const url = 'https://reqres.in/api/users';

        const options = {
            method: 'POST',
            headers: {
                'x-api-key': REQRES_API_KEY,
            },
            body: JSON.stringify({
                name: 'Ksenia',
                job: 'developer'
            }),
        }

        const data = await fetchData(url, options);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

t4Test();
