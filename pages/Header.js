import { attributes as headerContent } from "../content/header.md";

const Header = () => {
  const { title, description, body } = headerContent;

  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </header>
  );
};

export default Header;
