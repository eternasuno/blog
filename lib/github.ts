import BLOG from './config';

const {
    repository: { name, owner, branch, token },
} = BLOG;

const get = async (url: string) => {
    const response = await fetch(url, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: token ? `Bearer ${token}` : '',
        },
    });

    return response.json();
};

export const getContents = () =>
    get(`https://api.github.com/repos/${owner}/${name}/contents?ref=${branch}`);

export const getCommits = (path: string) =>
    get(`https://api.github.com/repos/${owner}/${name}/commits?path=${path}`);

export const getCDNUrl = (path: string) =>
    `https://cdn.jsdelivr.net/gh/${owner}/${name}@${branch}/${path}`;

export const getContent = async (path: string) => {
    const response = await fetch(getCDNUrl(path));
    return response.text();
};
