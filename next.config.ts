import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve directory-style static demos under /public/<slug>/ at "/<slug>/" so the
  // demo pages' relative links (corpus pages, mirrored-site assets) resolve correctly.
  trailingSlash: true,
};

export default nextConfig;
