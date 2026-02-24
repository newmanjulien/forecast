export type MarketDatasource = {
  id: string;
  name: string;
  description: string;
};

export type MarketDatasourceSection = {
  category: string;
  summary: string;
  items: MarketDatasource[];
};

export const marketDatasourceSections: MarketDatasourceSection[] = [
  {
    category: "Ad-Tech & Supply Chain Infrastructure",
    summary:
      "Signals pulled from what websites and apps publicly ship and publicly load (e.g., tags, partners, and supply-chain files) - no private dashboards or internal access required.",
    items: [
      {
        id: "sdk-decompilation",
        name: "CTV & Mobile App SDK Decompilation",
        description:
          "We download publicly released app versions (from app stores or public distribution channels), compare them to prior releases, and record when analytics, measurement, or ad partners appear or disappear. This is public because the app package is what any user can install.",
      },
      {
        id: "cmp-privacy-vendor-leaks",
        name: "CMP & Privacy Vendor Leaks",
        description:
          "We visit publicly accessible web pages and read the consent/privacy information they send to the browser (the popup/banner data and partner lists) to see which ad-tech and data partners are in use and when that list changes. This is public because it's delivered to any visitor as part of the site experience.",
      },
      {
        id: "ads-txt-graphing",
        name: "ads.txt / app-ads.txt Supply-Chain Graphing",
        description:
          "We check publishers' public `ads.txt` and `app-ads.txt` files daily and track changes to who is authorized to sell their ad inventory (and through which partners). This is public because these files are intentionally published for supply-chain transparency.",
      },
      {
        id: "header-bidding-identity-exhaust",
        name: "Header Bidding & Identity Framework Exhaust",
        description:
          "We observe the ad-auction requests a publisher page makes when it loads in a browser and identify which identity solutions are being used. This is public because those requests are sent over the network to any viewer's browser session.",
      },
      {
        id: "web-technology-tracking",
        name: "Web Technology Tracking",
        description:
          "We record the third-party scripts, pixels, and iframes that a website loads and alert when vendors are added, removed, or swapped. This is public because the page source and loaded resources are visible to any visitor.",
      },
    ],
  },
  {
    category: "R&D, Engineering & Product Strategy",
    summary:
      "Early roadmap clues from public documentation, public internet infrastructure signals, and public filings.",
    items: [
      {
        id: "api-docs-diffing",
        name: "Competitor API & Developer Docs Diffing",
        description:
          "We track changes in public developer portals, API docs, and published specs, and use new endpoints/features as early clues about the roadmap. This is public because the docs are openly published for developers.",
      },
      {
        id: "ct-logs",
        name: "DNS & Certificate Transparency Logs",
        description:
          "We monitor public records (like certificate transparency logs and DNS) that reveal new domains and subdomains coming online, which can signal new products, tests, or launches. This is public because these registries are designed to be publicly queryable.",
      },
      {
        id: "github-telemetry",
        name: "GitHub / Open Source Telemetry",
        description:
          "We follow competitors' public GitHub and open-source activity (repos, commits, stars) to understand what tools and technologies they're betting on. This is public because the activity we track is on public profiles and repositories.",
      },
      {
        id: "patent-trademark-filings",
        name: "Patent & Trademark Filings",
        description:
          "We track patents and trademark filings in public government and registry databases to spot longer-term product ideas, positioning, and naming. This is public because filings are published as part of the legal process.",
      },
    ],
  },
  {
    category: "Human Capital & Executive Discourse",
    summary:
      "Signals from publicly posted jobs, publicly visible professional profiles, and public executive communications.",
    items: [
      {
        id: "hiring-signal",
        name: "The Hiring Signal",
        description:
          "We track publicly posted job listings (company sites and common applicant-tracking pages) and look for patterns that reveal new initiatives, regional expansion, or shifts in the skills and tools a company needs. This is public because job ads are published for anyone to view.",
      },
      {
        id: "linkedin-org-movement",
        name: "LinkedIn & Org Chart Movement",
        description:
          "We monitor publicly visible leadership and team changes (profile updates, role changes, and company page signals) to flag churn, reorganizations, or unusually fast growth in specific departments. This is public because it comes from information people and companies choose to publish.",
      },
      {
        id: "executive-voice",
        name: "Executive Voice",
        description:
          "We review public earnings calls, transcripts, interviews, and conference talks and summarize what leadership is signaling about priorities, strategy, and changes in direction. This is public because it's shared openly with investors, customers, or the press.",
      },
    ],
  },
  {
    category: "Go-To-Market, Threat & Vulnerability Signals",
    summary:
      "Sales and marketing signals from what competitors publicly say, publish, and advertise.",
    items: [
      {
        id: "ad-library-analysis",
        name: "Ad Library Analysis",
        description:
          "We collect competitors' ads from public ad libraries and analyze the messaging and targeting to understand who they're trying to reach and where. This is public because the ad platforms publish these libraries for transparency.",
      },
      {
        id: "pricing-tos-diffing",
        name: "Pricing & TOS Page Diffing",
        description:
          "We monitor public pricing and terms-of-service pages for changes so we can quickly catch updates to packaging, tiers, limits, or policies. This is public because it's information companies publish for prospective customers.",
      },
      {
        id: "b2b-review-sentiment",
        name: "B2B Review Sentiment",
        description:
          "We analyze publicly posted customer reviews on B2B review platforms to find the most common complaints and recurring weak spots that sales teams can address. This is public because the reviews are posted for other buyers to read.",
      },
      {
        id: "conference-sponsorships",
        name: "Conference Sponsorships & Agendas",
        description:
          "We track public event agendas, speaker lists, and sponsorship pages to understand competitors' positioning and where they're spending budget. This is public because conferences publish this information to promote the event.",
      },
      {
        id: "agency-brand-wins",
        name: "Agency / Brand Account Wins",
        description:
          "We monitor public press releases and industry news for client wins and losses so we can spot momentum shifts and trigger sales follow-ups. This is public because it's reported or announced in public media.",
      },
    ],
  },
];
