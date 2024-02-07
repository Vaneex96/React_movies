const request = async (
  url,
  method = "GET",
  body = null,
  headers = {
    accept: "application/json",
  }
) => {
  try {
    const response = await fetch(url, {
      mode: "no-cors",
      method: "GET",
      body: null,
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      console.log(response);
      throw new Error(`Could not fetch ${url}, status ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (e) {
    throw e;
  }
};

request("http://localhost:8080/people/employees")
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
