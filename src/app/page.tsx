import Image from "next/image";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Anillos", href: "#anillos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

function ArrowIcon() {
  return <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CartIcon() {
  return <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M3.5 4.5h2l1.8 11.2h10.8l2.2-8.1H6.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="19.5" r="1" fill="currentColor" /><circle cx="17" cy="19.5" r="1" fill="currentColor" /></svg>;
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f1e9] text-[#1c1a17]">
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
          <a href="#inicio" aria-label="Joyería y Relojería Luna, inicio" className="shrink-0"><Image src="/logo-luna.png" alt="Joyería y Relojería Luna" width={360} height={120} priority className="h-auto w-40 sm:w-48" /></a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] md:flex">{navItems.map((item) => <a key={item.href} href={item.href} className="transition-colors hover:text-[#a57a2a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a57a2a]">{item.label}</a>)}</nav>
          <a href="#carrito" aria-label="Ver carrito" className="relative rounded-full p-2 transition-colors hover:bg-[#e8ddce] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a57a2a]"><CartIcon /><span className="absolute right-0 top-0 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-[#b68b36] px-1 text-[9px] font-semibold text-white" aria-label="0 productos en el carrito">0</span></a>
        </div>
        <div className="mx-6 border-b border-[#2c2924]/15 lg:mx-10" />
        <nav aria-label="Navegación móvil" className="flex gap-5 overflow-x-auto px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] md:hidden">{navItems.map((item) => <a key={item.href} href={item.href} className="whitespace-nowrap hover:text-[#a57a2a]">{item.label}</a>)}</nav>
      </header>

      <main>
        <section id="inicio" className="relative isolate flex min-h-[720px] items-center px-6 pb-20 pt-40 lg:min-h-[780px] lg:px-10 lg:pt-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_40%,#eadfcd_0,transparent_32%),linear-gradient(120deg,#f6f1e9_0%,#f6f1e9_55%,#e9dfd0_100%)]" /><div className="absolute -right-20 top-40 -z-10 h-80 w-80 rounded-full border border-[#b68b36]/20 sm:right-10 lg:right-24" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="max-w-xl"><p className="mb-5 text-[11px] font-medium uppercase tracking-[0.32em] text-[#a57a2a]">Piezas para todos los días</p><h1 className="max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[6.5rem]">El detalle que <em className="font-normal text-[#a57a2a]">te representa.</em></h1><p className="mt-7 max-w-md text-base leading-7 text-[#625c53]">Joyas pensadas para acompañarte hoy y conservar su significado con el paso del tiempo.</p><a href="#anillos" className="mt-9 inline-flex items-center gap-4 border border-[#1c1a17] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[#1c1a17] hover:text-[#f6f1e9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a57a2a]">Ver colección <ArrowIcon /></a></div>
            <div className="relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center lg:justify-self-end"><div className="absolute inset-[9%] rounded-full border border-[#b68b36]/35" /><div className="absolute inset-[16%] rounded-full border border-[#b68b36]/20" /><Image src="/logo-luna-cuadrado.png" alt="Logotipo dorado de Joyería Luna" width={1254} height={1254} className="relative h-auto w-[76%] mix-blend-multiply" priority /><p className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-[#a57a2a]">Joyería Luna</p></div>
          </div>
        </section>

        <section id="anillos" className="bg-[#1c1a17] px-6 py-24 text-[#f6f1e9] lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 border-b border-[#f6f1e9]/20 pb-10 sm:flex-row sm:items-end"><div><p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c9a45e]">La colección</p><h2 className="font-serif text-4xl tracking-[-0.03em] sm:text-6xl">Anillos en plata 925</h2></div><p className="max-w-xs text-sm leading-6 text-[#bcb4a8]">Una selección curada de piezas para descubrir. Muy pronto, cada anillo tendrá su propia historia.</p></div><div className="mt-10 grid gap-px bg-[#f6f1e9]/20 sm:grid-cols-3">{["01", "02", "03"].map((number) => <div key={number} className="flex min-h-64 flex-col justify-between bg-[#1c1a17] p-6"><span className="text-xs text-[#c9a45e]">{number}</span><div><div className="mb-4 h-px w-10 bg-[#c9a45e]" /><p className="font-serif text-2xl">Próximamente</p><p className="mt-2 text-sm text-[#bcb4a8]">Producto disponible pronto</p></div></div>)}</div></div></section>

        <section id="nosotros" className="px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center border border-[#b68b36]/35 p-8"><div className="absolute inset-5 border border-[#b68b36]/20" /><Image src="/diamante-luna.png" alt="Diamante dorado de Joyería Luna" width={1254} height={1254} className="relative h-auto w-2/3 mix-blend-multiply" /></div><div className="max-w-xl"><p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#a57a2a]">Sobre Luna</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">Joyas con <em className="font-normal text-[#a57a2a]">intención.</em></h2><p className="mt-7 text-base leading-8 text-[#625c53]">En Joyería y Relojería Luna creemos que una joya no es solo un accesorio: es una forma de guardar momentos, expresar quién sos y celebrar lo que te hace única.</p><p className="mt-4 text-base leading-8 text-[#625c53]">Cada pieza se elige con cuidado, buscando unir diseño, calidad y esa emoción que hace que quieras usarla una y otra vez.</p></div></div></section>
      </main>

      <footer id="contacto" className="bg-[#e8ddce] px-6 py-12 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between"><div><Image src="/logo-luna.png" alt="Joyería y Relojería Luna" width={360} height={120} className="h-auto w-48" /><p className="mt-5 text-xs text-[#625c53]">Elegancia que te acompaña.</p></div><div className="flex flex-col gap-3 text-sm"><a href="https://www.instagram.com/joyerialuna_5/" target="_blank" rel="noreferrer" className="hover:text-[#a57a2a]">Instagram ↗</a><a href="https://www.facebook.com/joyeria.luna.75" target="_blank" rel="noreferrer" className="hover:text-[#a57a2a]">Facebook ↗</a><a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-[#a57a2a]">WhatsApp ↗</a></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-[#2c2924]/15 pt-5 text-[10px] uppercase tracking-[0.18em] text-[#625c53]">© Joyería y Relojería Luna</div></footer>
    </div>
  );
}
