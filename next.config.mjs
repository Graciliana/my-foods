import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  remotePatterns: [{hostname:"utfs.io"}],
};

export default nextConfig;
