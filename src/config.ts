export const EXTERNAL_LINKS = {
  website: "https://www.rydkvist.com",
  github: "https://github.com/rydkvist",
  linkedin: "https://www.linkedin.com/in/niklasrydkvist/",
  spotify: "https://open.spotify.com/user/1123710739",
} as const;

export type ExternalLinks =
  (typeof EXTERNAL_LINKS)[keyof typeof EXTERNAL_LINKS];

export const APP_LINKS = {
  about: "/",
  projects: "/projects",
  investments: "/investments",
  music: "/music",
} as const;

export type AppLinks = (typeof APP_LINKS)[keyof typeof APP_LINKS];

export const PERSONAL = {
  email: "niklas@rydkvist.com",
  phoneNumber: "+46 70 377 11 04",
  address: "Stockholm, Sweden",
  addressWithGoogleMaps:
    "https://maps.google.com/maps/search/Stockholm, Sweden",
} as const;
