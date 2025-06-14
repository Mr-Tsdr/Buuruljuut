export type Locale = "en" | "mn" | "zh"

export const locales: Locale[] = ["en", "mn", "zh"]

export const defaultLocale: Locale = "en"

export interface Translation {
  // Header translations
  header: {
    call: string
    email: string
    address: string
    home: string
    aboutUs: string
    services: string
    pages: string
    blog: string
    contactUs: string
    getQuote: string
  }
  // Common translations
  common: {
    loading: string
    search: string
    cart: string
    readMore: string
    viewDetails: string
    contactUs: string
    getStarted: string
    learnMore: string
  }
  // Hero section
  hero: {
    title: string
    subtitle: string
    description: string
    ourServices: string
    contactUs: string
  }
}

export const translations: Record<Locale, Translation> = {
  en: {
    header: {
      call: "Call: +(976) 11-316117",
      email: "Email: info@tme.mn",
      address: "Address: Park palace office, #402",
      home: "HOME",
      aboutUs: "ABOUT US",
      services: "SERVICES",
      pages: "PAGES",
      blog: "BLOG",
      contactUs: "CONTACT US",
      getQuote: "GET A QUOTE",
    },
    common: {
      loading: "Loading...",
      search: "Search",
      cart: "Cart",
      readMore: "Read More",
      viewDetails: "View Details",
      contactUs: "Contact Us",
      getStarted: "Get Started",
      learnMore: "Learn More",
    },
    hero: {
      title: "Dustrial - Solutions",
      subtitle: "For all Industrial Business",
      description:
        "There are many variations of passages of Lorem Ipsum available but the dummy majority have suffered dumm to alteration in some form by injected dummy now.",
      ourServices: "OUR SERVICES",
      contactUs: "CONTACT US",
    },
  },
  mn: {
    header: {
      call: "Утас: +(976) 11-316117",
      email: "И-мэйл: info@tme.mn",
      address: "Хаяг: 16 Factory Street, California",
      home: "НҮҮР",
      aboutUs: "БИДНИЙ ТУХАЙ",
      services: "ҮЙЛЧИЛГЭЭ",
      pages: "ХУУДАС",
      blog: "БЛОГ",
      contactUs: "ХОЛБОО БАРИХ",
      getQuote: "ҮНИЙН САНАЛ АВАХ",
    },
    common: {
      loading: "Ачааллаж байна...",
      search: "Хайх",
      cart: "Сагс",
      readMore: "Дэлгэрэнгүй",
      viewDetails: "Дэлгэрэнгүй үзэх",
      contactUs: "Холбоо барих",
      getStarted: "Эхлэх",
      learnMore: "Дэлгэрэнгүй мэдэх",
    },
    hero: {
      title: "Дастриал - Шийдэл",
      subtitle: "Бүх үйлдвэрлэлийн бизнест",
      description:
        "Lorem Ipsum-ийн олон янзын хэсгүүд байдаг боловч ихэнх нь хуурамч олонх нь одоо хуурамч тарилгаар ямар нэгэн хэлбэрээр өөрчлөлтөд өртсөн байна.",
      ourServices: "МАНАЙ ҮЙЛЧИЛГЭЭ",
      contactUs: "ХОЛБОО БАРИХ",
    },
  },
  zh: {
    header: {
      call: "电话: + (123) 1800-567-8990",
      email: "邮箱: office@example.com",
      address: "地址: 16 Factory Street, California",
      home: "首页",
      aboutUs: "关于我们",
      services: "服务",
      pages: "页面",
      blog: "博客",
      contactUs: "联系我们",
      getQuote: "获取报价",
    },
    common: {
      loading: "加载中...",
      search: "搜索",
      cart: "购物车",
      readMore: "阅读更多",
      viewDetails: "查看详情",
      contactUs: "联系我们",
      getStarted: "开始",
      learnMore: "了解更多",
    },
    hero: {
      title: "达斯特里尔 - 解决方案",
      subtitle: "为所有工业企业",
      description: "Lorem Ipsum有许多变体段落可用，但虚拟大多数现在已经通过注入虚拟以某种形式遭受了改变。",
      ourServices: "我们的服务",
      contactUs: "联系我们",
    },
  },
}

export function getTranslation(locale: Locale): Translation {
  return translations[locale] || translations[defaultLocale]
}
