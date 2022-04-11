module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        magical: '0 0 15px 0 rgb(0 0 0 / 10%)',
        'magical-dark': ' 0 0 0 1px #333',
        popover: '0 8px 30px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
