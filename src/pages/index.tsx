import * as _ from "lodash"
import * as React from "react"
// @ts-ignore
import Amin from "../images/amin.jpeg"
import "../styles/global.css"

const dutchFood = [
  "stroopwafels",
  "dropjes",
  "hagelslag",
  "pepernoten",
  "krentenbollen",
  "poffertjes",
  "haring",
  "bitterballen",
  "kaas",
  "pindakaas",
  "oliebollen",
  "frikandel",
  "kroket",
  "pannenkoeken",
  "tompouce",
  "kibbeling",
  "mosselen",
  "nasi",
  "kapsalon",
]

const IndexPage = () => {
  const snack = _.sample(dutchFood)
  return (
    <React.Fragment>
      <div className="dark:bg-slate-900 h-screen">
        <main>
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center grid grid-cols-1 gap-4 justify-items-center">
              <img
                className="rounded-full shadow-lg shadow-gray-300 dark:shadow-gray-700"
                alt="Amin's profile"
                src={Amin}
              />
              <h3 className="mt-1 font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Amin Codes
              </h3>
              <p
                className="max-w-xl mt-5 mx-auto text-xl text-gray-500"
                suppressHydrationWarning={true}
              >
                A software developer, enjoying {snack} in Amsterdam and writing
                code.
              </p>
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 auto-cols-fr mt-5 dark:text-gray-400">
                <a
                  href="https://github.com/aminmarashi"
                  title="Amin's Github profile"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/amin-codes"
                  title="Amin's Linkedin profile"
                >
                  Linkedin
                </a>
                <a
                  href="https://blog.amin.codes/"
                  className="px-4"
                  title="Personal opinions posted on the Internet in form of a blog"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default IndexPage
