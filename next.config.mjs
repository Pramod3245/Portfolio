// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Injecting the property "output" with value "export"
  output: 'export',
  // other config options here
}

export default (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    ...nextConfig
  }
}
