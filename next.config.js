/** @type {import('next').NextConfig} */
const nextConfig = {
  // Translation / Internalisation
  i18n: {
    locales: ["en", "pl", "de"],
    defaultLocale: "pl",
  },

  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },

  images: {
    domains: ["http://ltc-investments.pl/", "https://localhost:3000"],
    //   website of this project, so that images are loaded on the live website too
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
