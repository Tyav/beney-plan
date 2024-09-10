// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Modify the Webpack config to handle CSS files
      config.module.rules.push({
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      });
      return config;
    },
  };
  
  export default nextConfig;
  