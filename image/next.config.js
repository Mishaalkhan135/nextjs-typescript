/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: "akamai",
		domains: ["images.unsplash.com"],
	},
};

module.exports = nextConfig;
