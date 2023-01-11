import { useState } from "react"
import appleWatchS7 from "../image/apple-watch-7.png"

const SmartWAtch = () => {
  const [color, setColor] = useState("red")
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "ساعت هوشمند اپل سری4",
      price: "۱۲,۳۵۴,۸۹۰ تومان",
    },
    {
      id: 2,
      title: "ساعت هوشمند اپل سری6",
      price: "۱۲,۳۵۴,۸۹۰ تومان",
    },
    {
      id: 3,
      title: "ساعت هوشمند اپل سری5",
      price: "۱۲,۳۵۴,۸۹۰ تومان",
    },
    {
      id: 4,
      title: "ساعت هوشمند اپل سری7",
      price: "۱۲,۳۵۴,۸۹۰ تومان",
    },
    {
      id: 5,
      title: "ساعت هوشمند اپل سری7",
      price: "۱۲,۳۵۴,۸۹۰ تومان",
    },
    {
      id: 6,
      title: "ساعت هوشمند اپل سری3",
      price: "۱۲,۳۵۴,۸۹۰ تومان",
    },
  ])

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

      <div className="grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8">
        {/* side bar */}
        <div className="bg-white hidden md:block p-4 col-span-4 lg:col-span-3 row-span-2">
          sidebar
        </div>
        {/* sort section */}
        <div className="hidden md:block col-span-8 lg:col-span-9">
          <div className="bg-white flex items-center text-gray-500 gap-x-4 rounded-lg">
            <div className="bg-orange-100 rounded-md mr-2 w-8 h-8 flex justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                class="w-7 h-7 stroke-orange-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                />
              </svg>
            </div>
            <button className="py-4 hover:font-extrabold">محبوب ترین</button>
            <button className="py-4 hover:font-extrabold">پربازدید ترین</button>
            <button className="py-4 hover:font-extrabold">گران ترین</button>
            <button className="py-4 hover:font-extrabold">ارزان ترین</button>
          </div>
        </div>
        {/* product section */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <div className="grid grid-cols-2 lg:grid-cols-4 mx-4 md:m-0 gap-x-2 gap-y-8 sm:py-4 sm:gap-x-4  md:gap-x-6">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg px-2 shadow-md"
                >
                  <div className="mb-2 bg-gray-100 rounded-xl p-2">
                    <img src={appleWatchS7} alt="" />
                  </div>

                  <div className="flex justify-between items-center w-full mb-3">
                    <p className="text-slate-400 text-xs md:text-base">اپل</p>

                    <div className="flex items-center">
                      <button
                        onClick={() => setColor("red")}
                        className={`bg-red-500 w-6 h-6 sm:w-8 sm:h-8 -ml-1 rounded-full cursor-pointer flex items-center justify-center ${
                          color === "red"
                            ? "ring-2 ring-red-400 ring-offset-1"
                            : ""
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
                          color === "blue"
                            ? "ring-2 ring-blue-400 ring-offset-1"
                            : ""
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
                          color === "green"
                            ? "ring-2 ring-green-400 ring-offset-1"
                            : ""
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

                  <div className="text-slate-800 text-xs font-bold mb-2 sm:text-base">
                    {product.title}
                  </div>

                  <div className="text-orange-600 text-center text-sm mb-3 sm:text-lg">
                    {product.price}
                  </div>
                  <hr />

                  <button className="text-red-500 text-xs font-bold w-full py-1 md:text-lg">
                    مشاهده و سفارش
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartWAtch
