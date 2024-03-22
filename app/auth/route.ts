import { randomBytes } from 'crypto';
import { client } from '@/libs/github-oauth';
import { type NextRequest, NextResponse } from 'next/server';

export const GET = (request: NextRequest) => {
  const { protocol, host, searchParams } = new URL(request.url);
  const scope = searchParams.get('scope') || 'repo';

  const authorizationUri = client.authorizeURL({
    redirect_uri: `${protocol}//${host}/auth/callback`,
    scope,
    state: randomBytes(4).toString('hex'),
  });

  return NextResponse.redirect(authorizationUri, 301);
};
