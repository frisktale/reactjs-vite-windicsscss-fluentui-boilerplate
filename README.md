# React Tailwindcss FluentUI Boilerplate build with Vite

Raw: [reactjs-vite-tailwindcss-boilerplate
](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate)

This is a [ReactJS](https://reactjs.org) + [Vite](https://vitejs.dev) boilerplate to be used with [Tailwindcss](https://tailwindcss.com).
include [FluentUI](https://developer.microsoft.com/zh-CN/fluentui#/)  
It's import `@vitejs/plugin-react` to using react 17 [New JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
## What is inside?

This project uses many tools like:

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [FluentUI](https://developer.microsoft.com/zh-CN/fluentui#/)


集成了github action。在仓库的secrets中添加 key为`ACTION_DEPLOY_KEY`的ssh私钥即可自动部署到github page。  
使用pnpm做包管理（删除了原仓库的packge-lock.json）  
prettier规则中设置了句尾自动添加分号（个人习惯）  
## Getting Started

### Install

Create the project.

```bash
pnpx degit frisktale/reactjs-vite-tailwindcss-fluentui-boilerplate my-app
```

Access the project directory.

```bash
cd my-app
```

Install dependencies.

```bash
pnpm install
```

Serve with hot reload at http://localhost:3000.

```bash
pnpm dev
```

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```

## License

This project is licensed under the MIT License.
