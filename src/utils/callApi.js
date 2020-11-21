const API_ENDPOINT = "https://code-challenge.spectrumtoolbox.com/api/";

export const callAPi = ({ path = "", method = "get", data }) => {
    const url = API_ENDPOINT + path;
    return fetch(url, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Api-Key q3MNxtfep8Gt",
        },
        method,
        body: JSON.stringify(data),
    })
        .then((response) =>
            response
                .json()
                .then((data) => ({
                    data: data,
                    status: response.status,
                }))
                .then((res) => {
                    return res;
                })
        )
        .catch((e) => console.log("Oops! something went wrong", e));
};
