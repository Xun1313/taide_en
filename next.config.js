//const path = require('path');
/** @type {import('next').NextConfig} */
// const CopyPlugin = require("copy-webpack-plugin");
// const path = require("path");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: process.env.PROTOCOL,
    //     hostname: process.env.HOSTNAME,
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "img.youtube.com",
    //   },
    // ],
  },
  // webpack: (config, { dev }) => {
  //   if (dev) {
  //     return config;
  //   } else {
  //     config.plugins.push(
  //       new CopyPlugin({
  //         patterns: [
  //           {
  //             from: path.join(__dirname, "public"),
  //             to: path.join(__dirname, ".next"),
  //           },
  //         ],
  //       })
  //     );
  //     return config;
  //   }
  // },
  // webpack: (config) => {
  //   config.resolve.alias["~"] = path.join(__dirname, "app");
  //   return config;
  // },
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,DELETE,PATCH,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //       ],
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     // {
  //     //   source: "/public/api/:path*",
  //     //   destination: "https://taide.tw/:path*",
  //     // },
  //     {
  //       source: "/:path*",
  //       destination: "https://taide.tw/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
