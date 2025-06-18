import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 번역 리소스 정의 예시
const resources = {
    en: { translation: {
        "Developer": "Developer",
        "About": "About",
        "FullName": "Dolko's Digital Detox Diary App",
        "aboutDev": "DDDdiary Developer",
        "Download1": "Go to App Store",
        "Download2": "Go to Play Store",
        "Download3": "Available on iOS or Android",
        "Contact": "Contact us",
        "Contact!": "Contact us!",
        "Privacy": "Privacy Policy",
        "License": "Licenses(This Website)",
    }},
    ko: { translation: {
        "Developer": "개발자",
        "About": "주제",
        "FullName": "돌코의 스마트폰 중독 탈출 다이어리 앱",
        "aboutDev": "DDDdiary 개발자",
        "Download1": "앱 스토어로 이동",
        "Download2": "플레이 스토어로 이동",
        "Download3": "iOS 또는 Android에서 이용 가능",
        "Contact": "연락처",
        "Contact!": "연락 주세요!",
        "Privacy": "개인정보처리방침",
        "License": "라이선스(현재 사이트)",
    }},
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;