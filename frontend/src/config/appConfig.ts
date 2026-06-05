export const appConfig = {
  appName: import.meta.env.VITE_APP_NAME ?? "One More Restaurant",
  baseUrl: import.meta.env.VITE_BASE_URL ?? "/",
  apiUrl: import.meta.env.VITE_API_URL ?? "",
  heroHeading:
    import.meta.env.VITE_HERO_HEADING ??
    "Authentic Khmer cuisine with warm hospitality in Toul Kork",
  heroText:
    import.meta.env.VITE_HERO_TEXT ??
    "Discover traditional Cambodian flavors in a modern, inviting setting. From beloved classics to unique local specialties, we serve authentic dishes prepared with fresh ingredients and a passion for sharing Khmer culinary heritage.",
};
