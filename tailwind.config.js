/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   daisyui: {
      themes: [
         {
            mytheme: {
               primary: "#81dd68",

               secondary: "#33cc87",

               accent: "#90edd1",

               neutral: "#191820",

               "base-100": "#F5F5F5",

               info: "#68BBDF",

               success: "#1CA05E",

               warning: "#AF910E",

               error: "#E93F2F",
            },
         },
      ],
   },
   plugins: [require("daisyui")],
};
