# BeerenberghWeb

![Alt text](./src/components/Logo/logo.svg)

> ### React Typescript codebase using [Gatsby](https://www.gatsbyjs.org/)

##Getting started

###Prerequisites

- Clone this repo
- Install all the required dependencies, using the following command

```
yarn
```

### Running the frontend locally

Run the local server, using the local command

```
yarn develop
```

### Running the Production build locally

It is important to test if the Development build of your work is working on the production build. For this, you can create a production build of the app in Gatsby etc.

**Building & running the production build**
First you need to generate a production build, using the following command

```
yarn production
```

When no errors could be found generating the production build, use the following commands to serve the production build locally

```
yarn production:serve
```

### Testing

Run the local server, using the local command

```
yarn test
```

### Using ESLINT

The project is also using ESLint statically analyzes our code to quickly find problems. And make sure that throughout
our codebase the same style is being used.

To detect linting errors, the following command should be used

```
yarn lint
```

To detect & fix linting errors, the following command should be used

```
yarn lint:fix
```

### Storybook

[Storybook](https://storybook.js.org/) is an open source tool for developing UI components in isolation.
Here you can see the components that are being used. In the storybook environment you can see how these components
can be used in the code.

**Running storybook**

```
yarn storybook
```
