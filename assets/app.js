'use strict';
if(window.top!==window.self){try{window.top.location.replace(window.self.location.href)}catch(e){document.documentElement.style.display='none'}}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

{
const $=id=>document.getElementById(id);
const tasas=[{y:'2026',t:27,c:'—'},{y:'2027',t:25.5,c:70},{y:'2028',t:24,c:80},{y:'2029',t:23,c:100}];
const f=n=>String(n).replace('.',',');
$('steps').innerHTML=tasas.map(s=>`<div class="step"><b class="num">${f(s.t)}%</b><div class="bar" style="height:${(s.t-18)/9*78}%"></div></div>`).join('');
$('yrs').innerHTML=tasas.map(s=>`<span>${s.y}</span>`).join('');
$('cred').innerHTML=tasas.map(s=>s.c==='—'?`<div>Crédito para el dueño: sistema actual</div>`:`<div><div class="meter"><i style="width:${s.c}%"></i></div>Crédito ${s.c}%</div>`).join('');

const medidas=[
['Empresas','27% → 23%','La tasa de primera categoría baja de a poco hasta 2029 y el sistema se reintegra: el dueño usa como crédito una parte cada vez mayor de lo que pagó la empresa.'],
['Deudas con el SII','Hasta 100%','Condonación de intereses (y hasta 80% de las multas) para deudas tributarias vencidas hasta 2025. Dura 180 días desde la publicación.'],
['Inversiones en bolsa','10% → 0%','Desde el 1 de enero de 2027, vender acciones con presencia bursátil en la bolsa chilena vuelve a no pagar impuesto.'],
['Arriendo DFL 2','5% único','Quien arrienda una vivienda DFL 2 puede optar a un impuesto único de 5% sobre ese arriendo.'],
['Vivienda nueva','Sin IVA','Por un año, ciertas viviendas nuevas se podrán vender sin IVA, con requisitos como ser primera venta.'],
['Mayores de 65','Sin contribuciones','Las personas de 65 años o más pueden quedar exentas de contribuciones en su vivienda principal, con requisitos.'],
['Crédito CAE','Nuevas cuotas','Se abren nuevas opciones para repactar las deudas del Crédito con Aval del Estado.'],
['Bienes en el extranjero','10% o 7%','Durante 2027 se pueden regularizar pagando un impuesto único de 10%, o 7% si se traen a Chile.'],
['Donaciones','−50%','Entre diciembre de 2026 y noviembre de 2027 el impuesto a las donaciones tiene una rebaja a la mitad.']];
$('medidas').innerHTML=medidas.map(m=>`<article class="card"><span class="tag">${m[0]}</span><span class="big">${m[1]}</span><p>${m[2]}</p></article>`).join('');

const fechas=[
['Abril 2026','El proyecto de reforma ingresa al Congreso.'],
['4 ago 2026','El Congreso la aprueba y termina su tramitación.'],
['17 oct 2026','Se publica en el Diario Oficial como Ley 21.850.'],
['1 nov 2026','Parten las primeras medidas.',1],
['Dic 2026','Empieza la rebaja de 50% en el impuesto a las donaciones.'],
['1 ene 2027','Las ganancias en bolsa vuelven a no pagar impuesto. La tasa a empresas baja a 25,5%.'],
['Abril 2027','Operación Renta: se declara el F22 del año 2026. Cerca de mediados de mes vence la condonación de deudas.'],
['Nov 2027','Termina la rebaja del impuesto a las donaciones.'],
['2029','La tasa a empresas llega a 23% y el crédito del dueño al 100%.']];
$('time').innerHTML=fechas.map(x=>`<li class="${x[2]?'now':''}"><span class="d">${x[0]}</span><p>${x[1]}</p></li>`).join('');

const guias=[
['F29','Declaración mensual',[['Qué es','El formulario donde se declara y paga cada mes el IVA, el PPM y las retenciones.'],['Quién','Empresas, pymes y quienes tienen inicio de actividades con ventas o retenciones.'],['Cuándo','Hasta el día 12 del mes siguiente, o el 20 si se declara por internet y se factura electrónicamente.']]],
['F22','Operación Renta',[['Qué es','La declaración anual de impuestos a la renta. Ahí se ve si te devuelven plata o si debes pagar.'],['Quién','Trabajadores con más de un empleador, independientes con boletas, empresas e inversionistas.'],['Cuándo','En abril de cada año, por los ingresos del año anterior. El SII entrega una propuesta.']]],
['Timbres','Impuesto de timbres y estampillas',[['Qué es','Un impuesto a los documentos de crédito: préstamos, pagarés, letras y créditos de consumo.'],['Quién','Quien pide el crédito. Suele venir incluido en el costo del préstamo, por eso pasa piola.'],['Cuánto','0,066% por mes de plazo con tope de 0,8%, o 0,332% si es a la vista.']]],
['Honorarios','Boleta de honorarios',[['Qué es','El documento que emiten los independientes. Lleva una retención que va al SII.'],['Retención','15,25% en 2026 y sube hasta 17% en 2028. Financia salud y previsión.'],['Ojo','En la Operación Renta se calcula si recuperas parte de lo retenido.']]]];
$('guides').innerHTML=guias.map(g=>`<article class="card guide"><span class="tag">${g[0]}</span><h3 style="margin-top:10px">${g[1]}</h3><dl>${g[2].map(r=>`<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join('')}</dl></article>`).join('');

const vids=[['La reforma tributaria 2026 explicada en 5 minutos','Reforma','1'],['Condonación de deudas con el SII: cómo aprovecharla antes de abril','Reforma','2'],['¿Qué es el F29 y quién tiene que declararlo?','Formularios','3'],['Impuesto de timbres y estampillas: cuándo lo pagas sin saberlo','Impuestos','4'],['Boleta de honorarios: retención, devolución y errores comunes','Independientes','5'],['Bolsa sin impuesto desde 2027: qué significa para el inversionista chico','Reforma','6'],['Inicio de actividades en el SII, paso a paso','Pymes','7'],['Régimen Pro Pyme vs. general: cuál te conviene','Pymes','8'],['Presupuesto familiar en Chile: un método simple que sí funciona','Finanzas domésticas','9'],['Operación Renta 2027: cómo prepararte para el F22','Formularios','Marzo 2027']];
$('vids').innerHTML=vids.map((v,i)=>`<tr><td class="n">${i+1}</td><td>${v[0]}</td><td>${v[1]}</td><td class="hide-s">${v[2]}</td></tr>`).join('');

const clp=n=>'$'+Math.round(n).toLocaleString('es-CL');
const parse=s=>Number(String(s).replace(/[^\d]/g,''))||0;
const fmtIn=el=>{const n=parse(el.value);el.value=n?n.toLocaleString('es-CL'):''};
const calcH=()=>{const m=parse($('hMonto').value),r=Number($('hAnio').value);$('hRet').textContent=clp(m*r);$('hLiq').textContent=clp(m*(1-r));$('hInv').textContent=clp(m/(1-r))};
const calcT=()=>{const m=parse($('tMonto').value),p=parse($('tPlazo').value),vista=$('tTipo').value==='vista';
  let t=vista?0.332:Math.min(0.066*p,0.8);$('tPlazo').disabled=vista;
  $('tTasa').textContent=t.toLocaleString('es-CL',{maximumFractionDigits:3})+'%';$('tImp').textContent=clp(m*t/100);
  $('tNota').textContent=vista?'Tasa fija para documentos sin plazo.':(0.066*p>=0.8?'Se alcanzó el tope de 0,8% (desde 13 meses).':'Sube 0,066% por cada mes de plazo.')};
['hMonto','tMonto','tPlazo'].forEach(id=>$(id).addEventListener('blur',e=>fmtIn(e.target)));
$('fh').addEventListener('input',calcH);$('ft').addEventListener('input',calcT);
$('fh').addEventListener('submit',e=>e.preventDefault());$('ft').addEventListener('submit',e=>e.preventDefault());
calcH();calcT();

/* ---------- Indicadores ---------- */
const n2=(v,d=2)=>v.toLocaleString('es-CL',{minimumFractionDigits:d,maximumFractionDigits:d});
const K={uf:{n:'UF',v:41350.42,d:2,f:'17 nov 2026'},utm:{n:'UTM',v:72440,d:0,f:'Noviembre 2026'},uta:{n:'UTA',v:869280,d:0,f:'Noviembre 2026'},dolar:{n:'Dólar observado',v:1001.17,d:2,f:'17 nov 2026'},euro:{n:'Euro',v:1102,d:2,f:'17 nov 2026'},tpm:{n:'Tasa de política monetaria',v:4.5,d:1,f:'17 nov 2026',pct:1},ipc:{n:'IPC octubre',v:0.5,d:1,f:'4,5% en 12 meses',pct:1},cobre:{n:'Cobre',v:6.11,d:2,f:'US$ por libra, 17 nov 2026',usd:1}};
const kv=k=>{const x=K[k];return x.pct?n2(x.v,x.d)+'%':(x.usd?'US$':'$')+n2(x.v,x.d)};
const drawK=()=>{$('kpis').innerHTML=Object.keys(K).map(k=>`<div class="kpi"><span>${K[k].n}</span><b>${kv(k)}</b><small>${K[k].f}</small></div>`).join('')};
const U=[['CLP','Pesos chilenos',1],['UF','UF','uf'],['UTM','UTM','utm'],['UTA','UTA','uta'],['USD','Dólares','dolar'],['EUR','Euros','euro']];
$('cDe').innerHTML=U.map((u,i)=>`<option value="${i}"${i==1?' selected':''}>${u[1]}</option>`).join('');
const rate=u=>u[2]===1?1:K[u[2]].v;
const pnum=s=>Number(String(s).replace(/\./g,'').replace(',','.'))||0;
const calcC=()=>{const a=pnum($('cMonto').value),u=U[$('cDe').value],clpV=a*rate(u);
  $('cOut').innerHTML=U.filter(x=>x!==u).map(x=>{const v=clpV/rate(x);return `<div><span class="mut small">${x[1]}</span><b>${x[0]==='CLP'?'$'+n2(v,0):n2(v,x[0]==='UF'?4:2)+' '+x[0]}</b></div>`}).join('')};
$('fc').addEventListener('input',calcC);$('fc').addEventListener('submit',e=>e.preventDefault());
drawK();calcC();

const getJ=async(url)=>{const c=new AbortController();const t=setTimeout(()=>c.abort(),5000);try{const r=await fetch(url,{signal:c.signal,credentials:'omit',referrerPolicy:'no-referrer',redirect:'error'});if(!r.ok)throw 0;return await r.json()}finally{clearTimeout(t)}};
let LIVE=false;
(async()=>{try{const j=await getJ('https://mindicador.cl/api');const m={uf:'uf',utm:'utm',dolar:'dolar',euro:'euro',tpm:'tasa_politica_monetaria',cobre:'libra_cobre'};
  if(!j||typeof j!=='object')throw 0;for(const k in m){const o=j[m[k]];const v=Number(o&&o.valor);if(Number.isFinite(v)&&v>0&&v<1e7){K[k].v=v;const dt=new Date(o.fecha);if(k!=='utm'&&!isNaN(dt))K[k].f=dt.toLocaleDateString('es-CL',{day:'numeric',month:'short',year:'numeric'})}}
  K.uta.v=K.utm.v*12;LIVE=true;$('liveTag').textContent='En vivo';$('liveTag').classList.add('on');drawK();calcC();drawH();}catch(e){}})();

/* ---------- Histórico ---------- */
const MES=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const H={uf:{2024:[36797.64,36727.1,36865.37,37100.68,37266.94,37444.94,37575.61,37577.74,37762.97,37914.2,37972.65,38260.61],2025:[38419.17,38381.93,38663.05,38899.12,39081.9,39191.97,39269.69,39173.95,39394.46,39485.65,39602.77,39643.59],2026:[39731.79,39703.5,39796.31,39841.72,40133.5,40627.62,40823.03,40844.79,40875.09,41065.38,41252.94,41446.78]},
utm:{2024:[64666,64343,64793,65182,65443,65770,65967,65901,66362,66561,66628,67294],2025:[67429,67294,68034,68306,68648,68785,68923,68647,69265,69265,69542,69542],2026:[69751,69611,69889,69889,70588,71506,71649,71649,71721,72151,72440,72802]},
dolar:{2024:[907.99,963.44,967.93,960.14,917.88,926.08,937.56,929.9,926.21,933.81,971.6,982.3],2025:[1000.76,956.62,932.55,961.96,941.01,938.04,951.55,966.3,960.37,953.97,935.7,916.16],2026:[883.97,862.02,909.89,897.89,897.64,903.38,930.97,917.66,947.27,982.28,978.69,null]},euro:{}};
H.uta={};for(const y in H.utm)H.uta[y]=H.utm[y].map(v=>v*12);
const DEC={uf:2,utm:0,uta:0,dolar:2,euro:2};
const yrs=[];for(let y=2026;y>=2015;y--)yrs.push(y);
$('hYear').innerHTML=yrs.map(y=>`<option>${y}</option>`).join('');
const fromSerie=(ind,s)=>{const out=Array(12).fill(null),acc=Array.from({length:12},()=>[]);
  for(const p of s){const d=new Date(p&&p.fecha),val=Number(p&&p.valor);if(isNaN(d)||!Number.isFinite(val))continue;p.valor=val;const m=d.getUTCMonth();if(ind==='uf'){if(d.getUTCDate()===1)out[m]=p.valor}else acc[m].push(p.valor)}
  if(ind!=='uf')acc.forEach((a,i)=>{if(a.length)out[i]=ind==='utm'?a[0]:a.reduce((x,y)=>x+y,0)/a.length});return out};
const loadH=async(ind,y)=>{if(H[ind][y])return H[ind][y];const base=ind==='uta'?'utm':ind;
  if(!/^(uf|utm|dolar|euro)$/.test(base)||!/^20\d\d$/.test(String(y)))throw 0;const j=await getJ(`https://mindicador.cl/api/${base}/${y}`);let v=fromSerie(base,j.serie||[]);if(ind==='uta')v=v.map(x=>x==null?null:x*12);
  if(v.every(x=>x==null))throw 0;H[ind][y]=v;return v};
let hv=[];
const svg=$('hSvg');
const plot=()=>{const W=svg.clientWidth,H2=svg.clientHeight;if(!W)return;const pts=hv.map((v,i)=>[i,v]).filter(p=>p[1]!=null);
  if(!pts.length){svg.innerHTML='';return}
  const L=W<520?8:16,R=W<520?8:16,T=18,B=28;let mn=Math.min(...pts.map(p=>p[1])),mx=Math.max(...pts.map(p=>p[1]));const pad=(mx-mn||mx*.01)*.15;mn-=pad;mx+=pad;
  const X=i=>L+i*(W-L-R)/11,Y=v=>T+(1-(v-mn)/(mx-mn))*(H2-T-B);
  const d=pts.map((p,k)=>(k?'L':'M')+X(p[0]).toFixed(1)+' '+Y(p[1]).toFixed(1)).join(' ');
  const area=d+` L${X(pts[pts.length-1][0]).toFixed(1)} ${H2-B} L${X(pts[0][0]).toFixed(1)} ${H2-B} Z`;
  const ind=$('hInd').value,last=pts[pts.length-1];
  svg.innerHTML=`<defs><linearGradient id="ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#21c46b" stop-opacity=".35"/><stop offset="1" stop-color="#21c46b" stop-opacity="0"/></linearGradient></defs>
  <line x1="${L}" x2="${W-R}" y1="${H2-B}" y2="${H2-B}" stroke="var(--line)"/>
  <path d="${area}" fill="url(#ga)"/><path d="${d}" fill="none" stroke="#21c46b" stroke-width="3" stroke-linejoin="round"/>
  ${pts.map(p=>`<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="${p===last?6:3.5}" fill="${p===last?'#ffd23f':'#21c46b'}"/>`).join('')}
  ${MES.map((m,i)=>(W<520&&i%2)?'':`<text x="${X(i)}" y="${H2-8}" text-anchor="${i===0?'start':i===11?'end':'middle'}">${m.slice(0,3)}</text>`).join('')}`};
new ResizeObserver(plot).observe(svg);
const drawH=async()=>{const ind=$('hInd').value,y=$('hYear').value,lab=$('hInd').selectedOptions[0].text;$('hMsg').textContent='';
  try{hv=await loadH(ind,y)}catch(e){hv=[];$('hMsg').textContent=LIVE?'No hay datos para ese año.':(ind==='euro'?'El histórico del euro':'El histórico de '+y)+' se carga en vivo desde el Banco Central cuando la página está en tu propio hosting. Aquí vienen guardados 2024, 2025 y 2026 de UF, UTM, UTA y dólar.'}
  $('hTitle').textContent=`${lab} en ${y}, mes a mes`;
  const dd=DEC[ind],fm=v=>v==null?'—':'$'+n2(v,dd),vals=hv.filter(v=>v!=null);
  $('hRows').innerHTML=hv.length?hv.map((v,i)=>{const p=hv[i-1];let c='';if(v!=null&&p!=null){const ch=(v/p-1)*100;c=`<span class="${ch>=0?'up':'dn'}">${ch>=0?'+':''}${n2(ch,2)}%</span>`}
    return `<tr><td>${MES[i]}${ind==='dolar'&&y==='2026'&&i===10&&!LIVE?' (parcial)':''}</td><td class="r">${fm(v)}</td><td class="r">${c}</td></tr>`}).join(''):'';
  if(vals.length){const ch=(vals[vals.length-1]/vals[0]-1)*100;
    $('hSum').innerHTML=`<div><span>Último del año</span><b>${fm(vals[vals.length-1])}</b></div><div><span>Mínimo</span><b>${fm(Math.min(...vals))}</b></div><div><span>Máximo</span><b>${fm(Math.max(...vals))}</b></div><div><span>Variación en el año</span><b class="${ch>=0?'up':'dn'}">${ch>=0?'+':''}${n2(ch,1)}%</b></div>`}else $('hSum').innerHTML='';
  plot()};
$('hInd').addEventListener('change',drawH);$('hYear').addEventListener('change',drawH);
drawH();

/* ---------- Previred (un registro por mes; el historial crece) ---------- */
const PV={'2026-11':{nom:'Noviembre 2026',pago:'diciembre 2026',uf:41439.89,ufF:'30 nov 2026',utm:72440,uta:869280,
  topes:[['Tope imponible AFP (90 UF)',3729590],['Tope imponible IPS (60 UF)',2474858],['Tope seguro de cesantía (135,2 UF)',5602673]],
  min:[['Renta mínima dependientes e independientes',553553],['Menores de 18 y mayores de 65',412938],['Trabajadores de casa particular',553553],['Fines no remuneracionales',356815]],
  apv:[['APV: tope mensual (50 UF)',2071995],['APV: tope anual (600 UF)',24863934],['Depósito convenido: tope anual (900 UF)',37295901]],
  afp:[['Capital',11.44,0.1],['Cuprum',11.44,0.1],['Habitat',11.27,0.1],['PlanVital',11.16,0.1],['ProVida',11.45,0.1],['Modelo',10.58,0.1],['Uno',10.46,0.1]],
  afc:[['Plazo indefinido','2,4%','0,6%'],['Plazo fijo','3,0%','—'],['Indefinido, 11 años o más','0,8%','—'],['Casa particular','3,0%','—']],
  asig:[['Tramo A',22601,'Hasta $649.039'],['Tramo B',13870,'$649.040 a $947.990'],['Tramo C',4382,'$947.991 a $1.478.539'],['Tramo D',0,'Sobre $1.478.539']],
  otros:[['Seguro social, de cargo del empleador','SIS 1,79% · expectativa de vida 0,71% · rentabilidad protegida 0,90%'],['Salud 7%','Con Caja de Compensación: 4,2% a la CCAF y 2,8% a Fonasa. Sin Caja: todo a Fonasa o a tu Isapre.'],['Trabajos pesados','Pesado: empleador 4%, trabajador 2%. Menos pesado: empleador 2%, trabajador 1%.']]}};
const pk=Object.keys(PV).sort().reverse();
$('pMes').innerHTML=pk.map(k=>`<option value="${k}">${PV[k].nom}</option>`).join('');
const drawP=()=>{const p=PV[$('pMes').value],c=v=>'$'+n2(v,0);
  $('pTitle').textContent='Indicadores previsionales de '+p.nom.toLowerCase();
  $('pKpis').innerHTML=[['UF al '+p.ufF,'$'+n2(p.uf,2),'Para calcular topes'],['UTM',c(p.utm),p.nom],['UTA',c(p.uta),p.nom],...p.topes.map(t=>[t[0],c(t[1]),'Pago en '+p.pago])].map(x=>`<div class="kpi"><span>${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></div>`).join('');
  const best=Math.min(...p.afp.map(a=>a[1]+a[2]));
  $('pAfp').innerHTML=[...p.afp].sort((a,b)=>a[1]-b[1]).map(a=>`<tr class="${a[1]+a[2]===best?'best':''}"><td>${a[0]}${a[1]+a[2]===best?' · la más barata':''}</td><td class="r">${n2(a[1],2)}%</td><td class="r">${n2(a[1]+a[2],2)}%</td></tr>`).join('');
  $('pAfc').innerHTML=p.afc.map(a=>`<tr><td>${a[0]}</td><td class="r">${a[1]}</td><td class="r">${a[2]}</td></tr>`).join('');
  $('pAsig').innerHTML=p.asig.map(a=>`<tr><td>${a[0]}</td><td class="r">${a[1]?c(a[1]):'—'}</td><td>${a[2]}</td></tr>`).join('');
  const lst=(t,a)=>`<div class="card"><h3>${t}</h3><div class="lst">${a.map(m=>`<div><span>${m[0]}</span><b>${c(m[1])}</b></div>`).join('')}</div></div>`;
  $('pOtros').innerHTML=lst('Rentas mínimas imponibles',p.min)+lst('Ahorro previsional voluntario',p.apv);
  $('pTxt').innerHTML=p.otros.map(o=>`<div class="card"><h3>${o[0]}</h3><p>${o[1]}</p></div>`).join('');
  $('sAfp').innerHTML=p.afp.map((a,i)=>`<option value="${i}"${a[0]==='Uno'?' selected':''}>${a[0]} · ${n2(a[1],2)}%</option>`).join('');calcS()};
const calcS=()=>{const p=PV[$('pMes').value],b=parse($('sBruto').value),imp=Math.min(b,p.topes[0][1]),a=p.afp[$('sAfp').value]||p.afp[0],ces=Number($('sCon').value);
  const afp=imp*a[1]/100,sal=imp*.07,afc=Math.min(b,p.topes[2][1])*ces,tot=afp+sal+afc,c=v=>'$'+n2(v,0);
  $('sRes').innerHTML=`<div><span class="mut">AFP ${a[0]} (${n2(a[1],2)}%)</span><span class="num">${c(afp)}</span></div><div><span class="mut">Salud (7%)</span><span class="num">${c(sal)}</span></div><div><span class="mut">Seguro de cesantía</span><span class="num">${c(afc)}</span></div><div><span>Total descuentos</span><span class="num">${c(tot)}</span></div><div><span>Líquido antes de impuesto</span><span class="num tot">${c(b-tot)}</span></div>${b>p.topes[0][1]?'<div><span class="mut">Tu sueldo supera el tope imponible: AFP y salud se calculan sobre '+c(p.topes[0][1])+'.</span></div>':''}`};
$('pMes').addEventListener('change',drawP);$('fs').addEventListener('input',calcS);$('fs').addEventListener('submit',e=>e.preventDefault());
$('sBruto').addEventListener('blur',e=>fmtIn(e.target));
drawP();

/* ---------- Leyes ---------- */
const BL=id=>'https://www.bcn.cl/leychile/navegar?idNorma='+id,BY=n=>'https://www.bcn.cl/leychile/navegar?idLey='+n;
const LEY=[
['Tributarias','Ley 21.850','2026','Reconstrucción Nacional y Desarrollo Económico y Social (megarreforma): rebaja de primera categoría, condonación, bolsa, IVA a la vivienda.',BL(1229250)],
['Tributarias','Decreto Ley 824','1974','Ley sobre Impuesto a la Renta: primera categoría, global complementario, segunda categoría y adicional.',BL(6368)],
['Tributarias','Decreto Ley 825','1974','Ley sobre Impuesto a las Ventas y Servicios (IVA).',BL(6369)],
['Tributarias','Decreto Ley 830','1974','Código Tributario: obligaciones, plazos, fiscalización, infracciones y sanciones.',BL(6374)],
['Tributarias','Decreto Ley 3.475','1980','Ley sobre Impuesto de Timbres y Estampillas, aplicable a créditos, pagarés y letras. Texto en el SII.','https://www.sii.cl/pagina/jurisprudencia/legislacion/basica/dl3475.htm'],
['Tributarias','Ley 21.210','2020','Moderniza la legislación tributaria: régimen Pro Pyme, boleta electrónica y Defensoría del Contribuyente.',BY(21210)],
['Tributarias','Ley 21.713','2024','Cumplimiento de las obligaciones tributarias: elusión, evasión y fiscalización.',BY(21713)],
['Comerciales y mercantiles','Código de Comercio','1865','Actos de comercio, comerciantes, contratos mercantiles y sociedades.',BL(1974)],
['Comerciales y mercantiles','Ley 18.046','1981','Sociedades anónimas.',BY(18046)],
['Comerciales y mercantiles','Ley 3.918','1923','Sociedades de responsabilidad limitada.',BY(3918)],
['Comerciales y mercantiles','Ley 20.659','2013','Simplifica la creación de empresas: Registro de Empresas y Sociedades (empresa en un día).',BY(20659)],
['Comerciales y mercantiles','Ley 18.092','1982','Letras de cambio y pagarés.',BY(18092)],
['Comerciales y mercantiles','Ley 19.983','2004','Transferencia de la factura y su mérito ejecutivo, base del factoring.',BY(19983)],
['Comerciales y mercantiles','Ley 18.010','1981','Operaciones de crédito de dinero: intereses y tasa máxima convencional.',BY(18010)],
['Comerciales y mercantiles','Ley 20.720','2014','Insolvencia y reemprendimiento: renegociación y liquidación de personas y empresas.',BY(20720)],
['Comerciales y mercantiles','Ley 21.131','2019','Pago a 30 días de las facturas.',BY(21131)],
['Comerciales y mercantiles','Ley 20.416','2010','Normas especiales para las empresas de menor tamaño (Estatuto Pyme).',BY(20416)],
['Comerciales y mercantiles','Ley 18.045','1981','Mercado de valores.',BY(18045)],
['Laborales y previsionales','Código del Trabajo','2003','Contrato de trabajo, remuneraciones, jornada, feriados y término de la relación laboral (DFL 1).',BL(207436)],
['Laborales y previsionales','Ley 21.735','2025','Reforma de pensiones: nuevas cotizaciones del empleador y Seguro Social.',BY(21735)],
['Laborales y previsionales','Ley 19.728','2001','Seguro de cesantía.',BY(19728)]];
const CATS=['Todas','Tributarias','Comerciales y mercantiles','Laborales y previsionales'];let cat='Todas';
$('lCat').innerHTML=CATS.map(c=>`<button type="button" class="chip" data-c="${c}" aria-pressed="${c===cat}">${c}</button>`).join('');
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const drawL=()=>{const q=norm($('lBus').value.trim());const r=LEY.filter(l=>(cat==='Todas'||l[0]===cat)&&(!q||norm(l.join(' ')).includes(q)));
  $('lList').innerHTML=r.map(l=>`<article class="card law"><span class="tag">${l[0]}</span><h3 style="margin-top:10px">${l[1]}</h3><p class="meta">Publicada en ${l[2]}</p><p>${l[3]}</p><a class="btn ghost" href="${esc(l[4])}" rel="noopener noreferrer">Ver texto actualizado</a></article>`).join('');
  $('lNone').hidden=r.length>0};
$('lCat').addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;cat=b.dataset.c;for(const x of $('lCat').children)x.setAttribute('aria-pressed',x.dataset.c===cat);drawL()});
$('lBus').addEventListener('input',drawL);
drawL();

/* ---------- Descargas ---------- */
const DL=/*DL_DATA*/[{"file": "liquidacion-de-sueldo.xlsx", "cat": "Remuneraciones", "title": "Liquidación de sueldo", "desc": "Haberes, gratificación legal, AFP, salud, seguro de cesantía, impuesto único y costo para el empleador, con los indicadores de noviembre 2026.", "size": 11091, "sha": "4434685b7607f70a185bd6f6132b8784102c8e821e5ed023b1ae72dcd921e57f", "sheets": ["Liquidación", "Tabla impuesto"], "preview": [["Sueldo base", "$900.000"], ["Horas extra (monto)", "$45.000"], ["Bonos y comisiones", "$50.000"], ["Gratificación legal (25% con tope de 4,75 ingresos mínimos al año)", "$219.115"], ["Total imponible", "$1.214.115"], ["Total haberes", "$1.314.115"], ["AFP", "$126.996"], ["Salud", "$84.988"], ["Seguro de cesantía", "$7.285"], ["Impuesto único de segunda categoría", "$676"], ["Total descuentos", "$219.945"], ["LÍQUIDO A PAGAR", "$1.094.170"]]}, {"file": "registro-boletas-honorarios.xlsx", "cat": "Independientes", "title": "Registro de boletas de honorarios", "desc": "Controla tus boletas del año y la retención de 15,25% que va al SII. Útil para revisar tu Operación Renta.", "size": 9599, "sha": "6b6197b1738e9545b3a8a6eefb2c7a2a599489f5bcf7d86fb4354303655a8d1b", "sheets": ["Boletas"], "preview": [["Fecha", "Cliente", "Monto bruto", "Retención", "Líquido recibido"], ["05-01-2026", "Cliente de ejemplo SpA", "$800.000", "$122.000", "$678.000"], ["12-02-2026", "Estudio Contable Ejemplo Ltda.", "$450.000", "$68.625", "$381.375"], ["03-03-2026", "Cliente de ejemplo SpA", "$800.000", "$122.000", "$678.000"]]}, {"file": "libro-compras-ventas-f29.xlsx", "cat": "Pymes", "title": "Registro de compras y ventas con resumen F29", "desc": "Anota tus facturas y boletas del mes y obtén el IVA a pagar, el remanente y el PPM para tu F29.", "size": 18096, "sha": "7515d9d3eb703d5ca5a75ca580549f929aa6de1b6a37c58626d0a4b74d3abd57", "sheets": ["Ventas", "Compras", "Resumen F29"], "preview": [["Período", "Diciembre 2026"], ["IVA débito fiscal (ventas)", "$364.800"], ["IVA crédito fiscal (compras)", "$180.500"], ["Remanente de crédito del mes anterior", "$0"], ["IVA a pagar", "$184.300"], ["Remanente para el mes siguiente", "$0"], ["Ventas netas del mes (base PPM)", "$1.920.000"], ["Tasa de PPM", "0,25%"], ["PPM", "$4.800"], ["Retenciones de honorarios pagados", "$0"], ["TOTAL A PAGAR EN EL F29", "$189.100"]]}, {"file": "balance-8-columnas.xlsx", "cat": "Contabilidad", "title": "Balance tributario de 8 columnas", "desc": "Ingresa débitos y créditos del mayor: clasifica saldos, calcula la utilidad y te avisa si cuadra.", "size": 9800, "sha": "bb05410215fdbda95481a41a2fbc0b886a1c41b9f1b55505146602b36d39230a", "sheets": ["Balance 8 columnas"], "preview": [["Cuenta", "Débitos", "Créditos", "Activo", "Pasivo"], ["Caja", "$2.500.000", "$1.800.000", "$700.000", "$0"], ["Banco", "$18.762.000", "$11.200.000", "$7.562.000", "$0"], ["Clientes", "$9.500.000", "$6.300.000", "$3.200.000", "$0"], ["Mercaderías", "$7.200.000", "$4.100.000", "$3.100.000", "$0"], ["Muebles y útiles", "$3.000.000", "$0", "$3.000.000", "$0"], ["Depreciación acumulada", "$0", "$600.000", "$0", "$600.000"], ["IVA crédito fiscal", "$1.368.000", "$0", "$1.368.000", "$0"]]}, {"file": "estados-financieros.xlsx", "cat": "Contabilidad", "title": "Balance general, estado de resultados e indicadores", "desc": "Estados financieros enlazados entre sí, con liquidez, endeudamiento, márgenes, ROA y ROE.", "size": 11098, "sha": "6a15164fd10cc7df1128abeeac524258def19b9ed7572ddc5ac0319a0d220abc", "sheets": ["Estado de resultados", "Balance general", "Indicadores"], "preview": [["Liquidez corriente", "1,41x"], ["Prueba ácida", "0,97x"], ["Capital de trabajo", "$10.516.000"], ["Endeudamiento (pasivo / patrimonio)", "1,25x"], ["Margen bruto", "40,0%"], ["Margen neto", "11,7%"], ["Rentabilidad sobre activos (ROA)", "19,6%"], ["Rentabilidad sobre patrimonio (ROE)", "44,1%"]]}, {"file": "flujo-de-caja-12-meses.xlsx", "cat": "Pymes", "title": "Flujo de caja a 12 meses", "desc": "Proyecta entradas y salidas de tu negocio y detecta a tiempo los meses con saldo negativo.", "size": 8109, "sha": "3b04b2c9da88d017707b85af7c7f4731b2e25a33f349021443f2921e1d28d861", "sheets": ["Flujo de caja"], "preview": [["Concepto", "Ene", "Feb", "Mar"], ["Saldo inicial de caja", "$3.500.000", "$3.930.000", "$4.360.000"], ["Entradas", "", "", ""], ["Ventas al contado", "$4.200.000", "$4.200.000", "$4.200.000"], ["Cobranza a clientes", "$2.800.000", "$2.800.000", "$2.800.000"], ["Otros ingresos", "$0", "$0", "$0"], ["Total entradas", "$7.000.000", "$7.000.000", "$7.000.000"], ["Salidas", "", "", ""], ["Pago a proveedores", "$3.100.000", "$3.100.000", "$3.100.000"], ["Remuneraciones y cotizaciones", "$1.650.000", "$1.650.000", "$1.650.000"], ["Arriendo", "$650.000", "$650.000", "$650.000"], ["Servicios básicos", "$120.000", "$120.000", "$120.000"]]}, {"file": "presupuesto-familiar.xlsx", "cat": "Finanzas de la casa", "title": "Presupuesto familiar", "desc": "Presupuesto contra gasto real por categoría, saldo del mes y comparación con la regla 50/30/20.", "size": 8602, "sha": "9a2ff14222ba1972318fb59d071569833cfe4cb3bf4f046ff67fa89c107dd785", "sheets": ["Presupuesto"], "preview": [["Gastos", "Presupuesto", "Real", "Diferencia"], ["Arriendo o dividendo", "$420.000", "$420.000", "$0"], ["Gastos comunes", "$55.000", "$58.000", "-$3.000"], ["Luz", "$32.000", "$35.500", "-$3.500"], ["Agua", "$18.000", "$16.900", "$1.100"], ["Gas", "$22.000", "$25.000", "-$3.000"], ["Internet y celular", "$35.000", "$35.000", "$0"], ["Supermercado y feria", "$210.000", "$236.000", "-$26.000"], ["Transporte", "$60.000", "$64.000", "-$4.000"], ["Salud y farmacia", "$30.000", "$12.000", "$18.000"], ["Educación", "$40.000", "$40.000", "$0"], ["Cuotas de créditos", "$70.000", "$70.000", "$0"]]}];
const SAFE_NAME=/^[a-z0-9-]{1,60}\.xlsx$/;
let lastDL=0;
const allowDL=()=>{const now=Date.now();if(now-lastDL<3000)return false;lastDL=now;
  try{const a=JSON.parse(localStorage.getItem('lc_dl')||'[]').filter(t=>typeof t==='number'&&now-t<3600000);if(a.length>=15)return false;a.push(now);localStorage.setItem('lc_dl',JSON.stringify(a))}catch(e){}
  return true};

$('dlList').innerHTML=DL.map((d,i)=>`<article class="card dl"><span class="tag">${esc(d.cat)}</span><h3 style="margin-top:6px">${esc(d.title)}</h3><p style="margin:0">${esc(d.desc)}</p>
  <p class="meta">Excel .xlsx · ${Math.round(d.size/1024)} KB · Hojas: ${d.sheets.map(esc).join(', ')}</p>
  <div class="hash"><span>SHA-256</span><code title="${d.sha}">${d.sha.slice(0,16)}…</code><button type="button" class="copy" data-h="${i}">Copiar</button></div>
  <details class="prev"><summary>Vista previa</summary><div class="scroll tight" style="margin-top:6px"><table><tbody>${d.preview.map(r=>`<tr>${r.map((c,j)=>`<td class="${j?'r':''}">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details>
  <div class="acts"><button type="button" class="btn" data-d="${i}">Descargar</button></div></article>`).join('');
const msg=t=>{$('dlMsg').textContent=t};
const hex=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
$('dlList').addEventListener('click',async e=>{
  const cp=e.target.closest('[data-h]');
  if(cp){try{await navigator.clipboard.writeText(DL[cp.dataset.h].sha);cp.textContent='Copiada'}catch(_){msg('No se pudo copiar. Huella completa: '+DL[cp.dataset.h].sha)}return}
  const b=e.target.closest('[data-d]');if(!b)return;const d=DL[b.dataset.d];
  b.disabled=true;b.textContent='Verificando…';
  try{if(!SAFE_NAME.test(d.file))throw new Error('nombre');if(!allowDL()){msg('Alcanzaste el límite de 15 descargas por hora. Intenta más tarde.');b.textContent='Descargar';return}const r=await fetch('descargas/'+encodeURIComponent(d.file),{cache:'no-store',credentials:'omit',redirect:'error'});if(!r.ok)throw new Error('net');const buf=await r.arrayBuffer();if(buf.byteLength!==d.size)throw new Error('size');const h=hex(await crypto.subtle.digest('SHA-256',buf));
    if(h!==d.sha){msg('La huella de '+d.file+' no coincide con la publicada. Por seguridad no se descargó.');b.textContent='No verificado';return}
    let saved=false;
    if(window.claude&&window.claude.use){const dw=await window.claude.use('downloads');if(dw){try{await dw.save({filename:d.file,data:buf});saved=true}catch(err){if(err&&err.code==='declined'){msg('Descarga cancelada.');b.textContent='Descargar';return}}}}
    if(!saved){const u=URL.createObjectURL(new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));const a=document.createElement('a');a.href=u;a.download=d.file;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000)}
    msg('Verificado: '+d.file+' coincide con su huella SHA-256.');b.textContent='Descargada ✓';
  }catch(err){msg('No se pudo descargar '+d.file+'. Intenta de nuevo.');b.textContent='Descargar'}
  finally{b.disabled=false}});
}
