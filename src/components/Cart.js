const Cart = () => {
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
      {/* cart summery */}
      <div className="flex flex-col gap-y-4 px-4">
        <div className="bg-white rounded-lg p-4"></div>
      </div>
    </div>
  )
}

export default Cart
