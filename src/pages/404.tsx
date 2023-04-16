import * as React from "react";
import '../styles/global.css';

const PageNotFound = () => {
  return (
    <div
      className="dark:bg-slate-900 h-screen"
    >
      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center grid grid-cols-1 gap-4 justify-items-center">
            <h3 className="mt-1 font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              404
            </h3>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Page not found
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageNotFound
