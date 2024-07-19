/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // in theme, this is where you put extra stuff you may have downloaded/want to use from external source
  theme: {
    extend: {
      colors:
      {
        'cyan': '#84DCCF',
        'beige': '#F6E8EA',
        'red': '#EF626C',
        'brown': '#22181C',
        'dark-brown': '#22181C',
        'coral': '#F27D85',
        'dark-cyan':'#50CEBB',
        'pink': '#F9C7CB',
        'dark-grey': '#2c363f',
        'green':'#bbd191',
        'light': '#f2f5ea',
        'grey': '#d6dbd2',
        'light-brown': '#fceddb',
        'orange-coral':'#f59192',
        'blue':'#8abbbd',
        'bold-pink':'#FF84A1',
        'light-pink':'#FFA7BF',
        '1bold-pink':'#FF8B9C',
        '0-bold-pink':'#f76d7d',
        'light-grey':'#f6f6f6',
        'og-regal-blue':'#145c9e',
        'regal-blue':'#297BC7',
        '0regal-blue':'#3982C6',
        '2nd-regal-blue':'#4B89C4',
        'light-b':'#EEF7FF',

      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playwriteCU: ["Playwrite CU","cursive"],
        playwriteRO: ["Playwrite RO","cursive"],
        manrope: ["Manrope","sans-serif"],
        abrilfatface: ["Abril Fatface","sans-serif"],
        staatliches: ["Staatliches","sans-serif"],
      },
    },
  },
  
  plugins: [],
}

