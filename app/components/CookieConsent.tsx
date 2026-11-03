"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

// La elección se guarda en el almacenamiento local del navegador.
const STORAGE_KEY = "providebit_cookie_consent";
const CHANGE_EVENT = "providebit:cookie-change";
const OPEN_EVENT = "providebit:cookie-settings";

type Choice = { necessary: true; analytics: boolean; date: string };

/** Abre el panel de configuración desde cualquier parte de la web (p. ej. el pie). */
export const openCookieSettings = () => window.dispatchEvent(new Event(OPEN_EVENT));

function readChoice(raw: string | null): Choice | null {
  try {
    return raw ? (JSON.parse(raw) as Choice) : null;
  } catch {
    return null;
  }
}

function saveChoice(analytics: boolean) {
  const choice: Choice = { necessary: true, analytics, date: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}

// En el servidor no hay almacenamiento local: devolvemos `undefined` para no mostrar nada.
const useStoredChoice = () =>
  useSyncExternalStore(subscribe, () => localStorage.getItem(STORAGE_KEY), () => undefined);

export function CookieConsent() {
  const stored = useStoredChoice();
  const [modalOpen, setModalOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  const openModal = () => {
    setAnalytics(readChoice(stored ?? null)?.analytics ?? false);
    setModalOpen(true);
  };

  const save = (allowAnalytics: boolean) => {
    saveChoice(allowAnalytics);
    setModalOpen(false);
  };

  // Permite abrir el panel desde el botón «Configurar cookies» del pie.
  useEffect(() => {
    window.addEventListener(OPEN_EVENT, openModal);
    return () => window.removeEventListener(OPEN_EVENT, openModal);
  });

  if (stored === undefined) return null;

  return (
    <>
      {stored === null && (
        <aside className="cookieBanner" aria-label="Aviso de cookies">
          <p>
            Usamos almacenamiento necesario para recordar tu preferencia y, solo si lo aceptas, cookies analíticas.
            Puedes aceptar, rechazar o configurar tu elección. Más información en
            la <Link href="/politica-cookies">Política de Cookies</Link>.
          </p>
          <div className="cookieActions">
            <button type="button" onClick={openModal}>Configurar</button>
            <button type="button" onClick={() => save(false)}>Rechazar</button>
            <button type="button" className="cookieAccept" onClick={() => save(true)}>Aceptar todas</button>
          </div>
        </aside>
      )}

      {modalOpen && (
        <div className="cookieOverlay" role="presentation">
          <section className="cookieModal" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
            <button type="button" className="cookieClose" onClick={() => setModalOpen(false)} aria-label="Cerrar">×</button>
            <h2 id="cookie-title">Configuración de cookies</h2>
            <p>Elige qué cookies quieres permitir. Puedes cambiar esta preferencia cuando quieras desde el pie de página.</p>

            <div className="cookieOption">
              <div>
                <strong>Necesarias</strong>
                <small>Imprescindibles para el funcionamiento de la web.</small>
              </div>
              <span>Siempre activas</span>
            </div>

            <div className="cookieOption">
              <label htmlFor="cookie-analytics">
                <strong>Analíticas</strong>
                <small>Nos ayudan a entender el uso de la web de forma agregada.</small>
              </label>
              <input id="cookie-analytics" type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
            </div>

            <div className="cookieActions">
              <button type="button" onClick={() => save(analytics)}>Guardar preferencias</button>
              <button type="button" className="cookieAccept" onClick={() => save(true)}>Aceptar todas</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
