# Skyward Next Starter Template

This repo is a starting point for all Next/Prismic projects built by Skyward Digital. It can also be used by teams outside of Skyward if you'd like to get up and running quickly.

This repository includes

- Prismic Slicemachines with example documents
  - Example documents include blog categories with fetched links and global layout data
- TailwindCSS (version 2.0+) using Just In Time (JIT)
- Storybook with chromatic integration for automated frontend testing
- Github workflows to ensure changes are correct before deployment
- Docs for getting familar with all of these parts

## Getting started

_Prerequisites_
You'll need to have installed the prismic cli to your machine. We'll need this at multiple points throughout our project.

`npm install -g prismic-cli` or
`yarn global add prismic-cli`

Once you've done this log into your prismic account so you can sync with your repos

`prismic login`

Enter your email and password and you're good to go.

### 1. Clone the repo

Create a new repo using [skyward-digital/next-starter-prismic](https://github.com/skyward-digital/next-starter-prismic) as your template - you can do this directly on github by clicking "use as template" and selecting where you want to create your cloned repo.

![](/docs/images/create-repo.png)

This will create an initial commit with this repo at its latest point.

You can now pull down your new repo and start making changes.

### 2. Create the Prismic Environment

With the repo cloned, next you'll need to set up your prismic environment

Using the prismic cli create a new repo

`prismic new` ???

When prompted choose your project name

TODO: This isn't complete, as it doesn't create all of the custom types we need in prismic and errors

Once the repo has been created change the apiEndpoint in `sm.json` to match your new prismic environment

```sm.json
{
  "apiEndpoint": "https://your-prismic-repo.cdn.prismic.io/api/v2",
  "libraries": [
    ...
}
```

### 3. Understanding the slicemachine

At the time of creating this, slicemachine is still in beta. Some features are not fully fleshed out, but it still provides a great way of integrating prismic into your application.

#### Slices

These are your components that can be repeated throughout your project.

This project starts with two components, each with variations to give you different options.

Feel free to add your own slices for your project

Note: You can see how these slices look - this is thanks to slicemachines working together with storybook! (these will update as you make changes)

![](/docs/images/slices-example.png)

#### Custom types

These are the structure of your document. You can create static fields and slices here for your pages

Slices can link to custom types (relationships) and custom types can use slices

This gives you infinite possibilities for what you can create and how they link together

We've put together some pretty standard pages that you'll probably use across most of your projects

Custom types aren't always pages either, they can be other documents that are repeated throughout the site, like testimonials or SEO fields.

![](/docs/images/custom-types-example.png)

#### Syncing with Prismic

Remember that all changes you make are running on your local machine. There is no autosave, and changes won't automatically sync with prismic. Once you've made a change you will need to save it - this will generate the appropriate defaults in your code. Then you can push the changes to prismic which will match your prismic environment to that within slicemachines. This also acts as a backup if ever any changes are made accidentally in your prismic workspace, among other benefits.

### 4. Creating components as code

After creating your components with slicemachines and saving to the filesystem you'll see that a new folder will have been created within your project.

For slices, this will be at `/slices/[ComponentName]`
For custom types this will be at `/customtypes/[TypeName]`

By default, your customtypes will only contain json models for their associated types.

Slices on the other hand will each have a component file associated with them. This will need building upon to create your component. The default data will be included (title and description) but you can get additional code examples from inside the slicemachine.

![](/docs/images/custom-types-code.png)

If you have some really complex variations in your component, you can create a file for each component type with a custom mapping to pick the right one. See the CallToAction slice to see how this can work.

### 5. Going one step further

We've created some workflow steps (see the `.github` folder) that can be used to ensure changes work as expected when published. This will check the code for your predefined standards, we've set some defaults for linting & formatting, as well as ensuring the build completes successfully.

One way to take this even further is to create an automated testing workflow. Creating components via storybook is great but we can use these to ensure the changes we make are intentional using chromatic. Chromatic compares versions of your stories and looks for visual differences.

You can create your chromatic environment here: https://www.chromatic.com/. Your project token can be found during setup, or by clickling Manage > Configure > Project Token

Once your chromatic project is set up, you'll need to copy your secret key to 3 places

- `.env.production` and `.env.development` within your project (for local builds)
- Github Secrets for your project (for github builds)
- Wherever your production builds happen (we use Netlify, but you might use Vercel or AWS)

Your secret will need to look like this `CHROMATIC_PROJECT_TOKEN=your-chromatic-id`

## License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2021 [Skyward Digital](http://skyward.digital/).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
