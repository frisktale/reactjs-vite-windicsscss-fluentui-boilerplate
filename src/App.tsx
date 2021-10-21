import { useState } from "react";
import { DefaultButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
import Avatar from './components/Avatar';

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
            Welcome to
          </h2>
          <p className="my-3 text-4xl sm:text-5xl lg:text-6xl font-bold sm:tracking-tight text-gray-900">
            reactjs-vite-tailwindcss-boilerplate
          </p>
          <p className="text-xl text-gray-400">Start building for free.</p>
          <p className="mt-5">
            <Avatar
              size="large"
              src="https://www.gravatar.com/avatar/4405735f6f3129e0286d9d43e7b460d0"
            />
          </p>
          <p>
            <DefaultButton
              className="border border-gray-400 rounded px-4 py-2 mt-4 hover:(bg-teal-400 border-teal-400)"
              onClick={() => setCount(count => count + 1)}
            >
              count is: {count}
            </DefaultButton>
          </p>
          <TextField label="输入" className="focus:ring-4 focus:ring-blue-600" />

          <div className="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ">
            <p className="text-indigo-600 group-hover:text-gray-900 ">New Project</p>
            <p className="text-indigo-500 group-hover:text-gray-500 ">Create a new project from a variety of starting templates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
