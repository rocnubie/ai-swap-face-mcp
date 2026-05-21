# AI Swap Face MCP

A minimal, read-only MCP for AI Swap Face.

This package is generated from the MSA multi-site system and is built for one very specific job:
- provide a real MCP that can be installed and indexed
- keep the setup simple with local `stdio`
- avoid backend integration and API quota costs
- send users back to the official AI Swap Face website

Official website: https://aiswapface.online

## About AI Swap Face

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

## Core Site Functions

- Image generation and editing workflows for prompts, references, and visual iteration.

## Why This Site Is Good

- The MCP points users to the official AI Swap Face website instead of a third-party landing page.
- It keeps the package lightweight and easy to install because everything is static and read-only.
- It gives AI clients canonical links for docs, pricing, and support in one place.
- Useful when users want fast visual output without switching between multiple tools.

## Official Links

- Website: https://aiswapface.online
- Docs: https://aiswapface.online/docs
- Pricing: https://aiswapface.online
- Contact: https://aiswapface.online
- Support: support@aiswapface.online

## Site Metadata

- Site ID: ai-swap-face
- Site Name: AI Swap Face
- Default language: en
- Available languages: en
- Feature tags: `image-gen`

## MCP Resources

- `site://meta`
- `site://pages/overview`
- `site://pages/pricing`
- `site://pages/faq`
- `site://pages/links`

## Why This MCP Is Useful

- It is a real MCP package, not just a README-only repository.
- It is lightweight enough for quick indexing and easy local installation.
- It gives AI clients structured access to official website context and links.
- It is simple to fork, publish, and maintain for directory submissions.

## Quick Start

Install dependencies:

```bash
pnpm install
```

Run the server:

```bash
pnpm start
```

Run tests:

```bash
pnpm test
```

## Claude Desktop Example

```json
{
  "mcpServers": {
    "ai-swap-face": {
      "command": "pnpm",
      "args": [
        "--dir",
        "/absolute/path/to/exports/ai-swap-face",
        "start"
      ]
    }
  }
}
```

## Directory Submission Notes

- Repo type: local `stdio` MCP
- Maintenance model: generated from the MSA multi-site source
- Primary goal: directory indexing, official link discovery, and lightweight client install
