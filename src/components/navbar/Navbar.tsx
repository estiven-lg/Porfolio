import { FaHome } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { TbDashboard } from 'react-icons/tb';
import { AiOutlineTeam } from 'react-icons/ai';
import { FcSupport } from 'react-icons/fc';
import logo from '@assets/logo_2.png';
import NavItem from './NavItem';

function NavBar() {

  return (
    <nav className="nav-bar bg-tertiary-dark">
      <ul className="navbar-items ">
        <li className="w-full cursor-pointer flex justify-start items-center">
          <a className="nav-bar-link flex justify-center items-center bg-primary-dark">
            <img
              src={logo}
              alt="logo"
              className="h-5 sm:h-10"
            />
          </a>
        </li>
        <NavItem icon={<FaHome size={25} />} text="Home" />
        <NavItem icon={<GrProjects size={25} />} text="Projects" />
        <NavItem icon={<TbDashboard size={25} />} text="Dashboard" />/
        <NavItem icon={<AiOutlineTeam size={25} />} text="Team" />
        <NavItem icon={<FcSupport size={25} />} text="Support" />

      </ul>
    </nav>
  );
}

export default NavBar;
