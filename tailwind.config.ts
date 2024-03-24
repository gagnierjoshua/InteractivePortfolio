import type { Config } from "tailwindcss";


const config: Config={
  content: [

    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],


  theme: {
    extend: {
      fontFamily: {
        logo: ["Oleo Script", "system-ui"],
        primary: ["Hedvig Letters Serif"]
      },
    },
  },
  plugins: [ require('flowbite/plugin')],
};
export default config;