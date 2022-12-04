import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const renderPage = (page) => {
  switch (page) {
    case "about":
      return <About />;
    case "portfolio":
      return <Portfolio />;
    case "contact":
      return <Contact />;
    case "resume":
        return <Resume />;
  }
};

export default function PageContent(props) {
  return <div>{renderPage(props.currentPage)}</div>;
}
