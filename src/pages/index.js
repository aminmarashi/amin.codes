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
              <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:divide-x auto-cols-fr mt-5 dark:text-gray-400">
                <Link to="https://blog.amin.codes" title="Amin's personal blog">
                  Blog
                </Link>
                <Link to="https://github.com/aminmarashi" title="Amin's Github profile">
                  GitHub
                </Link>
                <Link to="mailto:me@amin.codes" title="Mail something to Amin, delivers very fast">
                  Email
                </Link>
                <Link to="https://fav.amin.codes" title="Links to Amin's favourite things on the internet">
                  Favourites
                </Link>
                <Link to="https://www.rubberduck.so/" className="px-4" title="Amin's weekly digest of tech news, with less noise">
                  Rubberduck
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default IndexPage
