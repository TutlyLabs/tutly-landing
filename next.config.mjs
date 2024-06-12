/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/under-maintenance",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
