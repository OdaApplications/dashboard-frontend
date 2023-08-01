import { MessageBox } from "components/MessageBox";

const NotFound = () => {
  return <MessageBox errorCode={"404"} text={"Сторінка не знайдена"} />;
};

export default NotFound;
