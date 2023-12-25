/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_ANALYTICS_ID: string;
  readonly SPOTIFY_CLIENT_ID: string;
  readonly SPOTIFY_CLIENT_SECRET: string;
  readonly SPOTIFY_CURRENTLY_PLAYING_REFRESH_TOKEN: string;
  readonly SPOTIFY_PLAYBACK_STATE_REFRESH_TOKEN: string;
  readonly SPOTIFY_RECENTLY_PLAYED_REFRESH_TOKEN: string;
  readonly SPOTIFY_TOP_READ_REFRESH_TOKEN: string;
  readonly SPOTIFY_USER_READ_PRIVATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
