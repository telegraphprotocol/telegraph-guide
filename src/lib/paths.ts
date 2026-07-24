import { SITE_URLS } from "@/lib/site-config";

export type Accent = "info" | "success" | "warning" | "danger";

export type Step = {
  id: string;
  title: string;
  description: string;
  hint?: string;
  cta: { label: string; href: string };
  skippable: boolean;
};

export type GuidePath = {
  slug: string;
  accent: Accent;
  label: string;
  tagline: string;
  description: string;
  steps: Step[];
};

export const GUIDE_PATHS: GuidePath[] = [
  {
    slug: "miner",
    accent: "warning",
    label: "Become a Miner",
    tagline: "Supply intelligence, earn USDC per win",
    description:
      "Plug your model or data feed into the Telegraph network with one config file, and get paid every time it's picked.",
    steps: [
      {
        id: "what-is-mining",
        title: "See what a miner does",
        description:
          "A miner is a model or data feed competing to answer requests on the network. Skim the miner registry overview so you know what you're registering before you start.",
        cta: { label: "Open the docs", href: `${SITE_URLS.docs}/miners` },
        skippable: true,
      },
      {
        id: "prep-wallet",
        title: "Get an EVM wallet ready",
        description:
          "You'll need a wallet address to receive payouts (Base Sepolia for now). Have MetaMask or another EVM wallet installed.",
        hint: "Already have one? Skip this.",
        cta: { label: "Get MetaMask", href: "https://metamask.io/download/" },
        skippable: true,
      },
      {
        id: "yaml-config",
        title: "Create your YAML config",
        description:
          "Use the guided wizard to describe your model or feed — endpoints, pricing, supported intents — or import a YAML you already have.",
        cta: { label: "Start the wizard", href: SITE_URLS.integrate },
        skippable: false,
      },
      {
        id: "register-onchain",
        title: "Register on-chain",
        description:
          "Pin your config to IPFS, connect your wallet, set a floor price, and submit the registration transaction.",
        cta: { label: "Register now", href: `${SITE_URLS.integrate}` },
        skippable: false,
      },
    ],
  },
  {
    slug: "hackathon",
    accent: "danger",
    label: "Join the Hackathon",
    tagline: "Build on Telegraph, compete for prizes",
    description:
      "Ship something on the Telegraph network — a use case, a miner, or a tool — and enter it into the hackathon.",
    steps: [
      {
        id: "read-brief",
        title: "Read the hackathon brief",
        description: "Tracks, prizes, deadlines, and submission requirements live on the hackathon site.",
        cta: { label: "View the hackathon", href: SITE_URLS.hackathon },
        skippable: false,
      },
      {
        id: "pick-track",
        title: "Pick what you're building",
        description:
          "Building a use case that consumes intelligence? Start with Alexandria. Building a miner instead? Head to the registry.",
        hint: "Not sure yet? Skip and decide after skimming the docs.",
        cta: { label: "Read the docs", href: SITE_URLS.docs },
        skippable: true,
      },
      {
        id: "read-rules",
        title: "Read the rules",
        description: "Judging criteria, eligibility, and submission requirements — read this before you start building.",
        cta: { label: "Read the rules", href: `${SITE_URLS.hackathon}/rules` },
        skippable: false,
      },
      {
        id: "register",
        title: "Register for the hackathon",
        description: "Lock in your spot — sign up before the deadline so your team is eligible to compete.",
        cta: { label: "Register now", href: SITE_URLS.hackathon },
        skippable: false,
      },
    ],
  },
  {
    slug: "ask",
    accent: "info",
    label: "Ask Alexandria",
    tagline: "Get a provable answer in one prompt",
    description:
      "No account, no subscription — ask a question in plain language and get a routed, paid, verifiable answer.",
    steps: [
      {
        id: "open-terminal",
        title: "Open the chat terminal",
        description: "This is the front door — type your question the way you'd ask a person.",
        cta: { label: "Open Alexandria", href: SITE_URLS.alexandria },
        skippable: false,
      },
      {
        id: "connect-wallet",
        title: "Connect a wallet",
        description: "Answers are paid for automatically over x402 in USDC, a fraction of a cent per request.",
        hint: "Have a wallet already? Skip straight to asking.",
        cta: { label: "Open Alexandria", href: SITE_URLS.alexandria },
        skippable: true,
      },
      {
        id: "ask-question",
        title: "Ask your question",
        description: "Alexandria routes it to the best-suited model or feed and pays for the answer on your behalf.",
        cta: { label: "Ask now", href: SITE_URLS.alexandria },
        skippable: false,
      },
      {
        id: "check-receipt",
        title: "Check the receipt",
        description: "Every answer comes back with a cryptographic receipt proving what was paid for and delivered.",
        cta: { label: "Learn about receipts", href: `${SITE_URLS.docs}/receipts` },
        skippable: true,
      },
    ],
  },
  {
    slug: "build",
    accent: "success",
    label: "Build with Alexandria",
    tagline: "One API call reaches every model on the network",
    description: "Wire your app into Telegraph Protocol — pay per request, no vendor lock-in.",
    steps: [
      {
        id: "read-api-docs",
        title: "Read the API docs",
        description: "Understand the request/response shape and how x402 payment settlement works before writing code.",
        cta: { label: "Open API docs", href: `${SITE_URLS.docs}/api` },
        skippable: true,
      },
      {
        id: "open-build-tab",
        title: "Open the Build door",
        description: "Alexandria's Build tab is where developers get access — one call reaches every model and feed.",
        cta: { label: "Open Build with Alexandria", href: `${SITE_URLS.alexandria}/build` },
        skippable: false,
      },
      {
        id: "first-request",
        title: "Make your first request",
        description: "Send a request from your app and confirm you get a response with a payment receipt back.",
        cta: { label: "Back to Alexandria", href: SITE_URLS.alexandria },
        skippable: false,
      },
    ],
  },
];

export function getPath(slug: string) {
  return GUIDE_PATHS.find((p) => p.slug === slug);
}
