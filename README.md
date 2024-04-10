This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Swapr UI Website

This a website to showcase the Swapr-ui package, that has the components to build dapps fast!

<img width="1748" alt="image" src="https://github.com/SwaprHQ/swapr-ui/assets/5664434/d412fc81-c0e9-4030-a9f9-d1bb4f3ea0d1">

## To run this site locally

Install packages

```bash
bun install
```

Run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Installing swapr-ui on a

with npm

```bash
npm install swapr-ui@latest
```

with bun

```bash
bun add swapr-ui@latest 
```

## Using tailwind on the project

Add this path to content on tailwind config

**Tailwind Config**

```
 content: [
    <!-- other paterns -->
    "./node_modules/swapr-ui/**/*.{js,ts,js,mjs}",
  ],
```

**Import Colors**

You can either import colors or just copy colors.css from `swapr-ui-lib` and tweak it. On Next js, you can import it on `layout.js`.

```
  import "swapr-ui/colors.css";
```

## Not using tailwind

Import all the needed styles

```
import "swapr-ui/styles.css";
```