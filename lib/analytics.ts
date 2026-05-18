// lib/analytics.ts

export const trackContactClick = (
  businessName: string,
  method: "phone" | "email" | "form",
) => {
  window.gtag("event", "contact_click", {
    business_name: businessName,
    contact_method: method,
  });
};

export const trackWebsiteClick = (businessName: string) => {
  window.gtag("event", "outbound_website_click", {
    business_name: businessName,
  });
};

export const trackListingView = (businessName: string, category: string) => {
  window.gtag("event", "listing_view", {
    business_name: businessName,
    category: category,
  });
};

export const trackClaimListing = (
  source: "listing_page" | "banner" | "email",
) => {
  window.gtag("event", "claim_listing_click", {
    source: source,
  });
};

export const trackLeadFormSubmit = (businessName: string) => {
  window.gtag("event", "lead_form_submit", {
    business_name: businessName,
  });
};

export const trackEvent = (eventName: string) => {
  window.gtag("event", eventName);
};
