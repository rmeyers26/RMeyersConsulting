// Netlify Forms handler for Next.js App Router
// See: https://ntl.fyi/next-runtime-forms-migration
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Parse the form data
  const formData = await req.formData()
  const payload = Object.fromEntries(formData.entries())
  // #region agent log
  fetch('http://127.0.0.1:7245/ingest/9ef6f9ea-76e7-4d61-b74c-84bc4b7ea7c6',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'501fb7'},body:JSON.stringify({sessionId:'501fb7',runId:'post-fix',hypothesisId:'H13',location:'route.ts:10',message:'Contact route received form submission',data:{keys:Object.keys(payload),hasName:!!payload.name,hasEmail:!!payload.email,hasMessage:!!payload.message},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  // Optionally, you can process or forward the data here
  // For now, just redirect to the contact page with a success param
  return NextResponse.redirect(new URL('/contact?success=true', req.url), { status: 303 })
}
