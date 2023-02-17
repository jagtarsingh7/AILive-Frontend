# CanvassFrontEndModelStore

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## First access

1. Clone this repo
2. Make sure you're using node `v16.14.2`
3. Run `npm install`

## Commands

- Start main app: `npm start`
- Components storybook: `npm run storybook`

## Notes

Currently using on the main app:

- [Chakra UI](https://chakra-ui.com/)
- [Nx Console](https://nx.dev/core-features/integrate-with-editors)

- [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query)
  - [Zod](https://zod.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router v6](https://reactrouter.com/en/main)
- [Tastack Table](https://tanstack.com/table/v8)
- [Echarts](https://echarts.apache.org/)
- [Framer](https://www.framer.com/motion/)

> The current datepicker is not fully working, we're not using in our current app but we'll in the future
> I'd suggest not trying to go on that route of fixing it but to use the native date picker if needed
>
> ```ts
> import { Input } from '@canvass/components';
>
> <Input type="date" /> // native date picker
> <Input type="datetime-local" /> // native date picker with time
> ```

### Important

When creating a new app or library with Nx, it'll generate a file called `project.json` with some pre-existent configurations. 

Please, add this to `targets`:
```json
...
"targets" {
  "tsCheck": {
    "executor": "./tools/executors/tsCheck:tsCheck"
  },
},
```
You can see this example on `libs/components/project.json`.
This will make sure that every time you push something, it checks if your typescript is correct.
