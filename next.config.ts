
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'akcdn.detik.net.id', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.cnnindonesia.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.dribbble.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.oaistatic.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.prod.website-files.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.usegalileo.ai', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn0-production-images-kly.akamaized.net', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn1-production-images-kly.akamaized.net', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'code.visualstudio.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'figma-alpha-api.s3.amazonaws.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'firebase.google.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'framerusercontent.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'github.githubassets.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'huggingface.co', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'i.pinimg.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'i.ytimg.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'ichef.bbci.co.uk', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'img.alicdn.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'media.cnn.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'mir-s3-cdn-cf.behance.net', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'p16-images-comn-sg.tokopedia-static.net', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'pbs.twimg.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'placehold.co', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'preview-kly.akamaized.net', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 's.pinimg.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 's2.coinmarketcap.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'sc.cnbcfm.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'static.cdninstagram.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'storage.googleapis.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'upload.wikimedia.org', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'www.apple.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'www.figma.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'www.google.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'www.gstatic.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'www.notion.so', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'www.redditstatic.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'www.tiktok.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'www.tokopedia.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'www.youtube.com', port: '', pathname: '/**' },
    ],
  },
};

export default nextConfig;
