import React from "react";
import { useTranslation } from "react-i18next";

export function Contact() {
    const { t } = useTranslation();

    return (
      <div className="pt-14 px-4">
        <h1 className="text-2xl font-bold mb-10">{t('Contact!')}</h1>
        <p>Team: Dolko</p>
        <p>{t('Developer')}: Hyunho Jeong</p>
        <p>E-mail: jhhdy1@naver.com</p>
      </div>
    );
  }