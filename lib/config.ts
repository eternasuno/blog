import { env } from 'process';

const assertNotNull = <T>(value: T) => {
    if (value) {
        return value as NonNullable<T>;
    }

    throw new Error('value is empty.');
};

const BLOG = {
    description: env.BLOG_DESCRIPTION,
    is_dev: env.NODE_ENV === 'development',
    repository: {
        branch: env.GITHUB_REPO_BRANCH || 'main',
        name: assertNotNull(env.GITHUB_REPO_NAME),
        owner: assertNotNull(env.GITHUB_REPO_OWNER),
        token: process.env.GITHUB_TOKEN,
    },
    title: env.BLOG_TITLE || `${assertNotNull(env.GITHUB_REPO_OWNER)}'s Blog`,
};

export default BLOG;
