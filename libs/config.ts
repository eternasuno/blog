import { join } from 'path';
import { creator, description, host, title } from '@/contents/metadata.json';
import { env } from 'process';
import { withoutEmpty } from './wrapper';

export const TITLE = title;

export const CREATOR = creator;

export const HOST = host;

export const DESCRIPTION = description;

export const DEV = env.NODE_ENV === 'development';

export const BASE_URL = `${DEV ? 'http' : 'https'}://${HOST}`;

export const POST_DIR = join(process.cwd(), 'contents', 'posts');

export const AUTH_GITHUB_CLIENT_ID = withoutEmpty(
  env.AUTH_GITHUB_CLIENT_ID,
  'Not found AUTH_GITHUB_CLIENT_ID in env',
);

export const AUTH_GITHUB_CLIENT_SECRET = withoutEmpty(
  env.AUTH_GITHUB_CLIENT_SECRET,
  'Not found AUTH_GITHUB_CLIENT_SECRET in env',
);
