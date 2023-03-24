/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
       'chocolate': '#FF8FB1',
       'navy':"#7149C6",
      },
      backgroundImage:{
      'background':"url('1.jpg')",
      },
      fontFamily:{
        chakra:['Chakra Petch'],
        montserrat:['Montserrat Alternates']
      },
    },
  },

  plugins: [],
}
