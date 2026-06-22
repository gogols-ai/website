import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve directory-style static demos under /public/<slug>/ at "/<slug>/" so the
  // demo pages' relative links (corpus pages, mirrored-site assets) resolve correctly.
  trailingSlash: true,

  // Retire the gogols.ai brand: 301 everything on gogols.ai / www.gogols.ai to the
  // rebranded home at agents.ethora.com. Host-scoped so agents.ethora.com itself
  // (served by the same deployment) is never redirected.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "gogols.ai" }],
        destination: "https://agents.ethora.com/:path*",
        statusCode: 301,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gogols.ai" }],
        destination: "https://agents.ethora.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
