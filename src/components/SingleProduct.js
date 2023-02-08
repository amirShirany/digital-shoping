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

      {/* mobile seller detail */}
      <div className="text-slate-800 text-xs mt-6 flex flex-wrap justify-around gap-x-2 gap-y-4">
        <div className="flex items-center">
          <div className="flex items-center">
            <span>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                <path
                  d="M1.75586 11.5449V14.1641C1.75586 16.7833 2.80586 17.8333 5.42503 17.8333H8.56919C11.1884 17.8333 12.2384 16.7833 12.2384 14.1641V11.5449"
                  stroke="#222F5D"
                  stroke-width="0.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.00012 11.9993C8.06762 11.9993 8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z"
                  stroke="#222F5D"
                  stroke-width="0.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z"
                  stroke="#222F5D"
                  stroke-width="0.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255 8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z"
                  stroke="#222F5D"
                  stroke-width="0.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.00008 14.916C6.02591 14.916 5.54175 15.4002 5.54175 16.3743V17.8327H8.45841V16.3743C8.45841 15.4002 7.97425 14.916 7.00008 14.916Z"
                  stroke="#222F5D"
                  stroke-width="0.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="font-medium mr-1">فروشنده:</span>
          </div>
          <span className="font-light mr-2">دیجی تایز</span>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <span>
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="13" cy="8" r="8" fill="#E2E2E2" />
                <path
                  d="M7.43053 3.57973L3.89594 4.91139C3.08136 5.21598 2.41553 6.17931 2.41553 7.04348V12.3064C2.41553 13.1422 2.96803 14.2401 3.64094 14.7431L6.68678 17.0168C7.68553 17.7676 9.32886 17.7676 10.3276 17.0168L13.3734 14.7431C14.0464 14.2401 14.5989 13.1422 14.5989 12.3064V7.04348C14.5989 6.17223 13.933 5.20889 13.1184 4.90431L9.58386 3.57973C8.98178 3.36014 8.01844 3.36014 7.43053 3.57973Z"
                  stroke="#222F5D"
                  stroke-width="1.0625"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="font-medium mr-1">گارانتی:</span>
          </div>
          <span className="font-light text-gray-600 mr-2">18ماه زرین خدمت</span>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <span>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                <path
                  d="M9.99992 6.33301V12.9997C9.99992 13.733 9.39992 14.333 8.66659 14.333H1.33325V10.0797C1.81992 10.6597 2.5666 11.0197 3.39327 10.9997C4.0666 10.9863 4.67325 10.7263 5.12659 10.293C5.33325 10.1197 5.5066 9.89967 5.63993 9.65967C5.87993 9.253 6.01325 8.77299 5.99992 8.27299C5.97992 7.49299 5.63326 6.80634 5.09326 6.33301H9.99992Z"
                  stroke="#222F5D"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6666 14.333V16.333C14.6666 17.4397 13.7733 18.333 12.6666 18.333H11.9999C11.9999 17.5997 11.3999 16.9997 10.6666 16.9997C9.93325 16.9997 9.33325 17.5997 9.33325 18.333H6.66659C6.66659 17.5997 6.06659 16.9997 5.33325 16.9997C4.59992 16.9997 3.99992 17.5997 3.99992 18.333H3.33325C2.22659 18.333 1.33325 17.4397 1.33325 16.333V14.333H8.66659C9.39992 14.333 9.99992 13.733 9.99992 12.9997V8.33301H11.2266C11.7066 8.33301 12.1466 8.59301 12.3866 9.00635L13.5266 10.9997H12.6666C12.2999 10.9997 11.9999 11.2997 11.9999 11.6663V13.6663C11.9999 14.033 12.2999 14.333 12.6666 14.333H14.6666Z"
                  stroke="#222F5D"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33333 19.6667C6.06971 19.6667 6.66667 19.0697 6.66667 18.3333C6.66667 17.597 6.06971 17 5.33333 17C4.59695 17 4 17.597 4 18.3333C4 19.0697 4.59695 19.6667 5.33333 19.6667Z"
                  stroke="#222F5D"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6666 19.6667C11.403 19.6667 11.9999 19.0697 11.9999 18.3333C11.9999 17.597 11.403 17 10.6666 17C9.93021 17 9.33325 17.597 9.33325 18.3333C9.33325 19.0697 9.93021 19.6667 10.6666 19.6667Z"
                  stroke="#222F5D"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6667 13V14.3333H12.6667C12.3 14.3333 12 14.0333 12 13.6667V11.6667C12 11.3 12.3 11 12.6667 11H13.5267L14.6667 13Z"
                  stroke="#222F5D"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.00008 8.33268C6.00008 9.13268 5.64676 9.84602 5.09342 10.3327C4.62009 10.746 4.00675 10.9993 3.33341 10.9993C1.86008 10.9993 0.666748 9.80602 0.666748 8.33268C0.666748 7.49268 1.05341 6.73935 1.66675 6.25269C2.12675 5.88602 2.70675 5.66602 3.33341 5.66602C4.80675 5.66602 6.00008 6.85935 6.00008 8.33268Z"
                  stroke="#222F5D"
                  stroke-width="1.125"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.50008 7.49902V8.49902L2.66675 8.99902"
                  stroke="#222F5D"
                  stroke-width="1.125"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="font-medium mr-1">ارسال توسط:</span>
          </div>
          <span className="font-light mr-2">انبار تهران</span>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
