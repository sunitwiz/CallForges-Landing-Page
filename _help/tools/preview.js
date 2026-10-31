const http=require('http'),fs=require('fs'),path=require('path');const root=process.argv[2],port=+process.argv[3];
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon','.webmanifest':'application/manifest+json','.xml':'text/xml'};
const H='https://callforges.com/help/articles/';
function reply(q){q=q.toLowerCase();
 for(const p of ['hubspot','attio','pipedrive'])if(q.includes(p)){const N=p[0].toUpperCase()+p.slice(1);return{answer:`You need an owner or admin role in CallForges.\n\n1. Open Integrations and choose ${N}.\n2. Click Connect, sign in to ${N} and approve access.\n3. Open Map users, click Auto-map by e-mail, then Save.\n\nCalls are logged only for users matched to a ${N} user.`,sources:[{title:`${N} integration`,url:H+p+'-integration'}],offerHuman:false,refused:false}}
 if(/price|cost|plan|pay/.test(q))return{answer:'(Sample answer for this preview.) Plans and prices are on the pricing page; every plan includes free minutes per user each month.',sources:[{title:'Pricing',url:'https://callforges.com/pricing.html'}],offerHuman:false,refused:false};
 if(/trial/.test(q))return{answer:'(Sample answer for this preview.) The free trial lasts 14 days and includes 50 outbound and 50 inbound minutes.',sources:[{title:'Pricing',url:'https://callforges.com/pricing.html'}],offerHuman:false,refused:false};
 if(/my |account|bill|invoice|refund|person|human/.test(q))return{answer:"I can't see your account. A person from our team can help with that.",sources:[],offerHuman:true,refused:false};
 if(/weather|recipe|joke|python|capital of/.test(q))return{answer:'I can only help with questions about CallForges.',sources:[],offerHuman:false,refused:true};
 return{answer:"(Sample answer for this preview.) I'm not sure about that one. A person from our team can help.",sources:[],offerHuman:true,refused:false}}
http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split('?')[0]);
 if(q.method==='POST'&&p.startsWith('/api/v1/support/')){let b='';q.on('data',c=>b+=c);q.on('end',()=>setTimeout(()=>{r.writeHead(p.endsWith('/chat')?200:202,{'content-type':'application/json'});
  if(p.endsWith('/chat')){const m=JSON.parse(b||'{}').messages||[];r.end(JSON.stringify(reply((m[m.length-1]||{}).text||'')))}else r.end('{"id":1}')},900));return}
 if(p==='/')p='/index.html';let f=path.join(root,p);if(!path.extname(f)&&fs.existsSync(f+'.html'))f+='.html';
 fs.readFile(f,(e,b)=>{if(e){r.writeHead(404,{'content-type':'text/html'});r.end(fs.readFileSync(path.join(root,'404.html')));return}
  if(p==='/help/assistant.js')b=Buffer.from(b.toString().replace("'https://api.callforges.com/api/v1'","'/api/v1'"));
  r.writeHead(200,{'content-type':types[path.extname(f)]||'application/octet-stream','cache-control':'no-store'});r.end(b)})}).listen(port,'127.0.0.1',()=>console.log('preview on http://127.0.0.1:'+port+'/help'));
