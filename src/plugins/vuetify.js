/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import "@/styles/main.scss";
// Composables
import { createVuetify } from 'vuetify'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    lang: {
      current: 'pt'
    },
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#000000',
          secondary: '#ffffff',
          tertiary: '#262626',
          success: '#52a956',
          error: '#b72020',
          text: '#121212',
          background: '#fff',
          default: '#000000',
          inverted: '#000000',
          soft: '#e8e8e8',
          
        },
      },
      dark: {
        colors: {
          primary: '#ffffff',
          secondary: '#000000',
          tertiary: '#262626',
          error: '#b72020',
          success: '#52a956',
          text: '#bfbfbf',
          background: '#000',
          default: '#000000',
          inverted: '#ffffff',
          soft: '#373737',
        },
      },
    },
  },
})
