const executeApiCall = async (method, url, body) => {
    const payload = {};
    if (body) payload.body = body;

    const response = await fetch(url, {
        method: method,
        credentials: 'include',
        mode: 'cors',
        ...payload
    });
    
    return await response.json();
};

// const executeApiCall = async (method, url, body) => {
//     const payload = {};
//     if (body) payload.body = JSON.stringify(body);

//     const response = await fetch(url, {
//         method: method,
//         credentials: 'include',
//         mode: 'cors',
//         httpOnly: true,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         ...payload
//     });

//     return await response.json();
// };

export default {
    post (url, payload) {
        return executeApiCall('POST', url, payload);
    }
};