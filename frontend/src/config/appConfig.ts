export const appConfig = {
  appName: import.meta.env.VITE_APP_NAME ?? "One More Restaurant",
  baseUrl: import.meta.env.VITE_BASE_URL ?? "/",
  apiUrl: import.meta.env.VITE_API_URL ?? "",
  heroHeading:
    import.meta.env.VITE_HERO_HEADING ??
    "Discover authentic Khmer dining in a modern sanctuary.",
  heroText:
    import.meta.env.VITE_HERO_TEXT ??
    "Immerse yourself in the rich flavors of authentic Khmer cuisine, where tradition meets a warm and inviting dining experience.",
};
