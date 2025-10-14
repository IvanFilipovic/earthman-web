/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary_button_color: '#0040ff',
        secondary_button_color: '#00c90d',
        background_color: '#fcfcfc',
        text_color: '#565655',
        project_gray: '#c5c6c6',
        success_text_color: '#00c90d',
        error_text_color: '#C90D00',
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}

