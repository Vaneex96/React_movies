export const useHttp = () => {
  const request = async (
    url,
    method = "GET",
    body = null,
    headers = {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmI1YzZmN2I4YjRlMWRjYWJlYzkyN2Q2NmIzYjNhNiIsInN1YiI6IjY1NDdjOTNmOWNjNjdiMDBkZjkzY2MzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wrffqV0ov86XGUhffvJ2VfGgzNZZraDKtu6p4qaYM8U",
    }
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    }
  };

  return { request };
};
