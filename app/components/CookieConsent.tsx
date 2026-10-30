"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const key = "providebit_cookie_consent";
type Choice = { necessary: true; analytics: boolean; date: string };
const readChoice = () => { try { return JSON.parse(localStorage.getItem(key) || "null") as Choice | null; } catch { return null; } };

export function CookieConsent() {
  const [ready, setReady] = useState(false); const [showBanner, setShowBanner] = useState(false); const [showModal, setShowModal] = useState(false); const [analytics, setAnalytics] = useState(false);
  useEffect(() => { const choice = readChoice(); setAnalytics(choice?.analytics ?? false); setShowBanner(!choice); setReady(true); const open = () => setShowModal(true); window.addEventListener("providebit:cookie-settings", open); return () => window.removeEventListener("providebit:cookie-settings", open); }, []);
  const save = (allowAnalytics: boolean) => { localStorage.setItem(key, JSON.stringify({ necessary: true, analytics: allowAnalytics, date: new Date().toISOString() } satisfies Choice)); setAnalytics(allowAnalytics); setShowBanner(false); setShowModal(false); };
  if (!ready) return null;
  return <>{showBanner && <aside className="cookieBanner" aria-label="Aviso de cookies"><p>Usamos almacenamiento necesario para recordar tu preferencia y, solo si lo aceptas, cookies analíticas. Puedes aceptar, rechazar o configurar tu elección. Más información en la <Link href="/politica-cookies">Política de Cookies</Link>.</p><div><button onClick={() => setShowModal(true)}>Configurar</button><button onClick={() => save(false)}>Rechazar</button><button className="cookieAccept" onClick={() => save(true)}>Aceptar todas</button></div></aside>}{showModal && <div className="cookieOverlay" role="presentation"><section className="cookieModal" role="dialog" aria-modal="true" aria-labelledby="cookie-title"><button className="cookieClose" onClick={() => setShowModal(false)} aria-label="Cerrar">×</button><h2 id="cookie-title">Configuración de cookies</h2><p>Elige qué cookies quieres permitir. Puedes cambiar esta preferencia cuando quieras desde el pie de página.</p><div className="cookieOption"><div><strong>Necesarias</strong><p>Imprescindibles para el funcionamiento de la web.</p></div><span>Siempre activas</span></div><label className="cookieOption"><span><strong>Analíticas</strong><p>Nos ayudan a entender el uso de la web de forma agregada.</p></span><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /></label><div className="cookieActions"><button onClick={() => save(analytics)}>Guardar preferencias</button><button className="cookieAccept" onClick={() => save(true)}>Aceptar todas</button></div></section></div>}</>;
}
