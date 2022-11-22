import React, { useState } from "react";
import "./Styles/Sidebar.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Qabul from "./Qabul.jsx";
import Oqituvchilar from "./Oqituvchilar.jsx";
import Tolovlar from "./Tolovlar.jsx";
import Talabalar from "./Talabalar.jsx";
import Guruh from "./Guruh.jsx";
import Statistika from "./Statistika.jsx";
import Sozlamalar from "./Sozlamalar.jsx";

function Sidebar() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="head">
      <div className="sidebar">
        <div className="brand">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAACMCAMAAABmmcPHAAAAn1BMVEX///8eHh4AAAAAsgQZGRnm5uZPT0/Jycmtra0XFxepqand3d1LS0uwsLA0NDQFBQUsLCyWlpYArQDj9eRkx2Ubtxzx8fERERH19fWPj49GRkYAqwB5eXnr6+tsbGyenp7U7dSCgoJWVlbT09O7u7s/Pz8kJCRfX1/0+/WL04yAz4B0y3RWwlft+e3l9eU6vDuz4rSo3amb2JvK6svC58KA9x9TAAAFFklEQVR4nO3dbXOiSBSGYWhRA8aQcTegRnB8i8kks5lk9///tg2aGDmchm6gMzX0c3+Y2rJQuq+1kEgnOI6hhvE1X2xqj5Y2FC6f+N0j61iA/qJsh462y9ks2Jjfkd3Qw4EQIgzf/ln0Te+qY9APvUlJt70f95/bRgPhf0w3FjOzA+sY9M2kV96kd5IeiTg34bnRkXUL+rHK+a2n921HwsvPON6ZHFq3oBWce5Ofx209rzDl1ODQOgX9lxL098O2K2biYmhubLZCR9y8fYOH6U5B/6MOvWTnLcyd5HUKWu0YfTjtmPvspANjQ+sW9EO19OTxsCU/7XhhbGjdgnaeKs+jnw/bJfy0vbWxkXUM2vn1dFPW08txs74EemBsYF2DVkzyjvbxjm47HKO/qAHOOr6mAOfRX9OU/cnQ3GehtdDOjPuuw+CVFmuhnevCUVqsDO7OXuiEfh8tDB44bIZ2+n6Ym/De6N4shnac9HQxywvF0uy+rIZ2Rqk45s+iqm2n70W0pE8bHUvOny6HLjxdXm6QU40nGi6JppXWm3EQbEelmyTb1doT+uWuq0uh3bqvGNQYksF2i6CcsaLpcidE6BcuMFYXflODrvuKFy28Yot5sRB3s7o/8SULQU9OlLMMOuvto25f6229yi/90MtCaDdbiZRWH69JG6/RVOyEzqi3UtL7l4eH13/Jg99qHzSO2Qpd8iP2y3Fl3vP9+YNp03nYC+0K/gLKf7fvFxRvzh5cN56GxdBuyC6vuzlduf11emzffBY2Q7sxsxbp5+3pGvnjx2OL1lksg3bD4ldHZwvJ/n5/iL/+orsrq6FdkRssDz1qZQqWQxcvoxShr9grt7rZDu25VdCtHDgAXTh4FKBbmoD10K7I/zBOofkVvfoBOsz/AhaFLv7ORc3dWA9Nrh4R6DZEDgHazX+9RKAXDb4ZzQVoN05LoOOWjhyAdsmxIw8tWTldI0C/QY+k0FtAt5gYS6GXYfXT1QI0OcHLQ6/a+iwEtEs+DfPQqQza117pYHhdhxxaZ5Dy91Ubr+JfSqH3ki+U/MvRR8xKHVqUrWlylKBrr1SSQouhxhqjvcxIjItLsKTJzom9nRR6LTm7ExdOo9pfeyeDzr2LKhu3Mi7ZF8ve1dlGeeiBDLrhr7cAGtCALg/QbIAGNKDLAzQboAEN6PIAzQZoQAO6vD8O+vNvi01eAW0S+seHdPbXNAFtDtp5PkrfZuvQAW0Q2nl9zg7Q37P/BLRJ6LMADWgSoNkATQI0oEmAZgM0CdCAJgGaDdAkQAOaBGg2QJMADWgSoNkATQI0oEmAZgM0CdCAJgGaDdAkQAOaBGg2QJMADWgSoNkATQI0oEmAZgM0CdCAJgGaDdAkQAOaBGg2QJMADWgSoNkATQI0oEmAZgM0CdB/OPRGNqE4HV8oFuRuigRoraFktw5t988aWw4dSaHVU/tD3ZZDt3FjKECrNG9+SzlAq9TCzQMArVIL9x0BtEpTQOcyBu1Ib1ugHKCVan4nFkCrddf0dmeAbjgn1QCt2FXDtzSgGw5HNUCrNmsmDWjl5o1O8QCt3LTRLZoBrV4iGkgDWqO+qP8tHqB1Su5qH6cBrde67rkHoDULSm5AWhagdUv2tagBrd8oFfqfioCuUxQMstsPx76nnCDQ/FbxXGcYY8mreJrQkrHIodfXfF7Dm/tyTTcXs3Q/UG6e+5+9nfNbXaay/XHJXmWwq37uZ/2d5FX2smf8DzFDwjkBynAnAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
        <div className="menu">
          <Link to="/home" className={toggleState === 1 ? "link active-link" : "link"}
          onClick={() => toggleTab(1)}>
            <i class="fa-solid fa-house"></i>
            Asosiy
          </Link>
          <Link to="/qabul" className="link">
            <i class="fa-solid fa-people-roof"></i>
            Qabul
          </Link>
          <Link to="/oqituvchilar" className="link">
            <i class="fa-solid fa-person-chalkboard"></i>
            O'qituvchilar
          </Link>
          <Link to="/tolovlar" className="link">
            <i class="fa-solid fa-money-bill-1"></i>
            To'lovlar
          </Link>
          <Link to="/talabalar" className="link">
            <i class="fa-solid fa-user-graduate"></i>
            Talabalar boshqaruvi
          </Link>
          <Link to="/guruh-sozlamalari" className="link">
            <i class="fa-solid fa-signs-post"></i>
            Yo'nalish va guruh sozlamalari
          </Link>
          <Link to="/statistika" className="link">
            <i class="fa-solid fa-arrow-trend-down"></i>
            Statistika
          </Link>
          <Link to="/sozlamalar" className="link">
            <i class="fa-solid fa-gear"></i>
            Sozlamalar
          </Link>
        </div>
      </div>
      <div className="header">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/qabul" element={<Qabul />} />
          <Route path="/oqituvchilar" element={<Oqituvchilar />} />
          <Route path="/tolovlar" element={<Tolovlar />} />
          <Route path="/talabalar" element={<Talabalar />} />
          <Route path="/guruh-sozlamalari" element={<Guruh />} />
          <Route path="/statistika" element={<Statistika />} />
          <Route path="/sozlamalar" element={<Sozlamalar />} />
        </Routes>
      </div>
    </div>
  );
}
export default Sidebar;
