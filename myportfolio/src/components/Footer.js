import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterItems = [
  {
    title: "",
    url: "/",
    cName: "footer-links",
    icon: <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
  },
  {
    title: "View",
    url: "/view",
    cName: "footer-links"
  }
];

class Footer extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <footer className="FooterItems">
        <div>
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
        </div>

        <ul
          className={this.state.clicked ? "footer-menu active" : "footer-menu"}
        >
          {FooterItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                  {item.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    );
  }
}

export default Footer;
