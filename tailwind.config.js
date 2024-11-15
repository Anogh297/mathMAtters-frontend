/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       'logoFont': ['"Playwrite MX"', 'cursive'],
      //  'poppins': ['"Poppins"', 'sans-serif'],
      'poppins':"'Poppins',serif",
      'mons':"'Montserrat',serif"
      },
      boxShadow: {
        'text-violet': '2px 2px 5px rgba(138, 43, 226, 0.5)', // Customize the shadow here
      },
      backgroundImage:{
        'hero-image':'url("https://i.pinimg.com/564x/f2/bb/85/f2bb855ae2afa1e08956e408d51de158.jpg")',
        'hero-image2':'url("https://i.ibb.co/WgkSQHW/Polygon-Luminary.png")',
        'support-image':'url("https://nhb-verse-voyage.vercel.app/assets/contact-AWgNooiJ.png")',
        'feature-image':'url("https://i.ibb.co/GVdCBYj/Meteor-1.png")',
        'assignment-image':'url("https://i.ibb.co/F71vf2J/view-3d-school-desk.jpg")',
        'profile-image':'url("https://i.pinimg.com/564x/18/87/fb/1887fbe0450eb49cb962d53f61319849.jpg")',
        'profile-image2':'url("https://i.pinimg.com/564x/ff/0b/19/ff0b194fc32a53aea95123ba199a234a.jpg")',
        'programming':'url("https://web.programming-hero.com/static/media/bgSlice.b9d8c29c.svg")',
        'programming2':'url("https://web.programming-hero.com/home/level2Home/images/banner-bg.webp")',
        'programming3':'url("https://i.pinimg.com/564x/74/76/0d/74760d44f8e30c1d07eb2ecadedfd70e.jpg")',
        'college':'url("https://i.pinimg.com/564x/05/39/94/053994f82094c3c33e1eec83f8853a8c.jpg")',
        'college2':'url("https://i.pinimg.com/564x/dd/4a/94/dd4a94779d0cc274372b05fd5e531f58.jpg")',
        'boy':'url("https://i.pinimg.com/564x/9b/65/8a/9b658a302604975b67ca33697cfd684d.jpg")',
        'newsletter':'url("https://i.pinimg.com/736x/c6/60/4c/c6604c027cf75975e69a33948bf974af.jpg")',
        'banner':'url("https://i.pinimg.com/564x/60/cf/de/60cfde8844482439f775145c9f6b09b2.jpg")',
        'lines':'url("https://amity.keydesign.xyz/ngo/wp-content/uploads/sites/9/2024/04/shape-bg-3.svg")',
        'blood':'url("https://i.pinimg.com/564x/92/dc/f0/92dcf039a1dcd209441f5d74ad3e16ff.jpg")',
        'revolution':'url("https://i.pinimg.com/564x/4d/fe/62/4dfe6229ef81a090745d2c1f3fbedd56.jpg")',
      },
      colors: {
        'theme-light': {
          primary: '#3490dc',
          secondary: '#6cb2eb',
          // Define other theme-light colors
        },
        'theme-dark': {
          primary: '#4a5568',
          secondary: '#718096',
          // Define other theme-dark colors
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}