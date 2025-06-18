import React from "react";
import { Link } from "react-router-dom";

export function Home() {
//   const apps = ["app1", "app2", "app3"];
  return (
    <div className="grid gap-4">
      {/* {apps.map((id) => (
        <Link
          key={id}


          to={`/eeGuardiansWeb/app/${id}`}


          className="p-4 border rounded shadow hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">{id.toUpperCase()}</h2>
          <p>앱 설명 요약...</p>
        </Link>
      ))} */}
    </div>
  );
}