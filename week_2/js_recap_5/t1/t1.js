const getUser = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users/1', {
            headers: {
                'x-api-key': 'reqres_8562c0bb3a4241a7add4bd6d19132c12',
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