import { AiOutlineHome } from "react-icons/ai";
// import "./navbar.css"


function NavBar() {



  return (
    <div
      className="sticky flex z-10 left-0 right-0 top-0 p-10 bg-transparent"
    >
      <nav className="nav-bar rounded-2xl py-1 flex px-2 gap-3">

        <button className="rounded-md p-2.5 text-white hover:bg-slate-800 " type="button">
          <AiOutlineHome style={{ marginBottom: "2px" }} />
        </button>
        <button className="rounded-md p-2.5 text-white hover:bg-slate-800 " type="button">
          <AiOutlineHome style={{ marginBottom: "2px" }} />
        </button>
        <button className="rounded-md p-2.5 text-white hover:bg-slate-800 " type="button">
          <AiOutlineHome style={{ marginBottom: "2px" }} />
        </button>
        <button className="rounded-md p-2.5 text-white hover:bg-slate-800 " type="button">
          <AiOutlineHome style={{ marginBottom: "2px" }} />
        </button>


      </nav>
    </div>
  );
}

export default NavBar;
