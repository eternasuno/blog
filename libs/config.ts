import { join } from 'path';
import { env } from 'process';

export const DEV = env.NODE_ENV === 'development';

export const AUTHOR = env.BLOG_AUTHOR || env.USER || 'eternasuno';

export const DOMAIN = env.BLOG_DOMAIN || env.VERCEL_URL || `localhost:${env.PORT || 3000}`;

export const TITLE = `${AUTHOR}'s blog`;

export const BASE_URL = `${DEV ? 'http' : 'https'}://${DOMAIN}`;

export const POST_DIR = join(process.cwd(), 'posts');
