import { Link } from "gatsby";
import * as React from "react";
import Amin from '../images/amin.jpeg';
import '../styles/global.css';
import * as _ from "lodash";

const dutchFood = [
  'stroopwafels',
  'dropjes',
  'hagelslag',
  'pepernoten',
  'krentenbollen',
  'poffertjes',
  'appeltaart',
  'haring',
  'bitterballen',
  'kaas',
  'pindakaas',
  'oliebollen',
]

const IndexPage = () => {
  const snack = _.sample(dutchFood);
  return (
    <React.Fragment>
      <div className="dark:bg-slate-900 h-screen">
        <main>
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center grid grid-cols-1 gap-4 justify-items-center">
              <img className="rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-700" alt="Amin's profile" src={Amin} />
              <h3 className="mt-1 font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Amin Codes
              </h3>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                A software developer, enjoying {snack} in Amsterdam and writing code.
              </p>
              <p className="dark:text-gray-400">
                Write to <Link to="mailto:me@amin.codes">me@amin.codes</Link> or follow me on <Link to="https://github.com/aminmarashi">GitHub</Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default IndexPage
