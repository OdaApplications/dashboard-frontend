import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const PortalComponent = ({ children, id }) => {
  const [ref, setRef] = useState(null);
  useEffect(() => {
    const portalElement = document.getElementById(id);
    if (portalElement) setRef(portalElement);
  }, [id]);
  if (ref) return ReactDOM.createPortal(children, ref);
};

export default PortalComponent;
