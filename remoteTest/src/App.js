import React, { lazy, Suspense } from "react";

const GusdnServer = lazy(() => import("gusdnServer/App"));

export default function App() {
  return (
    <div>
      gusdn
      <Suspense fallback={<div>Loading...</div>}>
        <GusdnServer />
      </Suspense>
    </div>
  );
}
