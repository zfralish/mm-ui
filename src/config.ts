interface Configuration {
  apiUrl: string;
}

export const Config: Configuration = {
  apiUrl: import.meta.env.API_URL ?? "http://localhost:8000/v1",
};
