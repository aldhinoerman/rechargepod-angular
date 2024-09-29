declare interface Env {
  readonly NODE_ENV: string;
  readonly NG_APP_PUBLIC_NYT_API_KEY: string;
}

interface ImportMeta {
  env: {
    NG_APP_PUBLIC_NYT_API_KEY: string;
    [key: string]: string;
  };
}
