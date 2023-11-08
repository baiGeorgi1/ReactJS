const URL = 'http://localhost:3030/jsonstore/users';

export const getAll = async () => {

    const response = await fetch(URL);
    const result = await response.json();
    const data = Object.values(result);

    return data;
};

export const create = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            country: data.coutry,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber
        }

    };
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const result = await response.json();
};
export const getUserInfo = async (userId) => {
    const response = await fetch(URL + `/${userId}`);
    const result = await response.json();
    return (result);
};
export const deleteUser = async (userId) => {
    const response = await fetch(URL + `/${userId}`, {
        method: 'DELETE'
    });
    const result = await response.json();
    return result;

};