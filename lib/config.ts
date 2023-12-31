import { env } from 'process';

const {
  BLOG_DESCRIPTION,
  BLOG_DOMAIN,
  BLOG_TITLE,
  GITHUB_REPO_BRANCH,
  GITHUB_REPO_NAME,
  GITHUB_REPO_OWNER,
  GITHUB_TOKEN,
  NODE_ENV,
  PORT,
  VERCEL_URL,
} = env;

const assertNotNull = <T>(value: T) => {
  if (value) {
    return value as NonNullable<T>;
  }

  throw new Error('value is empty.');
};

const BLOG = {
  description: BLOG_DESCRIPTION,
  domain: BLOG_DOMAIN || VERCEL_URL || `localhost:${PORT || 3000}`,
  is_dev: NODE_ENV === 'development',
  repository: {
    branch: GITHUB_REPO_BRANCH || 'main',
    name: assertNotNull(GITHUB_REPO_NAME),
    owner: assertNotNull(GITHUB_REPO_OWNER),
    token: GITHUB_TOKEN,
  },
  title: BLOG_TITLE || `${assertNotNull(GITHUB_REPO_OWNER)}'s Blog`,
};

export default BLOG;
