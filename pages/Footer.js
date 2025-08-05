import { attributes as footerContent } from "../content/footer.md";

const Footer = () => {
  const { title, description, body } = footerContent;

  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </header>
  );
};

export default Footer;