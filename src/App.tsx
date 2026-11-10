import { useState, useEffect } from "react";
import {
  Phone, MessageCircle, Truck, Package, Wrench, Home, Building2, ShieldCheck,
  Clock, BadgeDollarSign, Star, MapPin, Menu, X, CheckCircle2, ChevronDown,
  Warehouse, Sofa, Award, Users, Send,
} from "lucide-react";

const PHONE_DISPLAY = "050 123 4567";
const PHONE_INTL = "+971501234567";
const WHATSAPP = "971501234567";
const waLink = (msg = "مرحباً، أريد عرض سعر لنقل الأثاث") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const services = [
  { icon: Home, title: "نقل أثاث المنازل", desc: "نقل الشقق والفلل بالكامل بأمان تام مع ضمان سلامة كل قطعة." },
  { icon: Building2, title: "نقل المكاتب والشركات", desc: "نقل المكاتب بسرعة وبدون تعطيل لأعمالك، حتى في عطلة نهاية الأسبوع." },
  { icon: Wrench, title: "فك وتركيب الأثاث", desc: "نجارين محترفين لفك وتركيب غرف النوم والمطابخ والستائر والتلفزيونات." },
  { icon: Package, title: "التغليف الاحترافي", desc: "تغليف بمواد عالية الجودة: فقاعات هوائية، كرتون مقوى، وأغطية حماية." },
  { icon: Warehouse, title: "تخزين الأثاث", desc: "مستودعات آمنة ومكيفة ومراقبة بالكاميرات على مدار الساعة." },
  { icon: Truck, title: "نقل بين الإمارات", desc: "نقل من وإلى جميع الإمارات وكذلك دول الخليج بأسطول حديث." },
];

const cities = ["دبي", "أبوظبي", "الشارقة", "عجمان", "رأس الخيمة", "الفجيرة", "أم القيوين", "العين"];

const steps = [
  { n: "01", t: "اتصل بنا", d: "تواصل عبر الهاتف أو واتساب واحصل على استشارة مجانية." },
  { n: "02", t: "معاينة وعرض سعر", d: "معاينة مجانية وعرض سعر واضح بدون رسوم مخفية." },
  { n: "03", t: "تغليف وفك", d: "فريقنا يغلّف ويفك الأثاث بعناية فائقة." },
  { n: "04", t: "نقل وتركيب", d: "نوصل ونركّب كل شيء في مكانه الجديد وجاهز للاستخدام." },
];

const reviews = [
  { name: "أحمد المنصوري", city: "دبي", text: "خدمة ممتازة جداً! نقلوا فيلتي بالكامل في يوم واحد بدون أي خدش. أنصح فيهم بقوة." },
  { name: "سارة الكعبي", city: "أبوظبي", text: "فريق محترم وسريع، والتغليف كان احترافي. السعر مناسب جداً مقارنة بغيرهم." },
  { name: "محمد العلي", city: "الشارقة", text: "نقلنا مكتب الشركة في عطلة الأسبوع وبدأنا الشغل الأحد بشكل طبيعي. شكراً لكم." },
];

const faqs = [
  { q: "كم تكلفة نقل الأثاث في الإمارات؟", a: "تعتمد التكلفة على حجم الأثاث والمسافة وعدد الغرف. نقدم معاينة مجانية وعرض سعر ثابت بدون مفاجآت. تواصل معنا عبر واتساب للحصول على سعر فوري." },
  { q: "هل تقدمون خدمة الفك والتركيب؟", a: "نعم، لدينا نجارين وفنيين متخصصين في فك وتركيب جميع أنواع الأثاث والمطابخ والمكيفات والستائر." },
  { q: "هل الأثاث مؤمّن أثناء النقل؟", a: "نعم، نوفر تأميناً شاملاً على المنقولات ونتحمل المسؤولية الكاملة عن أي ضرر لا قدر الله." },
  { q: "هل تعملون في أيام العطل؟", a: "نعمل 7 أيام في الأسبوع و24 ساعة، بما في ذلك العطل الرسمية وعطلة نهاية الأسبوع." },
  { q: "كم يستغرق نقل شقة؟", a: "عادةً يستغرق نقل شقة غرفتين من 4 إلى 6 ساعات، والفلل من يوم إلى يومين حسب الحجم." },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [["الرئيسية", "#home"], ["خدماتنا", "#services"], ["لماذا نحن", "#why"], ["آراء العملاء", "#reviews"], ["الأسئلة", "#faq"], ["تواصل", "#contact"]];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-slate-950/95 backdrop-blur shadow-xl py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 grid place-items-center shadow-lg">
            <Truck className="text-white" size={24} />
          </div>
          <div className="leading-tight">
            <div className="text-white font-black text-lg">النجم الذهبي</div>
            <div className="text-amber-400 text-xs font-semibold">لنقل الأثاث - الإمارات</div>
          </div>
        </a>
        <nav className="hidden lg:flex gap-7">
          {links.map(([t, h]) => (
            <a key={h} href={h} className="text-white/90 hover:text-amber-400 font-semibold transition">{t}</a>
          ))}
        </nav>
        <a href={`tel:${PHONE_INTL}`} className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-full shadow-lg transition">
          <Phone size={18} /> <span dir="ltr">{PHONE_DISPLAY}</span>
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="lg:hidden bg-slate-950 border-t border-white/10 px-4 py-4 space-y-3">
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block text-white font-semibold py-1">{t}</a>
          ))}
          <a href={`tel:${PHONE_INTL}`} className="flex justify-center items-center gap-2 bg-amber-500 text-slate-950 font-bold py-3 rounded-xl">
            <Phone size={18} /> <span dir="ltr">{PHONE_DISPLAY}</span>
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img src="/images/hero.jpg" alt="نقل أثاث الإمارات" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-950/85 to-slate-950/40" />
      <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-16 grid lg:grid-cols-2 gap-10 items-center w-full">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Award size={16} /> الشركة الأولى لنقل الأثاث في الإمارات
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            ننقل أثاثك <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-300 to-orange-500">بأمان واحترافية</span> إلى أي مكان في الإمارات
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            فك • تغليف • نقل • تركيب — فريق محترف وأسطول حديث يعمل على مدار الساعة في دبي، أبوظبي، الشارقة وجميع الإمارات. أسعار تنافسية وضمان شامل.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href={`tel:${PHONE_INTL}`} className="relative pulse-ring bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg px-8 py-4 rounded-2xl flex items-center gap-3 shadow-2xl shadow-amber-500/30 transition z-10">
              <Phone /> اتصل الآن: <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-400 text-white font-black text-lg px-8 py-4 rounded-2xl flex items-center gap-3 shadow-2xl shadow-green-500/30 transition">
              <MessageCircle /> واتساب
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-white/90">
            {["معاينة مجانية", "تأمين شامل", "خدمة 24/7"].map((t) => (
              <div key={t} className="flex items-center gap-2 font-semibold"><CheckCircle2 className="text-amber-400" size={20} /> {t}</div>
            ))}
          </div>
        </div>
        <QuoteForm />
      </div>
      <a href="#stats" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 animate-bounce"><ChevronDown size={32} /></a>
    </section>
  );
}

function QuoteForm({ dark = true }: { dark?: boolean }) {
  const [f, setF] = useState({ name: "", phone: "", from: "دبي", to: "دبي", type: "شقة" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `مرحباً، أريد عرض سعر لنقل الأثاث:\nالاسم: ${f.name}\nالهاتف: ${f.phone}\nمن: ${f.from}\nإلى: ${f.to}\nنوع العقار: ${f.type}`;
    window.open(waLink(msg), "_blank");
  };
  const input = "w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl px-4 py-3 outline-none focus:border-amber-400 transition";
  const sel = "w-full bg-slate-800 border border-white/20 text-white rounded-xl px-4 py-3 outline-none focus:border-amber-400";
  return (
    <form onSubmit={submit} className={`${dark ? "bg-white/10 backdrop-blur-xl border border-white/20" : "bg-slate-900"} rounded-3xl p-7 shadow-2xl fade-up`} style={{ animationDelay: ".2s" }}>
      <h3 className="text-2xl font-black text-white mb-1">احصل على عرض سعر مجاني</h3>
      <p className="text-white/70 mb-5 text-sm">رد خلال 5 دقائق ⚡</p>
      <div className="space-y-3">
        <input required placeholder="الاسم الكامل" className={input} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
        <input required placeholder="رقم الهاتف 05X XXX XXXX" type="tel" className={input} value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
        <div className="grid grid-cols-2 gap-3">
          <select className={sel} value={f.from} onChange={(e) => setF({ ...f, from: e.target.value })}>
            {cities.map((c) => <option key={c} value={c}>من: {c}</option>)}
          </select>
          <select className={sel} value={f.to} onChange={(e) => setF({ ...f, to: e.target.value })}>
            {cities.map((c) => <option key={c} value={c}>إلى: {c}</option>)}
          </select>
        </div>
        <select className={sel} value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })}>
          {["استوديو", "شقة", "فيلا", "مكتب", "قطع محددة"].map((c) => <option key={c}>{c}</option>)}
        </select>
        <button className="w-full bg-gradient-to-l from-amber-400 to-orange-500 hover:brightness-110 text-slate-950 font-black text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition">
          <Send size={20} /> اطلب عرض السعر الآن
        </button>
      </div>
    </form>
  );
}

function Stats() {
  const s = [
    { v: "+15,000", l: "عملية نقل ناجحة", i: Truck },
    { v: "+12", l: "سنة خبرة", i: Award },
    { v: "+80", l: "عامل محترف", i: Users },
    { v: "4.9★", l: "تقييم العملاء", i: Star },
  ];
  return (
    <section id="stats" className="bg-gradient-to-l from-amber-500 to-orange-600 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {s.map(({ v, l, i: I }) => (
          <div key={l} className="text-center text-slate-950">
            <I className="mx-auto mb-2" size={32} />
            <div className="text-3xl md:text-4xl font-black">{v}</div>
            <div className="font-bold opacity-80">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Title({ tag, title, sub, light }: { tag: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <span className="text-amber-500 font-black tracking-wide">{tag}</span>
      <h2 className={`text-3xl md:text-5xl font-black mt-2 mb-4 ${light ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {sub && <p className={light ? "text-white/70" : "text-slate-600"}>{sub}</p>}
      <div className="w-20 h-1.5 bg-gradient-to-l from-amber-400 to-orange-600 mx-auto mt-5 rounded-full" />
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <Title tag="خدماتنا" title="حلول نقل متكاملة تحت سقف واحد" sub="نقدم كل ما تحتاجه لنقل منزلك أو مكتبك بدون عناء" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: I, title, desc }) => (
            <div key={title} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-100 rounded-full opacity-0 group-hover:opacity-100 transition" />
              <div className="relative w-16 h-16 rounded-2xl bg-slate-900 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-orange-600 grid place-items-center mb-6 transition">
                <I className="text-amber-400 group-hover:text-white transition" size={30} />
              </div>
              <h3 className="relative text-xl font-black text-slate-900 mb-3">{title}</h3>
              <p className="relative text-slate-600 leading-relaxed mb-5">{desc}</p>
              <a href={waLink(`مرحباً، أستفسر عن خدمة ${title}`)} target="_blank" rel="noreferrer" className="relative text-orange-600 font-bold hover:gap-3 inline-flex items-center gap-2 transition-all">
                اطلب الخدمة ←
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { i: ShieldCheck, t: "تأمين شامل", d: "أثاثك مؤمّن بالكامل ضد أي ضرر." },
    { i: Clock, t: "التزام بالمواعيد", d: "نصل في الوقت المحدد بالدقيقة." },
    { i: BadgeDollarSign, t: "أسعار ثابتة", d: "بدون رسوم مخفية أو مفاجآت." },
    { i: Sofa, t: "عناية فائقة", d: "نعامل أثاثك وكأنه أثاثنا." },
  ];
  return (
    <section id="why" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center relative">
        <div className="relative">
          <img src="/images/packing.jpg" alt="تغليف الأثاث" className="rounded-3xl shadow-2xl w-full h-[480px] object-cover" />
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl p-6 shadow-2xl animate-float">
            <div className="text-4xl font-black text-slate-950">100%</div>
            <div className="font-bold text-slate-900">ضمان رضا العملاء</div>
          </div>
        </div>
        <div>
          <span className="text-amber-500 font-black">لماذا تختارنا؟</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-2 mb-6">ثقة آلاف العملاء في جميع أنحاء الإمارات</h2>
          <p className="text-white/70 mb-10 leading-relaxed">
            نجمع بين الخبرة الطويلة والمعدات الحديثة والفريق المدرب لنقدم لك تجربة نقل خالية من التوتر. شاحنات مغلقة ومجهزة، رافعات للأدوار العالية، ومواد تغليف أصلية.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {items.map(({ i: I, t, d }) => (
              <div key={t} className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-500/20 grid place-items-center"><I className="text-amber-400" /></div>
                <div>
                  <h4 className="text-white font-black mb-1">{t}</h4>
                  <p className="text-white/60 text-sm">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Title tag="كيف نعمل" title="4 خطوات بسيطة لنقل مريح" />
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative text-center p-6">
              {i < 3 && <div className="hidden md:block absolute top-12 left-0 w-1/2 -translate-x-1/2 border-t-2 border-dashed border-amber-300" />}
              <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 grid place-items-center text-3xl font-black text-white shadow-xl mb-5">{s.n}</div>
              <h4 className="text-xl font-black text-slate-900 mb-2">{s.t}</h4>
              <p className="text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-l from-orange-600 to-amber-500 overflow-hidden">
      <div className="absolute bottom-2 truck-drive opacity-20"><Truck size={120} className="text-slate-950" /></div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-4">جاهز للانتقال؟ اتصل بنا الآن!</h2>
        <p className="text-slate-900 text-lg font-semibold mb-8">خصم 15% لأول عملية نقل عند الحجز هذا الأسبوع 🎉</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`tel:${PHONE_INTL}`} className="bg-slate-950 hover:bg-slate-800 text-white font-black text-xl px-10 py-5 rounded-2xl flex items-center gap-3 shadow-2xl transition">
            <Phone /> <span dir="ltr">{PHONE_DISPLAY}</span>
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-500 text-white font-black text-xl px-10 py-5 rounded-2xl flex items-center gap-3 shadow-2xl transition">
            <MessageCircle /> راسلنا واتساب
          </a>
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <Title tag="مناطق التغطية" title="نخدمك في جميع الإمارات" sub="فروعنا وفرقنا منتشرة لتصلك بأسرع وقت" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map((c) => (
            <a key={c} href={waLink(`مرحباً، أريد نقل أثاث في ${c}`)} target="_blank" rel="noreferrer"
              className="group bg-white border border-slate-200 hover:border-amber-400 hover:bg-slate-950 rounded-2xl p-6 flex items-center gap-3 transition shadow-sm">
              <MapPin className="text-orange-500" />
              <div>
                <div className="font-black text-slate-900 group-hover:text-white">نقل أثاث {c}</div>
                <div className="text-xs text-slate-500 group-hover:text-amber-400">متاح الآن</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <Title tag="آراء العملاء" title="ماذا يقول عملاؤنا" />
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
              <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-amber-400 text-amber-400" />)}</div>
              <p className="text-slate-700 leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 grid place-items-center text-white font-black text-lg">{r.name[0]}</div>
                <div>
                  <div className="font-black text-slate-900">{r.name}</div>
                  <div className="text-sm text-slate-500">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <Title tag="الأسئلة الشائعة" title="لديك سؤال؟" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className={`border rounded-2xl overflow-hidden transition ${open === i ? "border-amber-400 shadow-lg" : "border-slate-200"}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center p-5 text-right font-black text-slate-900">
                {f.q}
                <ChevronDown className={`shrink-0 text-orange-500 transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-slate-600 leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-20 pb-28 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 grid place-items-center"><Truck size={24} /></div>
            <div className="font-black text-xl">النجم الذهبي لنقل الأثاث</div>
          </div>
          <p className="text-white/60 leading-relaxed">شركة رائدة في نقل الأثاث والعفش في دولة الإمارات العربية المتحدة. خبرة، أمان، واحترافية.</p>
        </div>
        <div>
          <h4 className="font-black text-lg mb-4 text-amber-400">خدماتنا</h4>
          <ul className="space-y-2 text-white/70">{services.map((s) => <li key={s.title}>{s.title}</li>)}</ul>
        </div>
        <div>
          <h4 className="font-black text-lg mb-4 text-amber-400">تواصل معنا</h4>
          <div className="space-y-4">
            <a href={`tel:${PHONE_INTL}`} className="flex items-center gap-3 hover:text-amber-400"><Phone className="text-amber-400" /> <span dir="ltr">+971 {PHONE_DISPLAY.slice(1)}</span></a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-green-400"><MessageCircle className="text-green-400" /> واتساب: <span dir="ltr">{PHONE_DISPLAY}</span></a>
            <div className="flex items-center gap-3"><MapPin className="text-amber-400" /> دبي - القوز الصناعية، الإمارات</div>
            <div className="flex items-center gap-3"><Clock className="text-amber-400" /> نعمل 24 ساعة / 7 أيام</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 text-center text-white/50 text-sm">© {new Date().getFullYear()} النجم الذهبي لنقل الأثاث - جميع الحقوق محفوظة</div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <>
      <div className="hidden md:flex fixed bottom-6 left-6 z-50 flex-col gap-3">
        <a href={waLink()} target="_blank" rel="noreferrer" className="relative pulse-ring w-16 h-16 rounded-full bg-green-500 grid place-items-center shadow-2xl hover:scale-110 transition z-10" aria-label="واتساب">
          <MessageCircle className="text-white" size={30} />
        </a>
        <a href={`tel:${PHONE_INTL}`} className="w-16 h-16 rounded-full bg-amber-500 grid place-items-center shadow-2xl hover:scale-110 transition" aria-label="اتصال">
          <Phone className="text-slate-950" size={28} />
        </a>
      </div>
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 shadow-2xl">
        <a href={`tel:${PHONE_INTL}`} className="bg-amber-500 text-slate-950 font-black py-4 flex justify-center items-center gap-2"><Phone size={20} /> اتصل الآن</a>
        <a href={waLink()} target="_blank" rel="noreferrer" className="bg-green-500 text-white font-black py-4 flex justify-center items-center gap-2"><MessageCircle size={20} /> واتساب</a>
      </div>
    </>
  );
}

export default function App() {
  return (
    <div dir="rtl">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Why />
      <Steps />
      <CTA />
      <Areas />
      <Reviews />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
