import React from 'react';
import Layout from '../components/layout';
import { WEB_DOMAIN } from '../lib/web.config';

const NotFound = () => (
    <Layout title={`404 - Not Found`} canonical={`${WEB_DOMAIN}/404`}
        description={"Not found page."}>
    </Layout>
);

export default NotFound;
