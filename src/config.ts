export const APP_HOME_URL = "/";
export const APP_ABOUT_URL = "/about";
export const APP_PROJECTS_URL = "/projects";
export const APP_INVESTMENTS_URL = "/investments";
export const APP_MUSIC_URL = "/music";

export const APP_WEBSITE_URL = "https://www.rydkvist.com";
export const APP_TITLE_SUFFIX = "Niklas Rydkvist";
export const APP_SLOGAN = "Niklas Rydkvist";
export const APP_DESCRIPTION =
  "Niklas Rydkvist is a Software Engineer based in Stockholm, Sweden. He is passionate about building software that facilitates the day-to-day life of people.";

const isDevelopment = false; //process.env.VERCEL_ENV === "development";

export const ABSOLUTE_WEBSITE_URL = isDevelopment
  ? "http:/localhost:3000"
  : "https://www.rydkvist.com";

export const EXTERNAL_LINKS = {
  website: "https://www.rydkvist.com",
  github: "https://github.com/rydkvist",
  linkedin: "https://www.linkedin.com/in/niklasrydkvist/",
  spotify: "https://open.spotify.com/user/1123710739",
} as const;

export const APP_LINKS = {
  home: APP_HOME_URL,
  about: APP_ABOUT_URL,
  projects: APP_PROJECTS_URL,
  investments: APP_INVESTMENTS_URL,
  music: APP_MUSIC_URL,
} as const;

export const PERSONAL = {
  email: "niklas@rydkvist.com",
  phoneNumber: "+46 70 377 11 04",
  address: "Stockholm, Sweden",
  addressWithGoogleMaps:
    "https://maps.google.com/maps/search/Stockholm, Sweden",
} as const;

export const seo;
