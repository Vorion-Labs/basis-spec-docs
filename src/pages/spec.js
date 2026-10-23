import React from 'react';
import {Redirect} from '@docusaurus/router';

// /spec used to hand off to a standalone design mock (static/design/spec.html).
// That page carried placeholder status, editors and links, so it was retired;
// /spec now goes straight to the specification docs.
export default function SpecPage() {
  return <Redirect to="/spec/overview" />;
}
