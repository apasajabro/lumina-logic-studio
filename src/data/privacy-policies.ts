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
    appName: 'Daily Planner',
    developerName: 'Lumina Logic Studio',
    companyWebsite: 'https://luminalogictech.my.id',
    contactEmail: 'luminalogicstudio@proton.me',
    effectiveDate: '2026-06-29',
    lastUpdated: '2026-06-29',
    country: 'Indonesia',
    shortDescription:
      'Privacy policy for Daily Planner, an offline daily planning app published by Lumina Logic Studio.',
    dataCollectionSummary:
      'Daily Planner is designed to work offline. Planner data such as task title, description, due date, category, priority, completion status, created date, and updated date is stored locally on the user’s device and is not transmitted to Lumina Logic Studio or third-party servers.',
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
