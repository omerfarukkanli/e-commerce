export const register = async ({ firstName, lastName, email, password }) => {
    try {
        const data = await useFetch("http://localhost:5000/api/signup", {
            method: 'POST',
            headers: useRequestHeaders(['authorization']),
            body: { firstName, lastName, email, password }
        })
        return data
    }
    catch (error) { console.error(error) }
}