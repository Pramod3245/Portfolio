// next.config.js

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS ? '/Portfolio' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/Portfolio/' : '',
};

export default nextConfig;
