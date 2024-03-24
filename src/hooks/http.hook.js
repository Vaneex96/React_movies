export const useHttp = () => {
  const request = async (
    url,
    method = "GET",
    body = null,
    headers = {
      "Content-Type": "application/json",
      accept: "application/json",
    }
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        console.log("response " + response.status);

        if (response.status === 401) {
          localStorage.removeItem("jwt");
          localStorage.removeItem("id");
          localStorage.removeItem("username");
        }

        throw new Error(`Could not fetch ${url}, status ${response}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};
