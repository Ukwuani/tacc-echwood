/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  // Cloudflare Workers resolve Emotion's "edge-light" builds, which Next's file tracing skips.
  outputFileTracingIncludes: {
    '*': ['./node_modules/@emotion/**/*'],
  },
};
