import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

import { useState } from "react"
import appleWatchS7 from "../image/apple-watch-7.png"

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
        <div className="hidden md:block col-span-4 lg:col-span-3 row-span-2 m-4">
          <div className="bg-white p-5 rounded-xl">
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
            <hr className="bg-gray-300" />
            <div className="text-xl font-bold my-4 text-orange-400">فیلتر</div>
            <div>
              <Accordion style={{ boxShadow: "none" }}>
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
                  <Typography className="text-slate-500">برند محصول</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="flex flex-col">
                    <FormControlLabel control={<Checkbox />} label="اپل" />
                    <FormControlLabel control={<Checkbox />} label="سامسونگ" />
                    <FormControlLabel control={<Checkbox />} label="شیائومی" />
                    <FormControlLabel control={<Checkbox />} label="هواوی" />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ boxShadow: "none" }}>
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
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ boxShadow: "none" }}>
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
    </div>
  )
}

export default SmartWAtch