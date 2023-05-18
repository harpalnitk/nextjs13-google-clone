> npx create-next-app@latest

select src and app routing
select eslint ,tailwind
don't select typescript

## clear global.css file
but leave tailwind imports

## metdata is exported automatically in layout file
 or pages
 charset and viewport meta tags are added by default 
favicon is also added automatically

## favicon generated form website favicon.io
 move favicon.ico to public folder

  ## tailwind
 2 files
 1. postcss.congig.js
 2. tailwind.config.js
 3. in tailwind.config.js file clean  extend
  theme: {
    extend: {},
  },

 In nextjs 13 all pages, components are server side by default

 ## download google favicon svg from https://freesvg.org/1534129544

 put downloaded svg file in public folder
 and change favicon.ico to favicon.svg in layout head section

 Add a favicon.ico, icon.(ico|jpg|jpeg|png|svg), or apple-icon.(jpg|jpeg|png|svg) file to the root segment


 ## Icons from react-icons
 >npm install react-icons --save

 ## for country name in this app
  use website https://extreme-ip-lookup.com/    is not free now
  so use   http://ip-api.com/json/

  ## For search
  1. go to developers.google.com
  2. in products search for programmabale search engine
  3. JSON API
  4. Using REST

  ## to parse html in the search result use package
  >npm i html-react-parser