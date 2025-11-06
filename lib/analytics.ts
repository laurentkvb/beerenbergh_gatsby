// Analytics configuration for Vercel Analytics or Plausible

export const analyticsConfig = {
  // Vercel Analytics
  vercel: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID !== undefined,
    id: process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ID,
  },
  // Plausible Analytics
  plausible: {
    enabled: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN !== undefined,
    domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "laurentkleering.com",
    src: "https://plausible.io/js/script.js",
  },
};

/**
 * Track custom events
 * Usage: trackEvent("button_click", { button: "contact" })
 */
export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  // Vercel Analytics
  if (analyticsConfig.vercel.enabled && typeof window !== "undefined") {
    // @ts-expect-error - Vercel Analytics injected globally
    window.va?.track(eventName, properties);
  }

  // Plausible Analytics
  if (analyticsConfig.plausible.enabled && typeof window !== "undefined") {
    // @ts-expect-error - Plausible injected globally
    window.plausible?.(eventName, { props: properties });
  }
}

/**
 * Track page views (automatically handled by Next.js)
 */
export function trackPageView(url: string) {
  if (typeof window !== "undefined") {
    // Plausible automatically tracks page views
    // Vercel Analytics automatically tracks page views
    console.log(`Page view tracked: ${url}`);
  }
}
