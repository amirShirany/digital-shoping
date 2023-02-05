import { useState } from "react"
import iphone13 from "../image/iphone_13.png"

const SingleProduct = () => {
  const [color, setColor] = useState("red")

  return (
    <div>
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
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
        <div className=" font-bold text-slate-800">
          گوشی آیفون ۱۳ ۱۲۸ گیگابایت
        </div>
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M23.583 29.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM32.333 30.333l-1.666-1.666"
            />
            <defs>
              <filter
                id="a"
                width="47.5"
                height="47.5"
                x="0"
                y=".25"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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

      {/* breadCrumbs */}
      <div className="flex items-center gap-2 mr-5">
        <span className="text-orange-400">تلفن همراه</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="10"
            fill="none"
          >
            <path
              stroke="#222F5D"
              d="m.945 4.2.006-.006.006-.007c.369-.406 1.067-.973 1.831-1.502.763-.53 1.537-.984 2.042-1.187l.01-.004c.067-.029.2-.079.341-.123a1.72 1.72 0 0 1 .3-.071c.13.002.253.031.375.092a.812.812 0 0 1 .33.377c.02.056.057.198.093.363a11.189 11.189 0 0 1 .054.253l.006.034c.1.558.161 1.502.161 2.575 0 1-.057 1.899-.14 2.48a1.34 1.34 0 0 0-.007.034l-.018.087v.002c-.013.07-.031.159-.052.254a4.92 4.92 0 0 1-.099.382.671.671 0 0 1-.012.033l-.004.01a.75.75 0 0 1-.66.424H5.48a.983.983 0 0 1-.155-.031 3.398 3.398 0 0 1-.36-.12l-.226-.095c-.482-.206-1.233-.646-1.978-1.16-.746-.516-1.436-1.07-1.814-1.491L.94 5.794l-.008-.008-.001-.001-.007-.007L.9 5.752a5.486 5.486 0 0 1-.084-.09 2.22 2.22 0 0 1-.164-.195l-.006-.008L.64 5.45a.749.749 0 0 1-.14-.446c0-.185.053-.348.144-.478l.074-.081.039-.044c.058-.065.125-.138.188-.202Z"
            />
          </svg>
        </span>
        <span className="text-orange-400">برند آیفون</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="10"
            fill="none"
          >
            <path
              stroke="#222F5D"
              d="m.945 4.2.006-.006.006-.007c.369-.406 1.067-.973 1.831-1.502.763-.53 1.537-.984 2.042-1.187l.01-.004c.067-.029.2-.079.341-.123a1.72 1.72 0 0 1 .3-.071c.13.002.253.031.375.092a.812.812 0 0 1 .33.377c.02.056.057.198.093.363a11.189 11.189 0 0 1 .054.253l.006.034c.1.558.161 1.502.161 2.575 0 1-.057 1.899-.14 2.48a1.34 1.34 0 0 0-.007.034l-.018.087v.002c-.013.07-.031.159-.052.254a4.92 4.92 0 0 1-.099.382.671.671 0 0 1-.012.033l-.004.01a.75.75 0 0 1-.66.424H5.48a.983.983 0 0 1-.155-.031 3.398 3.398 0 0 1-.36-.12l-.226-.095c-.482-.206-1.233-.646-1.978-1.16-.746-.516-1.436-1.07-1.814-1.491L.94 5.794l-.008-.008-.001-.001-.007-.007L.9 5.752a5.486 5.486 0 0 1-.084-.09 2.22 2.22 0 0 1-.164-.195l-.006-.008L.64 5.45a.749.749 0 0 1-.14-.446c0-.185.053-.348.144-.478l.074-.081.039-.044c.058-.065.125-.138.188-.202Z"
            />
          </svg>
        </span>
        <span>آیفون ۱۳</span>
      </div>

      {/* single product */}
      <div className="px-4 flex flex-col items-center gap-y-9 mt-4">
        <div className="w-4/5 max-w-xs">
          <img className="w-full h-auto" src={iphone13} alt="fireSpot"></img>
        </div>
        <div className="mb-2 text-center">
          <h1 className="text-slate-800 font-bold text-lg mb-1">
            گوشی آیفون 13 128 گیگ
          </h1>
          <h2 className="font-thin text-gray-500">Apple Iphone 13 128 GB</h2>
        </div>

        {/* color selection */}
        <div className="flex justify-evenly gap-x-8 w-full">
          <span className="text-slate-800">انتخاب رنگ:</span>
          <div className="flex items-center">
            <button
              onClick={() => setColor("red")}
              className={`bg-red-500 w-7 h-7 sm:w-8 sm:h-8 -ml-1 rounded-full cursor-pointer flex items-center justify-center ${
                color === "red" ? "ring-2 ring-red-400 ring-offset-1" : ""
              }`}
            >
              {color === "red" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="w-5 h-5 sm:w-6 sm:h-6 items-center justify-center stroke-white"
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
              className={`bg-blue-500 w-7 h-7 sm:w-8 sm:h-8 -ml-1 rounded-full cursor-pointer flex items-center justify-center ${
                color === "blue" ? "ring-2 ring-blue-400 ring-offset-1" : ""
              }`}
            >
              {color === "blue" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  class="w-5 h-5 sm:w-6 sm:h-6 items-center justify-center stroke-white"
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
              className={`bg-green-500 w-7 h-7 sm:w-8 sm:h-8 rounded-full cursor-pointer flex items-center justify-center ${
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
                  class="w-5 h-5 sm:w-6 sm:h-6 items-center justify-center stroke-white"
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
      </div>
    </div>
  )
}

export default SingleProduct
