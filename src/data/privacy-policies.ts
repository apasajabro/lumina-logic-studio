export type AppPrivacyPolicy = {
  slug: string;
  appName: string;
  developerName: string;
  companyWebsite: string;
  contactEmail: string;
  effectiveDate: string;
  lastUpdated: string;
  country: string;
  shortDescription: string;
  dataCollectionSummary: string;
  features: {
    localStorage: boolean;
    ads: boolean;
    analytics: boolean;
    crashReporting: boolean;
    inAppPurchases: boolean;
    subscriptions: boolean;
    notifications: boolean;
    location: boolean;
    camera: boolean;
    mediaFiles: boolean;
    accountSystem: boolean;
    cloudSync: boolean;
  };
};

export const privacyPolicies: AppPrivacyPolicy[] = [
  {
    slug: 'daily-planner',
    appName: 'AulaPlan',
    developerName: 'Lumina Logic Studio',
    companyWebsite: 'https://luminalogictech.my.id',
    contactEmail: 'luminalogicstudio@proton.me',
    effectiveDate: '2026-08-23',
    lastUpdated: '2026-08-23',
    country: 'Indonesia',
    shortDescription:
      'Privacy policy for AulaPlan, an offline student planner developed by Lumina Logic Studio.',
    dataCollectionSummary:
      'AulaPlan works offline. Planner data is stored locally on the user’s device and is not transmitted to Lumina Logic Studio or third-party servers.',
    features: {
      localStorage: true,
      ads: false,
      analytics: false,
      crashReporting: false,
      inAppPurchases: false,
      subscriptions: false,
      notifications: false,
      location: false,
      camera: false,
      mediaFiles: false,
      accountSystem: false,
      cloudSync: false
    }
  },

  {
    slug: 'simple-habit-tracker',
    appName: 'Lumina Routine: Habit Tracker',
    developerName: 'Lumina Logic Studio',
    companyWebsite: 'https://luminalogictech.my.id',
    contactEmail: 'luminalogicstudio@proton.me',
    effectiveDate: '2026-08-28',
    lastUpdated: '2026-08-28',
    country: 'Indonesia',
    shortDescription:
      'Privacy policy for Lumina Routine: Habit Tracker, an offline habit companion developed and published by Lumina Logic Studio.',
    dataCollectionSummary:
      'Lumina Routine works offline. Habit data is stored locally on the user’s device and is not transmitted to Lumina Logic Studio or third-party servers.',
    features: {
      localStorage: true,
      ads: false,
      analytics: false,
      crashReporting: false,
      inAppPurchases: false,
      subscriptions: false,
      notifications: true,
      location: false,
      camera: false,
      mediaFiles: false,
      accountSystem: false,
      cloudSync: false
    }
  },

  {
    slug: 'asset-vault',
    appName: 'Asset Vault',
    developerName: 'Lumina Logic Studio (PT Lumina Logic Studio)',
    companyWebsite: 'https://luminalogictech.my.id',
    contactEmail: 'luminalogicstudio@proton.me',
    effectiveDate: '2026-08-13',
    lastUpdated: '2026-08-13',
    country: 'Indonesia',
    shortDescription:
      'Privacy policy for Asset Vault, an offline-first inventory management application developed and published by Lumina Logic Studio.',
    dataCollectionSummary:
      'Asset Vault is offline-first. Core inventory features work locally on your device. A network connection may be used when you load an image URL entered by you or open an external website, email, sharing target, or store link.',
    features: {
      localStorage: true,
      ads: false,
      analytics: false,
      crashReporting: false,
      inAppPurchases: false,
      subscriptions: false,
      notifications: false,
      location: false,
      camera: true,
      mediaFiles: true,
      accountSystem: false,
      cloudSync: false
    }
  },

  {
    slug: 'recipe-vault',
    appName: 'Recipe Vault: Recipe Manager',
    developerName: 'Lumina Logic Studio',
    companyWebsite: 'https://luminalogictech.my.id/',
    contactEmail: 'luminalogicstudio@proton.me',
    effectiveDate: '2026-08-09',
    lastUpdated: '2026-08-09',
    country: 'Indonesia',
    shortDescription:
      'Privacy policy for Recipe Vault: Recipe Manager, an offline-first recipe manager app published by Lumina Logic Studio.',
    dataCollectionSummary:
      'Recipe Vault stores recipes, favorites, settings, and image URI references locally on your device. It does not provide accounts, cloud synchronization, or analytics and advertising services.',
    features: {
      localStorage: true,
      ads: false,
      analytics: false,
      crashReporting: false,
      inAppPurchases: false,
      subscriptions: false,
      notifications: false,
      location: false,
      camera: false,
      mediaFiles: false,
      accountSystem: false,
      cloudSync: false
    }
  },

  {
    slug: 'mathiq',
    appName: 'MathIQ: Math & Logic Quiz',
    developerName: 'Lumina Logic',
    companyWebsite: 'https://luminalogictech.my.id/',
    contactEmail: 'luminalogicstudio@proton.me',
    effectiveDate: '2026-08-01',
    lastUpdated: '2026-08-01',
    country: 'Indonesia',
    shortDescription:
      'Privacy policy for MathIQ: Math & Logic Quiz, a free offline mobile application provided by Lumina Logic.',
    dataCollectionSummary:
      'MathIQ keeps gameplay data in local app storage. The app does not require an account and does not transmit player data to Lumina Logic or third-party services.',
    features: {
      localStorage: true,
      ads: false,
      analytics: false,
      crashReporting: false,
      inAppPurchases: false,
      subscriptions: false,
      notifications: false,
      location: false,
      camera: false,
      mediaFiles: false,
      accountSystem: false,
      cloudSync: false
    }
  },

  {
    slug: 'equation-grid',
    appName: 'Equation Grid',
    developerName: 'Lumina Logic Studio',
    companyWebsite: 'https://luminalogictech.my.id/',
    contactEmail: 'luminalogicstudio@proton.me',
    effectiveDate: '2026-08-29',
    lastUpdated: '2026-08-29',
    country: 'Indonesia',
    shortDescription:
      'Privacy policy for Equation Grid, an offline mathematical crossword game.',
    dataCollectionSummary:
      'Equation Grid stores game progress and preferences locally on your device and does not require an account or online data services.',
    features: {
      localStorage: true,
      ads: false,
      analytics: false,
      crashReporting: false,
      inAppPurchases: false,
      subscriptions: false,
      notifications: false,
      location: false,
      camera: false,
      mediaFiles: false,
      accountSystem: false,
      cloudSync: false
    }
  },

  {
    slug: 'general-mobile-app-privacy-policy',
    appName: 'General Mobile Application Privacy Policy',
    developerName: 'PT Lumina Logic Studio',
    companyWebsite: 'https://luminalogictech.my.id',
    contactEmail: 'luminalogicstudio@proton.me',
    effectiveDate: '2026-06-28',
    lastUpdated: '2026-06-28',
    country: 'Indonesia',
    shortDescription:
      'General privacy policy for mobile applications published, managed, or supported by PT Lumina Logic Studio.',
    dataCollectionSummary:
      'This policy explains how mobile applications may collect, use, store, and protect user information depending on the features enabled in each application.',
    features: {
      localStorage: true,
      ads: true,
      analytics: true,
      crashReporting: true,
      inAppPurchases: true,
      subscriptions: true,
      notifications: true,
      location: false,
      camera: false,
      mediaFiles: false,
      accountSystem: false,
      cloudSync: false
    }
  }
];

export function getPrivacyPolicyBySlug(slug: string): AppPrivacyPolicy | undefined {
  return privacyPolicies.find((policy) => policy.slug === slug);
}
