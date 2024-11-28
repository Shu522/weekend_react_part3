import IphoneLinkText from "../presentation/Text/IphoneLinkText";
import IphoneText from "../presentation/Text/IphoneText";
import IphoneTitleText from "../presentation/Text/IphoneTitleText";

const Item = (props) => {
  return (
    <article className="flex flex-col items-center gap-2 bg-slate-100 py-10">
      <IphoneTitleText {...props} />
      <IphoneText {...props} />
      <IphoneLinkText {...props} />
    </article>
  );
};

export default Item;
