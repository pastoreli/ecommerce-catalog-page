export const customFetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<any> =>
  await fetch(input, init)
    .then((result) => result.json());
