import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ddddSreenshot1 from "../assets/zeng_iphone65write1.png";
import ddddSreenshot2 from "../assets/zeng_iphone65write2.png";
import ddddSreenshot3 from "../assets/zeng_iphone65past.png";
import ddddSreenshot4 from "../assets/zeng_iphone65friends.png";


export function AppLanding() {
  const { id } = useParams();
  const [storeUrl, setStoreUrl] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const ua = navigator.userAgent || "";
    if (/iPad|iPhone|iPod/.test(ua)) {
      setStoreUrl("https://apps.apple.com/app/id357963940");
    } else if (/Android/.test(ua)) {
      setStoreUrl("https://play.google.com/store/apps/details?id=com.nhn.android.search");
    } else {
      setStoreUrl("#"); // 웹 fallback
    }
  }, []);

  return (
    <div className="space-y-4 pt-14 px-4">
      <h1 className="text-2xl font-bold">{t(id || "")}</h1>
      {id === "DDDdiary" ? <p>{`${t('About')}: ${t('FullName')}`}</p> : <p>{`${t('About')}: ${t('aboutDev')}`}</p>}
        {/* <p>Dolko's Digital Detox Diary</p> */}
    
        {id === "DDDdiary" ?
        <div className="flex gap-4">
            <a
            href={storeUrl}
            target="_self"
            rel="noopener noreferrer"
            className="text-white px-4 py-2 border rounded"
            >
            {storeUrl.includes("apple.com")
                ? t('Download1')
                : storeUrl.includes("play.google.com")
                ? t('Download2')
                : t('Download3')}
            </a>
            <Link to="/eeGuardiansWeb/contact" className="text-white px-4 py-2 border rounded">{t('Contact')}</Link>
            <a href={"https://hyunhojeong1.github.io/DDDdiary"} className="px-4 py-2 border rounded">{t('Privacy')}</a>
        </div>
        :
        <div className="flex gap-4">
            <Link to="/eeGuardiansWeb/contact" className="text-white px-4 py-2 border rounded">{t('Contact')}</Link>
            <Link to={`/eeGuardiansWeb/privacy/${id}`} className="text-white px-4 py-2 border rounded">{t('License')}</Link>
        </div>
        }
        {id === "DDDdiary" ? 
            <div className="flex flex-col items-center">
                <p>(App Store URL will be updated after launching)</p>
                <img src={ddddSreenshot1} className="max-w-130 px-4 border-t border-x mt-30 pt-4" alt="DDDdiary Screenshot1"/>
                <img src={ddddSreenshot2} className="max-w-130 px-4 border-x pt-30" alt="DDDdiary Screenshot2"/>
                <img src={ddddSreenshot3} className="max-w-130 px-4 border-x pt-30" alt="DDDdiary Screenshot3"/>
                <img src={ddddSreenshot4} className="max-w-130 px-4 border-b border-x pt-30 pb-4" alt="DDDdiary Screenshot4"/>
            </div>
        : null }
    </div>
  );
}