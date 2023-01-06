const SmartWAtch = () => {
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
          <div className="flex justify-center px-1 mb-5">image</div>

          <div className="flex justify-between items-center w-full mb-3">
            <p className="text-slate-400 text-xs">اپل</p>
            <span>icon circles</span>
          </div>

          <div className="text-slate-800 text-xs font-bold mb-2">
            ساعت هوشمند اپل سری6
          </div>

          <div className="text-orange-600 text-center text-sm mb-3">
            48,250,000 تومان
          </div>
          <hr />

          <button className="text-red-500 text-xs font-bold w-full py-1">
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
