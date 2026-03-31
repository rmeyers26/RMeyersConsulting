// This file enables Netlify Forms with Next.js App Router
// See: https://ntl.fyi/next-runtime-forms-migration
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Parse the form data
  const formData = await req.formData()
  // Optionally, you can process or forward the data here
  // For now, just redirect to the contact page with a success param
  return NextResponse.redirect('/contact?success=true', { status: 303 })
}
