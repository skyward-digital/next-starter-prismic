## Introduction

## How to make a slice

### 1. Break the design into pieces

These pieces will create the building blocks of our components, and what the user will edit in Prismic.

Guidelines:

- Make sure the fields are descriptive and clear. These need to be read by non-technical people and understood without question
- If the field isn't clear, add a description that clarifies how to use it or what content is expected
- Limit the user where possible so they cannot make unexpected additions. The user shouldn't have to think about how things work
- Plan ahead - sometimes a rich text field might be better than a title field if you may need the option to underline headings (for example)

### 2. Create a component

Using Slicemachines, we can automatically create components. We should use these wherever possible, as they significantly improve code maintainability, come with tests built in, and show the user exactly what the component should look like.

`yarn sm:create`

This will generate a new slice for you to work with, but will need editing before being usable

### 3. Edit the component structure

Start the SliceMachines development workspace to view all your current slices and make changes to them

`yarn sm`

Each component is different, so select the component you just created and edit the fields. If you do not need the default Title and Description, remove those.

### 4. Mock Data

Add mock data to all your fields at this point to make editing easier. This data is used for testing but we'll also be using it to build our component using Storybook.

To add mock data - edit your field and click the "mock config" tab

### 5. Save to Filesystem

After any changes, be sure to save your component to the filesystem. Be sure to do this after every change you make, as you'll need to do it to keep your slices in sync with prismic. This will generate the models and mock data for you to use in code.

### 6. Design your component

Now we have content, we'll want to make our component look right. Start by opening the component in storybook - there are instructions on how to do this inside prismic slicemachines.

You'll see how your component now looks, and it'll be mostly unstyled, and missing any new fields you've added. This is an easy fix.

#### Add the new fields

Slicemachines is very generous and will give us the code we need to utilise the new slice fields we've created. In the top, click _show code snippets_ which will show you the code needed to output each field.

You don't have to stick to using this code, but it's a very good starting point to get content outputting. Feel free to tidy up the code or make it more efficient once you've got things outputting.

#### Style your component

Now everything is outputting the way you'd like, you can style it too. Prismic will provide you with a little styling which you can remove. We typically use tailwind, so [refer to the docs for how to use that for styling components](https://tailwindcss.com/)

To see the changes you are making, use Storybook (we opened it earlier). This will update as we make changes and we can see what our component looks like without relying on data in prismic.

Be sure to change the code if you find the way Prismic outputs things by default is blocking you. They are guidelines, but you are not restricted by them.

Once done, head back to the slicemachine editor and take a screenshot of your changes so others can see what your component looks like (this also shows up in prismic)!

#### Push to Prismic

After saving the component, you'll want to push your changes to Prismic. This will generate the new slice and allow it to be used, connecting the slice in code to the slice in Prismic.

Now you'll want to head to prismic and add your newly created slice to your pages.

1. Go to Custom Types and select the page you want the slice to show on
1. Add a slice, then select Shared Types and add your new component
1. Save your changes

Now when you add or edit a document of this custom type, your new component will show up!

## When slices don't work

Sometimes slice machines aren't the answer, and you will have to edit prismic in the traditional way.

Typically, this will be when you don't want to use slices. This could be for the header & footer, SEO metadata, product details, or other similarly static data.

In this case, simply build your components in prismic and link to them from the page, using a `component` instead of a `slice`. Check out the `Hero` component to see a static component in action

# Testing

Every software needs testing, and a website is no exception. Fortunately, prismic + slicemachines makes this easy as it comes with storybook built in.

Storybook is a way of visually testing and documenting components. Prismic does a good job of getting us started, but we may need to add more information.

Components which are outside of the slicemachine will also need their own stories created so that they can be tested. Again, see the `Hero` for an example of this.

TODO:

- [ ] Chromatic (for showing visual changes in storybook)
- [ ] Cypress (for page level testing)
- [ ] Jest (for testing core functionality)
- [ ] Typescript (for guaranteeing types work as expected)
- [ ] BrowserStack/Percy integration for automatically testing across different devices (requires Cypress first)

## Links & other resources

This project is extended from the [Prismic](https://prismic.io) + [Next.js](https://nextjs.org/) slicemachine starter. If you are unfamiliar with this project, I highly recommend checking that out first.

**Check out the dedicated article to create your own boilerplate**

> [Learn how to use this boilerplate to build a project from scratch](https://prismic.io/docs/technologies/tutorial-series-introduction-nextjs)

**Learn more about using Prismic with Next.js**
[Prismic + Next.js documentation](https://prismic.io/docs/technologies/home-prismic-and-nextjs).

## License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2021 [Skyward Digital](http://skyward.digital/).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
