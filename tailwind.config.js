module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        'roxo': '#5E447A',
        'roxo-claro': '#523671',
        'turquesa': '#30AEA1',
      },
      backgroundImage: theme => ({
        'logo': "url('/images/logo.png')",
        'logo_comp': "url('/images/logo_comp.png')",
      })
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // }
}
