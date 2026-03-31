import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Keep a minimal handler in case we later wire a custom submit endpoint.
  // For now, Netlify Forms submission is handled by posting to `/`.
  void req
  return NextResponse.json({ ok: false, message: 'Not used. Post to / for Netlify Forms.' }, { status: 400 })
}
