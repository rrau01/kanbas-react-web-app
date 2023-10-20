import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import { HiOutlineInboxArrowDown } from "react-icons/hi2"
import {GoVideo} from "react-icons/go"
import {FaArrowAltCircleRight} from "react-icons/fa"
import {AiOutlineClockCircle} from "react-icons/ai"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import nulogo from "./nulogo.png"
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "Studio", "History", "Commons", "Help"];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-1 text wd-kanbas-navigator-icon account"/>,
    Dashboard: <RiDashboard3Line className="fs-1 text wd-kanbas-navigator-icon" />,
    Courses: <FaBook className="fs-1 text wd-kanbas-navigator-icon" />,
    Calendar: <BsCalendar2Week className="fs-1 text wd-kanbas-navigator-icon" />,
    Inbox: <HiOutlineInboxArrowDown className="fs-1 text wd-kanbas-navigator-icon" />,
    Studio: <GoVideo className="fs-1 text wd-kanbas-navigator-icon" />,
    History: <AiOutlineClockCircle className="fs-1 text wd-kanbas-navigator-icon" />,
    Commons: <FaArrowAltCircleRight className="fs-1 text wd-kanbas-navigator-icon" />,
    Help: <AiOutlineQuestionCircle className="fs-1 text wd-kanbas-navigator-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigator list-group">
      <li className="border-0 logo">
                    <img className="flex-column justify-content-center" src={nulogo}
                    width="60px" height="60px" alt="..."/>
      </li>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`wd-kanbas-navigator-item p-4 ${
            pathname.includes(link) && "active"
          }`}
        >
          {linksToIconsMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
