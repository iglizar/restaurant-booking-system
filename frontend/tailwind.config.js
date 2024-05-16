/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
		extend: {
			height: {
				'96':"24rem",
				'106':"26rem"
			}
		},
  },
  plugins: [],
}