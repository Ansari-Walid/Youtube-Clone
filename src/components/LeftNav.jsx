import { useContext } from "react";
import { Context } from "../context/contextApi";

import { useNavigate } from "react-router-dom";
import { categoryList } from "../utils/constants";

import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const { categories, setCategories, mobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setCategories(name);
      case "home":
        return setCategories(name);
      case "menu":
        return false;
    }
  };

  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all">
      <div className="flex px-5 flex-col">
        {/* Loop through categories */}
        {categoryList.map((item) => {
          return (
            <>
              <LeftNavMenuItem
                text={item.type == "home" ? "Home" : item.name}
                icon={item.icon}
                event={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  categories === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]"></hr>}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;
