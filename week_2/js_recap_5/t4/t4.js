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
                'x-api-key': 'reqres_8562c0bb3a4241a7add4bd6d19132c12',
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