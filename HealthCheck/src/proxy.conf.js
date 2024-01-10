const PROXY_CONFIG = [
    {
      context: ['/api'],
      target: 'http://localhost:7072', // substitua pelo URL do seu backend API
      secure: false,
      changeOrigin: true,
    },
  ];
  
  module.exports = PROXY_CONFIG;
  