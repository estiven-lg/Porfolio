import { FaHome } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { TbDashboard } from 'react-icons/tb';
import { AiOutlineTeam } from 'react-icons/ai';
import { FcSupport } from 'react-icons/fc';
import { IoMdSettings } from 'react-icons/io';

import './navbar.css';

function NavBar() {

  return (
    <nav className="nav-bar bg-tertiary-dark">
      <ul className="navbar-items flexbox-col">
        <li className="navbar-logo flexbox-left">
          <a className="navbar-item-inner flexbox">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1438.88 1819.54">
              <polygon points="925.79 318.48 830.56 0 183.51 1384.12 510.41 1178.46 925.79 318.48" />
              <polygon points="1438.88 1663.28 1126.35 948.08 111.98 1586.26 0 1819.54 1020.91 1250.57 1123.78 1471.02 783.64 1663.28 1438.88 1663.28" />
            </svg>
          </a>
        </li>
        <li className="w-full p-1 cursor-pointer flex justify-start items-center">
          <a className="nav-bar-link text-gray-dark hover:text-gray-light hover:bg-tertiary-light flex justify-center items-center">
            <FaHome />
            <span className="link-text">Home</span>
          </a>
        </li>
        <li className="w-full p-1 cursor-pointer flex justify-start items-center">
          <a className="nav-bar-link text-gray-dark hover:text-gray-light hover:bg-tertiary-light flex justify-center items-center">
            <GrProjects />
            <span className="link-text">Projects</span>
          </a>
        </li>

        <li className="w-full p-1 cursor-pointer flex justify-start items-center">
          <a className="nav-bar-link text-gray-dark hover:text-gray-light hover:bg-tertiary-light flex justify-center items-center">
            <TbDashboard />
            <span className="link-text">Dashboard</span>
          </a>
        </li>
         <li className="w-full p-1 cursor-pointer flex justify-start items-center">
          <a className="nav-bar-link text-gray-dark hover:text-gray-light hover:bg-tertiary-light flex justify-center items-center">
            <AiOutlineTeam />
            <span className="link-text">Team</span>
          </a>
        </li>
        <li className="w-full p-1 cursor-pointer flex justify-start items-center">
          <a className="nav-bar-link text-gray-dark hover:text-gray-light hover:bg-tertiary-light flex justify-center items-center">
            <FcSupport />
            <span className="link-text">Support</span>
          </a>
        </li>
        <li className="w-full p-1 cursor-pointer flex justify-start items-center">
          <a className="nav-bar-link text-gray-dark hover:text-gray-light hover:bg-tertiary-light flex justify-center items-center">
            <IoMdSettings />
            <span className="link-text">Setiings</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
