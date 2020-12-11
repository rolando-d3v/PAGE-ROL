import React from "react";
import Link from "next/link";

export default function Sidebar(props) {
  const { categories } = props;

  return (
    <div>
      <nav>
        {categories.map((cat, index) => (
          <Link href="#" key={cat.index}>
            <a className='' >
              <p>hola</p>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}
