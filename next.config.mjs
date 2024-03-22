/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
    /* config options here */
};

export default {
    ...nextConfig,
    ...withVideos(),
};





/* @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
};




export default nextConfig; */