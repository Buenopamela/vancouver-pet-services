// lib/analytics.ts

const gtag = (...args: Parameters<typeof window.gtag>) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

export const trackContactClick = (
  businessName: string,
  method: "phone" | "email" | "form",
) => {
  gtag("event", "contact_click", {
    business_name: businessName,
    contact_method: method,
  });
};

export const trackWebsiteClick = (businessName: string) => {
  gtag("event", "outbound_website_click", {
    business_name: businessName,
  });
};

export const trackListingView = (businessName: string, category: string) => {
  gtag("event", "listing_view", {
    business_name: businessName,
    category: category,
  });
};

export const trackClaimListing = (
  source: "listing_page" | "banner" | "email",
) => {
  gtag("event", "claim_listing_click", {
    source: source,
  });
};

export const trackLeadFormSubmit = (businessName: string) => {
  gtag("event", "lead_form_submit", {
    business_name: businessName,
  });
};

export const trackEvent = (eventName: string) => {
  gtag("event", eventName);
};
