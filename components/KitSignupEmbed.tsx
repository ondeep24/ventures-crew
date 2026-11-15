"use client";

import { useEffect, useRef } from "react";

export function KitSignupEmbed() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = "3035c2dc1f";
    script.src = "https://ventures-crew.kit.com/3035c2dc1f/index.js";
    mount.appendChild(script);

    return () => {
      mount.replaceChildren();
    };
  }, []);

  return <div ref={mountRef} />;
}
