import React from 'react';
import {Redirect} from '@docusaurus/router';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Head from '@docusaurus/Head';

// The BASIS landing page is shipped as a faithful standalone design at
// /design/basis.html (static/design/basis.html), preserving its own CSS,
// inline <style>, and markup verbatim. This route exposes it at /basis and
// hands off there. (Lives under /design/ so it doesn't collide with this
// /basis route once Cloudflare Workers static assets serve .html files
// without the extension, e.g. on https://basis-spec-docs.racason.workers.dev.)
export default function BasisLanding() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/design/basis.html" />
        <title>BASIS — the standard</title>
      </Head>
      <BrowserOnly>
        {() => {
          window.location.replace('/design/basis.html');
          return null;
        }}
      </BrowserOnly>
      <noscript>
        <Redirect to="/design/basis.html" />
      </noscript>
    </>
  );
}
