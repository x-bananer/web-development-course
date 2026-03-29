const createUser = async () => {
    try {
        const response = await fetch('https://reqres.in/api/unknown/23', {
            headers: {
                'x-api-key': 'reqres_8562c0bb3a4241a7add4bd6d19132c12',
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