# HTML5 Ad Webpack Template

This WebPack repo build allows creating HTML5 ads using SCSS and Typescript.

Within the src folder there is a single HTML file (index.html) for the ad,
which loads a Typescript file (main.ts), which also includes a stylesheet
(style.sccs).

The WebPack build (`npx webpack`) will compile any TypeScript and SCSS, inline
the results into the HTML file, and place the resulting HTML file in the `dist`
directory. Any assets included from the HTML file will also be included in the
`dist` folder and referenced from the HTML file.

Finally, it will also product `package.zip` within the `dist` directory, which
is everything zipped up and ready to be uploaded to an ad server.
