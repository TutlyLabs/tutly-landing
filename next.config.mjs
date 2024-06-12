/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/under-maintenance",
      },
    ];
  },
};

export default nextConfig;
