import { useState } from "react"
import appleWatchS7 from "../image/apple-watch-7.png"

const SmartWAtch = () => {
  const [color, setColor] = useState("red")

  return (
    <div>
      {/* app bar */}
      <div className="md:hidden flex justify-between items-center pt-10 px-4 mb-4">
        <div>Digitize</div>
        <div className="text-xl font-bold text-slate-800">ساعت هوشمند</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 stroke-slate-800 bg-white flex items-center justify-center rounded p-0.5 shadow-sm"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      {/* filter - sort mobile section */}
      <div className="md:hidden flex justify-between items-center px-4 gap-x-4 mb-8">
        <div className="flex items-center justify-start bg-gray-100 rounded py-1 w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-6 h-6 stroke-orange-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
              />
            </svg>
          </div>
          <span className="text-sm text-slate-800 mr-2">محبوب ترین</span>
        </div>
        <div className="flex items-center justify-start bg-gray-100 rounded py-1 w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-6 h-6 stroke-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>
          </div>
          <span className="text-sm text-slate-800 mr-2"> فیلتر : برند اپل</span>
        </div>
      </div>
      {/* product section */}
      <div className="mx-4 gap-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-white rounded-lg p-2 shadow-md">
          <div className="mb-2 bg-gray-100 rounded-xl p-2">
            <img src={appleWatchS7} alt="" />
          </div>

          <div className="flex justify-between items-center w-full mb-3">
            <p className="text-slate-400 text-xs md:text-base">اپل</p>

            <div className="flex items-center">
              <button
                onClick={() => setColor("red")}
                className={`bg-red-500 w-6 h-6 sm:w-8 sm:h-8 -ml-1 rounded-full cursor-pointer flex items-center justify-center ${
                  color === "red" ? "ring-2 ring-red-400 ring-offset-1" : ""
                }`}
              >
                {color === "red" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="w-4 h-4 sm:w-6 sm:h-6 items-center justify-center stroke-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setColor("blue")}
                className={`bg-blue-500 w-6 h-6 sm:w-8 sm:h-8 -ml-1 rounded-full cursor-pointer flex items-center justify-center ${
                  color === "blue" ? "ring-2 ring-blue-400 ring-offset-1" : ""
                }`}
              >
                {color === "blue" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="w-4 h-4 sm:w-6 sm:h-6 items-center justify-center stroke-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </button>
              <button
                onClick={() => setColor("green")}
                className={`bg-green-500 w-6 h-6 sm:w-8 sm:h-8 rounded-full cursor-pointer flex items-center justify-center ${
                  color === "green" ? "ring-2 ring-green-400 ring-offset-1" : ""
                }`}
              >
                {color === "green" ? (
                  <svg
                    x-show="color = green"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="w-4 h-4 sm:w-6 sm:h-6 items-center justify-center stroke-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  ""
                )}
              </button>
            </div>
          </div>

          <div className="text-slate-800 text-xs font-bold mb-2 md:text-base">
            ساعت هوشمند اپل سری6
          </div>

          <div className="text-orange-600 text-center text-sm mb-3">
            ۱۲,۳۵۴,۸۹۰ تومان
          </div>
          <hr />

          <button className="text-red-500 text-xs font-bold w-full py-1 md:text-lg">
            مشاهده و سفارش
          </button>
        </div>

        <div className="bg-blue-400">2</div>
        <div className="bg-blue-400">3</div>
        <div className="bg-blue-400">4</div>
        <div className="bg-blue-400">5</div>
        <div className="bg-blue-400">6</div>
        <div className="bg-blue-400">7</div>
        <div className="bg-blue-400">8</div>
      </div>
    </div>
  )
}

export default SmartWAtch
