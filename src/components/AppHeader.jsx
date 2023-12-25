import image from "../assets/menu-bar.png";
import HeaderCss from "./AppHeader.module.css";

const AppHeader = ({ setCategory }) => {
  return (
    <div>
      <nav>
        <h1>NEWSZONE</h1>
        <input type="checkbox" id="checkbox" />
        <ul className={HeaderCss.item} id={HeaderCss.item1}>
          <li>
            <a onClick={() => setCategory("technology")}>Technology</a>
          </li>

          <li>
            <a onClick={() => setCategory("business")}>Business</a>
          </li>

          <li>
            <a onClick={() => setCategory("health")}>Health</a>
          </li>

          <li>
            <a onClick={() => setCategory("sports")}>Sports</a>
          </li>

          <li>
            <a onClick={() => setCategory("entertainment")}>Entertainment</a>
          </li>
        </ul>
        <div>
          <label htmlFor="checkbox" id={HeaderCss.icon}>
            <img src={image} />
          </label>
        </div>
      </nav>
    </div>
  );
};

export default AppHeader;
