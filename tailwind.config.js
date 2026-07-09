/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#3438C6',
        'btn-blue': '#3944D4',
        green: {
          DEFAULT: '#5DE083',
          light: '#8CF0B8',
        },
        bg: '#F8FAFF',
        card: '#FFFFFF',
        input: '#F9FAFD',
        border: '#E4E8F2',
        heading: '#202B52',
        body: '#6F7894',
        label: '#68728C',
      },
      boxShadow: {
        card: '0 20px 50px rgba(0,0,0,0.08)',
        btn: '0 8px 18px rgba(57,68,212,0.25)',
        social: '0 2px 8px rgba(0,0,0,0.10)',
      },
      borderRadius: {
        card: '22px',
        input: '24px',
        pill: '30px',
      },
    },
  },
  plugins: [],
}
