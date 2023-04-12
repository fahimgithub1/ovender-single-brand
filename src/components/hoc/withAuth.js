import { useEffect } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";

export default function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    // const tokens = useSelector(state => state.customerInfo.token);
    const isBrowser = typeof window !== 'undefined';
  
    const tokens =  isBrowser ? localStorage.getItem('token') : null;

    useEffect(() => {
      if (!tokens) {
        Router.replace("/login");
      }
    }, [tokens]);

    return <WrappedComponent {...props} />;
  };
}
