import { useEffect } from "react";
import ReactDOM from "react-dom";

const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null;

const Portal = props => {
  const el =
    typeof document !== `undefined` ? document.createElement("div") : null;

  useEffect(() => {
    portalRoot.appendChild(el);
    return () => {
      portalRoot.removeChild(el);
    };
  }, [el]);

  if (el) {
    return ReactDOM.createPortal(props.children, el);
  } else {
    return null;
  }
};

export default Portal;
