import { client } from '@/libs/github-oauth';
import { withEmpty, withoutEmpty } from '@/libs/wrapper';
import { type NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    const { protocol, host, searchParams } = new URL(request.url);
    withEmpty(searchParams.get('error'), searchParams.get('error_description'));
    const code = withoutEmpty(searchParams.get('code'), 'Not found authorization code');
    const redirect_uri = `${protocol}//${host}/auth/callback`;
    const { token } = await client.getToken({ code, redirect_uri });
    const access_token = withoutEmpty(token.access_token, 'Not found access_token');

    return new NextResponse(renderBody(String(access_token)), {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error) {
    return new NextResponse((error as Error).message, { status: 500 });
  }
};

const renderBody = (token: string) => `
<html>
  <head></head>
    <body>
      login success!
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify({ token })}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        };

        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      </script>
    </body>
</html>`;
