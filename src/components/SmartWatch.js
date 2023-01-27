import { useState } from "react"
import {
  Accordion,
  InputBase,
  Checkbox,
  Typography,
  FormControlLabel,
  AccordionDetails,
  AccordionSummary,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material"
import { createTheme, ThemeProvider, styled } from "@mui/material/styles"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SearchIcon from "@mui/icons-material/Search"
import appleWatchS7 from "../image/apple-watch-7.png"

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

// const BottomNavigation = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   color: "black",
//   [theme.breakpoints.up("sm")]: {
//     display: "none",
//   },
// }))

const theme = createTheme({
  palette: {
    checkboxColor: {
      main: "#FF755C",
    },
  },
})

const SmartWAtch = () => {
  const [color, setColor] = useState("red")
  const [sortItem, setSortItem] = useState("محبوب ترین")
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

  const [value, setValue] = useState("home")
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
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
            <span className="text-sm text-slate-800 mr-2">
              فیلتر : برند اپل
            </span>
          </div>
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
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.5 11.625H5.5"
                        className="stroke-slate-400"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.99984 21.825C7.64187 21.825 8.16234 21.3045 8.16234 20.6625C8.16234 20.0205 7.64187 19.5 6.99984 19.5C6.35781 19.5 5.83734 20.0205 5.83734 20.6625C5.83734 21.3045 6.35781 21.825 6.99984 21.825Z"
                        className="stroke-slate-400"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 9.5C20 14.7467 15.7467 19 10.5 19C5.25329 19 1 14.7467 1 9.5C1 4.25329 5.25329 0 10.5 0C15.7467 0 20 4.25329 20 9.5Z"
                        fill="#AFAFAF"
                        fill-opacity="0.29"
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
                        fill-opacity="0.29"
                      />
                      <path
                        d="M4.29331 8.3335H11.7C14.0733 8.3335 14.6666 8.92683 14.6666 11.2935V15.5135C14.6666 17.8868 14.0733 18.4735 11.7066 18.4735H4.29331C1.92665 18.4802 1.33331 17.8868 1.33331 15.5202V11.2935C1.33331 8.92683 1.92665 8.3335 4.29331 8.3335Z"
                        className="stroke-slate-400"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 18.48V21.6666"
                        className="stroke-slate-400"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.33331 15.6665H14.6666"
                        className="stroke-slate-400"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 21.6665H11"
                        className="stroke-slate-400"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                        fill-opacity="0.29"
                      />
                      <path
                        d="M5.66646 18.6668H10.3331C11.8865 18.6668 12.6665 17.8868 12.6665 16.3335V11.6668C12.6665 10.1135 11.8865 9.3335 10.3331 9.3335H5.66646C4.11313 9.3335 3.33313 10.1135 3.33313 11.6668V16.3335C3.33313 17.8868 4.11313 18.6668 5.66646 18.6668Z"
                        className="stroke-slate-400"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6665 7.3335H5.33313"
                        className="stroke-slate-400"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6665 20.6665H5.33313"
                        className="stroke-slate-400"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.66687 12.3335V14.3335H9.66687"
                        className="stroke-slate-400"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className="text-xl mr-2 text-slate-400 hover:cursor-pointer">
                      ساعت هوشمند
                    </span>
                  </a>
                </li>
              </ul>

              <div className="text-xl font-bold my-4 text-orange-400">
                فیلتر
              </div>
              <div>
                <Accordion sx={{ boxShadow: "none", marginRight: "-1rem" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <svg
                      className="ml-2"
                      width="25"
                      height="30"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.5"
                        cy="9.5"
                        r="9.5"
                        fill="#AFAFAF"
                        fill-opacity="0.29"
                      />
                      <path
                        d="M12.8334 21.271H1.16669C0.92752 21.271 0.729187 21.0727 0.729187 20.8335C0.729187 20.5943 0.92752 20.396 1.16669 20.396H12.8334C13.0725 20.396 13.2709 20.5943 13.2709 20.8335C13.2709 21.0727 13.0725 21.271 12.8334 21.271Z"
                        fill="#222F5D"
                      />
                      <path
                        d="M2.15845 20.8331H1.28345L1.31262 13.8156C1.31262 13.3198 1.54011 12.8589 1.93095 12.5556L6.01428 9.37643C6.59178 8.92726 7.40262 8.92726 7.98595 9.37643L12.0693 12.5498C12.4543 12.8531 12.6876 13.3256 12.6876 13.8156V20.8331H11.8126V13.8214C11.8126 13.5998 11.7076 13.3839 11.5326 13.2439L7.44928 10.0706C7.18678 9.86643 6.81928 9.86643 6.55095 10.0706L2.46762 13.2498C2.29262 13.3839 2.18762 13.5998 2.18762 13.8214L2.15845 20.8331Z"
                        fill="#222F5D"
                      />
                      <path
                        d="M9.91665 21.2707H4.08331C3.84415 21.2707 3.64581 21.0723 3.64581 20.8332V15.2915C3.64581 14.5682 4.23498 13.979 4.95831 13.979H9.04165C9.76498 13.979 10.3541 14.5682 10.3541 15.2915V20.8332C10.3541 21.0723 10.1558 21.2707 9.91665 21.2707ZM4.52081 20.3957H9.47915V15.2915C9.47915 15.0523 9.28081 14.854 9.04165 14.854H4.95831C4.71915 14.854 4.52081 15.0523 4.52081 15.2915V20.3957Z"
                        fill="#222F5D"
                      />
                      <path
                        d="M5.83331 18.7915C5.59415 18.7915 5.39581 18.5932 5.39581 18.354V17.479C5.39581 17.2398 5.59415 17.0415 5.83331 17.0415C6.07248 17.0415 6.27081 17.2398 6.27081 17.479V18.354C6.27081 18.5932 6.07248 18.7915 5.83331 18.7915Z"
                        fill="#222F5D"
                      />
                      <path
                        d="M7.875 12.8125H6.125C5.88583 12.8125 5.6875 12.6142 5.6875 12.375C5.6875 12.1358 5.88583 11.9375 6.125 11.9375H7.875C8.11417 11.9375 8.3125 12.1358 8.3125 12.375C8.3125 12.6142 8.11417 12.8125 7.875 12.8125Z"
                        fill="#222F5D"
                      />
                    </svg>
                    <Typography className="text-slate-500">
                      برند محصول
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="flex flex-col">
                      <FormControlLabel
                        control={<Checkbox color="checkboxColor" />}
                        label="اپل"
                      />
                      <FormControlLabel
                        control={<Checkbox color="checkboxColor" />}
                        label="سامسونگ"
                      />
                      <FormControlLabel
                        control={<Checkbox color="checkboxColor" />}
                        label="شیائومی"
                      />
                      <FormControlLabel
                        control={<Checkbox color="checkboxColor" />}
                        label="هواوی"
                      />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: "none", marginRight: "-1rem" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <svg
                      className="ml-2"
                      width="25"
                      height="30"
                      viewBox="0 0 19 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83335 9.62484V17.4998C5.83335 18.1298 5.57668 18.7073 5.16834 19.1273L5.14502 19.1507C5.09252 19.2032 5.03419 19.2557 4.98169 19.2965C4.80669 19.4482 4.60835 19.5648 4.40418 19.6465C4.34001 19.6757 4.27585 19.699 4.21169 19.7223C3.98419 19.7982 3.73919 19.8332 3.50002 19.8332C3.34252 19.8332 3.18503 19.8157 3.03336 19.7865C2.95753 19.769 2.88169 19.7515 2.80585 19.7282C2.71252 19.699 2.62502 19.6698 2.53752 19.629C2.53752 19.6232 2.53752 19.6232 2.53168 19.629C2.36835 19.5473 2.21086 19.454 2.06503 19.3432L2.05919 19.3373C1.98335 19.279 1.91336 19.2207 1.84919 19.1507C1.78503 19.0807 1.72085 19.0107 1.65668 18.9348C1.54585 18.789 1.45252 18.6315 1.37086 18.4682C1.37669 18.4623 1.37669 18.4623 1.37086 18.4623C1.37086 18.4623 1.37085 18.4565 1.36502 18.4507C1.33002 18.369 1.30085 18.2815 1.27168 18.194C1.24835 18.1182 1.23085 18.0423 1.21335 17.9665C1.18418 17.8148 1.16669 17.6573 1.16669 17.4998V9.62484C1.16669 8.74984 1.75002 8.1665 2.62502 8.1665H4.37502C5.25002 8.1665 5.83335 8.74984 5.83335 9.62484Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.8333 16.6248V18.3748C12.8333 19.2498 12.25 19.8332 11.375 19.8332H3.5C3.73917 19.8332 3.98417 19.7982 4.21167 19.7223C4.27583 19.699 4.33999 19.6757 4.40416 19.6465C4.60833 19.5648 4.80667 19.4482 4.98167 19.2965C5.03417 19.2557 5.0925 19.2032 5.145 19.1507L5.16832 19.1273L9.135 15.1665H11.375C12.25 15.1665 12.8333 15.7498 12.8333 16.6248Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.80578 19.7285C2.45578 19.6235 2.12329 19.431 1.84912 19.151C1.56912 18.8768 1.37661 18.5443 1.27161 18.1943C1.49911 18.9235 2.07661 19.501 2.80578 19.7285Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.7158 13.5857L9.13495 15.1666L5.16827 19.1274C5.57661 18.7074 5.83328 18.1299 5.83328 17.4999V11.8649L7.41411 10.2841C8.03244 9.66573 8.86078 9.66573 9.47912 10.2841L10.7158 11.5207C11.3341 12.1391 11.3341 12.9674 10.7158 13.5857Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.50002 18.0832C3.82219 18.0832 4.08335 17.822 4.08335 17.4998C4.08335 17.1777 3.82219 16.9165 3.50002 16.9165C3.17785 16.9165 2.91669 17.1777 2.91669 17.4998C2.91669 17.822 3.17785 18.0832 3.50002 18.0832Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="9.5"
                        cy="9.5"
                        r="9.5"
                        fill="#AFAFAF"
                        fill-opacity="0.29"
                      />
                    </svg>
                    <Typography className="text-slate-500 font-extrabold">
                      رنگ محصول
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="flex flex-col">
                      <FormControlLabel
                        control={<Checkbox color="checkboxColor" />}
                        label="آبی"
                      />
                      <FormControlLabel
                        control={<Checkbox color="checkboxColor" />}
                        label="قرمز"
                      />
                      <FormControlLabel
                        control={<Checkbox color="checkboxColor" />}
                        label="سبز"
                      />
                      <FormControlLabel
                        control={<Checkbox color="checkboxColor" />}
                        label="مشکی"
                      />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: "none", marginRight: "-1rem" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <svg
                      className="ml-2"
                      width="25"
                      height="30"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5234 14.9038C10.2784 15.143 10.1384 15.4872 10.1734 15.8547C10.2259 16.4847 10.8034 16.9455 11.4334 16.9455H12.5418V17.6397C12.5418 18.8472 11.5559 19.833 10.3484 19.833H3.65177C2.44427 19.833 1.45844 18.8472 1.45844 17.6397V13.7138C1.45844 12.5063 2.44427 11.5205 3.65177 11.5205H10.3484C11.5559 11.5205 12.5418 12.5063 12.5418 13.7138V14.5538H11.3634C11.0368 14.5538 10.7393 14.6822 10.5234 14.9038Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.45844 14.2388V11.573C1.45844 10.8788 1.88427 10.2604 2.53177 10.0154L7.16343 8.26544C7.88677 7.99127 8.6626 8.52796 8.6626 9.30379V11.5205"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.1593 15.1492V16.3509C13.1593 16.6717 12.9026 16.9342 12.576 16.9459H11.4326C10.8026 16.9459 10.2251 16.485 10.1726 15.855C10.1376 15.4875 10.2776 15.1434 10.5226 14.9042C10.7385 14.6825 11.036 14.5542 11.3626 14.5542H12.576C12.9026 14.5659 13.1593 14.8283 13.1593 15.1492Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.08331 14H8.16665"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="11.5"
                        cy="9.5"
                        r="9.5"
                        fill="#AFAFAF"
                        fill-opacity="0.29"
                      />
                    </svg>
                    <Typography className="text-slate-500 font-extrabold">
                      محدوده قیمت
                    </Typography>
                  </AccordionSummary>
                </Accordion>
              </div>
            </div>
          </div>
          {/* sort section */}
          <div className="hidden md:block m-4 col-span-8 lg:col-span-9">
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
              <button
                onClick={() => setSortItem("محبوب ترین")}
                className="py-4 focus:text-gray-800 focus:font-extrabold relative"
              >
                محبوب ترین
                {sortItem === "محبوب ترین" ? (
                  <span className="bg-orange-500 rounded-full w-2 h-2 top-2 left-0 absolute"></span>
                ) : (
                  ""
                )}
              </button>
              <button
                onClick={() => setSortItem("پربازدید ترین")}
                className="py-4 focus:text-gray-800 focus:font-extrabold relative"
              >
                پربازدید ترین
                {sortItem === "پربازدید ترین" ? (
                  <span className="bg-orange-500 rounded-full w-2 h-2 top-2 left-0 absolute"></span>
                ) : (
                  ""
                )}
              </button>
              <button
                onClick={() => setSortItem("گران ترین")}
                className="py-4 focus:text-gray-800 focus:font-extrabold relative"
              >
                گران ترین
                {sortItem === "گران ترین" ? (
                  <span className="bg-orange-500 rounded-full w-2 h-2 top-2 left-0 absolute"></span>
                ) : (
                  ""
                )}
              </button>
              <button
                onClick={() => setSortItem("ارزان ترین")}
                className="py-4 focus:text-gray-800 focus:font-extrabold relative"
              >
                ارزان ترین
                {sortItem === "ارزان ترین" ? (
                  <span className="bg-orange-500 rounded-full w-2 h-2 top-2 left-0 absolute"></span>
                ) : (
                  ""
                )}
              </button>
            </div>
          </div>
          {/* product section */}
          <div className="col-span-12 md:mx-4 md:col-span-8 lg:col-span-9">
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
        {/* bottom navigation */}
        <div className="bg-white md:hidden w-full overflow-hidden mt-5 bottom-0 right-0 left-0 rounded-tr-lg rounded-tl-lg shadow-xl">
          <BottomNavigation
            showLabels
            sx={{
              ".Mui-selected , .Mui-selected > svg > path": {
                color: "#334155",
                opacity: "1",
              },
            }}
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction
              label="خانه"
              value="home"
              aria-labelledby="right"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                >
                  <path
                    opacity=".4"
                    fill="#222F5D"
                    d="M26.72 9.094 19.04 3.72c-2.093-1.466-5.307-1.386-7.32.174L5.04 9.107c-1.333 1.04-2.387 3.173-2.387 4.853v9.2c0 3.4 2.76 6.174 6.16 6.174h14.374c3.4 0 6.16-2.76 6.16-6.16v-9.04c0-1.8-1.16-4.014-2.627-5.04ZM17 24c0 .547-.453 1-1 1-.547 0-1-.453-1-1v-4c0-.546.453-1 1-1 .547 0 1 .454 1 1v4Z"
                  />
                </svg>
              }
            />
            <BottomNavigationAction
              label="منو"
              value="menu"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  fill="none"
                >
                  <path
                    opacity=".4"
                    fill="#222F5D"
                    d="M10.257 2.833H7.565c-3.102 0-4.732 1.63-4.732 4.718v2.692c0 3.088 1.63 4.717 4.718 4.717h2.692c3.088 0 4.717-1.629 4.717-4.717V7.55c.014-3.088-1.615-4.718-4.703-4.718ZM26.45 2.833h-2.692c-3.089 0-4.718 1.63-4.718 4.718v2.692c0 3.088 1.63 4.717 4.718 4.717h2.691c3.088 0 4.718-1.629 4.718-4.717V7.55c0-3.088-1.63-4.718-4.718-4.718ZM26.45 19.026h-2.692c-3.089 0-4.718 1.629-4.718 4.717v2.692c0 3.088 1.63 4.718 4.718 4.718h2.691c3.088 0 4.718-1.63 4.718-4.718v-2.692c0-3.088-1.63-4.717-4.718-4.717ZM10.257 19.026H7.565c-3.102 0-4.732 1.629-4.732 4.717v2.692c0 3.103 1.63 4.732 4.718 4.732h2.692c3.088 0 4.717-1.63 4.717-4.718v-2.692c.014-3.102-1.615-4.731-4.703-4.731Z"
                  />
                </svg>
              }
            />
            <BottomNavigationAction
              label="سبدخرید"
              value="basket"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  fill="none"
                >
                  <path
                    fill="#222F5D"
                    opacity=".4"
                    d="M28.277 12.693c-.95-1.048-2.38-1.657-4.364-1.87V9.747a6.9 6.9 0 0 0-2.266-5.114c-1.46-1.332-3.358-1.955-5.327-1.771-3.386.326-6.233 3.598-6.233 7.14v.821c-1.984.213-3.415.822-4.364 1.87-1.374 1.53-1.331 3.57-1.176 4.987l.992 7.89c.298 2.763 1.417 5.597 7.508 5.597h7.905c6.092 0 7.211-2.834 7.509-5.582l.992-7.92c.155-1.402.184-3.442-1.176-4.972ZM16.518 4.831c1.417-.128 2.763.312 3.811 1.26a4.925 4.925 0 0 1 1.615 3.656v.991h-9.888v-.736c0-2.522 2.082-4.944 4.462-5.171Zm-4.59 13.798h-.014a1.42 1.42 0 0 1-1.416-1.416 1.424 1.424 0 0 1 2.848 0 1.42 1.42 0 0 1-1.418 1.416Zm9.917 0h-.014a1.42 1.42 0 0 1-1.417-1.416 1.424 1.424 0 0 1 2.848 0 1.42 1.42 0 0 1-1.417 1.416Z"
                  />
                </svg>
              }
            />
            <BottomNavigationAction
              label="پسند ها "
              value="favorites"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="25"
                  fill="none"
                >
                  <path
                    fill="#222F5D"
                    d="M20.834.333a7.702 7.702 0 0 0-6.156 3.09A7.701 7.701 0 0 0 8.522.332C4.278.333.833 3.8.833 8.067c0 1.644.267 3.178.712 4.578 2.177 6.91 8.933 11.066 12.266 12.2.467.155 1.245.155 1.711 0 3.334-1.134 10.09-5.267 12.267-12.2.467-1.423.711-2.934.711-4.578C28.522 3.8 25.078.333 20.834.333Z"
                    opacity=".4"
                  />
                </svg>
              }
            />
          </BottomNavigation>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default SmartWAtch
