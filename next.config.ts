import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/infraestructura-digital",
        destination: "/servicios/infraestructura-digital",
        permanent: true,
      },
      {
        source: "/infraestructura-digital/opengraph-image",
        destination: "/servicios/infraestructura-digital/opengraph-image",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
