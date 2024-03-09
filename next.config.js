/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  env: {
    publicSupabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    publicSupabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
}

module.exports = nextConfig
