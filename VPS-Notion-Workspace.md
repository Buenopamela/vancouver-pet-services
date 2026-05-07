# Vancouver Pet Services — Business HQ

> **Mission:** The go-to directory for trusted pet services in Vancouver, BC.
> **Brand:** Vancouver Pet Services · VPS · @vancouverpetservices
> **Domain:** vancouverpetservices.ca
> **Stage:** V1 built locally · Pre-launch

---

# 🗺️ Roadmap

## Phase 1 — Launch (Q1 2026)

### Product
- [ ] Deploy site to Vercel
- [ ] Connect custom domain (vancouverpetservices.ca)
- [ ] Fix favicon and brand details
- [ ] Test lead form submissions (Formspree)
- [ ] Verify all 8 seed listings display correctly
- [ ] Test mobile experience (375px viewport)
- [ ] Final design decision: V1 vs Preview direction

### Listings Acquisition
- [ ] Define listing submission process (manual for now)
- [ ] Reach out to 20 Vancouver pet service businesses
- [ ] Onboard first 10 real listings
- [ ] Replace all placeholder (picsum) images with real photos
- [ ] Verify all contact info is accurate

### Analytics & SEO
- [ ] Set up Google Analytics 4
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Google
- [ ] Verify meta titles and descriptions on all pages
- [ ] Set up basic rank tracking (Ubersuggest free or Google Search Console)

### Social Media
- [ ] Finalize Instagram profile (@vancouverpetservices)
- [ ] Write bio and add website link
- [ ] Post 3 launch content pieces before going live
- [ ] Set up content posting schedule (3x/week to start)

---

## Phase 2 — Traction (Q2 2026)

### Product
- [ ] Migrate data layer from JSON to Supabase
- [ ] Build admin panel to add/edit listings without code
- [ ] Add search bar to listings page
- [ ] Add rating/review system (collect via form, display manually)
- [ ] Add "Verified" badge for confirmed businesses
- [ ] Build email notification when a lead is submitted

### Listings Growth
- [ ] Grow to 30+ real listings
- [ ] Add new service categories: Pet Training, Pet Photography
- [ ] Add Dog-Friendly Venues section (parks, cafés, patios)
- [ ] Create listing tiers: Free vs Featured

### Monetization
- [ ] Launch Featured Listings ($50–$100/month)
- [ ] Manual invoicing via Stripe or e-transfer
- [ ] Target: 5 featured listings = $250–$500 MRR

### Content & SEO
- [ ] Publish 5 SEO resource articles (see Content Plan below)
- [ ] Start internal linking: articles → listings
- [ ] Set up Mailchimp free account
- [ ] Launch email newsletter (monthly, pet care tips + new listings)

### Social Media
- [ ] Post consistently 3x/week on Instagram
- [ ] Reach 200 followers
- [ ] First collaboration with a local pet account or walker
- [ ] Share UGC (client photos with permission)

---

## Phase 3 — Monetization (Q3 2026)

### Product
- [ ] Build pay-per-lead system (automated, tracked)
- [ ] Add affiliate links to resource articles (Chewy, Amazon CA)
- [ ] Launch Products vertical: treats, accessories, gifts
- [ ] Add filtering by price range on products
- [ ] Build "Compare services" feature for listings

### Revenue Targets
- [ ] Pay-per-lead: $500–$1,000/month
- [ ] Featured listings: $1,000–$2,000/month
- [ ] Affiliate commissions: $200–$500/month
- [ ] **Total target: $2,000–$3,500 MRR**

### Content & SEO
- [ ] 15 resource articles live
- [ ] Rank on page 1 for 3+ Vancouver pet keywords
- [ ] Launch affiliate product roundups ("Best dog beds in Canada")
- [ ] Start a monthly email with affiliate product picks

### Social Media
- [ ] Reach 500 Instagram followers
- [ ] First paid collaboration or gifted partnership
- [ ] Test Instagram ads ($5–$10/day budget)
- [ ] Explore TikTok account for pet content

---

## Phase 4 — Expansion (Q4 2026)

### Product
- [ ] Expand to Victoria, BC
- [ ] Add Pet Transportation category
- [ ] Add Pet Boarding / Daycare category
- [ ] Launch sponsored content / native advertising
- [ ] Explore white-label version for other Canadian cities

### Revenue Targets
- [ ] Featured listings + pay-per-lead: $3,000–$5,000/month
- [ ] Affiliate + sponsored: $1,000–$2,000/month
- [ ] **Total target: $5,000–$8,000 MRR**

### Team
- [ ] Hire part-time content writer (freelance)
- [ ] Hire part-time outreach/sales for listings acquisition
- [ ] Define processes and SOPs for onboarding new listings

---

# 📂 Categories & Services

## Active (V1)

| Category | Slug | Status |
|---|---|---|
| Dog Walking | walker | ✅ Live |
| Pet Sitting | sitter | ✅ Live |
| Grooming | grooming | ✅ Live |

## Phase 2 Pipeline

| Category | Type | Monetization | Priority |
|---|---|---|---|
| Pet Training | Service | Lead gen + featured | High |
| Pet Photography | Service | Lead gen + featured | High |
| Dog Boarding / Daycare | Service | Lead gen + featured | High |
| Dog-Friendly Venues | Directory | Affiliate + featured | Medium |
| Pet Transportation | Service | Lead gen | Medium |

## Phase 3 Pipeline

| Category | Type | Monetization | Priority |
|---|---|---|---|
| Artisan Pet Treats / Cookies | Product | Affiliate + listing | High |
| Pet Accessories (collars, beds) | Product | Affiliate (Chewy/Amazon) | High |
| Jewelry for Pet Owners | Product | Affiliate + sponsored | Medium |
| Custom Pet Portraits | Service/Product | Listing + commission | Medium |
| Pet Subscription Boxes | Product | Affiliate | Low |
| Pet Insurance | Service | Affiliate (high CPA) | Medium |
| Pet Nutrition / Meal Plans | Service/Product | Affiliate + listing | Low |

---

# 💰 Monetization Strategy

## Revenue Streams Overview

| Stream | Phase | Monthly Potential | Effort | Notes |
|---|---|---|---|---|
| Free listings | 1 | $0 | Done | Builds supply side |
| Featured listings | 2 | $500–$2,000 | Low | $50–$100/listing/month |
| Pay-per-lead | 3 | $500–$1,500 | Medium | $5–$20 per qualified lead |
| Affiliate links | 3 | $200–$800 | Medium | Chewy, Amazon CA, pet brands |
| Sponsored content | 3 | $300–$1,000 | Medium | Local pet brands, national |
| Display ads | 4 | $100–$400 | Low | Google AdSense (needs traffic) |
| Resources funnels | 4 | Compound | High | Articles → listings + affiliate |

## Featured Listings Pricing

| Tier | Price | Includes |
|---|---|---|
| Free | $0 | Basic listing, lead form |
| Featured | $75/month | Top placement, "Featured" badge, highlighted card |
| Premium | $150/month | Featured + social media mention + priority support |

## Pay-Per-Lead Model

- Lead = completed form submission with name, email, service, date
- Delivery = email to business within 5 minutes
- Pricing = $5–$15 per lead depending on service type
- Tracking = Supabase table logs all leads per business
- Billing = monthly invoice via Stripe

## Affiliate Partners to Target

| Partner | Program | Commission | Notes |
|---|---|---|---|
| Chewy.com | Chewy Affiliate | 4–8% | Pet food, supplies, toys |
| Amazon CA | Amazon Associates | 3–8% | Wide product range |
| Rover | Rover Affiliate | $20/signup | Competitor but high CPA |
| Pet insurance brands | Direct | $30–$100/signup | PolicyMe, Trupanion |
| Nom Nom / Ollie | Direct | $20–$40 | Fresh pet food delivery |

---

# 📣 Marketing Plan

## SEO Strategy

### Target Keywords (Phase 1–2)

| Keyword | Monthly Volume (est.) | Difficulty | Page |
|---|---|---|---|
| dog walker vancouver | 1,000–2,000 | Medium | /listings |
| pet sitter vancouver | 500–1,000 | Medium | /listings |
| dog grooming vancouver | 1,000–2,000 | Medium | /listings |
| pet services vancouver | 500–1,000 | Low | / |
| dog walker kitsilano | 100–300 | Low | /listings/[slug] |
| pet sitter downtown vancouver | 100–300 | Low | /listings/[slug] |

### Content SEO — Resource Articles

| Article Title | Target Keyword | CTA | Affiliate |
|---|---|---|---|
| How to Find a Trusted Dog Walker in Vancouver | dog walker vancouver | → Walker listings | — |
| Best Pet Sitters in Vancouver (Vetted & Reviewed) | pet sitter vancouver | → Sitter listings | — |
| Dog Grooming in Vancouver: What to Expect & What to Pay | dog grooming vancouver cost | → Groomer listings | — |
| Best Dog-Friendly Patios in Vancouver 2026 | dog friendly restaurants vancouver | → Venues listing | — |
| How to Choose Between Dog Boarding and Pet Sitting | dog boarding vs pet sitting | → Sitter + boarding listings | — |
| Best Dog Beds in Canada Under $100 | best dog beds canada | → Amazon/Chewy affiliate | Chewy |
| What to Feed a Senior Dog: A Vancouver Vet's Guide | senior dog food canada | → Nutrition listing + affiliate | Amazon |
| The Best Artisan Dog Treats Made in Vancouver | dog treats vancouver | → Treats listings | — |
| Vancouver Dog Parks: The Complete Neighbourhood Guide | dog parks vancouver | → Venue listings | — |
| How to Prepare Your Pet for a Grooming Appointment | preparing dog for grooming | → Groomer listings + tips | Chewy |

## Instagram Strategy

### Profile Setup
- **Handle:** @vancouverpetservices
- **Bio:** Find trusted pet care in Vancouver 🐾 Dog walkers · Groomers · Sitters · vancouverpetservices.ca
- **Link:** vancouverpetservices.ca

### Content Pillars (rotate weekly)

| Pillar | % | Examples |
|---|---|---|
| Featured listings | 30% | "Meet [Business Name] — top-rated dog walker in Kitsilano" |
| Local pet life | 25% | Vancouver dog parks, beaches, pet-friendly spots |
| Tips & education | 20% | "5 signs your dog needs a groomer", "How to tire out your dog" |
| Community / UGC | 15% | Repost client + business photos (with permission) |
| Promotions | 10% | "List your business free", featured listing offers |

### Posting Schedule (Phase 1)
- **Monday:** Featured listing spotlight
- **Wednesday:** Local pet life or tip
- **Friday:** Community / UGC or resource share

### Growth Tactics
- [ ] Follow all local pet businesses and engage genuinely
- [ ] Use Vancouver-specific hashtags: #vancouverdogs #vancouverpets #kitsilanodogs
- [ ] Partner with 2–3 micro-influencer pet accounts (5k–20k followers)
- [ ] Run a giveaway with a listed business (free walk or groom)
- [ ] Tag businesses in their listing spotlights → they repost = free reach

## Email Marketing

### List Building
- Add email capture to homepage ("Get new listings in your neighbourhood")
- Offer: "Vancouver Pet Care Guide" PDF as lead magnet
- Collect emails from lead form submissions (with consent)

### Newsletter Cadence
- Monthly: "New listings + pet care tips + what's happening in Vancouver"
- Occasional: Affiliate product roundups, seasonal content

---

# 📊 KPIs & Metrics

## Weekly Metrics to Track

| Metric | Tool | Phase 1 Target |
|---|---|---|
| Site visits | Google Analytics | 100/week |
| Listing page views | Google Analytics | 200/week |
| Lead form submissions | Formspree / Supabase | 5/week |
| Listings count | Manual | 10 real listings |
| Instagram followers | Instagram | 100 |
| Instagram reach | Instagram Insights | 500/week |

## Monthly Metrics (Phase 2+)

| Metric | Target Q2 | Target Q3 | Target Q4 |
|---|---|---|---|
| Site visits | 1,000/mo | 5,000/mo | 15,000/mo |
| Real listings | 30 | 60 | 100+ |
| Featured listings | 5 | 15 | 30 |
| MRR | $250 | $2,000 | $5,000 |
| Email subscribers | 100 | 500 | 1,500 |
| Instagram followers | 200 | 500 | 1,500 |

---

# 📝 Content Calendar

## March–April 2026 (Launch Month)

| Date | Platform | Content | Pillar | Status |
|---|---|---|---|---|
| Mar 30 | Instagram | "We're launching — find pet care near you in Vancouver" | Promo | To do |
| Apr 1 | Instagram | Featured listing: Happy Paws Dog Walking | Listing spotlight | To do |
| Apr 3 | Instagram | "5 questions to ask before hiring a dog walker" | Tips | To do |
| Apr 7 | Blog | How to Find a Trusted Dog Walker in Vancouver | SEO | To do |
| Apr 8 | Instagram | Featured listing: Kits Grooming Studio | Listing spotlight | To do |
| Apr 10 | Instagram | Vancouver's best off-leash dog parks | Local pet life | To do |
| Apr 14 | Blog | Best Pet Sitters in Vancouver | SEO | To do |
| Apr 15 | Instagram | Featured listing: West End Pet Sitting | Listing spotlight | To do |
| Apr 17 | Instagram | "How to prepare your dog for their first groom" | Tips | To do |
| Apr 28 | Email | April newsletter: New listings + spring pet tips | Email | To do |

---

# 🔧 Tech Stack & Operations

## Current Stack

| Layer | Tool | Notes |
|---|---|---|
| Frontend | Next.js + Tailwind | App Router, SSG |
| Data | JSON file | Migrate to Supabase Phase 2 |
| Forms | Formspree | Lead form + list your business |
| Hosting | Vercel (planned) | Free tier |
| Domain | Namecheap | vancouverpetservices.ca |
| Analytics | To set up | Google Analytics 4 |
| Email | To set up | Mailchimp free tier |
| Payments | To set up | Stripe (Phase 2) |

## Phase 2 Stack Additions

| Layer | Tool | Why |
|---|---|---|
| Database | Supabase | Listings, leads, users |
| CMS / Admin | Supabase dashboard | Add/edit listings without code |
| Payments | Stripe | Featured listing billing |
| Email | Resend or Mailchimp | Transactional + newsletter |
| Analytics | PostHog or GA4 | Event tracking |

---

# 📌 Quick Reference

**Brand:**
Vancouver Pet Services · VPS · Green `#16A34A` · Dark `#1C1917` · Cream `#F9F6F1`

**Key URLs:**
- Live site: vancouverpetservices.ca (post-deploy)
- Dev: localhost:3000
- Preview design: localhost:3000/preview
- Instagram: instagram.com/vancouverpetservices

**Key contacts to acquire (listings outreach targets):**
- Dog walking businesses in Kitsilano, Downtown, Mount Pleasant
- Grooming salons in North Vancouver, Burnaby
- Pet sitters in West End, Yaletown

**Formspree form ID:** xjgpggrn
