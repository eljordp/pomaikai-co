/* Crash course tracking. Posts the same events the Lovable site (pomaikai.co)
   logs, to the same data-collect function, so results from either link show
   up together in pomaikai.co/admin under Crash Course. The key is Supabase's
   publishable (public) key, the same one shipped in pomaikai.co's own bundle. */
const ENDPOINT = "https://kmxzuacruwqraszteryp.supabase.co/functions/v1/data-collect";
const PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtteHp1YWNydXdxcmFzenRlcnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzODE3MTEsImV4cCI6MjA4Njk1NzcxMX0.y9aKw5YNPM4-Dei8EWmkQ_wjt37k4_vx4h5KQUy4Se0";

function visitorId(): string {
  let id = localStorage.getItem("visitor_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("visitor_id", id);
  }
  return id;
}

export async function trackEvent(eventType: string, eventData: Record<string, unknown> = {}) {
  try {
    await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: PUBLISHABLE_KEY,
        Authorization: `Bearer ${PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({
        action: "event",
        visitor_id: visitorId(),
        event_type: eventType,
        event_data: eventData,
        page: window.location.pathname,
      }),
      keepalive: true,
    });
  } catch (e) {
    console.warn("trackEvent failed:", e);
  }
}
