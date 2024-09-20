import floatingIcon from "./assets/accounts/float-icon.png"

function FloatingButton() {
  return (
    <div>
      <div className="group fixed bottom-20 right-4   flex items-end justify-end w-12 h-12 ">
        <div className="text-white shadow-xl flex items-center justify-center  rounded-full  z-50 absolute  ">
          <img src={floatingIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FloatingButton;
