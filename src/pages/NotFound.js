import { MessageBox } from "components/MainLayout/MessageBox";

const NotFound = () => {
  return <MessageBox errorCode={"404"} text={"Сторінка не знайдена"} />;
};

export default NotFound;
