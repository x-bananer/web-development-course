const createUser = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'x-api-key': 'reqres_8562c0bb3a4241a7add4bd6d19132c12',
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