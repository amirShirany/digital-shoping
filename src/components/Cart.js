import { useState } from "react"
import appleWatchS6 from "../image/apple-watch-6.svg"

const Cart = () => {
  const [OrderNumber, setOrderNumber] = useState(1)

  return (
    <div className="h-screen bg-slate-300">
      {/* app bar */}
      <div className="md:hidden flex justify-between items-center pt-10 px-4 mb-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
          >
            <g filter="url(#a)">
              <rect
                width="31.5"
                height="31.5"
                x="8"
                y="6.25"
                fill="#FDFDFD"
                rx="5"
              />
            </g>
            <path
              fill="#222F5D"
              d="M20.808 15.89c0 .135.05.27.156.376l4.619 4.618c.34.34.34.892 0 1.232l-4.619 4.619a.534.534 0 0 0 0 .75.534.534 0 0 0 .751 0l4.618-4.618c.751-.75.751-1.976 0-2.734l-4.618-4.618a.534.534 0 0 0-.75 0 .556.556 0 0 0-.157.375Z"
            />
            <defs>
              <filter
                id="a"
                width="47.5"
                height="47.5"
                x="0"
                y=".25"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_164_2397"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_164_2397"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className=" font-bold text-slate-800">سبد خرید</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
          >
            <g filter="url(#a)">
              <rect
                width="31.5"
                height="31.5"
                x="8"
                y="6.25"
                fill="#FDFDFD"
                rx="5"
              />
            </g>
            <path
              stroke="#222F5D"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M23.583 29.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM32.333 30.333l-1.666-1.666"
            />
            <defs>
              <filter
                id="a"
                width="47.5"
                height="47.5"
                x="0"
                y=".25"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_164_2394"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_164_2394"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* cart items */}
      <div className="flex flex-col gap-y-4 px-4">
        <div className="bg-white flex rounded-lg p-4 items-stretch justify-between">
          <div className="w-1/5 h-auto">
            <img className="w-full h-auto" src={appleWatchS6} alt=""></img>
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-sm">ساعت هوشمند اپل سری 6</p>
            <p className="text-orange-600">2,250,000 تومان</p>
          </div>

          <div className="flex flex-col justify-between items-end">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 stroke-orange-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>

            <div className="flex items-center gap-x-1">
              <span
                className="flex items-center justify-center bg-gray-200 rounded-full cursor-pointer w-6 h-6"
                onClick={() => setOrderNumber(OrderNumber + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </span>
              <span className="flex items-center justify-center border border-collapse border-orange-500 rounded-sm w-5 h-8 text-xs">
                {OrderNumber}
              </span>
              <span
                className="flex items-center justify-center bg-orange-200 rounded-full cursor-pointer w-6 h-6"
                onClick={() =>
                  OrderNumber > 1 && setOrderNumber(OrderNumber - 1)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-6 h-6 stroke-orange-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 12H6"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
