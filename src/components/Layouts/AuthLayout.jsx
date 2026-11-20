import React from "react";
import Logo from "../elements/Logo";

function AuthLayout(props) {
  const { children } = props;
  return (
    <>
      <main className="min-h-screen bg-special-mainBg flex items-center justify-center">
        {/* container start */}
        <div className="w-full max-w-sm">
          {/* logo start */}
          <Logo />
          {children}
          {/* logo end */}
          {/*form  */}
        </div>
        {/* container end */}
      </main>
    </>
  );
}

export default AuthLayout;
