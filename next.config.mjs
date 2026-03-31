import fs from 'node:fs'
import path from 'node:path'

const formsStaticFile = path.join(process.cwd(), 'public', '__forms.html')
const contactFormComponent = path.join(process.cwd(), 'src', 'components', 'sections', 'contact', 'ContactForm.tsx')
const contactRouteHandler = path.join(process.cwd(), 'src', 'app', 'contact', 'api', 'route.ts')
const hasStaticFormsFile = fs.existsSync(formsStaticFile)
const hasRouteHandler = fs.existsSync(contactRouteHandler)
const hasDataNetlifyInReact = fs.existsSync(contactFormComponent)
  ? fs.readFileSync(contactFormComponent, 'utf8').includes('data-netlify')
  : false
const postsToDynamicContactApi = fs.existsSync(contactFormComponent)
  ? fs.readFileSync(contactFormComponent, 'utf8').includes('action="/contact/api"')
  : false

// #region agent log
fetch('http://127.0.0.1:7245/ingest/9ef6f9ea-76e7-4d61-b74c-84bc4b7ea7c6',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'501fb7'},body:JSON.stringify({sessionId:'501fb7',runId:'pre-fix',hypothesisId:'H1',location:'next.config.mjs:14',message:'Check static Netlify forms HTML exists',data:{hasStaticFormsFile,formsStaticFile},timestamp:Date.now()})}).catch(()=>{});
// #endregion
// #region agent log
fetch('http://127.0.0.1:7245/ingest/9ef6f9ea-76e7-4d61-b74c-84bc4b7ea7c6',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'501fb7'},body:JSON.stringify({sessionId:'501fb7',runId:'pre-fix',hypothesisId:'H2',location:'next.config.mjs:17',message:'Check React form still has data-netlify marker',data:{hasDataNetlifyInReact,contactFormComponent},timestamp:Date.now()})}).catch(()=>{});
// #endregion
// #region agent log
fetch('http://127.0.0.1:7245/ingest/9ef6f9ea-76e7-4d61-b74c-84bc4b7ea7c6',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'501fb7'},body:JSON.stringify({sessionId:'501fb7',runId:'pre-fix',hypothesisId:'H3',location:'next.config.mjs:20',message:'Check form action target is dynamic route',data:{postsToDynamicContactApi,action:'/contact/api'},timestamp:Date.now()})}).catch(()=>{});
// #endregion
// #region agent log
fetch('http://127.0.0.1:7245/ingest/9ef6f9ea-76e7-4d61-b74c-84bc4b7ea7c6',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'501fb7'},body:JSON.stringify({sessionId:'501fb7',runId:'pre-fix',hypothesisId:'H4',location:'next.config.mjs:23',message:'Check migration bypass env and route presence',data:{NETLIFY_NEXT_VERIFY_FORMS:process.env.NETLIFY_NEXT_VERIFY_FORMS ?? null,hasRouteHandler},timestamp:Date.now()})}).catch(()=>{});
// #endregion
// #region agent log
fetch('http://127.0.0.1:7245/ingest/9ef6f9ea-76e7-4d61-b74c-84bc4b7ea7c6',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'501fb7'},body:JSON.stringify({sessionId:'501fb7',runId:'post-fix',hypothesisId:'H7',location:'next.config.mjs:27',message:'Capture Netlify deploy environment details for forms 404',data:{NETLIFY:process.env.NETLIFY ?? null,PUBLISH_DIR:process.env.PUBLISH_DIR ?? null,DEPLOY_PRIME_URL:process.env.DEPLOY_PRIME_URL ?? null,URL:process.env.URL ?? null},timestamp:Date.now()})}).catch(()=>{});
// #endregion

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
