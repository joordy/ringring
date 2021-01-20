# RingRing

![Prototype Ring-Ring](https://user-images.githubusercontent.com/48051912/105212466-c8899000-5b4d-11eb-9f83-854e97b97c32.png)

## :page_facing_up: Assignment

**Develop a tool for policymakers to improve cycling conditions, such as making it safer, more accessible and more pleasant based on the routes and feedback from users. Visualize the dataset and the feedback in an attractive way, so that policy makers can take the feedback into account in future decisions to improve cycling conditions, with the use of the [data](http://data.jorrr.nl/ringring/data-ringring.json) from the [Ring-Ring](https://ring-ring.nu/) organization.**

For the concept for Ring-Ring I looked at developing a policy-makers dashboard. On the dashboard, policymakers are able to analyze all information about the data in one overview, as well as the feedback from the users.

---

## :flashlight: Features

The main feature of the application is the dashboard tool. Two overviews can be viewed on the dashboard tool, namely the general **statistics** view and the **feedback** overview.

### Statistics

With the statistics overview, a lot of information can be viewed in an overview:

- All start and end points of the routes
- All traveled routes plotted on a map, where the busiest points can be found.
- The number of rides categorized by length
- The number of trips per day during the month of January
- The total number of trips
- Average duration of a bicycle ride
- Average distance of a trip

![Statistics overview Ring-Ring tool](https://user-images.githubusercontent.com/48051912/105229887-e44c6080-5b64-11eb-97d9-b93cf7039ac2.png)

### Feedback

With the feedback, everything about the feedback of the users can be analyzed.

- The route driven, including start and end point.
- The response about the route, including the attached annoyance topic.
- Which part of the city has the most responses
- How the responses are distributed, based on topic

![Feedback overview Ring-Ring tool](https://user-images.githubusercontent.com/48051912/105229946-f75f3080-5b64-11eb-8a0f-3797613ef040.png)

---

## :chart: Data

For this project I used the [Ring-Ring](https://ring-ring.nu/) dataset. The dataset contains all information about the rides driven in Amsterdam, from January 2020. The dataset is hosted on my personal hosting, located [here](http://data.jorrr.nl/ringring/data-ringring.json)

The dataset contains information about the routes traveled in the month of January 2020, in Amsterdam. Based on these routes, the location, time, distance and weather conditions can be found.

---

## :bar_chart: Data patterns

In my project I used different functional patterns to clean up the dataset and make it usable for myself. I am using a large object, which contains different values.

One of the values ​​is an object, in which I put all the data for realizing the data visualisations. Here I have released various functions in which the data is transformed into useful information.

The second value contains the entire [dataset](http://data.jorrr.nl/ringring/data-ringring.json) that we received from Ring-Ring, in order to plot the geo-location on a map. This one is unedited, we received it from the IT department and after a bit of fumbling it was usable for plotting.

The last value contains a [feedback data](https://github.com/joordy/ringring/blob/master/src/utils/helpers/feedbackData.js) file. This is based on fictitious responses, because they were missing from the dataset. The responses are linked from previous rides from the Ring-Ring dataset.

### Created custom data object

```javascript
{
  charts: {
    barChart: lorem
    lineChart: lorem,
    positionStart: lorem,
    positionEnd: lorem,
    subjectChart: lorem,
    feedbackLocationChart: lorem,
    avgTime: lorem,
    avgDistance: lorem,
  },               // Chart data
  geojson: ,       // Ringring dataset,
  feedbackData: ,  // Feedback dataset
}

```

### RingRing data

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "coordinates": [], // Coordinates of route
        "type": "LineString"
      },
      "properties": {
        "start": "2020-01-31T22:57:40Z",
        "end": "2020-01-31T22:59:51Z",
        "duration": 45.2,
        "modality": 2,
        "distance": 17.1,
        "feedback score": null,
        "feedback": null,
        "weather": "zwaar bewolkt"
      }
    }
  ]
}
```

[Link to json file](http://data.jorrr.nl/ringring/data.json)

### Feedback data

```json
  {
    "route": {
      "geometry": {
        "coordinates": [], // Coordinates of route
        "type": "LineString"
      },
      "properties": {
        "day": "2020-01-31T16:34:03Z",
        "start": "2020-01-31T16:34:03Z",
        "end": "2020-01-31T16:57:33Z",
        "duration": 23,
        "modality": 2,
        "distance": 3.5,
        "weather": "zwaar bewolkt"
      },
      "type": "Feature"
    },
    "feedback": "Een onhandige indeling van het fietspad, waardoor je niet veilig kan oversteken.",
    "feedbackTag": ["fietspad", "oversteekpunt"],
    "stadsdeel": "Centrum",
    "gevoelsVeiligheid": 3
  },
```

[Link to json file](http://data.jorrr.nl/ringring/feedbackData.json)

---

## :computer: Tech-Stack

The application is build in [Sapper](https://sapper.svelte.dev/). Sapper is a framework for building web applications, based on Svelte's technology. This ensures that the code is compiled, rather than displayed in a virtual dome. Svelte writes code that surgically updates the DOM when your app's state changes. The usage of an framework makes it easier to expand the tool with new features, the code could now be extended in an easy way with, for example, a valid login system and multiple datasets. I have chosen to work with a framework in order to gain experience with it, for my personal development.

### Libraries

#### Chart.js

To create the data visualizations, I've made use of Chart.js. Chart.js is a library that helps plot data inside a chart. Its customizable with a bunch of options, and responsive so i

#### MapBox GL JS

MapBox is a JavaScript Library that renders interactive maps from vector tiles and online MapBox styles. This means you can create a custom style inside the MapBox Editor, and import the style inside your code. This allows you to easily add your own twist to the design, making it a perfect match for your project.

---

## :rocket: Install project

When you already have a connection with [Git](https://formulae.brew.sh/formula/git), and installed [Node Version Manager](https://github.com/nvm-sh/nvm) on your computer you can easily download my project. If you haven't already installed these programs, I recommend to do that first.

### Work on the project

#### Clone the GitHub repository

```bash
git clone https://github/com/joordy/ringring.git
```

#### Install project and corresponding node_modules

```bash
npm i
```

#### Run the project

```bash
npm run dev
```

#### Visit project

```bash
localhost:3000
```

### Build project

#### When 404 is updated, generating new route with custom command

```bash
npx sapper export --legacy --entry not-found
```

#### Build the application

```bash
npm run build
```

#### Export the application

```bash
npm run export
```

Now your application is ready to be hosted!

---

## :key: Deployment link

The live version of the application can be watched here: [ringring.jorrr.nl](https://ringring.jorrr.nl/)

---

## Sources

During the project I was assisted by Marleen Buchner and Meggie Chen regarding the design. They have made it possible for the design of the tool to look as it is now visible. Also a big thanks to Janine Hogendoorn from [Ring-Ring]() for th

Thanks also to Janine Hogendoorn from [Ring-Ring](https://ring-ring.nu/) for giving critical feedback on our tool, and to SuzeSwarte for the guidance during the project.

#### Code Sources

- SvelteJS. (n.d.). Sveltejs/sapper repository GitHub | SvelteJS.. Retrieved 7 December 2020, from https://github.com/sveltejs/sapper
- MDN. (2020, December 8). CSS Grid Layout - CSS: Cascading Style Sheets | MDN. Retrieved 10 December 2020, from https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
- MDN. (2021, January 13). Array.prototype.reverse() - JavaScript | MDN. Retrieved 16 january 2020, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
- MDN. (2021, January 13). Object.values() - JavaScript | MDN. Retrieved 17 january 2020, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
- MDN. (2021, January 13). Object.keys() - JavaScript | MDN. Retrieved 17 january 2020, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
- MDN. (2021, January 13). Object.keys() - JavaScript | MDN. Retrieved 17 january 2020, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
- Johnson, D. (2018, April 18). How to Count Unique Items in JavaScript Arrays | ThisDaveJ. Retrieved 19 January 2020, from https://thisdavej.com/how-to-count-unique-items-in-javascript-arrays/
- Condrey, D. (2010, January 6). How to get year/month/day from a date object? |Stack Overflow. Retrieved 15 January 2021, from https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object
- SixStringsCoder. (2020, October 21). Off-Canvas Menu toggle. | Svelte Repl. Retrieved 4 January 2021, from https://Svelte.Dev/. https://svelte.dev/repl/e9c4ff0b0ff94059a6c85a09c556284a?version=3.29.0
- The Net Ninja. (2020, April 17). Svelte Tutorial for Beginners #20 - Reusable Tabs Component. YouTube. | Retrieved 14 December 2020, from https://youtube.com/watch?v=U8cM_jhmDxA

#### Map Data

- MapBox. (n.d.). Documentation Mapbox. | MapBox GL JS. Retrieved 23 December 2020, from https://docs.mapbox.com/
- MapBox. (n.d.). Layers | Style Specification | Mapbox GL JS. Retrieved 12 January 2021, from https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-line-line-blur
- MapBox. (n.d.). Add a GeoJSON polygon | Mapbox GL JS. Retrieved January 13 2021, from https://docs.mapbox.com/mapbox-gl-js/example/geojson-polygon/
- MapBox. (n.d.). Draw GeoJSON points | Mapbox GL JS. Retrieved January 13 2021, from https://docs.mapbox.com/mapbox-gl-js/example/geojson-markers/
- MapBox. (n.d.). Add Image | Mapbox GL JS. Retrieved January 13 2021, from https://docs.mapbox.com/mapbox-gl-js/example/add-image/
- MapBox GL JS. (n.d.). Filter features within map view | Mapbox GL JS. Retrieved 18 January 2021, from https://docs.mapbox.com/mapbox-gl-js/example/filter-features-within-map-view/

#### Data Charts

- Chart.js. (n.d.). Introduction · Chart.js documentation. | Chart.js. Retrieved 19 December 2020, from https://www.chartjs.org/docs/latest/
- Chart.js. (n.d.). Labelling · Chart.js documentation. | Chart.js. Retrieved 16 January 2021, from https://www.chartjs.org/docs/latest/axes/labelling.html
- DYclassroom. (n.d.). DYclassroom | Have fun learning :-). Retrieved 10 January 2021, from https://dyclassroom.com/chartjs/how-to-create-a-line-graph-using-chartjs
- Chart.js. (n.d.). Labeling Axes | Chart.js. Retrieved 12 January 2021, from https://www.chartjs.org/docs/next/axes/labelling/
- Shokeen, M. (2017, April 25). Getting Started With Chart.js: Scales. | Code Envato Tuts+. Retrieved 12 January 2021, from https://code.tutsplus.com/tutorials/getting-started-with-chartjs-scales--cms-28477

---

## :lock: License

This is a repository which is licensed as MIT. Developed by Jordy Fronik ©️ 2021.

<!-- # sapper-template

The default template for setting up a [Sapper](https://github.com/sveltejs/sapper) project. Can use either Rollup or webpack as bundler.


## Getting started


### Using `degit`

To create a new Sapper project based on Rollup locally, run

```bash
npx degit "sveltejs/sapper-template#rollup" my-app
```

For a webpack-based project, instead run

```bash
npx degit "sveltejs/sapper-template#webpack" my-app
```

[`degit`](https://github.com/Rich-Harris/degit) is a scaffolding tool that lets you create a directory from a branch in a repository.

Replace `my-app` with the path where you wish to create the project.


### Using GitHub templates

Alternatively, you can create the new project as a GitHub repository using GitHub's template feature.

Go to either [sapper-template-rollup](https://github.com/sveltejs/sapper-template-rollup) or [sapper-template-webpack](https://github.com/sveltejs/sapper-template-webpack) and click on "Use this template" to create a new project repository initialized by the template.


### Running the project

Once you have created the project, install dependencies and run the project in development mode:

```bash
cd my-app
npm install # or yarn
npm run dev
```

This will start the development server on [localhost:3000](http://localhost:3000). Open it and click around.

You now have a fully functional Sapper project! To get started developing, consult [sapper.svelte.dev](https://sapper.svelte.dev).

### Using TypeScript

By default, the template uses plain JavaScript. If you wish to use TypeScript instead, you need some changes to the project:

 * Add `typescript` as well as typings as dependences in `package.json`
 * Configure the bundler to use [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess) and transpile the TypeScript code.
 * Add a `tsconfig.json` file
 * Update the project code to TypeScript

The template comes with a script that will perform these changes for you by running

```bash
node scripts/setupTypeScript.js
```

`@sapper` dependencies are resolved through `src/node_modules/@sapper`, which is created during the build. You therefore need to run or build the project once to avoid warnings about missing dependencies.

The script does not support webpack at the moment.

## Directory structure

Sapper expects to find two directories in the root of your project —  `src` and `static`.


### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.


#### src/routes

This is the heart of your Sapper app. There are two kinds of routes — *pages*, and *server routes*.

**Pages** are Svelte components written in `.svelte` files. When a user first visits the application, they will be served a server-rendered version of the route in question, plus some JavaScript that 'hydrates' the page and initialises a client-side router. From that point forward, navigating to other pages is handled entirely on the client for a fast, app-like feel. (Sapper will preload and cache the code for these subsequent pages, so that navigation is instantaneous.)

**Server routes** are modules written in `.js` files, that export functions corresponding to HTTP methods. Each function receives Express `request` and `response` objects as arguments, plus a `next` function. This is useful for creating a JSON API, for example.

There are three simple rules for naming the files that define your routes:

* A file called `src/routes/about.svelte` corresponds to the `/about` route. A file called `src/routes/blog/[slug].svelte` corresponds to the `/blog/:slug` route, in which case `params.slug` is available to the route
* The file `src/routes/index.svelte` (or `src/routes/index.js`) corresponds to the root of your app. `src/routes/about/index.svelte` is treated the same as `src/routes/about.svelte`.
* Files and directories with a leading underscore do *not* create routes. This allows you to colocate helper modules and components with the routes that depend on them — for example you could have a file called `src/routes/_helpers/datetime.js` and it would *not* create a `/_helpers/datetime` route.


#### src/node_modules/images

Images added to `src/node_modules/images` can be imported into your code using `import 'images/<filename>'`. They will be given a dynamically generated filename containing a hash, allowing for efficient caching and serving the images on a CDN.

See [`index.svelte`](src/routes/index.svelte) for an example.


#### src/node_modules/@sapper

This directory is managed by Sapper and generated when building. It contains all the code you import from `@sapper` modules.


### static

The [static](static) directory contains static assets that should be served publicly. Files in this directory will be available directly under the root URL, e.g. an `image.jpg` will be available as `/image.jpg`.

The default [service-worker.js](src/service-worker.js) will preload and cache these files, by retrieving a list of `files` from the generated manifest:

```js
import { files } from '@sapper/service-worker';
```

If you have static files you do not want to cache, you should exclude them from this list after importing it (and before passing it to `cache.addAll`).

Static files are served using [sirv](https://github.com/lukeed/sirv).


## Bundler configuration

Sapper uses Rollup or webpack to provide code-splitting and dynamic imports, as well as compiling your Svelte components. With webpack, it also provides hot module reloading. As long as you don't do anything daft, you can edit the configuration files to add whatever plugins you'd like.


## Production mode and deployment

To start a production version of your app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

You can deploy your application to any environment that supports Node 10 or above. As an example, to deploy to [Vercel Now](https://vercel.com) when using `sapper export`, run these commands:

```bash
npm install -g vercel
vercel
```

If your app can't be exported to a static site, you can use the [now-sapper](https://github.com/thgh/now-sapper) builder. You can find instructions on how to do so in its [README](https://github.com/thgh/now-sapper#basic-usage).


## Using external components

When using Svelte components installed from npm, such as [@sveltejs/svelte-virtual-list](https://github.com/sveltejs/svelte-virtual-list), Svelte needs the original component source (rather than any precompiled JavaScript that ships with the component). This allows the component to be rendered server-side, and also keeps your client-side app smaller.

Because of that, it's essential that the bundler doesn't treat the package as an *external dependency*. You can either modify the `external` option under `server` in [rollup.config.js](rollup.config.js) or the `externals` option in [webpack.config.js](webpack.config.js), or simply install the package to `devDependencies` rather than `dependencies`, which will cause it to get bundled (and therefore compiled) with your app:

```bash
npm install -D @sveltejs/svelte-virtual-list
```


## Bugs and feedback

Sapper is in early development, and may have the odd rough edge here and there. Please be vocal over on the [Sapper issue tracker](https://github.com/sveltejs/sapper/issues). -->
