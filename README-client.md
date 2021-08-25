---
client: Skyward Digital
---

# {{ page.client }} website

This website is built using NextJS and Prismic Slicemachines

Nextjs is a Static site generator that turns React code into HTML, CSS and JS for huge speed improvements.

[See the Nextjs docs](https://https://www.nextjs.com/docs/getting-started)

Prismic is a Headless CMS that allows you to edit and preview content and then access it through an API.

[See the prismic docs](https://prismic.io/docs/technologies/tutorial-gatsby)
[Login to the {{ page.client }} CMS](https://your-repo-name.prismic.io)

## Getting Started

In order to begin making changes to your repository, you'll need to download the code.

Once you've pulled your code from github, you'll need to make sure it runs

**Note**: This repo was set up using node version 16.

### Install dependencies

We use yarn to install our dependencies

`yarn install`

### Environment Settings

We use environment variables to set up

Create `.env.local` and paste the following into it

You'll need to add your own GA tracking ID

```
NEXT_PRISMIC_REPO_NAME=your-prismic-repo-id
CHROMATIC_PROJECT_TOKEN=your-chromatic-project-token
```

**Note**: You'll also need to use these for any deployment, including on github.

### Running your code

Once you're set up you can run your code through the development server

```
yarn dev
```

This will create an environment for you to quickly make development changes in. It does not cache changes and hot-reloads for easier editing.

You can visit the development environment by going to [https://localhost:3000](https://localhost:3000)

### Formatting your code

We've set up handy tools to lint and format your code, ensuring your code follows the same standard no matter who writes it and therefore making updates and seeing what has changed easier.

To lint your code run

```
yarn lint
```

This will restructure your code following the predefined rules (`.eslintrc`) and inform you of any errors or warnings that may exist

You can also check for issues without making changes

```
yarn lint:check
```

To format your code run

```
yarn format
```

This will automatically format your code to follow the predefined rules (`.editorconfig`)

You can check your formatting without making any changes

```
yarn format:check
```

**Note**: We run both check rules on push to ensure your changes are easy for your team to understand.

### Building your code

When you're ready to test for production you can build your code.

`yarn build`

This will generate a production ready version of your codebase

You can also test this locally by running `yarn start` and going to [https://localhost:3000](https://localhost:3000)

### Publishing Changes

When changes are made to Github, we recommend creating a branch for each new feature. If a Pull Request is created for this branch, a number of tests will run automatically to ensure that the site works as expected and good coding practices are followed to help streamline working together with others. Once a feature is completed it can be merged into the main branch.

## Deployment

The {{ page.client }} Website is created using Nextjs, a static site generator that takes data and builds a site using only HTML, CSS and JS. This means it can be deployed on any static hosting.

### Build on Code Change

In order for Nextjs to output code, the build command will need to be run. You can set this up on most providers so that when a change is made and published to the main branch a new build will trigger.

Nextjs has a whole host of documentation on how to deploy to specific services listed below.

[See the Nextjs deployment docs](https://nextjs.org/docs/deployment#vercel-recommended)

### Build on Content Update

It is also beneficial to create a webhook to trigger a build on a content update. This will rebuild the site every time a change is published (or unpublished) from the CMS to keep your content up to date.

[How to create an outbound webhook in Prismic](https://prismic.io/docs/core-concepts/webhooks)
