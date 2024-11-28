const IphoneLinkText = ({ link, linkText }) => {
  return (
    <a className="font-light text-blue-600 text-sm" href="{link}">
      {linkText}
    </a>
  );
};

export default IphoneLinkText;
