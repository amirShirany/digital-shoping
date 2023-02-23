import { useState } from "react"
import { InputBase } from "@mui/material"
import { styled, createTheme, ThemeProvider } from "@mui/material/styles"
import SearchIcon from "@mui/icons-material/Search"
import iphone13 from "../image/iphone_13.png"

const theme = createTheme({
  palette: {
    checkboxColor: {
      main: "#FF755C",
    },
  },
})

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  marginRight: 10,
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  display: "flex",
  color: "#222F5D",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
  },
}))

const SingleProduct = () => {
  const [color, setColor] = useState("red")

  return (
    <div>
      <ThemeProvider theme={theme}>
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

        {/* breadCrumbs */}
        <div className="flex md:hidden items-center gap-2 mr-5">
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

        {/* desktop navbar */}
        <div className="bg-white p-4 shadow-lg hidden md:block lg:text-lg sticky top-0 z-10 mb-5">
          <nav className="flex items-center justify-between container max-w-screen-2xl mx-auto">
            <ul className="flex items-center gap-x-2 lg:gap-x-4 text-slate-800">
              <li>
                <a href="#" className="hover:bg-slate-100 rounded">
                  <svg
                    width="99"
                    height="26"
                    viewBox="0 0 99 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.74402 1.40941V5.42118H4.73226V1.40941H8.74402ZM10.6852 12.9788C10.8577 12.9788 10.944 13.0651 10.944 13.2376V17.7412C10.944 17.9137 10.8577 18 10.6852 18H9.6499C9.37383 18 9.17539 17.9914 9.05461 17.9741C8.96834 19.182 8.71814 20.2086 8.30402 21.0541C7.8899 21.9169 7.22559 22.7106 6.31108 23.4353C5.41383 24.16 4.15422 24.9192 2.53226 25.7129L0.746376 21.7271C1.95422 21.0024 2.79971 20.4157 3.28285 19.9671C3.76598 19.5184 4.05932 19.0784 4.16285 18.6471C4.28363 18.2157 4.34402 17.5169 4.34402 16.5506V7.49177H9.10637V12.4094C9.10637 12.582 9.14951 12.72 9.23579 12.8235C9.33932 12.9271 9.47736 12.9788 9.6499 12.9788H10.6852ZM19.3572 12.7459C19.3572 13.6949 19.1243 14.5749 18.6584 15.3859C18.1925 16.1796 17.5627 16.818 16.769 17.3012C15.9752 17.7671 15.0952 18 14.129 18H10.6866C10.5141 18 10.4278 17.9137 10.4278 17.7412V13.2376C10.4278 13.0651 10.5141 12.9788 10.6866 12.9788H14.0772C14.2152 12.9788 14.336 12.9271 14.4396 12.8235C14.5431 12.72 14.5948 12.5906 14.5948 12.4353V6.76706H19.3572V12.7459ZM19.409 20.0706V24.0824H11.3854V20.0706H19.409ZM26.0939 18C25.1276 18 24.2476 17.7671 23.4539 17.3012C22.6602 16.818 22.0304 16.1796 21.5645 15.3859C21.0986 14.5749 20.8657 13.6949 20.8657 12.7459V0.322355H25.628V12.4353C25.628 12.6078 25.6711 12.7459 25.7574 12.8494C25.8609 12.9357 25.9904 12.9788 26.1457 12.9788H27.7245C27.897 12.9788 27.9833 13.0651 27.9833 13.2376V17.7412C27.9833 17.9137 27.897 18 27.7245 18H26.0939ZM35.7977 0.684708V4.69647H27.7742V0.684708H35.7977ZM31.0354 6.76706H35.7977V12.7459C35.7977 13.6949 35.5648 14.5749 35.0989 15.3859C34.633 16.1796 34.0032 16.818 33.2095 17.3012C32.4158 17.7671 31.5358 18 30.5695 18H27.7225C27.5499 18 27.4636 17.9137 27.4636 17.7412V13.2376C27.4636 13.0651 27.5499 12.9788 27.7225 12.9788H30.5177C30.6558 12.9788 30.7766 12.9271 30.8801 12.8235C30.9836 12.72 31.0354 12.5906 31.0354 12.4353V6.76706Z"
                      fill="#222F5D"
                    />
                    <path
                      d="M56.7374 12.9788C56.9099 12.9788 56.9962 13.0651 56.9962 13.2376V17.7412C56.9962 17.9137 56.9099 18 56.7374 18H56.0127C56.0472 18.3106 56.0644 18.5435 56.0644 18.6988C56.0644 19.7341 55.8056 20.6918 55.288 21.5718C54.7703 22.4518 54.0715 23.142 53.1915 23.6424C52.3115 24.16 51.3452 24.4188 50.2927 24.4188H44.1844C42.9076 24.4188 41.7256 24.0996 40.6386 23.4612C39.5515 22.8227 38.6888 21.96 38.0503 20.8729C37.4119 19.7859 37.0927 18.6039 37.0927 17.3271V10.4941H41.855V17.0682C41.855 17.7067 42.0793 18.2502 42.528 18.6988C42.9939 19.1647 43.546 19.3976 44.1844 19.3976H50.3703C50.5774 19.3976 50.7499 19.3286 50.888 19.1906C51.026 19.0525 51.095 18.8886 51.095 18.6988C51.095 18.509 51.026 18.3451 50.888 18.2071C50.7499 18.069 50.5774 18 50.3703 18H44.7021V12.9788H56.7374ZM56.739 18C56.5664 18 56.4802 17.9137 56.4802 17.7412V13.2376C56.4802 13.0651 56.5664 12.9788 56.739 12.9788H62.5366C63.71 12.9788 64.7108 12.6165 65.539 11.8918L67.5837 10.08L64.6072 8.63059C64.3657 8.52706 64.1759 8.47529 64.0378 8.47529C63.7272 8.47529 63.4166 8.61333 63.1061 8.88941L60.4143 11.8659L57.1013 8.96706L59.819 5.65412C60.3712 4.99843 61.0182 4.52392 61.7602 4.23059C62.5021 3.92 63.2441 3.76471 63.9861 3.76471C64.8488 3.76471 65.6684 3.97177 66.4449 4.38588L71.9837 6.97412C72.07 7.00863 72.139 7.02588 72.1908 7.02588C72.2598 7.02588 72.3115 7.02588 72.3461 7.02588H75.5296V11.6847H72.2166V12.4094C72.2166 12.582 72.2598 12.72 72.3461 12.8235C72.4496 12.9271 72.5876 12.9788 72.7602 12.9788H75.9955C76.168 12.9788 76.2543 13.0651 76.2543 13.2376V17.7412C76.2543 17.9137 76.168 18 75.9955 18H72.7602C71.7421 18 70.9053 17.7584 70.2496 17.2753C69.6111 16.7749 69.0849 16.0502 68.6708 15.1012L68.1531 15.6188C67.2904 16.3953 66.3155 16.9906 65.2284 17.4047C64.1413 17.8016 63.0284 18 61.8896 18H56.739ZM59.9484 20.0706H63.9602V24.0824H59.9484V20.0706ZM84.6697 12.7459C84.6697 13.6949 84.4367 14.5749 83.9709 15.3859C83.505 16.1796 82.8752 16.818 82.0815 17.3012C81.2877 17.7671 80.4077 18 79.4415 18H75.9991C75.8266 18 75.7403 17.9137 75.7403 17.7412V13.2376C75.7403 13.0651 75.8266 12.9788 75.9991 12.9788H79.3897C79.5277 12.9788 79.6485 12.9271 79.752 12.8235C79.8556 12.72 79.9073 12.5906 79.9073 12.4353V6.76706H84.6697V12.7459ZM84.7215 20.0706V24.0824H76.6979V20.0706H84.7215ZM93.037 12.9788C93.4856 12.9788 93.7099 12.7976 93.7099 12.4353C93.7099 12.2973 93.6581 12.1851 93.5546 12.0988C93.4511 11.9953 93.2095 11.8141 92.8299 11.5553L87.0064 7.54353L89.724 3.60941L96.324 8.19059C97.0315 8.74275 97.5664 9.32941 97.9287 9.95059C98.2911 10.5718 98.4723 11.3482 98.4723 12.28C98.4723 13.3671 98.2048 14.3506 97.6699 15.2306C97.1523 16.0933 96.4448 16.7749 95.5476 17.2753C94.6503 17.7584 93.6754 18 92.6228 18H86.1781V12.9788H93.037Z"
                      fill="#FF755C"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-slate-100 px-1 py-2 rounded-md transition-all duration-200"
                >
                  خانه
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-slate-100 px-1 py-2 rounded-md transition-all duration-200"
                >
                  تلفن همراه
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-slate-100 px-1 py-2 rounded-md transition-all duration-200"
                >
                  لپ تاپ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-slate-100 px-1 py-2 rounded-md transition-all duration-200"
                >
                  ساعت هوشمند
                </a>
              </li>
            </ul>
            {/* Search bar */}
            <div className="bg-gray-100 flex-1 mr-2 rounded-lg hover:bg-slate-200  max-w-xl">
              <Search>
                <SearchIcon />
                <StyledInputBase
                  placeholder="نام محصول،نام برند،مدل و..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
          </nav>
        </div>

        {/* content */}
        <div className="container mx-auto max-w-screen-2xl grid grid-cols-12 md:grid-rows-[55px_minmax(500px,_1fr)] md:gap-8 md:px-4 lg:px-6">
          {/* side bar */}
          <div className="hidden md:block col-span-4 lg:col-span-3 row-span-2 m-4">
            <div className="bg-white p-5 rounded-xl max-h-[calc(100vh_-_100px)] overflow-auto sticky top-28">
              {/* Categoreis */}
              <div className="text-xl font-bold mb-5 text-orange-400">
                دسته بندی
              </div>
              <ul>
                <li className="hover:cursor-pointer hover:bg-gray-100 rounded-md">
                  <a href="#" className="flex items-center py-2 mb-1">
                    <svg
                      width="25"
                      height="30"
                      viewBox="0 0 20 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 12.75V20.25C13 23.25 12.25 24 9.25 24H4.75C1.75 24 1 23.25 1 20.25V12.75C1 9.75 1.75 9 4.75 9H9.25C12.25 9 13 9.75 13 12.75Z"
                        className="stroke-slate-400"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.5 11.625H5.5"
                        className="stroke-slate-400"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.99984 21.825C7.64187 21.825 8.16234 21.3045 8.16234 20.6625C8.16234 20.0205 7.64187 19.5 6.99984 19.5C6.35781 19.5 5.83734 20.0205 5.83734 20.6625C5.83734 21.3045 6.35781 21.825 6.99984 21.825Z"
                        className="stroke-slate-400"
                        strokeWidth="1.125"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 9.5C20 14.7467 15.7467 19 10.5 19C5.25329 19 1 14.7467 1 9.5C1 4.25329 5.25329 0 10.5 0C15.7467 0 20 4.25329 20 9.5Z"
                        fill="#AFAFAF"
                        fillOpacity="0.29"
                      />
                    </svg>
                    <span className="text-xl mr-2 text-slate-400">
                      تلفن همراه
                    </span>
                  </a>
                </li>
                <li className="hover:cursor-pointer hover:bg-gray-100 rounded-md">
                  <a href="#" className="flex items-center py-2 mb-1">
                    <svg
                      width="25"
                      height="30"
                      viewBox="0 0 21 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="11.5"
                        cy="9.5"
                        r="9.5"
                        fill="#AFAFAF"
                        fillOpacity="0.29"
                      />
                      <path
                        d="M4.29331 8.3335H11.7C14.0733 8.3335 14.6666 8.92683 14.6666 11.2935V15.5135C14.6666 17.8868 14.0733 18.4735 11.7066 18.4735H4.29331C1.92665 18.4802 1.33331 17.8868 1.33331 15.5202V11.2935C1.33331 8.92683 1.92665 8.3335 4.29331 8.3335Z"
                        className="stroke-slate-400"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 18.48V21.6666"
                        className="stroke-slate-400"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.33331 15.6665H14.6666"
                        className="stroke-slate-400"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 21.6665H11"
                        className="stroke-slate-400"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xl mr-2 text-slate-400 hover:cursor-pointer">
                      لپ تاپ
                    </span>
                  </a>
                </li>
                <li className="hover:cursor-pointer hover:bg-gray-100 rounded-md">
                  <a href="#" className="flex items-center py-2 mb-1">
                    <svg
                      width="25"
                      height="30"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="11.5"
                        cy="9.5"
                        r="9.5"
                        fill="#AFAFAF"
                        fillOpacity="0.29"
                      />
                      <path
                        d="M5.66646 18.6668H10.3331C11.8865 18.6668 12.6665 17.8868 12.6665 16.3335V11.6668C12.6665 10.1135 11.8865 9.3335 10.3331 9.3335H5.66646C4.11313 9.3335 3.33313 10.1135 3.33313 11.6668V16.3335C3.33313 17.8868 4.11313 18.6668 5.66646 18.6668Z"
                        className="stroke-slate-400"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6665 7.3335H5.33313"
                        className="stroke-slate-400"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.6665 20.6665H5.33313"
                        className="stroke-slate-400"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.66687 12.3335V14.3335H9.66687"
                        className="stroke-slate-400"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xl mr-2 text-slate-400 hover:cursor-pointer">
                      ساعت هوشمند
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* sort section */}
          <div className="hidden md:block m-4 col-span-8 lg:col-span-9">
            {/* breadCrumbs */}
            <div className="flex w-full bg-white rounded-lg p-2 items-center gap-2">
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
          </div>
          {/* product section */}
          <div className="col-span-12 flex mb-4 p-8 md:mx-4 md:col-span-8 lg:col-span-9 md:bg-white rounded-lg">
            <div className="flex w-full">
              {/* single product */}
              <div className="flex-auto">
                <div className="px-4 flex flex-col items-center gap-y-9 md:flex-row md:justify-start md:items-start">
                  <div className="w-4/5 max-w-[300px]">
                    <img
                      className="w-full h-auto"
                      src={iphone13}
                      alt="fireSpot"
                    ></img>
                    <div className="hidden md:flex items-center justify-around gap-x-2 mt-2">
                      <div className="border rounded-lg p-2 border-gray-400">
                        <img className="w-full h-auto" src={iphone13} alt="" />
                      </div>
                      <div className="border rounded-lg p-2 border-gray-400">
                        <img className="w-full h-auto" src={iphone13} alt="" />
                      </div>
                      <div className="border rounded-lg p-2 border-gray-400">
                        <img className="w-full h-auto" src={iphone13} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="mb-2 text-center">
                      <h1 className="text-slate-800 font-bold text-lg mb-1 md:text-2xl">
                        گوشی آیفون 13 128 گیگ
                      </h1>
                      <h2 className="font-thin text-gray-500 md:text-right">
                        Apple Iphone 13 128 GB
                      </h2>
                    </div>
                    <hr className="hidden md:block" />
                    {/* color selection */}
                    <div className="flex justify-evenly mt-4 gap-x-8 w-full">
                      <span className="text-slate-800 text-sm md:text-xl mr-2">
                        انتخاب رنگ:
                      </span>
                      <div className="flex items-center">
                        <button
                          onClick={() => setColor("red")}
                          className={`bg-red-500 w-7 h-7 sm:w-8 sm:h-8 -ml-1 rounded-full cursor-pointer flex items-center justify-center ${
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
                              strokeWidth="1.5"
                              className="w-5 h-5 sm:w-6 sm:h-6 items-center justify-center stroke-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          )}
                        </button>
                        <button
                          onClick={() => setColor("blue")}
                          className={`bg-blue-500 w-7 h-7 sm:w-8 sm:h-8 -ml-1 rounded-full cursor-pointer flex items-center justify-center ${
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
                              strokeWidth="1.5"
                              className="w-5 h-5 sm:w-6 sm:h-6 items-center justify-center stroke-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
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
                              strokeWidth="1.5"
                              className="w-5 h-5 sm:w-6 sm:h-6 items-center justify-center stroke-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          ) : (
                            ""
                          )}
                        </button>
                      </div>
                    </div>
                    {/*mobile seller detail */}
                    <div className="text-slate-800 md:hidden text-xs md:text-lg mt-6 mb-10 flex flex-wrap justify-around gap-x-2 gap-y-4">
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
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.00012 11.9993C8.06762 11.9993 8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z"
                                stroke="#222F5D"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z"
                                stroke="#222F5D"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255 8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z"
                                stroke="#222F5D"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.00008 14.916C6.02591 14.916 5.54175 15.4002 5.54175 16.3743V17.8327H8.45841V16.3743C8.45841 15.4002 7.97425 14.916 7.00008 14.916Z"
                                stroke="#222F5D"
                                strokeWidth="0.875"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="font-medium mr-1">فروشنده:</span>
                        </div>
                        <span className="font-light text-gray-600 mr-2">
                          دیجی تایز
                        </span>
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
                                strokeWidth="1.0625"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="font-medium mr-1">گارانتی:</span>
                        </div>
                        <span className="font-light text-gray-600 mr-2">
                          18ماه زرین خدمت
                        </span>
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
                                strokeWidth="1.125"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14.6666 14.333V16.333C14.6666 17.4397 13.7733 18.333 12.6666 18.333H11.9999C11.9999 17.5997 11.3999 16.9997 10.6666 16.9997C9.93325 16.9997 9.33325 17.5997 9.33325 18.333H6.66659C6.66659 17.5997 6.06659 16.9997 5.33325 16.9997C4.59992 16.9997 3.99992 17.5997 3.99992 18.333H3.33325C2.22659 18.333 1.33325 17.4397 1.33325 16.333V14.333H8.66659C9.39992 14.333 9.99992 13.733 9.99992 12.9997V8.33301H11.2266C11.7066 8.33301 12.1466 8.59301 12.3866 9.00635L13.5266 10.9997H12.6666C12.2999 10.9997 11.9999 11.2997 11.9999 11.6663V13.6663C11.9999 14.033 12.2999 14.333 12.6666 14.333H14.6666Z"
                                stroke="#222F5D"
                                strokeWidth="1.125"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M5.33333 19.6667C6.06971 19.6667 6.66667 19.0697 6.66667 18.3333C6.66667 17.597 6.06971 17 5.33333 17C4.59695 17 4 17.597 4 18.3333C4 19.0697 4.59695 19.6667 5.33333 19.6667Z"
                                stroke="#222F5D"
                                strokeWidth="1.125"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.6666 19.6667C11.403 19.6667 11.9999 19.0697 11.9999 18.3333C11.9999 17.597 11.403 17 10.6666 17C9.93021 17 9.33325 17.597 9.33325 18.3333C9.33325 19.0697 9.93021 19.6667 10.6666 19.6667Z"
                                stroke="#222F5D"
                                strokeWidth="1.125"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14.6667 13V14.3333H12.6667C12.3 14.3333 12 14.0333 12 13.6667V11.6667C12 11.3 12.3 11 12.6667 11H13.5267L14.6667 13Z"
                                stroke="#222F5D"
                                strokeWidth="1.125"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M6.00008 8.33268C6.00008 9.13268 5.64676 9.84602 5.09342 10.3327C4.62009 10.746 4.00675 10.9993 3.33341 10.9993C1.86008 10.9993 0.666748 9.80602 0.666748 8.33268C0.666748 7.49268 1.05341 6.73935 1.66675 6.25269C2.12675 5.88602 2.70675 5.66602 3.33341 5.66602C4.80675 5.66602 6.00008 6.85935 6.00008 8.33268Z"
                                stroke="#222F5D"
                                strokeWidth="1.125"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3.50008 7.49902V8.49902L2.66675 8.99902"
                                stroke="#222F5D"
                                strokeWidth="1.125"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="font-medium mr-1">ارسال توسط:</span>
                        </div>
                        <span className="font-light text-gray-600 mr-2">
                          انبار تهران
                        </span>
                      </div>
                    </div>
                    {/* product detail */}
                    <div className="text-slate-700 font-bold bg-white rounded-lg w-full p-6 mr-2 md:bg-none md:p-0">
                      <h2 className="mb-2 mt-4 font-black text-base md:text-xl">
                        ویژگی های کالا:
                      </h2>
                      <ul className="list-disc text-sm md:text-lg flex flex-col gap-y-2 marker:text-orange-500">
                        <li className="flex flex-col">
                          <span className="font-light text-slate-600">
                            حافظه داخلی :
                          </span>
                          <span>128 گیگابایت</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-light text-slate-600">
                            بازه ی اندازه صفحه نمایش:
                          </span>
                          <span>0.6 اینج و بزرگتر</span>
                        </li>
                        <li className="flex flex-col">
                          <span className="font-light text-slate-600">
                            شبکه های ارتباطی:
                          </span>
                          <span>5G , 4G , 3G , 2G</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* cart summery detail */}
              <div className="hidden lg:block w-1/4 mr-4">
                <div className="bg-gray-50 text-slate-800 h-auto rounded-lg text-xs md:text-sm p-3 mt-6 flex flex-col gap-y-4">
                  <div className="flex flex-col xl:flex-row">
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
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.00012 11.9993C8.06762 11.9993 8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z"
                            stroke="#222F5D"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z"
                            stroke="#222F5D"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255 8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z"
                            stroke="#222F5D"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.00008 14.916C6.02591 14.916 5.54175 15.4002 5.54175 16.3743V17.8327H8.45841V16.3743C8.45841 15.4002 7.97425 14.916 7.00008 14.916Z"
                            stroke="#222F5D"
                            strokeWidth="0.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="font-medium mr-1">فروشنده:</span>
                    </div>
                    <span className="font-light text-gray-600 mr-2">
                      دیجی تایز
                    </span>
                  </div>

                  <div className="flex flex-col xl:flex-row">
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
                            strokeWidth="1.0625"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="font-medium mr-1">گارانتی:</span>
                    </div>
                    <span className="font-light text-gray-600 mr-2">
                      18ماه زرین خدمت
                    </span>
                  </div>

                  <div className="flex flex-col xl:flex-row">
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
                            strokeWidth="1.125"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.6666 14.333V16.333C14.6666 17.4397 13.7733 18.333 12.6666 18.333H11.9999C11.9999 17.5997 11.3999 16.9997 10.6666 16.9997C9.93325 16.9997 9.33325 17.5997 9.33325 18.333H6.66659C6.66659 17.5997 6.06659 16.9997 5.33325 16.9997C4.59992 16.9997 3.99992 17.5997 3.99992 18.333H3.33325C2.22659 18.333 1.33325 17.4397 1.33325 16.333V14.333H8.66659C9.39992 14.333 9.99992 13.733 9.99992 12.9997V8.33301H11.2266C11.7066 8.33301 12.1466 8.59301 12.3866 9.00635L13.5266 10.9997H12.6666C12.2999 10.9997 11.9999 11.2997 11.9999 11.6663V13.6663C11.9999 14.033 12.2999 14.333 12.6666 14.333H14.6666Z"
                            stroke="#222F5D"
                            strokeWidth="1.125"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5.33333 19.6667C6.06971 19.6667 6.66667 19.0697 6.66667 18.3333C6.66667 17.597 6.06971 17 5.33333 17C4.59695 17 4 17.597 4 18.3333C4 19.0697 4.59695 19.6667 5.33333 19.6667Z"
                            stroke="#222F5D"
                            strokeWidth="1.125"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.6666 19.6667C11.403 19.6667 11.9999 19.0697 11.9999 18.3333C11.9999 17.597 11.403 17 10.6666 17C9.93021 17 9.33325 17.597 9.33325 18.3333C9.33325 19.0697 9.93021 19.6667 10.6666 19.6667Z"
                            stroke="#222F5D"
                            strokeWidth="1.125"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.6667 13V14.3333H12.6667C12.3 14.3333 12 14.0333 12 13.6667V11.6667C12 11.3 12.3 11 12.6667 11H13.5267L14.6667 13Z"
                            stroke="#222F5D"
                            strokeWidth="1.125"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.00008 8.33268C6.00008 9.13268 5.64676 9.84602 5.09342 10.3327C4.62009 10.746 4.00675 10.9993 3.33341 10.9993C1.86008 10.9993 0.666748 9.80602 0.666748 8.33268C0.666748 7.49268 1.05341 6.73935 1.66675 6.25269C2.12675 5.88602 2.70675 5.66602 3.33341 5.66602C4.80675 5.66602 6.00008 6.85935 6.00008 8.33268Z"
                            stroke="#222F5D"
                            strokeWidth="1.125"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.50008 7.49902V8.49902L2.66675 8.99902"
                            stroke="#222F5D"
                            strokeWidth="1.125"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="font-medium mr-1">ارسال توسط:</span>
                    </div>
                    <span className="font-light text-gray-600 mr-2">
                      انبار تهران
                    </span>
                  </div>

                  <div className="mt-8">
                    <span className="flex justify-center text-orange-500 font-bold text-xl mb-4">
                      39,850,000 تومان
                    </span>
                    <button className="text-white bg-orange-500 xl:text-xl rounded-lg w-full py-3">
                      اضافه به سبد خرید
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fixed add to cart button */}
        <div className="md:hidden fixed flex items-center justify-between left-0 right-0 bottom-0 w-full bg-white shadow-lg px-4 py-2 mt-10 gap-x-4">
          <button className="flex-auto text-white bg-orange-500 xl:text-xl rounded-lg w-full py-3">
            اضافه به سبد خرید
          </button>
          <div className="text-slate-800 flex flex-col mr-2">
            <span>38,560,000</span>
            <span className="text-gray-500 text-sm">تومان</span>
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default SingleProduct
