import { Card } from "@/components/card/Card";
import css from "../Page.module.scss";
import { Content } from "@/components/content/Content";
export const Profile = () => {
  return (
    <div className={css.page}>
      <Card />
      <Content />
    </div>
  );
};
