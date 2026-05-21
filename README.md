# AI Swap Face MCP Server

> AI Swap Face - Online AI Face Swap Tool

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Stdio Transport](https://img.shields.io/badge/transport-stdio-6e6e6e)](https://modelcontextprotocol.io/specification)
[![Read Only](https://img.shields.io/badge/server-read--only-2ea44f)](#tools)
[![MCP](https://img.shields.io/badge/MCP-1.0-blue)](https://modelcontextprotocol.io)
[![smithery](https://smithery.ai/badge/ai-swap-face)](https://smithery.ai)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org)

<p align="center"><a href="https://aiswapface.online"><img src="./assets/hero.jpg" alt="AI Swap Face" width="720" /></a></p>

A Model Context Protocol server that exposes the canonical AI Swap Face knowledge surface — image generation workflows and styles, pricing, FAQ, official links — to MCP-compatible AI clients such as Claude Desktop, Cursor, Windsurf, and Continue. Read-only, no API keys, no quota, ~50 ms cold start.

Official website: https://aiswapface.online

## 🎨 About AI Swap Face

AI Swap Face is a browser-based face-swapping tool that lets users replace faces in photos and videos using neural network processing. No software installation is required — users upload an image or video clip, select a source face, and the service produces a composited result with automatic color matching and blend controls. The platform supports single-face and multi-face detection, meaning it can identify and swap multiple faces within a single group photo in one pass. Processed files are automatically deleted after 24 hours, and results are delivered without watermarks on supported tiers. A REST API with webhook support is also available for developers who want to embed the capability into their own applications.

## Key Features

- **Photo and video face swapping** — supports still images (JPG, PNG, WebP, HEIC) and video clips up to 10–60 seconds depending on account tier, with output from 720p up to 4K resolution.
- **Multi-face detection** — automatically locates every face in a group photo and applies swaps in a single operation, rather than requiring separate runs per face.
- **Batch processing** — handles multiple images in one job, useful for processing sets of frames or product shots at volume.
- **Blend strength and color matching controls** — lets users fine-tune how the swapped face integrates with the target image's lighting and skin tone.
- **Developer API** — a REST interface with webhook callbacks allows the face-swap pipeline to be called programmatically from external services or custom tools.
- **Privacy-focused handling** — uploaded and generated files are removed from servers automatically after 24 hours, with no persistent storage of user content.

## Use Cases

- **Content creation and social media** — creators swap faces onto existing footage or imagery to produce reaction clips, character-based posts, or promotional visuals without hiring actors or reshooting.
- **Meme and comedy content** — the platform includes a dedicated "Kirkify" feature for a popular meme format, and the general tool supports similar lightweight creative remixing.
- **Digital art and visual storytelling** — artists use face swapping to place a consistent character likeness across a series of generated or stock images.
- **Application development** — developers integrate the API to add face-swap functionality to their own products, such as entertainment apps, photo editors, or avatar generators.
- **Video editing and post-production** — video editors use the tool to replace a face across a short clip when reshooting is not practical, such as correcting a take or matching a stand-in to a lead actor.

## Who Is It For

AI Swap Face is aimed at a broad but digitally active audience. Social media content creators and video editors represent the primary users — people who need fast turnaround on visual effects without access to professional compositing software. Meme creators and hobbyists use the free tier for casual experimentation. App developers and small studios are served by the API and commercial licensing options, which allow the face-swap pipeline to be embedded in products without building underlying models. The multi-language interface (eight languages supported) extends the reach to non-English-speaking markets, and the no-install, browser-based design keeps the barrier to entry low for users who are not technically inclined.

## Tools

### `list_styles`
Return the canonical list of image-generation styles or presets the site exposes. (AI Swap Face)

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_pricing`
Return the canonical pricing entry point for AI Swap Face.

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_official_links`
Return the canonical list of official links for AI Swap Face (website, support, docs when available).

_Input:_ no parameters. _Returns:_ text/markdown.

## Resources

- `site://ai-swap-face/styles` — Supported image-generation styles and presets.
- `site://ai-swap-face/pricing` — Canonical pricing entry point.
- `site://ai-swap-face/faq` — Short FAQ generated from public site metadata.
- `site://ai-swap-face/links` — Canonical URLs to share with users.

## Installation

Clone the repository and point your MCP client at the local entry point.

```bash
git clone https://github.com/<your-account>/ai-swap-face-mcp.git
cd ai-swap-face-mcp
pnpm install
```

### Claude Desktop

Add to `claude_desktop_config.json` (Settings → Developer → Edit Config):

```json
{
  "mcpServers": {
    "ai-swap-face-mcp": {
      "command": "node",
      "args": [
        "/absolute/path/to/ai-swap-face-mcp/src/index.mjs"
      ]
    }
  }
}
```

### Cursor / Windsurf / Continue

Use the same `mcpServers` block in your client's MCP configuration file.

### Debug with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node src/index.mjs
```

## Official Links

- Website: https://aiswapface.online
- Pricing: https://aiswapface.online/pricing
- Support: support@aiswapface.online

## Development

```bash
pnpm install
pnpm start                 # run the server over stdio
pnpm test                  # run the package tests
```

## License

MIT
