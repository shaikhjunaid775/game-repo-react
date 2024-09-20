import logo from "../../assets/assets2/logo.png";
import avatar from "../../assets/assets2/avatar.png";

function Nav() {
  return (
    <div className="mb-2">
      <header className="bgWhite">
        <nav
          className="mx-auto flex items-center justify-between "
          aria-label="Global"
        >
          <div className="flex ">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only peer" value="" type="checkbox" />
            <div className="peer rounded-full outline-none duration-100 after:duration-500 w-24 h-7 bg-white peer-focus:outline-none  peer-focus:ring-blue-500  after:content-['Live'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-12 after:bg-[#21C004] after:top-0.5 after:left-1 after:flex after:justify-center after:items-center  after:text-white after:font-medium peer-checked:after:translate-x-10 peer-checked:after:content-['Demo'] peer-checked:after:border-white text-[12px]"></div>
          </label>
          <div className="flex ">
            <div className="relative">
              <img className="w-10 h-10 rounded-full" src={avatar} alt="" />
              <span className="top-1 right-8 absolute  w-2.5 h-2.5 bg-green-400  rounded-full"></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
