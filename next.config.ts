import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Cursor preview / proxy hosts to load Next.js dev assets
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.cursor.sh",
    "*.cursorapi.com",
    "*.cursor.com",
  ],
};

export default nextConfig;
