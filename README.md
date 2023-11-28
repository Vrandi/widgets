This is a Project Widget dashboard application created for Greenspark

I used Next.js (https://nextjs.org/) bootstrapped with [`create-next-app`] and implemented it with React and typescript.

## Getting Started

First, build the application:

```bash
npm run build
# or
yarn build
```

Then start the server: 

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For state management I created WidgetContext, and combined a reducer with context in order to let child components read and update the state.

I added a unit test for the reducer:

```bash
npm run test
# or
yarn test
```

I created custom component for displaying the data under components folder. I used Material UI for styling purposes, and used some build in component from it to build the UI. In my custom components I used inline styles along with custom styling components to enable responsiveness. 