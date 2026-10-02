import { SITE_URLS } from "@/lib/site-config";

export type Accent = "info" | "success" | "warning" | "danger";

export type Step = {
  id: string;
  title: string;
  description: string;
  hint?: string;
  cta?: { label: string; href: string };
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
    tagline: "Supply intelligence, earn from paid demand",
    description:
      "Register a model, API, dataset, algorithm, search system or tool against an Intent. Miners compete on measured performance and earn from fulfilled paid Consumer demand - not from protocol emissions.",
    steps: [
      {
        id: "what-is-mining",
        title: "See what a Miner does",
        description:
          "A Miner is a model, API, dataset or tool competing on measured performance for an Intent. Skim the miner registry overview so you know what you're registering before you start.",
        cta: { label: "Open the docs", href: `${SITE_URLS.docs}/docs/miners/miner-overview` },
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
        cta: { label: "Connect intelligence", href: `${SITE_URLS.integrate}/register?mode=hash` },
        skippable: false,
      },
      {
        id: "register-onchain",
        title: "Register on-chain",
        description:
          "Pin your config to IPFS, connect your wallet, set a floor price, and submit the registration transaction.",
        cta: { label: "Connect intelligence", href: `${SITE_URLS.integrate}/register?mode=hash` },
        skippable: false,
      },
    ],
  },
  {
    slug: "evaluator",
    accent: "info",
    label: "Build an Evaluator",
    tagline: "Improve how intelligence is measured",
    description:
      "Evaluators define how Miner performance is measured for an Intent. Competing Evaluators can challenge the current Canonical Evaluator, and a stronger method can replace it.",
    steps: [
      {
        id: "what-is-an-evaluator",
        title: "See what an Evaluator does",
        description:
          "An Evaluator is the method that scores Miner performance for an Intent. Read the docs so you know how Canonical Evaluators are chosen and replaced.",
        cta: { label: "Open the docs", href: SITE_URLS.docs },
        skippable: true,
      },
      {
        id: "build-evaluator",
        title: "Build your Evaluator",
        description:
          "Write your evaluation method as a WASM module so every Validator computes the same score deterministically.",
        cta: { label: "Build an Evaluator", href: `${SITE_URLS.integrate}/wasm` },
        skippable: false,
      },
      {
        id: "challenge-canonical",
        title: "Challenge the Canonical Evaluator",
        description:
          "Submit your Evaluator for an Intent. If it measures performance better than the current standard, it can replace it. Eligible Canonical Evaluators participate in the protocol's Evaluator reward mechanism.",
        cta: { label: "Build an Evaluator", href: `${SITE_URLS.integrate}/wasm` },
        skippable: false,
      },
    ],
  },
  {
    slug: "validator",
    accent: "success",
    label: "Run a Validator",
    tagline: "Secure the network",
    description:
      "Validators independently verify protocol execution, reproduce the required evaluation work and participate in finalizing Telegraph state.",
    steps: [
      {
        id: "what-is-a-validator",
        title: "See what a Validator does",
        description:
          "Validators verify execution, reproduce evaluation work and finalize rankings. Read the docs before you commit infrastructure.",
        cta: { label: "Open the docs", href: SITE_URLS.docs },
        skippable: true,
      },
      {
        id: "reserve-slot",
        title: "Reserve a validator slot",
        description:
          "Validators receive the fixed Validator share of MACHINA emissions for protocol work, subject to the protocol rules. Reserve your slot to get started.",
        cta: { label: "Reserve a validator slot", href: `${SITE_URLS.node}/` },
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
        skippable: true,
      },
    ],
  },
  {
    slug: "build",
    accent: "success",
    label: "Build with Telegraph",
    tagline: "Bring demand to ranked intelligence",
    description:
      "Connect an application, agent or machine workflow to ranked intelligence through Telegraph. Consumer demand is what creates Miner revenue and drives the network economy.",
    steps: [
      {
        id: "read-api-docs",
        title: "Read the API docs",
        description: "Understand the request/response shape and how x402 payment settlement works before writing code.",
        cta: { label: "Open API docs", href: `${SITE_URLS.docs}/docs/using/x402-inference` },
        skippable: true,
      },
      {
        id: "start-building",
        title: "Start building",
        description: "Plug in once and get the best-ranked intelligence for the job, for your agent, app or integration.",
        cta: { label: "Build with Telegraph", href: `${SITE_URLS.integrate}/integrate` },
        skippable: false,
      },
      {
        id: "first-request",
        title: "Make your first request",
        description: "Send a request from your app and confirm you get a response with a payment receipt back.",
        skippable: false,
      },
    ],
  },
];

export function getPath(slug: string) {
  return GUIDE_PATHS.find((p) => p.slug === slug);
}
