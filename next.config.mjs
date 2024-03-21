/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  /* config options here */
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
};

export default withVideos(nextConfig);





/* @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
};




export default nextConfig; */


