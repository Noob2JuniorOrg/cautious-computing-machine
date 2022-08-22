export const Header = (props) => {
  const setTheme = props.setTheme;

  const ThemeButton = (props) => {
    return (
      <div className="bg-red" onClick={() => setTheme(props.children)}>
        {props.children}
      </div>
    );
  };

  return (
    <>
      <div className={'flex items-start justify-between mb-5 ' + props.theme}>
        <h1 className="font-bold text-gray-800 m-0 text-3xl">devfinder</h1>

        {props.theme === 'Light' ? (
          // <div className="theme-container-white theme-container white">
          <div>
            <ThemeButton>Dark</ThemeButton>
            {/* <div className="uppercase text-xs font-bold pr-2 tracking-widest">
              Dark
            </div> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"
                fill="#697C9A"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        ) : (
          // <div className="theme-container-dark theme-container dark">
          <div>
            {/* <div className="uppercase text-xs font-bold pr-2 tracking-widest">
              Light
            </div> */}
            <ThemeButton>Light</ThemeButton>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <g fill="#FFF" fill-rule="nonzero">
                <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z" />
              </g>
            </svg>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center p-2 bg-white rounded-2xl shadow-shadow">
        <div className="cursor-pointer flex items-center">
          <label className="flex items-center">
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="25">
                <path
                  d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                  fill="#0079ff"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search GitHub username..."
              className="m-1 h-10 bg-transparent border-none outline-none w-96 caret-[#0079FF] text-lg"
            />
          </label>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="no-results hidden font-bold text-darkRed">
            No results
          </span>
          <button className="search-btn rounded-lg text-white bg-blue-600 cursor-pointer text-base py-2.5 px-5 outline-none border-none hover:opacity-70">
            Search
          </button>
        </div>
      </div>
    </>
  );
};
