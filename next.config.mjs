/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/configs/env/server.mjs'))

/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    dirs: ['src', 'app'],
  },
  experimental: {
    appDir: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
}

export default nextConfig
