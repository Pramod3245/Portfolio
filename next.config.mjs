// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Injecting the property "output" with value "export"
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
  // other config options here
}

export default (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    ...nextConfig
  }
}
