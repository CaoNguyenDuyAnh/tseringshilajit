// next.config.js

const nextConfig = {
  // Cấu hình basePath nếu ứng dụng của bạn được triển khai dưới một basePath cụ thể
  basePath: "/home",

  // Cấu hình tên miền và path prefix cho ứng dụng của bạn
  // assetPrefix: '/myapp/',

  // Cấu hình định dạng tệp và thư mục cho các tệp ảnh, font chứa trong ứng dụng
  images: {
    domains: ["example.com"],
  },

  // Cấu hình environment variables
  env: {
    API_URL: process.env.API_URL,
  },

  // Cấu hình Webpack hoặc các plugins khác
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Thực hiện các thay đổi vào cấu hình webpack ở đây
    return config;
  },

  // Cấu hình các headers cho trang
  headers: async () => {
    return [
      {
        // Cache HTML trong 10 giây
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=10, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
