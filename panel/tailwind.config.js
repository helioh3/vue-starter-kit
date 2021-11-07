module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: require('daisyui/colors')
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  // config (optional)
  daisyui: {
    themes: [
      // 'emerald', // first one will be the default theme
      'light',
      'forest',
      'synthwave'
    ],
    daisyui: {
      styled: false,
    },
  },
}
