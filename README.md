# React WindiCss FluentUI Boilerplate build with Vite

Raw: [reactjs-vite-tailwindcss-boilerplate
](https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate)

This is a [ReactJS](https://reactjs.org) + [Vite](https://vitejs.dev) boilerplate to be used with [WindiCss](https://windicss.org/).
include [FluentUI](https://developer.microsoft.com/zh-CN/fluentui#/)  
It's import `@vitejs/plugin-react` to using react 17 [New JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)

## What is inside?

This project uses many tools like:

-   [ReactJS](https://reactjs.org)
-   [Vite](https://vitejs.dev)
-   [TypeScript](https://www.typescriptlang.org)
-   [Jest](https://jestjs.io)
-   [Testing Library](https://testing-library.com)
-   [WindiCss](https://windicss.org/)
-   [Eslint](https://eslint.org)
-   [Prettier](https://prettier.io)
-   [FluentUI](https://developer.microsoft.com/zh-CN/fluentui#/)

## 已知问题

WindiCss 的`bg-color` 在 IE 下无效（TailwindCss 在 IE 下直接不能用）。

## 特色

集成了 github action。在仓库的 secrets 中添加 key 为`ACTION_DEPLOY_KEY`的 ssh 私钥即可自动部署到 github page。  
使用 pnpm 做包管理（删除了原仓库的 packge-lock.json）  
prettier 规则中设置了句尾自动添加分号（个人习惯）

## Getting Started

### Install

Create the project.

```bash
pnpx degit frisktale/reactjs-vite-windicsscss-fluentui-boilerplate my-app
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
