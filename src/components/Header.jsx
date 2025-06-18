import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import dddDiarylogo from "../assets/dddDiaryLogo.png";
import i18n from "../i18n";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    // <header className="bg-white shadow-md px-4 py-2 flex items-center justify-between">
    <header className="bg-white border-b py-4 flex flex-col items-center gap-4 justify-start">
      <div>
        <div className="flex items-center gap-1">
          <img src={dddDiarylogo} className="logo" alt="DDDdiary logo" />
          <Link to="/eeGuardiansWeb/" className="text-3xl font-bold">DDDdiary</Link>
          <select 
            className="ml-12 mr-2 border rounded px-1 py-1 text-md"
            value={i18n.language}
            onChange={changeLang}
          >
            <option value="en">English</option>
            <option value="ko">한국어</option>
          </select>
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </div>
      <div>
        {/* <button onClick={() => setMenuOpen(!menuOpen)}>☰</button> */}
        {menuOpen && (
          // <div className="flex flex-row bg-white border rounded shadow">
          <div className="flex flex-row bg-white">


            <Link to="/eeGuardiansWeb/app/DDDdiary" className="block mr-8 px-4 py-2 hover:bg-gray-100">DDDdiary</Link>
            <Link to="/eeGuardiansWeb/app/Developer" className="block mr-8 px-4 py-2 hover:bg-gray-100">{t('Developer')}</Link>


          </div>
        )}
      </div>
    </header>
  );
}