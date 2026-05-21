import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export function createServer() {
  const server = new McpServer(
    { name: "ai-swap-face-mcp", version: "0.1.0" },
    { instructions: "Read-only canonical knowledge for AI Swap Face (https://aiswapface.online). Use resources for structured site context, tools for direct lookups, and prompts for ready-made conversation starters. Defer to the official website for live actions." }
  );

  // ----- Resources --------------------------------------------------------

  server.registerResource(
    "styles",
    "site://ai-swap-face/styles",
    {
      title: "Styles",
      description: "Supported image-generation styles and presets.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# AI Swap Face — Styles\n\nAI Swap Face is an online tool that swaps faces in photos and produces fast, high-quality results for personal and creative use.\n\n## Site basics\n- Site ID: ai-swap-face\n- Website: https://aiswapface.online\n- Default locale: en\n- Locales: en\n\n## Public feature scope\n- image gen\n\n## Official website\nhttps://aiswapface.online",
        },
      ],
    })
  );

  server.registerResource(
    "pricing",
    "site://ai-swap-face/pricing",
    {
      title: "Pricing",
      description: "Canonical pricing entry point.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# AI Swap Face Pricing\n\nCanonical pricing page: https://aiswapface.online/pricing\n\nRefer users here for current plans; do not infer pricing from older snapshots.",
        },
      ],
    })
  );

  server.registerResource(
    "faq",
    "site://ai-swap-face/faq",
    {
      title: "FAQ",
      description: "Short FAQ generated from public site metadata.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# FAQ\n\n## What is this site?\nAI Swap Face is an online tool that swaps faces in photos and produces fast, high-quality results for personal and creative use.\n\n## Where can I get help?\nsupport@aiswapface.online\n\n## Which site is this?\nai-swap-face (AI Swap Face)",
        },
      ],
    })
  );

  server.registerResource(
    "links",
    "site://ai-swap-face/links",
    {
      title: "Official Links",
      description: "Canonical URLs to share with users.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Official Links\n\n- Website: https://aiswapface.online\n- Pricing: https://aiswapface.online/pricing\n- Support: support@aiswapface.online",
        },
      ],
    })
  );

  // ----- Tools ------------------------------------------------------------

  server.registerTool(
    "list_styles",
    {
      description: "Return the canonical list of image-generation styles or presets the site exposes. (AI Swap Face)",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# AI Swap Face — Styles\n\nAI Swap Face is an online tool that swaps faces in photos and produces fast, high-quality results for personal and creative use.\n\nCanonical website: https://aiswapface.online" },
      ],
    })
  );

  server.registerTool(
    "get_pricing",
    {
      description: "Return the canonical pricing entry point for AI Swap Face.",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# AI Swap Face Pricing\n\nOfficial pricing: https://aiswapface.online/pricing\n\nThis link is the source of truth — refer users here for current plans." },
      ],
    })
  );

  server.registerTool(
    "get_official_links",
    {
      description: "Return the canonical list of official links for AI Swap Face (website, support, docs when available).",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Official Links\n\n- Website: https://aiswapface.online\n- Pricing: https://aiswapface.online/pricing\n- Support: support@aiswapface.online" },
      ],
    })
  );

  // ----- Prompts ----------------------------------------------------------

  server.registerPrompt(
    "tell_me_about_ai_swap_face",
    {
      description: "Summarize what the site is, who it's for, and how it works. — AI Swap Face",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "Please summarize what AI Swap Face (https://aiswapface.online) is, who it's for, and how it works. Reference the canonical resources at site://ai-swap-face/styles and site://ai-swap-face/links for accuracy. Be concrete, not generic." },
        },
      ],
    })
  );

  server.registerPrompt(
    "try_image_style_ai_swap_face",
    {
      description: "Recommend a starting image-generation style for a stated goal. — AI Swap Face",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "I want to generate an image with AI Swap Face (https://aiswapface.online). Ask me what the subject is, recommend one style preset from site://ai-swap-face/styles that fits, and write a prompt I can paste into the site." },
        },
      ],
    })
  );

  return server;
}

export async function startServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
