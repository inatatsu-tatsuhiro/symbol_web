const withPWA = require('next-pwa');
const runtimeCaching = require("next-pwa/cache");

let nextConfig = undefined;

if (process.env.NODE_ENV === 'development') {
  nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['localhost'],
    },
    i18n: {
      locales: ['en-US', 'ja-JP', 'ko-KR'],
      defaultLocale: 'en-US',
    },
  };
} else {
  nextConfig = withPWA({
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    reactStrictMode: true,
    swcMinify: false,
    pwa: {
      dest: 'public',
    },
    images: {
      domains: ['localhost'],
    },
    i18n: {
      locales: ['en-US', 'ja-JP', 'ko-KR'],
      defaultLocale: 'en-US',
    },
  });
}

module.exports = nextConfig;
