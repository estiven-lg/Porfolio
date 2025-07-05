

const NavItem = ({ icon, text, onClick }: { icon: React.ReactNode; text: string; onClick?: () => void }) => {
    return (
        <li className="w-full p-1 cursor-pointer flex justify-start items-center" onClick={onClick}>
            <a className="nav-bar-link text-gray-dark hover:text-gray-light hover:bg-tertiary-light flex justify-center items-center">
                {icon}
                <span className="nav-bar-link-text font-mono">{text}</span>
            </a>
        </li>
    );
}

export default NavItem;