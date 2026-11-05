(function(){
/* ---------- icons ---------- */
const IC={
search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
bag:'<rect x="4" y="7" width="16" height="14" rx="3"/><path d="M9 7V6a3 3 0 0 1 6 0v1"/><path d="M9 12a3 3 0 0 0 6 0"/>',
store:'<path d="M4 10v10h16V10"/><path d="M3 10 5 4h14l2 6z"/><path d="M10 20v-5h4v5"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
receipt:'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
truck:'<path d="M2 6h12v10H2z"/><path d="M14 10h4l3 3v3h-7"/><circle cx="6.5" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
minus:'<path d="M5 12h14"/>',
check:'<path d="m5 12 5 5 9-10"/>',
chevron:'<path d="m9 6 6 6-6 6"/>',
back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
phone:'<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M12 17h.01"/>',
shirt:'<path d="M8 3 3 6l2 4 2-1v12h10V9l2 1 2-4-5-3a4 4 0 0 1-8 0z"/>',
watch:'<rect x="6" y="7" width="12" height="10" rx="3"/><path d="M9 7V3h6v4M9 17v4h6v-4M12 10v2l1.5 1"/>',
headphones:'<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
backpack:'<path d="M6 9a6 6 0 0 1 12 0v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/><path d="M9 4.5V3h6v1.5M9 14h6v4H9z"/>',
chart:'<path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6"/>',
logout:'<path d="M10 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5"/><path d="m15 8 4 4-4 4M19 12H9"/>',
pin:'<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
box:'<path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="m4 7 8 4 8-4M12 11v10"/>',
chat:'<path d="M4 5h16v11H9l-5 4z"/>',
trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
card:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/>',
qr:'<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><path d="M14 14h2v2h-2zM18 18h2v2h-2zM14 18h2M18 14h2"/>',
users:'<circle cx="9" cy="8" r="3.5"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3 6"/>',
money:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6.5 9v.01M17.5 15v.01"/>',
alert:'<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17v.01"/>',
bell:'<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
wave:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 10V4.5a1.5 1.5 0 0 1 3 0V10M14 10V5.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7 6 6 0 0 1-5-3l-2.5-4a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',
eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
send:'<path d="M4 12 20 4l-6 16-3-7z"/>',
edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',
cash:'<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 12h.01M18 12h.01"/><circle cx="12" cy="12" r="2"/>'
};
const ic=(n,cls)=>'<svg class="i'+(cls?' '+cls:'')+'" viewBox="0 0 24 24" aria-hidden="true">'+IC[n]+'</svg>';
const star=()=>ic('star','fill');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const P=n=>Number(n).toLocaleString('en-US')+' төг';

/* ---------- static config ---------- */
const ROLES={
 guest:{name:'Зочин',desc:'Бүртгэлгүйгээр бараа, дэлгүүр хайж үзэх',icon:'user',g:['#8F96AB','#B9BED0'],tint:'#ECEDF3',ink:'#5D6478'},
 buyer:{name:'Худалдан авагч',desc:'Захиалга өгөх, хянах, үнэлгээ өгөх',icon:'bag',g:['#5B4BF0','#9A5CF7'],tint:'#ECE9FF',ink:'#5B4BF0'},
 merchant:{name:'Дэлгүүр /Merch',desc:'Дэлгүүр, бараа, захиалга, борлуулалт',icon:'store',g:['#FF7A59','#FFB86B'],tint:'#ECE9FF',ink:'#5B4BF0'},
 courier:{name:'Хүргэлт',desc:'Хүргэлт хүлээн авах, хуваарилах',icon:'truck',g:['#12B886','#4FE3B8'],tint:'#ECE9FF',ink:'#5B4BF0'},
 admin:{name:'Админ',desc:'Тайлан, бүтээгдэхүүн, дэлгүүр, гомдол',icon:'shield',g:['#2B2766','#5B4BF0'],tint:'#ECE9FF',ink:'#5B4BF0'}
};
const TABS={
 guest:[['home','Нүүр','home'],['stores','Дэлгүүр','store'],['cart','Сагс','bag'],['login','Нэвтрэх','lock']],
 buyer:[['home','Нүүр','home'],['stores','Дэлгүүр','store'],['cart','Сагс','bag'],['orders','Захиалга','receipt'],['profile','Профайл','user']],
 merchant:[['shop','Дэлгүүр','store'],['products','Бараа','box'],['morders','Захиалга','receipt'],['report','Тайлан','chart'],['mchats','Чат','chat']],
 courier:[['newdel','Шинэ хүргэлт','box'],['mydel','Миний хүргэлт','truck']],
 admin:[['areport','Тайлан','chart'],['aproducts','Бүтээгдэхүүн','box'],['astores','Дэлгүүр','shield'],['complaints','Гомдол','alert']]
};
const LOGIN={
 buyer:{title:'Худалдан авагч',sub:'Захиалга өгөх, хянахын тулд нэвтэрнэ үү',fields:[['l-phone','Утасны дугаар','99112233','tel'],['l-pass','Нууц үг','1234','password']],demo:'Туршилтын эрх: 99112233 · нууц үг 1234',reg:'buyer',regText:'Шинээр бүртгүүлэх'},
 merchant:{title:'Дэлгүүр /Merch',sub:'Дэлгүүрийн эзэмшигчийн нэвтрэх хэсэг',fields:[['l-code','Дэлгүүрийн код','NT-0001','text'],['l-reg','Байгууллагын регистр','6123456','text'],['l-pass','Нууц үг','1234','password']],demo:'Туршилтын эрх: NT-0001 · 6123456 · 1234',reg:'merchant',regText:'Дэлгүүр бүртгүүлэх'},
 courier:{title:'Хүргэгч',sub:'Хүргэлтийн ажилтны нэвтрэх хэсэг',fields:[['l-id','Хүргэгчийн ID','DRV-017','text'],['l-pin','PIN код (4 оронтой)','1234','password']],demo:'Туршилтын эрх: DRV-017 · PIN 1234',note:'Хүргэгчийн бүртгэлийг зөвхөн админ үүсгэнэ.'},
 admin:{title:'Админ',sub:'Системийн удирдлагын хэсэг',fields:[['l-user','Нэвтрэх нэр','admin','text'],['l-pass','Нууц үг','1234','password'],['l-otp','Баталгаажуулах код (2FA)','482913','text']],demo:'Туршилтын эрх: admin · 1234 · 482913',note:'Админы эрхийг зөвхөн байгууллагын дотоод сүлжээнээс ашиглана.'}
};
const START={guest:'home',buyer:'home',merchant:'report',courier:'newdel',admin:'areport'};
const STATUS=['Төлбөр төлөгдсөн','Дэлгүүр боловсруулж байна','Хүргэлтэд бэлэн','Хүргэгч хүлээн авсан','Хүргэлт хуваарилагдсан','Замд явж байна','Хүргэгдсэн'];
const SICON=['money','box','bag','user','clock','truck','check'];
const SCOL=['#4B6BFB','#FF9A3D','#8A4DF0','#12B886','#12B886','#12B886','#12B886'];
const CHIP=[['#E8ECFF','#4B5BEA'],['#FFF0E0','#D9730D'],['#F1E8FF','#8A4DF0'],['#DFF6EE','#0E9C72'],['#DFF6EE','#0E9C72'],['#DFF6EE','#0E9C72'],['#E9F7EF','#1E8B4C']];
const SLOTS=['Өнөөдөр 10:00–12:00','Өнөөдөр 14:00–16:00','Маргааш 10:00–12:00'];
const GRAD={blue:['#5B7CFA','#7B5CF5'],coral:['#FF6B6B','#FF9E7A'],teal:['#2BC4A0','#61E3C0'],gold:['#FFB547','#FFD27A']};
const CATS=[['all','Бүгд','box'],['electronics','Электрон','phone'],['clothes','Хувцас','shirt']];
const CATNAME={electronics:'Электрон',clothes:'Хувцас',home:'Гэр ахуй'};

function seed(){return{
 me:{name:'Болд',phone:'99112233',address:'БЗД, 13-р хороо, 45-р байр'},
 myStore:'nomin', courierName:'Ганаа', courierPhone:'95556677',
 stores:[
  {id:'nomin',name:'Номин Тех',cat:'electronics',desc:'Гар утас, чихэвч, электрон бараа',verified:true},
  {id:'goo',name:'Гоо Хувцас',cat:'clothes',desc:'Ноолууран болон өдөр тутмын хувцас',verified:true},
  {id:'bayan',name:'Баян Гэр',cat:'home',desc:'Гэр ахуйн бараа, гал тогоо',verified:false}
 ],
 products:[
  {id:'p1',name:'Ухаалаг утас X12',store:'nomin',cat:'electronics',price:1125000,old:1250000,icon:'phone',grad:'blue',stock:12,visible:true,desc:'6.5" дэлгэц, 128GB санах ой, 5000mAh батерей.',reviews:[{who:'Сараа',stars:5,text:'Маш сайн утас!'}]},
  {id:'p2',name:'Утасгүй чихэвч',store:'nomin',cat:'electronics',price:180000,old:0,icon:'headphones',grad:'blue',stock:25,visible:true,desc:'Bluetooth 5.3, дуу чимээ тусгаарлагч, 30 цаг цэнэг барина.',reviews:[]},
  {id:'p3',name:'Ноолууран цамц',store:'goo',cat:'clothes',price:192000,old:240000,icon:'shirt',grad:'coral',stock:8,visible:true,desc:'100% монгол ноолуур. M, L, XL хэмжээтэй.',reviews:[]},
  {id:'p4',name:'Ухаалаг цаг',store:'nomin',cat:'electronics',price:350000,old:0,icon:'watch',grad:'teal',stock:6,visible:true,desc:'Зүрхний цохилт, алхам тоолуур, 7 хоног цэнэг барина.',reviews:[]},
  {id:'p5',name:'Арьсан үүргэвч',store:'goo',cat:'clothes',price:220000,old:0,icon:'backpack',grad:'blue',stock:10,visible:true,desc:'Жинхэнэ арьс, 15" зөөврийн компьютер багтана.',reviews:[]},
  {id:'p6',name:'Цэнэглэгч 65W',store:'nomin',cat:'electronics',price:85000,old:0,icon:'box',grad:'gold',stock:30,visible:true,approval:'pending',desc:'USB-C хурдан цэнэглэгч, зөөврийн компьютерт тохирно.',reviews:[]}
 ],
 guestCart:[],
 notifs:[
  {id:'n1',to:'admin',kind:'product',ref:'p6',text:'Номин Тех шинэ бараа хянуулахаар илгээлээ: Цэнэглэгч 65W',read:false},
  {id:'n2',to:'admin',kind:'store',ref:'bayan',text:'Баян Гэр дэлгүүр баталгаажуулалт хүлээж байна',read:false},
  {id:'n3',to:'admin',kind:'complaint',ref:'C-01',text:'Болд ORD-001 захиалга дээр гомдол гаргалаа',read:false},
  {id:'n4',to:'merchant',kind:'product',ref:'p6',text:'Цэнэглэгч 65W админы хяналтад байна',read:true}
 ],
 cart:[{pid:'p1',qty:1},{pid:'p3',qty:2},{pid:'p2',qty:1}],
 orders:[
  {id:'ORD-001',buyer:'Болд',phone:'99112233',store:'nomin',items:[{pid:'p2',qty:1,price:180000}],status:6,pay:'Банкны карт',address:'БЗД, 13-р хороо, 45-р байр',slot:'Өчигдөр 14:00–16:00',courier:'Ганаа',rated:false},
  {id:'ORD-002',buyer:'Болд',phone:'99112233',store:'goo',items:[{pid:'p3',qty:2,price:192000}],status:2,pay:'Банкны карт',address:'БЗД, 13-р хороо, 45-р байр',slot:'',courier:'',rated:false},
  {id:'ORD-003',buyer:'Сараа',phone:'88001122',store:'nomin',items:[{pid:'p1',qty:1,price:1125000}],status:0,pay:'QPay',address:'ХУД, 3-р хороо, 12-р байр',slot:'',courier:'',rated:true}
 ],
 complaints:[{id:'C-01',order:'ORD-001',by:'Болд',text:'Хайрцаг нь бага зэрэг гэмтсэн ирсэн.',resolved:false}],
 chats:{nomin:{'Болд':[{from:'buyer',text:'Сайн байна уу, чихэвч баталгаатай юу?'},{from:'store',text:'Сайн байна уу! 1 жилийн баталгаатай.'}],'Сараа':[{from:'buyer',text:'Утас хэзээ хүргэгдэх вэ?'}]}},
 seq:4
};}

const KEY='online-delguur-proto-v2';
let S;
try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){S=null}
if(!S||!S.products)S=seed();
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};

const U={role:null,stack:[{s:'roles'}],cat:'all',q:'',slot:1,qty:1,sheet:null,toast:'',pay:'Банкны карт',rate:5,swiped:null,regRole:'buyer',addOpen:false};
const cur=()=>U.stack[U.stack.length-1];
const prod=id=>S.products.find(p=>p.id===id);
const store=id=>S.stores.find(s=>s.id===id);
const order=id=>S.orders.find(o=>o.id===id);
const total=o=>o.items.reduce((a,i)=>a+i.price*i.qty,0);
const rating=p=>p.reviews.length?(p.reviews.reduce((a,r)=>a+r.stars,0)/p.reviews.length):0;
const CK=()=>U.role==='guest'?'guestCart':'cart';
const cartCount=()=>S[CK()].reduce((a,c)=>a+c.qty,0);
const cartTotal=()=>S[CK()].reduce((a,c)=>a+prod(c.pid).price*c.qty,0);
const chip=st=>'<span class="chip" style="background:'+CHIP[st][0]+';color:'+CHIP[st][1]+'">'+STATUS[st]+'</span>';
const grad=g=>'linear-gradient(140deg,'+GRAD[g][0]+','+GRAD[g][1]+')';
const art=p=>p.img?'<img src="'+p.img+'" alt="'+esc(p.name)+'">':ic(p.icon);
const thumb=(p,size)=>'<div class="thumb'+(p.grad==='blue'?' dark':'')+(p.img?' img':'')+'" style="background:'+grad(p.grad)+(size?';width:'+size+'px;height:'+size+'px':'')+'">'+art(p)+'</div>';
const approved=p=>(p.approval||'approved')==='approved';
const visibleProducts=()=>S.products.filter(p=>p.visible&&approved(p)&&store(p.store)&&store(p.store).verified);
const APPR={pending:['Хянагдаж байна','#FFF0E0','#D9730D'],approved:['Зөвшөөрсөн','#DFF6EE','#0E9C72'],rejected:['Татгалзсан','#FFE8E5','#D63B2E']};
const apchip=p=>{const a=APPR[p.approval||'approved'];return '<span class="chip" style="background:'+a[1]+';color:'+a[2]+'">'+a[0]+'</span>'};
const unread=role=>S.notifs.filter(n=>n.to===role&&!n.read).length;
function notify(to,kind,ref,text){S.notifs.push({id:'n'+Date.now()+Math.random().toString(36).slice(2,5),to:to,kind:kind,ref:ref,text:text,read:false})}

/* ---------- navigation ---------- */
function go(s,p){U.stack.push(Object.assign({s:s},p||{}));U.qty=1;render(true)}
function back(){if(U.stack.length>1)U.stack.pop();render(true)}
function tab(t){U.stack=[{s:t}];render(true)}
function enter(role){U.role=role;U.stack=[{s:START[role]}];U.cat='all';U.q='';render(true)}
function logout(){U.role=null;U.stack=[{s:'roles'}];render(true)}
function toast(t){U.toast=t;render();clearTimeout(toast.t);toast.t=setTimeout(()=>{U.toast='';render()},2200)}

/* ---------- pieces ---------- */
function header(o){
 return '<div class="hdr"><div class="hrow"><div class="hic">'+ic(o.icon)+'</div><div class="htx"><small>'+esc(o.small)+'</small><strong>'+esc(o.big)+'</strong></div>'+
 ((U.role==='admin'||U.role==='merchant')?'<button class="hbtn" data-a="go" data-x="notifs" aria-label="Мэдэгдэл">'+ic('bell')+(unread(U.role)?'<span class="nbadge">'+unread(U.role)+'</span>':'')+'</button>':'')+'<button class="hbtn" data-a="logout" aria-label="Гарах">'+ic('logout')+'</button></div>'+(o.extra||'')+'</div>';
}
function plainHead(title,noBack,right){return '<div class="plain-h">'+(noBack?'':'<button class="back" data-a="back" aria-label="Буцах">'+ic('back')+'</button>')+'<h1>'+esc(title)+'</h1>'+(right||'')+'</div>'}
function pcard(p){
 const off=p.old?Math.round((1-p.price/p.old)*100):0;
 return '<div class="pcard"><button data-a="product" data-x="'+p.id+'" style="text-align:left;display:flex;flex-direction:column;gap:3px">'+
  (off?'<span class="off">-'+off+'%</span>':'')+thumb(p)+
  '<b>'+esc(p.name)+'</b><span class="st">'+esc(store(p.store).name)+'</span>'+
  '<span class="rt">'+star()+rating(p).toFixed(1)+' ('+p.reviews.length+')</span>'+
  '<span class="pr"><span class="price">'+P(p.price)+'</span>'+(p.old?'<span class="old">'+p.old.toLocaleString('en-US')+'</span>':'')+'</span></button>'+
  '<button class="add" data-a="quickadd" data-x="'+p.id+'" aria-label="Сагсанд нэмэх" style="top:90px;bottom:auto">'+ic('plus')+'</button></div>';
}
function stat(icon,g,val,label){return '<div class="stat"><div class="si" style="background:linear-gradient(140deg,'+g[0]+','+g[1]+')">'+ic(icon)+'</div><b>'+val+'</b><span>'+label+'</span></div>'}
function bars(title,rows){
 const max=Math.max(1,...rows.map(r=>r[1]));
 return '<div class="card"><div class="h3">'+ic('chart')+title+'</div><div style="display:flex;flex-direction:column;gap:12px">'+
 (rows.length?rows.map((r,i)=>'<div class="bar"><div class="row"><span>'+esc(r[0])+'</span><b>'+r[2]+'</b></div><div class="track"><i style="width:'+(r[1]/max*100)+'%;background:'+(i%2?'linear-gradient(90deg,#FF7A59,#FFB86B)':'linear-gradient(90deg,#5B4BF0,#9A5CF7)')+'"></i></div></div>').join(''):'<span class="muted">Одоогоор мэдээлэл алга.</span>')+
 '</div></div>';
}
const G={orange:['#FF7A59','#FFB86B'],purple:['#5B4BF0','#9A5CF7'],green:['#12B886','#4FE3B8'],gold:['#FFB020','#FFD66B'],red:['#FF6B6B','#FF9E7A']};

/* ---------- screens ---------- */
const SCR={};

SCR.roles=()=>({raw:true,body:
 '<div class="hero"><i style="width:170px;height:170px;right:-30px;top:-40px"></i><i style="width:120px;height:120px;left:-50px;top:170px"></i></div>'+
 '<div class="roles"><div class="logo">'+ic('bag')+'</div><h1>Онлайн дэлгүүр</h1><div class="tl">Нэг дороос бүх дэлгүүр</div><div class="rlist">'+
 Object.keys(ROLES).map(k=>{const r=ROLES[k];return '<button class="rcard" data-a="pickrole" data-x="'+k+'"><span class="ri" style="background:linear-gradient(140deg,'+r.g[0]+','+r.g[1]+')">'+ic(r.icon)+'</span><span class="sp"><b>'+r.name+'</b><span>'+r.desc+'</span></span><span style="color:'+r.g[0]+'">'+ic('chevron')+'</span></button>'}).join('')+
 '</div><button class="reglink" data-a="go" data-x="register">'+ic('user')+'Шинээр бүртгэл үүсгэх</button></div>'});

SCR.register=()=>({head:plainHead('Бүртгэл үүсгэх'),body:'<div class="body">'+
 '<p class="muted" style="margin:0">Худалдан авагч эсвэл дэлгүүр эзэмшигчээр бүртгүүлнэ.</p>'+
 '<div class="seg"><button class="'+(U.regRole==='buyer'?'on':'')+'" data-a="regrole" data-x="buyer">'+ic('bag')+'Худалдан авагч</button><button class="'+(U.regRole==='merchant'?'on':'')+'" data-a="regrole" data-x="merchant">'+ic('store')+'Дэлгүүр</button></div>'+
 '<form id="regform" style="display:flex;flex-direction:column;gap:12px">'+
 '<div class="field"><label for="r-name">'+(U.regRole==='buyer'?'Таны нэр':'Дэлгүүрийн нэр')+'</label><input id="r-name" required placeholder="'+(U.regRole==='buyer'?'Жишээ: Тэмүүлэн':'Жишээ: Мөнх Маркет')+'"></div>'+
 '<div class="field"><label for="r-phone">Утасны дугаар</label><input id="r-phone" required inputmode="numeric" placeholder="99xxxxxx"></div>'+
 (U.regRole==='merchant'?'<div class="field"><label for="r-cat">Ангилал</label><select id="r-cat"><option value="electronics">Электрон</option><option value="clothes">Хувцас</option><option value="home">Гэр ахуй</option></select></div>':'<div class="field"><label for="r-addr">Хүргэлтийн хаяг</label><input id="r-addr" placeholder="Дүүрэг, хороо, байр"></div>')+
 '<div class="field"><label for="r-pass">Нууц үг</label><input id="r-pass" type="password" required minlength="4" placeholder="Хамгийн багадаа 4 тэмдэгт"></div>'+
 '<button class="btn" type="submit">Бүртгүүлэх</button></form></div>'});

SCR.signin=c=>{const L=LOGIN[c.r];
 return {raw:true,statusLight:true,body:'<div class="lhero"><button class="back" data-a="back" aria-label="Буцах">'+ic('back')+'</button><div class="lic">'+ic(ROLES[c.r].icon)+'</div><h1>'+L.title+'</h1><p>'+L.sub+'</p></div>'+
 '<div class="body" style="padding-top:20px">'+(U.next&&c.r==='buyer'?'<div class="note">'+ic('bag')+'<span>Захиалгаа үргэлжлүүлэхийн тулд нэвтэрнэ үү. Сагсан дахь бараа хадгалагдана.</span></div>':'')+
 '<form id="signinform" data-r="'+c.r+'" style="display:flex;flex-direction:column;gap:12px">'+
 L.fields.map(f=>'<div class="field"><label for="'+f[0]+'">'+f[1]+'</label><input id="'+f[0]+'" type="'+f[3]+'" value="'+f[2]+'" required autocomplete="off"></div>').join('')+
 '<div class="err" id="l-err"></div><button class="btn" type="submit">Нэвтрэх</button></form>'+
 '<div class="demo">'+ic('lock')+L.demo+'</div>'+
 (L.note?'<small class="muted">'+L.note+'</small>':'')+
 '<div class="row" style="justify-content:space-between"><button class="linkbtn" data-a="forgot">Нууц үг мартсан?</button>'+(L.reg?'<button class="linkbtn" data-a="register" data-x="'+L.reg+'">'+L.regText+'</button>':'')+'</div></div>'}};
SCR.login=()=>({head:plainHead('Нэвтрэх',true),body:'<div class="body"><div class="empty"><div class="ring">'+ic('lock')+'</div><b style="color:var(--ink);font-size:17px">Нэвтэрч орно уу</b><span>Захиалга өгөх, сагс ашиглах, үнэлгээ өгөхийн тулд нэвтрэх шаардлагатай.</span></div>'+
 '<button class="btn" data-a="signin" data-x="buyer">Худалдан авагчаар нэвтрэх</button><button class="btn outline" data-a="register" data-x="buyer">Шинээр бүртгүүлэх</button><button class="btn outline" data-a="signin" data-x="merchant">Дэлгүүр эзэмшигч бол энд дарна уу</button></div>'});

SCR.home=()=>{
 const guest=U.role==='guest';
 let list=visibleProducts();
 if(U.cat!=='all')list=list.filter(p=>p.cat===U.cat);
 if(U.q.trim()){const q=U.q.trim().toLowerCase();list=list.filter(p=>(p.name+' '+store(p.store).name).toLowerCase().includes(q))}
 const promo=prod('p3');
 return {head:header({icon:'wave',small:guest?'Тавтай морил,':'Сайн байна уу,',big:guest?'Зочин':S.me.name,extra:'<label class="search">'+ic('search')+'<input id="q" placeholder="Бараа, дэлгүүр хайх" value="'+esc(U.q)+'" autocomplete="off"></label>'}),
 body:'<div class="body">'+
  (U.q?'':'<button class="promo" data-a="product" data-x="p3"><span class="badge">20% ХЯМДРАЛ</span><h3>'+esc(promo.name)+'</h3><p>Гоо Хувцас · '+P(promo.price)+'</p>'+ic('shirt')+'</button><div class="dots"><i></i><i></i></div>')+
  '<div class="cats">'+CATS.map(c=>'<button class="'+(U.cat===c[0]?'on':'')+'" data-a="cat" data-x="'+c[0]+'">'+ic(c[2])+c[1]+'</button>').join('')+'</div>'+
  '<div class="h2">'+(U.q?'Хайлтын үр дүн':U.cat==='all'?'Бүх бараа':CATNAME[U.cat])+'<small>'+list.length+' бараа</small></div>'+
  (list.length?'<div class="grid">'+list.map(pcard).join('')+'</div>':'<div class="empty"><div class="ring">'+ic('search')+'</div>“'+esc(U.q)+'” гэсэн бараа олдсонгүй.</div>')+
 '</div>',nav:true};
};

SCR.product=c=>{
 const p=prod(c.x),st=store(p.store),guest=U.role==='guest';
 const off=p.old?Math.round((1-p.price/p.old)*100):0;
 return {raw:true,statusLight:true,body:
 '<div class="phero" style="background:'+grad(p.grad)+'"><div class="tb"><button data-a="back" aria-label="Буцах">'+ic('back')+'</button><button data-a="tab" data-x="cart" aria-label="Сагс">'+ic('bag')+(!cartCount()?'':'<span class="cnt">'+cartCount()+'</span>')+'</button></div><div class="thumb big'+(p.img?' img':'')+'">'+art(p)+'</div></div>'+
 '<div class="body" style="padding-top:20px">'+
  '<div class="ptitle"><h1>'+esc(p.name)+'</h1>'+(off?'<span class="offb">-'+off+'%</span>':'')+'</div>'+
  '<div class="bigprice"><span class="price">'+P(p.price)+'</span>'+(p.old?'<span class="old" style="font-size:14px">'+P(p.old)+'</span>':'')+'</div>'+
  '<div class="row" style="flex-wrap:wrap;gap:8px"><span class="tag" style="background:#FFF3DC;color:#B77700">'+star()+rating(p).toFixed(1)+' · '+p.reviews.length+' үнэлгээ</span><span class="tag" style="background:#DFF6EE;color:#0E9C72">'+ic('box')+'Үлдэгдэл '+p.stock+'</span><span class="tag" style="background:#E8ECFF;color:#4B5BEA">'+ic(p.cat==='clothes'?'shirt':'phone')+CATNAME[p.cat]+'</span></div>'+
  '<p style="margin:0;font-size:15px;line-height:1.5">'+esc(p.desc)+'</p>'+
  '<div class="card" style="padding:0"><div class="store-row"><button class="row sp" data-a="store" data-x="'+st.id+'" style="text-align:left"><span class="circ">'+ic('store')+'</span><span class="sp"><b>'+esc(st.name)+(st.verified?' ✓':'')+'</b><br><small class="muted">'+esc(st.desc)+'</small></span></button><button class="circ" data-a="'+(guest?'needlogin':'chat')+'" data-x="'+st.id+'" aria-label="Дэлгүүртэй чатлах">'+ic('chat')+'</button></div></div>'+
  '<div class="h3" style="margin:4px 0 0">Үнэлгээ, сэтгэгдэл</div>'+
  (p.reviews.length?p.reviews.map(r=>'<div class="card review"><span class="avatar">'+esc(r.who[0])+'</span><div><div class="row" style="gap:8px"><b>'+esc(r.who)+'</b><span class="stars">'+Array.from({length:r.stars},star).join('')+'</span></div><div class="muted" style="margin-top:2px">'+esc(r.text)+'</div></div></div>').join(''):'<div class="muted">Одоогоор үнэлгээ алга.</div>')+
 '</div>',
 bottom:'<div class="stepper"><button data-a="qty" data-x="-1" aria-label="Хасах">'+ic('minus')+'</button><span>'+U.qty+'</span><button data-a="qty" data-x="1" aria-label="Нэмэх">'+ic('plus')+'</button></div><button class="btn" style="flex:1" data-a="addcart" data-x="'+p.id+'"'+(p.stock<1?' disabled':'')+'>'+(p.stock<1?'Дууссан':'Сагсанд хийх · '+(p.price*U.qty).toLocaleString('en-US'))+'</button>'};
};

SCR.stores=()=>({head:plainHead('Дэлгүүрүүд',true),body:'<div class="body">'+
 S.stores.filter(s=>s.verified).map(s=>{const n=S.products.filter(p=>p.store===s.id&&p.visible).length;return '<button class="card li" data-a="store" data-x="'+s.id+'"><span class="circ" style="width:48px;height:48px">'+ic('store')+'</span><span class="sp"><b style="font-size:16px">'+esc(s.name)+' ✓</b><br><small class="muted">'+esc(s.desc)+'</small><br><small class="muted">'+CATNAME[s.cat]+' · '+n+' бараа</small></span>'+ic('chevron')+'</button>'}).join('')+'</div>',nav:true});

SCR.store=c=>{const s=store(c.x);const list=visibleProducts().filter(p=>p.store===s.id);
 return {head:plainHead(s.name),body:'<div class="body"><div class="card row"><span class="circ" style="width:48px;height:48px">'+ic('store')+'</span><div class="sp"><b>'+esc(s.name)+(s.verified?' ✓':'')+'</b><div class="muted">'+esc(s.desc)+'</div></div>'+(U.role==='buyer'?'<button class="circ" data-a="chat" data-x="'+s.id+'" aria-label="Чатлах">'+ic('chat')+'</button>':'')+'</div>'+
 '<div class="h2">Бараа<small>'+list.length+' бараа</small></div><div class="grid">'+list.map(pcard).join('')+'</div></div>'}};

SCR.cart=()=>{
 const n=cartCount();
 return {head:plainHead('Миний сагс',true),body:'<div class="body" style="padding-top:8px">'+
 (U.role==='guest'&&S[CK()].length?'<div class="note">'+ic('user')+'<span>Та зочноор орсон байна. Захиалах үед нэвтрэх хуудас руу шилжинэ.</span></div>':'')+(S[CK()].length?'<small class="muted">← Устгахын тулд зүүн тийш шудрана уу</small>'+S[CK()].map(c=>{const p=prod(c.pid);return '<div class="crow"><button class="del" data-a="rmcart" data-x="'+p.id+'" aria-label="Устгах">'+ic('trash')+'</button><div class="inner'+(U.swiped===p.id?' open':'')+'" data-swipe="'+p.id+'">'+thumb(p)+'<div class="sp" data-a="product" data-x="'+p.id+'" style="cursor:pointer"><b>'+esc(p.name)+'</b><small>'+esc(store(p.store).name)+'</small><span class="ppri">'+P(p.price*c.qty)+'</span></div><div class="stepper"><button data-a="cqty" data-x="'+p.id+'" data-d="-1" aria-label="Хасах">'+ic('minus')+'</button><span>'+c.qty+'</span><button data-a="cqty" data-x="'+p.id+'" data-d="1" aria-label="Нэмэх">'+ic('plus')+'</button></div></div></div>'}).join('')
 :'<div class="empty"><div class="ring">'+ic('bag')+'</div><b style="color:var(--ink)">Сагс хоосон байна</b><span>Нүүр хуудаснаас бараа сонгоод нэмээрэй.</span><button class="btn sm" style="width:auto;padding:0 18px" data-a="tab" data-x="home">Бараа үзэх</button></div>')+
 '</div>',bottom:S[CK()].length?'<div class="sp"><small class="muted">Нийт ('+n+' ш)</small><div style="font-size:22px;font-weight:900">'+P(cartTotal())+'</div></div><button class="btn" style="width:150px" data-a="'+(U.role==='guest'?'guestcheckout':'go')+'" data-x="checkout">Захиалах →</button>':'',nav:true};
};

SCR.checkout=()=>({head:plainHead('Захиалга баталгаажуулах'),body:'<div class="body">'+
 '<div class="card"><div class="h3">'+ic('pin')+'Хүргэлтийн хаяг</div><div class="field"><textarea id="addr" aria-label="Хүргэлтийн хаяг" style="min-height:60px">'+esc(S.me.address)+'</textarea></div><div class="meta" style="margin-top:6px">'+ic('user')+esc(S.me.name)+' · '+esc(S.me.phone)+'</div></div>'+
 '<div class="card"><div class="h3">'+ic('card')+'Төлбөрийн хэлбэр</div><div class="seg">'+[['Банкны карт','card'],['QPay','qr'],['Бэлнээр','cash']].map(x=>'<button class="'+(U.pay===x[0]?'on':'')+'" data-a="pay" data-x="'+x[0]+'">'+ic(x[1])+x[0]+'</button>').join('')+'</div></div>'+
 '<div class="card"><div class="h3">'+ic('receipt')+'Бараа</div>'+S[CK()].map(c=>{const p=prod(c.pid);return '<div class="line"><span>'+esc(p.name)+' × '+c.qty+'</span><b>'+P(p.price*c.qty)+'</b></div>'}).join('')+'<div class="line"><span class="muted">Хүргэлт</span><b>Үнэгүй</b></div><hr class="sep"><div class="line"><b>Нийт</b><b>'+P(cartTotal())+'</b></div></div>'+
 '<small class="muted">Өөр өөр дэлгүүрийн бараа тусдаа захиалга болж үүснэ.</small></div>',
 bottom:'<button class="btn" data-a="placeorder">Төлөх · '+P(cartTotal())+'</button>'});

SCR.success=c=>({raw:true,body:'<div class="success"><div class="ring">'+ic('check')+'</div><h1>Захиалга амжилттай!</h1><p class="muted" style="margin:0">'+c.ids.join(', ')+' дугаартай захиалга үүслээ. Дэлгүүр баталгаажуулмагц хүргэлтэд гарна.</p><button class="btn" data-a="track" data-x="'+c.ids[0]+'" style="margin-top:12px">Захиалга хянах</button><button class="btn outline" data-a="tab" data-x="home">Нүүр хуудас руу</button></div>'});

SCR.orders=()=>{const mine=S.orders.filter(o=>o.buyer===S.me.name).slice().reverse();
 return {head:plainHead('Миний захиалга',true),body:'<div class="body">'+(mine.length?mine.map(o=>'<button class="card ocard" data-a="track" data-x="'+o.id+'" style="text-align:left"><div class="top"><b>'+o.id+'</b>'+chip(o.status)+'</div><span class="muted">'+esc(store(o.store).name)+' · '+o.items.map(i=>esc(prod(i.pid).name)+' × '+i.qty).join(', ')+'</span><div class="row"><span class="ppri sp">'+P(total(o))+'</span><span class="muted row" style="gap:2px">Дэлгэрэнгүй'+ic('chevron')+'</span></div></button>').join(''):'<div class="empty"><div class="ring">'+ic('receipt')+'</div>Захиалга алга байна.</div>')+'</div>',nav:true}};

SCR.track=c=>{const o=order(c.x),st=store(o.store);
 return {head:plainHead('Захиалга '+o.id),body:'<div class="body" style="padding-top:12px">'+
 '<div class="sbanner" style="background:linear-gradient(110deg,'+SCOL[o.status]+','+(o.status>=3?'#4FE3B8':'#9A8CFF')+')">'+ic(SICON[o.status])+'<div><b>'+STATUS[o.status]+'</b><span>'+esc(st.name)+' · '+esc(o.pay)+'</span></div></div>'+
 '<div class="card"><div class="h3">Бараа</div>'+o.items.map(i=>'<div class="line"><span>'+esc(prod(i.pid).name)+' × '+i.qty+'</span><b>'+P(i.price*i.qty)+'</b></div>').join('')+'<hr class="sep"><div class="line"><b>Нийт</b><b>'+P(total(o))+'</b></div></div>'+
 '<div class="card"><div class="h3">Хүргэлтийн явц</div><div class="tl">'+timeline(o.status)+'</div>'+
 '<div style="margin-top:8px"><div class="meta">'+ic('pin')+esc(o.address)+'</div>'+(o.courier?'<div class="meta">'+ic('truck')+'Хүргэгч '+esc(o.courier)+' ('+S.courierPhone+')</div>':'')+(o.slot?'<div class="meta">'+ic('clock')+esc(o.slot)+'</div>':'')+'</div></div>'+
 (U.role==='buyer'?'<div style="display:flex;flex-direction:column;gap:8px;align-items:flex-start">'+(o.status===6&&!o.rated?'<button class="btn" data-a="go" data-x="rate" data-o="'+o.id+'">'+ic('star')+'Үнэлгээ өгөх</button>':'')+'<button class="btn ghost" data-a="go" data-x="complain" data-o="'+o.id+'">'+ic('alert')+'Гомдол мэдүүлэх</button><button class="btn ghost" data-a="chat" data-x="'+o.store+'">'+ic('chat')+'Дэлгүүртэй холбогдох</button></div>':'')+
 '</div>'}};
function timeline(s){return STATUS.map((name,i)=>{const done=i<s,isCur=i===s&&s<6,isDone=i<=s;const last=i===STATUS.length-1;
 const cls=isCur?'cur':(isDone?'':'todo');
 return '<div class="step"><div class="rail"><span class="dot '+cls+'" style="background:'+SCOL[i]+'">'+(isDone?ic(SICON[i]):'')+'</span>'+(last?'':'<span class="bar2" style="background:'+(done?SCOL[i+1]:'var(--line)')+'"></span>')+'</div><div class="lbl '+cls+'">'+name+'</div></div>'}).join('')}

SCR.complain=c=>({head:plainHead('Гомдол мэдүүлэх'),body:'<div class="body"><div class="card"><b>'+c.o+'</b> · <span class="muted">'+esc(store(order(c.o).store).name)+'</span></div><form id="complainform" data-o="'+c.o+'" style="display:flex;flex-direction:column;gap:12px"><div class="field"><label for="c-text">Юу болсныг бичнэ үү</label><textarea id="c-text" required placeholder="Жишээ: Бараа гэмтэлтэй ирсэн"></textarea></div><button class="btn" type="submit">Илгээх</button></form><small class="muted">Админ гомдлыг шалгаж, хариу өгнө.</small></div>'});

SCR.rate=c=>{const o=order(c.o);return {head:plainHead('Үнэлгээ өгөх'),body:'<div class="body"><div class="card"><b>'+o.items.map(i=>esc(prod(i.pid).name)).join(', ')+'</b><div class="muted">'+esc(store(o.store).name)+'</div></div><div class="ratepick">'+[1,2,3,4,5].map(n=>'<button class="'+(n<=U.rate?'on':'')+'" data-a="rateset" data-x="'+n+'" aria-label="'+n+' од">'+star()+'</button>').join('')+'</div><form id="rateform" data-o="'+o.id+'" style="display:flex;flex-direction:column;gap:12px"><div class="field"><label for="rt-text">Сэтгэгдэл</label><textarea id="rt-text" placeholder="Бараа таалагдсан уу?"></textarea></div><button class="btn" type="submit">Үнэлгээ илгээх</button></form></div>'}};

SCR.chat=c=>{const s=store(c.x);const th=((S.chats[s.id]||{})[S.me.name])||[];
 return {head:plainHead(s.name),body:'<div class="msgs">'+(th.length?th.map(m=>'<div class="msg '+(m.from==='buyer'?'me':'them')+'">'+esc(m.text)+'</div>').join(''):'<div class="empty">Дэлгүүрт асуултаа бичээрэй.</div>')+'</div>',composer:{to:s.id,as:'buyer',buyer:S.me.name}}};

SCR.profile=()=>{const mine=S.orders.filter(o=>o.buyer===S.me.name);
 return {head:header({icon:'user',small:'Миний профайл',big:S.me.name}),body:'<div class="body">'+
 '<div class="stats">'+stat('receipt',G.purple,mine.length,'Нийт захиалга')+stat('money',G.orange,P(mine.reduce((a,o)=>a+total(o),0)),'Нийт зарцуулалт')+'</div>'+
 '<div class="card"><div class="h3">'+ic('user')+'Хувийн мэдээлэл</div><form id="profform" style="display:flex;flex-direction:column;gap:10px"><div class="field"><label for="pf-phone">Утас</label><input id="pf-phone" value="'+esc(S.me.phone)+'"></div><div class="field"><label for="pf-addr">Хаяг</label><input id="pf-addr" value="'+esc(S.me.address)+'"></div><button class="btn sm" type="submit">Хадгалах</button></form></div>'+
 '<button class="btn outline" data-a="logout">'+ic('logout')+'Гарах</button></div>',nav:true}};

/* merchant */
const my=()=>store(S.myStore);
function mHeader(){const s=my();return header({icon:'store',small:'Миний дэлгүүр',big:s.name,extra:'<div class="hsub">'+CATNAME[s.cat]+' · '+esc(s.desc)+'</div>'})}
function verifiedBox(s){return s.verified?'<div class="verified">'+ic('shield')+'<div><b>Баталгаажсан дэлгүүр</b><div class="muted" style="font-size:13px">Таны бараа хэрэглэгчдэд харагдаж байна.</div></div></div>':'<div class="verified pend">'+ic('clock')+'<div><b>Баталгаажуулалт хүлээгдэж байна</b><div class="muted" style="font-size:13px">Админ баталгаажуулсны дараа бараа харагдана.</div></div></div>'}
function nextAction(o){if(o.status===0)return['Хүлээн авч бэлтгэх',1];if(o.status===1)return['Хүргэлтэд бэлэн болгох',2];return null}
function morderCard(o){const a=nextAction(o);return '<div class="card ocard"><div class="top"><b>'+o.id+' · '+esc(o.buyer)+'</b>'+chip(o.status)+'</div><span class="muted">'+o.items.map(i=>esc(prod(i.pid).name)+' × '+i.qty).join(', ')+' · '+P(total(o))+'</span>'+(a?'<button class="btn" data-a="advance" data-x="'+o.id+'" data-to="'+a[1]+'">'+a[0]+'</button>':'')+'</div>'}
SCR.report=()=>{const s=my();const os=S.orders.filter(o=>o.store===s.id);const ps=S.products.filter(p=>p.store===s.id);
 const sold={};os.forEach(o=>o.items.forEach(i=>sold[i.pid]=(sold[i.pid]||0)+i.qty));
 const rated=ps.filter(p=>p.reviews.length);const avg=rated.length?rated.reduce((a,p)=>a+rating(p),0)/rated.length:0;
 const pending=os.filter(o=>o.status<2);
 return {head:mHeader(),body:'<div class="body">'+verifiedBox(s)+
 '<div class="stats">'+stat('money',G.orange,P(os.reduce((a,o)=>a+total(o),0)),'Нийт борлуулалт')+stat('receipt',G.purple,os.length,'Захиалга')+stat('truck',G.green,os.filter(o=>o.status===6).length,'Хүргэгдсэн')+stat('star',G.gold,avg.toFixed(1),'Дундаж үнэлгээ')+'</div>'+
 bars('Барааны борлуулалт (ширхэг)',Object.keys(sold).map(k=>[prod(k).name,sold[k],sold[k]+' ш']))+
 (pending.length?'<div class="h2">Шийдвэрлэх захиалга<small>'+pending.length+'</small></div>'+pending.map(morderCard).join(''):'')+
 '</div>',nav:true}};
SCR.morders=()=>{const os=S.orders.filter(o=>o.store===S.myStore).slice().reverse();
 return {head:plainHead('Захиалга',true),body:'<div class="body">'+(os.length?os.map(morderCard).join(''):'<div class="empty"><div class="ring">'+ic('receipt')+'</div>Захиалга ирээгүй байна.</div>')+'</div>',nav:true}};
SCR.products=()=>{const ps=S.products.filter(p=>p.store===S.myStore);
 return {head:plainHead('Миний бараа',true,'<button class="btn sm" style="width:auto;padding:0 14px" data-a="go" data-x="addproduct">'+ic('plus')+'Нэмэх</button>'),body:'<div class="body">'+(ps.length?ps.map(p=>'<div class="card li" style="flex-wrap:wrap">'+thumb(p)+'<div class="sp"><b>'+esc(p.name)+'</b><div class="ppri">'+P(p.price)+'</div><div style="margin-top:4px">'+apchip(p)+'</div>'+(p.approval==='rejected'&&p.rejectReason?'<small style="color:var(--bad)">Шалтгаан: '+esc(p.rejectReason)+'</small>':'')+(p.approval==='rejected'?'<br><button class="linkbtn" data-a="resubmit" data-x="'+p.id+'">Засаад дахин илгээх</button>':'')+'</div><div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px"><small class="muted">Үлдэгдэл</small><div class="stepper"><button data-a="stock" data-x="'+p.id+'" data-d="-1" aria-label="Хасах">'+ic('minus')+'</button><span>'+p.stock+'</span><button data-a="stock" data-x="'+p.id+'" data-d="1" aria-label="Нэмэх">'+ic('plus')+'</button></div></div></div>').join(''):'<div class="empty"><div class="ring">'+ic('box')+'</div>Бараа нэмээгүй байна.</div>')+'</div>',nav:true}};
SCR.addproduct=()=>({head:plainHead('Бараа нэмэх'),body:'<div class="body"><div class="note">'+ic('shield')+'<span>Шинэ бараа админы хяналтаар орсны дараа хэрэглэгчдэд харагдана.</span></div><form id="prodform" style="display:flex;flex-direction:column;gap:12px">'+
 '<div class="field"><label for="ap-img">Барааны зураг</label><label class="upload" id="ap-drop">'+(U.draftImg?'<img src="'+U.draftImg+'" alt="Сонгосон зураг">':'<span class="ph">'+ic('plus')+'<b style="color:var(--ink)">Зураг оруулах</b><small>JPG, PNG · дарж сонгоно уу</small></span>')+'<input id="ap-img" type="file" accept="image/*"></label></div>'+
 '<div class="field"><label for="ap-name">Барааны нэр</label><input id="ap-name" required placeholder="Жишээ: Цэнэглэгч 20W"></div>'+
 '<div class="field"><label for="ap-price">Үнэ (төг)</label><input id="ap-price" required type="number" min="100" placeholder="45000"></div>'+
 '<div class="field"><label for="ap-stock">Үлдэгдэл</label><input id="ap-stock" required type="number" min="0" value="10"></div>'+
 '<div class="field"><label for="ap-cat">Ангилал</label><select id="ap-cat"><option value="electronics">Электрон</option><option value="clothes">Хувцас</option></select></div>'+
 '<div class="field"><label for="ap-desc">Тайлбар</label><textarea id="ap-desc" placeholder="Барааны онцлог"></textarea></div>'+
 '<button class="btn" type="submit">'+ic('send')+'Хянуулахаар илгээх</button></form></div>'});
SCR.shop=()=>{const s=my();return {head:mHeader(),body:'<div class="body">'+verifiedBox(s)+
 '<div class="card"><div class="h3">'+ic('edit')+'Дэлгүүрийн мэдээлэл</div><form id="shopform" style="display:flex;flex-direction:column;gap:10px"><div class="field"><label for="sh-name">Нэр</label><input id="sh-name" value="'+esc(s.name)+'"></div><div class="field"><label for="sh-desc">Тайлбар</label><input id="sh-desc" value="'+esc(s.desc)+'"></div><button class="btn sm" type="submit">Хадгалах</button></form></div>'+
 '<button class="card li" data-a="store" data-x="'+s.id+'">'+ic('eye')+'<span class="sp"><b>Хэрэглэгчид хэрхэн харагдах</b><br><small class="muted">Дэлгүүрийн нүүрийг харах</small></span>'+ic('chevron')+'</button></div>',nav:true}};
SCR.mchats=()=>{const th=S.chats[S.myStore]||{};const names=Object.keys(th);
 return {head:plainHead('Чат',true),body:'<div class="body">'+(names.length?names.map(n=>{const last=th[n][th[n].length-1];return '<button class="card li" data-a="go" data-x="mchat" data-o="'+esc(n)+'"><span class="avatar">'+esc(n[0])+'</span><span class="sp"><b>'+esc(n)+'</b><br><small class="muted">'+(last.from==='store'?'Та: ':'')+esc(last.text)+'</small></span>'+(last.from==='buyer'?'<span class="chip" style="background:var(--coral);color:#fff">шинэ</span>':'')+'</button>'}).join(''):'<div class="empty"><div class="ring">'+ic('chat')+'</div>Мессеж алга.</div>')+'</div>',nav:true}};
SCR.mchat=c=>{const th=(S.chats[S.myStore]||{})[c.o]||[];return {head:plainHead(c.o),body:'<div class="msgs">'+th.map(m=>'<div class="msg '+(m.from==='store'?'me':'them')+'">'+esc(m.text)+'</div>').join('')+'</div>',composer:{to:S.myStore,as:'store',buyer:c.o}}};

/* courier */
function cHeader(){const n=S.orders.filter(o=>o.status===2).length,a=S.orders.filter(o=>o.courier===S.courierName&&o.status>=3&&o.status<6).length,d=S.orders.filter(o=>o.courier===S.courierName&&o.status===6).length;
 return header({icon:'truck',small:'Сайн байна уу,',big:'Хүргэгч '+S.courierName,extra:'<div class="hstats"><div><b>'+n+'</b><span>Шинэ</span></div><div><b>'+a+'</b><span>Идэвхтэй</span></div><div><b>'+d+'</b><span>Хүргэсэн</span></div></div>'})}
function delCard(o,btn){const st=store(o.store);return '<div class="card ocard"><div class="top"><b>'+o.id+'</b>'+chip(o.status)+'</div><div class="meta">'+ic('store')+'Авах: '+esc(st.name)+'</div><div class="meta">'+ic('pin')+'Хүргэх: '+esc(o.address)+'</div><div class="meta">'+ic('user')+esc(o.buyer)+' · '+esc(o.phone)+'</div><div class="meta">'+ic('box')+o.items.map(i=>esc(prod(i.pid).name)+' × '+i.qty).join(', ')+'</div>'+(o.slot&&o.status<6?'<div class="meta">'+ic('clock')+esc(o.slot)+'</div>':'')+(btn||'')+'</div>'}
SCR.newdel=()=>{const ready=S.orders.filter(o=>o.status===2);
 return {head:cHeader(),body:'<div class="body"><div class="h2">Хүргэлтэд бэлэн захиалга</div>'+(ready.length?ready.map(o=>delCard(o,'<button class="btn" data-a="takedel" data-x="'+o.id+'">'+ic('check')+'Хүргэлт хүлээн авах</button>')).join(''):'<div class="card empty"><div class="ring">'+ic('box')+'</div>Шинэ хүргэлт алга. Дэлгүүр захиалгаа бэлэн болгоход энд гарна.</div>')+
 '<div class="h2">Хүргэлтийн хуваарь сонгох</div><div class="card slots">'+SLOTS.map((s,i)=>'<button class="'+(U.slot===i?'on':'')+'" data-a="slot" data-x="'+i+'">'+ic(U.slot===i?'check':'clock')+s+'</button>').join('')+'</div></div>',nav:true}};
SCR.mydel=()=>{const act=S.orders.filter(o=>o.courier===S.courierName&&o.status>=3&&o.status<6),done=S.orders.filter(o=>o.courier===S.courierName&&o.status===6);
 return {head:cHeader(),body:'<div class="body"><div class="h2">Идэвхтэй хүргэлт<small>'+act.length+'</small></div>'+(act.length?act.map(o=>delCard(o,o.status<5?'<button class="btn" data-a="advance" data-x="'+o.id+'" data-to="5">'+ic('truck')+'Бараа авлаа, замд гарах</button>':'<button class="btn" data-a="advance" data-x="'+o.id+'" data-to="6">'+ic('check')+'Хүргэж өгсөн</button>')).join(''):'<div class="card empty">Идэвхтэй хүргэлт алга.</div>')+
 '<div class="h2">Хүргэсэн<small>'+done.length+'</small></div>'+done.map(o=>delCard(o)).join('')+'</div>',nav:true}};

/* admin */
function pendingCount(){return S.stores.filter(s=>!s.verified).length+S.complaints.filter(c=>!c.resolved).length+S.products.filter(p=>p.approval==='pending').length}
SCR.areport=()=>{const n=pendingCount();const byStore=S.stores.map(s=>{const v=S.orders.filter(o=>o.store===s.id).reduce((a,o)=>a+total(o),0);return[s.name,v,P(v)]}).filter(r=>r[1]>0);
 const buyers=new Set(S.orders.map(o=>o.buyer));buyers.add(S.me.name);
 const byStatus=[0,1,2,3,4,5,6].map(i=>[STATUS[i],S.orders.filter(o=>o.status===i).length]).filter(r=>r[1]).map(r=>[r[0],r[1],r[1]]);
 return {head:header({icon:'shield',small:'Админы самбар',big:'Системийн тайлан',extra:'<button class="hbanner" data-a="go" data-x="notifs">'+ic('bell')+(n?n+' зүйл таны хяналтыг хүлээж байна':'Хүлээгдэж буй зүйл алга')+'</button>'}),
 body:'<div class="body"><div class="stats">'+stat('money',G.orange,P(S.orders.reduce((a,o)=>a+total(o),0)),'Нийт борлуулалт')+stat('receipt',G.purple,S.orders.length,'Захиалга')+stat('users',G.green,buyers.size,'Худалдан авагч')+stat('store',G.red,S.stores.length,'Дэлгүүр')+'</div>'+
 bars('Дэлгүүрээр борлуулалт',byStore)+bars('Захиалгын төлөв',byStatus)+'</div>',nav:true}};
SCR.aproducts=()=>{const pend=S.products.filter(p=>p.approval==='pending');return {head:plainHead('Бүтээгдэхүүн',true),body:'<div class="body">'+
 '<div class="h2">Хянах хүлээгдэж буй<small>'+pend.length+'</small></div>'+(pend.length?pend.map(p=>'<button class="card li" data-a="review" data-x="'+p.id+'">'+thumb(p)+'<span class="sp"><b>'+esc(p.name)+'</b><br><small class="muted">'+esc(store(p.store).name)+' · '+P(p.price)+'</small></span>'+apchip(p)+'</button>').join(''):'<div class="card muted">Хянах бараа алга.</div>')+
 '<div class="h2">Бүх бараа</div><small class="muted">Зөрчилтэй барааг нууж болно. Нуусан бараа хэрэглэгчдэд харагдахгүй.</small>'+S.products.map(p=>'<div class="card li">'+thumb(p)+'<div class="sp"><b>'+esc(p.name)+'</b><div class="muted" style="font-size:12px">'+esc(store(p.store).name)+' · '+P(p.price)+'</div></div>'+(approved(p)?'<button class="toggle'+(p.visible?' on':'')+'" data-a="pvis" data-x="'+p.id+'" aria-label="Харагдах эсэх"></button>':apchip(p))+'</div>').join('')+'</div>',nav:true}};
SCR.notifs=()=>{const list=S.notifs.filter(n=>n.to===U.role).slice().reverse();const K={product:'box',store:'store',complaint:'alert',order:'receipt'};
 return {head:plainHead('Мэдэгдэл',false,list.some(n=>!n.read)?'<button class="linkbtn" data-a="readall">Бүгдийг уншсан</button>':''),body:'<div class="body">'+(list.length?list.map(n=>'<button class="card notif'+(n.read?'':' unread')+'" data-a="opennotif" data-x="'+n.id+'"><span class="circ">'+ic(K[n.kind]||'bell')+'</span><span class="sp"><b style="font-weight:'+(n.read?500:700)+'">'+esc(n.text)+'</b><br><small class="muted">'+(n.read?'Уншсан':'Шинэ')+'</small></span>'+ic('chevron')+'</button>').join(''):'<div class="empty"><div class="ring">'+ic('bell')+'</div>Мэдэгдэл алга.</div>')+'</div>'}};
SCR.review=c=>{const p=prod(c.x),st=store(p.store);
 return {head:plainHead('Бараа хянах'),body:'<div class="body">'+
 '<div class="thumb'+(p.img?' img':'')+'" style="height:220px;background:'+grad(p.grad)+'">'+(p.img?art(p):'<svg class="i" viewBox="0 0 24 24" style="width:80px;height:80px">'+IC[p.icon]+'</svg>')+'</div>'+
 (p.img?'':'<small class="muted">Энэ жишээ барааны зураг оруулаагүй.</small>')+
 '<div class="row"><h1 class="sp" style="margin:0;font-size:22px">'+esc(p.name)+'</h1>'+apchip(p)+'</div>'+
 '<div class="card"><div class="line"><span class="muted">Дэлгүүр</span><b>'+esc(st.name)+'</b></div><div class="line"><span class="muted">Үнэ</span><b>'+P(p.price)+'</b></div><div class="line"><span class="muted">Ангилал</span><b>'+CATNAME[p.cat]+'</b></div><div class="line"><span class="muted">Үлдэгдэл</span><b>'+p.stock+'</b></div><hr class="sep"><div style="padding-top:4px">'+esc(p.desc)+'</div></div>'+
 (p.approval==='pending'?'<button class="btn" data-a="approve" data-x="'+p.id+'">'+ic('check')+'Зөвшөөрч нийтлэх</button><form id="rejectform" data-x="'+p.id+'" style="display:flex;flex-direction:column;gap:10px"><div class="field"><label for="rj-text">Татгалзах шалтгаан</label><textarea id="rj-text" required placeholder="Жишээ: Зураг тодорхойгүй байна"></textarea></div><button class="btn outline" type="submit" style="color:var(--bad)">Татгалзах</button></form>':
 (p.approval==='rejected'?'<div class="note">'+ic('alert')+'<span>Татгалзсан: '+esc(p.rejectReason||'')+'</span></div>':''))+
 '</div>'}};
SCR.astores=()=>({head:plainHead('Дэлгүүр',true),body:'<div class="body">'+S.stores.map(s=>'<div class="card ocard"><div class="top"><b>'+esc(s.name)+'</b><span class="chip" style="background:'+(s.verified?'#DFF6EE;color:#0E9C72':'#FFF0E0;color:#D9730D')+'">'+(s.verified?'Баталгаажсан':'Хүлээгдэж байна')+'</span></div><span class="muted">'+CATNAME[s.cat]+' · '+esc(s.desc)+' · '+S.products.filter(p=>p.store===s.id).length+' бараа</span>'+(s.verified?'<button class="btn sm outline" data-a="sverify" data-x="'+s.id+'">Баталгаажуулалт цуцлах</button>':'<button class="btn sm" data-a="sverify" data-x="'+s.id+'">'+ic('check')+'Баталгаажуулах</button>')+'</div>').join('')+'</div>',nav:true});
SCR.complaints=()=>({head:plainHead('Гомдол',true),body:'<div class="body">'+(S.complaints.length?S.complaints.slice().reverse().map(c=>{const o=order(c.order);return '<div class="card ocard"><div class="top"><b>'+c.order+' · '+esc(c.by)+'</b><span class="chip" style="background:'+(c.resolved?'#E9F7EF;color:#1E8B4C':'#FFE8E5;color:#D63B2E')+'">'+(c.resolved?'Шийдвэрлэсэн':'Шинэ')+'</span></div><span class="muted">'+(o?esc(store(o.store).name)+' · ':'')+'“'+esc(c.text)+'”</span>'+(c.resolved?'':'<button class="btn sm" data-a="resolve" data-x="'+c.id+'">'+ic('check')+'Шийдвэрлэсэн гэж тэмдэглэх</button>')+'</div>'}).join(''):'<div class="empty"><div class="ring">'+ic('alert')+'</div>Гомдол алга.</div>')+'</div>',nav:true});

/* ---------- render ---------- */
const phone=document.getElementById('phone');
function topbar(){
 document.getElementById('topbar').innerHTML='<b>Онлайн дэлгүүр · прототип</b><span class="muted" style="font-size:12px">Шууд орох:</span>'+Object.keys(ROLES).map(k=>'<button class="'+(U.role===k?'on':'')+'" data-a="enter" data-x="'+k+'">'+ROLES[k].name+'</button>').join('')+'<button class="reset" data-a="logout">Эхлэл</button><button class="reset" data-a="reset">Өгөгдөл сэргээх</button>';
}
function render(resetScroll){
 const c=cur();const out=SCR[c.s](c);
 const r=ROLES[c.r||U.role]||ROLES.buyer;
 phone.style.setProperty('--g1',r.g[0]);phone.style.setProperty('--g2',r.g[1]);
 phone.style.setProperty('--tint',r.tint);phone.style.setProperty('--tintInk',r.ink);
 const sc=phone.querySelector('.scroll');const keep=resetScroll?0:(sc?sc.scrollTop:0);
 const af=document.activeElement;const fid=af&&phone.contains(af)?af.id:null;const sel=fid&&af.selectionStart!=null?af.selectionStart:null;
 const lightStatus=out.statusLight||c.s==='roles'||!!(out.head&&out.head.indexOf('class="hdr"')===0);
 let h='<div class="status'+(lightStatus?' light':'')+'"><span>9:41</span><span>●●● ▮</span></div>';
 h+='<div class="scroll">'+(out.head||'')+(out.raw?'':'')+out.body+'</div>';
 if(out.composer)h+='<form class="composer" id="composer" data-to="'+out.composer.to+'" data-as="'+out.composer.as+'" data-buyer="'+esc(out.composer.buyer)+'"><input id="msg" placeholder="Мессеж бичих" autocomplete="off" aria-label="Мессеж"><button type="submit" aria-label="Илгээх">'+ic('send')+'</button></form>';
 if(out.bottom)h+='<div class="bottom">'+out.bottom+'</div>';
 if(out.nav&&U.role){const root=U.stack[0].s;h+='<nav class="nav">'+TABS[U.role].map(t=>'<button class="'+(root===t[0]?'on':'')+'" data-a="tab" data-x="'+t[0]+'"><span class="pill">'+ic(t[2])+'</span>'+t[1]+(U.role==='admin'&&t[0]==='aproducts'&&S.products.some(p=>p.approval==='pending')?'<span class="nbadge">'+S.products.filter(p=>p.approval==='pending').length+'</span>':'')+(t[0]==='cart'&&cartCount()?' ('+cartCount()+')':'')+'</button>').join('')+'</nav>'}
 if(U.sheet)h+='<div class="scrim" data-a="closesheet"><div class="sheet" data-stop="1">'+U.sheet+'</div></div>';
 if(U.toast)h+='<div class="toast" role="status">'+esc(U.toast)+'</div>';
 phone.innerHTML=h;
 const ns=phone.querySelector('.scroll');ns.scrollTop=keep;
 if(out.composer){const m=phone.querySelector('.msgs');ns.scrollTop=ns.scrollHeight}
 if(fid){const el=document.getElementById(fid);if(el){el.focus();if(sel!=null)try{el.setSelectionRange(sel,sel)}catch(e){}}}
 topbar();
}

/* ---------- actions ---------- */
function addToCart(pid,q){const p=prod(pid);const e=S[CK()].find(c=>c.pid===pid);const have=e?e.qty:0;if(have+q>p.stock){toast('Үлдэгдэл хүрэлцэхгүй байна');return}
 if(e)e.qty+=q;else S[CK()].push({pid:pid,qty:q});save();toast(p.name+' сагсанд нэмэгдлээ')}
function afterLogin(role){const fromGuest=U.role==='guest';const gc=S.guestCart.slice();
 if(role==='buyer'&&gc.length){gc.forEach(g=>{const e=S.cart.find(c=>c.pid===g.pid);if(e)e.qty+=g.qty;else S.cart.push(g)});S.guestCart=[]}
 const next=U.next;U.next=null;enter(role);
 if(role==='buyer'&&next==='checkout'&&S.cart.length){U.stack=[{s:'cart'},{s:'checkout'}];render(true)}}
document.addEventListener('change',e=>{if(e.target.id!=='ap-img'||!e.target.files[0])return;const fr=new FileReader();
 fr.onload=()=>{const im=new Image();im.onload=()=>{const m=480,k=Math.min(1,m/Math.max(im.width,im.height));const cv=document.createElement('canvas');cv.width=Math.round(im.width*k);cv.height=Math.round(im.height*k);cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);
  U.draftImg=cv.toDataURL('image/jpeg',.82);const d=document.getElementById('ap-drop');if(d){const old=d.querySelector('img,.ph');const ni=document.createElement('img');ni.src=U.draftImg;ni.alt='Сонгосон зураг';old.replaceWith(ni)}};im.src=fr.result};fr.readAsDataURL(e.target.files[0])});
function needLogin(){U.sheet='<div class="empty" style="padding:0"><div class="ring">'+ic('lock')+'</div></div><h3>Нэвтрэх шаардлагатай</h3><p>Сагс ашиглах, захиалга өгөхийн тулд нэвтэрнэ үү.</p><button class="btn" data-a="signin" data-x="buyer">Худалдан авагчаар нэвтрэх</button><button class="btn outline" data-a="register" data-x="buyer">Шинээр бүртгүүлэх</button>';render()}

const A={
 back,logout,
 enter:x=>{U.sheet=null;enter(x)},
 go:(x,el)=>{U.sheet=null;if(x==='addproduct')U.draftImg=null;const p={};if(el.dataset.o)p.o=el.dataset.o;if(x==='rate')U.rate=5;go(x,p)},
 tab:x=>tab(x),
 product:x=>go('product',{x:x}),
 store:x=>go('store',{x:x}),
 track:x=>{if(U.stack[0].s!=='orders'&&U.role==='buyer')U.stack=[{s:'orders'}];go('track',{x:x})},
 chat:x=>go('chat',{x:x}),
 cat:x=>{U.cat=x;render()},
 qty:x=>{U.qty=Math.max(1,U.qty+Number(x));render()},
 quickadd:x=>{if(U.role!=='buyer'&&U.role!=='guest')return toast('Энэ эрхээр сагс ашиглах боломжгүй');addToCart(x,1);render()},
 addcart:x=>{if(U.role!=='buyer'&&U.role!=='guest')return toast('Энэ эрхээр сагс ашиглах боломжгүй');addToCart(x,U.qty);U.qty=1;render()},
 needlogin:()=>needLogin(),
 pickrole:x=>{if(x==='guest')enter('guest');else{U.next=null;go('signin',{r:x})}},
 signin:x=>{U.sheet=null;go('signin',{r:x})},
 register:x=>{U.sheet=null;U.regRole=x;go('register')},
 forgot:()=>toast('Сэргээх код таны утас руу илгээгдлээ (туршилт)'),
 guestcheckout:()=>{U.next='checkout';go('signin',{r:'buyer'})},
 review:x=>go('review',{x:x}),
 readall:()=>{S.notifs.forEach(n=>{if(n.to===U.role)n.read=true});save();render()},
 opennotif:x=>{const n=S.notifs.find(n=>n.id===x);n.read=true;save();
  if(U.role==='admin'){if(n.kind==='product')return go('review',{x:n.ref});if(n.kind==='store')return tab('astores');if(n.kind==='complaint')return tab('complaints')}
  if(U.role==='merchant'){if(n.kind==='product')return tab('products');if(n.kind==='order')return tab('morders')}
  render()},
 approve:x=>{const p=prod(x);p.approval='approved';p.visible=true;notify('merchant','product',p.id,p.name+' зөвшөөрөгдөж, дэлгүүрт нийтлэгдлээ');save();back();toast(p.name+' нийтлэгдлээ')},
 resubmit:x=>{const p=prod(x);p.approval='pending';p.rejectReason='';notify('admin','product',p.id,store(p.store).name+' барааг дахин илгээлээ: '+p.name);save();toast('Дахин хянуулахаар илгээгдлээ')},
 closesheet:()=>{U.sheet=null;render()},
 cqty:(x,el)=>{const c=S[CK()].find(c=>c.pid===x);const d=Number(el.dataset.d);if(d>0&&c.qty>=prod(x).stock)return toast('Үлдэгдэл хүрэлцэхгүй байна');c.qty+=d;if(c.qty<1)S[CK()]=S[CK()].filter(z=>z.pid!==x);save();render()},
 rmcart:x=>{S[CK()]=S[CK()].filter(c=>c.pid!==x);U.swiped=null;save();toast('Сагснаас хасагдлаа')},
 pay:x=>{U.pay=x;render()},
 placeorder:()=>{const addr=(document.getElementById('addr')||{}).value||S.me.address;S.me.address=addr.trim()||S.me.address;
  const by={};S[CK()].forEach(c=>{const p=prod(c.pid);(by[p.store]=by[p.store]||[]).push({pid:p.id,qty:c.qty,price:p.price});p.stock-=c.qty});
  const ids=Object.keys(by).map(st=>{const id='ORD-'+String(S.seq++).padStart(3,'0');S.orders.push({id:id,buyer:S.me.name,phone:S.me.phone,store:st,items:by[st],status:0,pay:U.pay,address:S.me.address,slot:'',courier:'',rated:false});if(st===S.myStore)notify('merchant','order',id,'Шинэ захиалга ирлээ: '+id+' · '+S.me.name);return id});
  S[CK()]=[];save();U.stack=[{s:'orders'},{s:'success',ids:ids}];render(true)},
 rateset:x=>{U.rate=Number(x);render()},
 advance:(x,el)=>{const o=order(x);o.status=Number(el.dataset.to);save();toast(o.id+': '+STATUS[o.status])},
 takedel:x=>{const o=order(x);o.status=4;o.courier=S.courierName;o.slot=SLOTS[U.slot];save();toast(o.id+' таны хүргэлтэд нэмэгдлээ');},
 slot:x=>{U.slot=Number(x);render()},
 stock:(x,el)=>{const p=prod(x);p.stock=Math.max(0,p.stock+Number(el.dataset.d));save();render()},
 pvis:x=>{const p=prod(x);p.visible=!p.visible;save();toast(p.name+(p.visible?' харагдана':' нуугдлаа'))},
 sverify:x=>{const s=store(x);s.verified=!s.verified;save();toast(s.name+(s.verified?' баталгаажлаа':' баталгаажуулалт цуцлагдлаа'))},
 resolve:x=>{S.complaints.find(c=>c.id===x).resolved=true;save();toast('Гомдол шийдвэрлэгдлээ')},
 regrole:x=>{U.regRole=x;render()},
 reset:()=>{S=seed();save();U.sheet=null;toast('Жишээ өгөгдөл сэргээгдлээ')}
};
document.addEventListener('click',e=>{
 const el=e.target.closest('[data-a]');
 if(!el)return;
 if(el.dataset.a==='closesheet'&&e.target.closest('[data-stop]')&&e.target.closest('[data-a]')===el)return;
 if(el.closest('[data-stop]')&&el.dataset.a==='closesheet')return;
 e.preventDefault();
 const f=A[el.dataset.a];if(f)f(el.dataset.x,el);
});
document.addEventListener('input',e=>{if(e.target.id==='q'){U.q=e.target.value;render()}});
document.addEventListener('submit',e=>{
 e.preventDefault();const f=e.target;const v=id=>{const el=document.getElementById(id);return el?el.value.trim():''};
 if(f.id==='regform'){
  if(U.regRole==='buyer'){S.me={name:v('r-name'),phone:v('r-phone'),address:v('r-addr')||'Хаяг оруулаагүй'};S.cart=[];save();afterLogin('buyer');toast('Бүртгэл амжилттай. Тавтай морил!')}
  else{const id='s'+Date.now();S.stores.push({id:id,name:v('r-name'),cat:v('r-cat'),desc:CATNAME[v('r-cat')]+' бараа',verified:false});S.myStore=id;notify('admin','store',id,v('r-name')+' дэлгүүр шинээр бүртгүүлж, баталгаажуулалт хүлээж байна');save();enter('merchant');tab('shop');toast('Дэлгүүр бүртгэгдлээ. Админ баталгаажуулна.')}
 }
 if(f.id==='complainform'){const t=v('c-text');if(!t)return;const cid='C-'+Date.now();S.complaints.push({id:cid,order:f.dataset.o,by:S.me.name,text:t,resolved:false});notify('admin','complaint',cid,S.me.name+' '+f.dataset.o+' захиалга дээр гомдол гаргалаа');save();back();toast('Гомдол илгээгдлээ')}
 if(f.id==='rateform'){const o=order(f.dataset.o);const t=v('rt-text')||'Сэтгэгдэлгүй';o.items.forEach(i=>prod(i.pid).reviews.push({who:S.me.name,stars:U.rate,text:t}));o.rated=true;save();back();toast('Үнэлгээ өгсөнд баярлалаа')}
 if(f.id==='profform'){S.me.phone=v('pf-phone')||S.me.phone;S.me.address=v('pf-addr')||S.me.address;save();toast('Хадгалагдлаа')}
 if(f.id==='shopform'){const s=my();s.name=v('sh-name')||s.name;s.desc=v('sh-desc')||s.desc;save();toast('Хадгалагдлаа')}
 if(f.id==='signinform'){const r=f.dataset.r;const bad=[...f.querySelectorAll('input')].some(i=>!i.value.trim());const pw=f.querySelector('input[type=password]');
  if(bad){document.getElementById('l-err').textContent='Бүх талбарыг бөглөнө үү.';return}
  if(pw.value.length<4){document.getElementById('l-err').textContent='Нууц үг хамгийн багадаа 4 тэмдэгт байна.';return}
  if(r==='buyer'&&v('l-phone')!==S.me.phone){S.me={name:'Хэрэглэгч '+v('l-phone').slice(-4),phone:v('l-phone'),address:'Хаяг оруулаагүй'};S.cart=[]}
  save();afterLogin(r);toast(LOGIN[r].title+' эрхээр нэвтэрлээ')}
 if(f.id==='rejectform'){const p=prod(f.dataset.x);const t=v('rj-text');if(!t)return;p.approval='rejected';p.rejectReason=t;notify('merchant','product',p.id,p.name+' татгалзагдлаа: '+t);save();back();toast('Татгалзлаа. Дэлгүүрт мэдэгдэл очлоо')}
 if(f.id==='prodform'){if(!U.draftImg){toast('Барааны зураг оруулна уу');return}const cat=v('ap-cat');const pid='p'+Date.now();S.products.push({id:pid,img:U.draftImg,approval:'pending',name:v('ap-name'),store:S.myStore,cat:cat,price:Number(v('ap-price')),old:0,icon:cat==='clothes'?'shirt':'box',grad:cat==='clothes'?'coral':'gold',stock:Number(v('ap-stock'))||0,visible:true,desc:v('ap-desc')||'Тайлбар оруулаагүй.',reviews:[]});notify('admin','product',pid,my().name+' шинэ бараа хянуулахаар илгээлээ: '+v('ap-name'));notify('merchant','product',pid,v('ap-name')+' админы хяналтад илгээгдлээ');U.draftImg=null;save();back();toast('Админд хянуулахаар илгээгдлээ')}
 if(f.id==='composer'){const t=v('msg');if(!t)return;const to=f.dataset.to,b=f.dataset.buyer,as=f.dataset.as;S.chats[to]=S.chats[to]||{};(S.chats[to][b]=S.chats[to][b]||[]).push({from:as,text:t});save();render()}
});
/* swipe to delete in cart */
let sw=null;
document.addEventListener('pointerdown',e=>{const el=e.target.closest('[data-swipe]');if(!el||e.target.closest('.stepper'))return;sw={el:el,x:e.clientX,id:el.dataset.swipe,dx:0}});
document.addEventListener('pointermove',e=>{if(!sw)return;sw.dx=e.clientX-sw.x;if(Math.abs(sw.dx)>6){sw.el.style.transition='none';const base=sw.el.classList.contains('open')?-90:0;sw.el.style.transform='translateX('+Math.max(-110,Math.min(0,base+sw.dx))+'px)'}});
document.addEventListener('pointerup',()=>{if(!sw)return;const s=sw;sw=null;if(Math.abs(s.dx)>6){s.el.style.transition='';s.el.style.transform='';const open=s.el.classList.contains('open');U.swiped=(open?s.dx<30:s.dx<-40)?s.id:null;if(!open&&s.dx>=-40)U.swiped=null;if(open&&s.dx>30)U.swiped=null;window.__swallow=true;setTimeout(()=>window.__swallow=false,50);render()}});
document.addEventListener('click',e=>{if(window.__swallow){e.stopPropagation();e.preventDefault()}},true);

render(true);
})();
