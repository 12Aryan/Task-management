import "./tabs.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/taskSlice";
const Tabs = () => {
  const tabs = ["All", "Active", "Completed"];

  const selectedTab = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  return (
    <div className="tabs_container">
      <ul className="tabs_list">
        {tabs.map((tab, index) => (
          <li
          key={tab + index}
            className={selectedTab == tab ? `active` : ``}
            onClick={() => dispatch(setFilter(tab))}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
