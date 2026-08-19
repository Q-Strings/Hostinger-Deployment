import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "system-ui"]
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        brand: {
          deep: "hsl(var(--brand-deep))",
          sky: "hsl(var(--brand-sky))",
          green: "hsl(var(--brand-green))",
          yellow: "hsl(var(--brand-yellow))",
          purple: "hsl(var(--brand-purple))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      boxShadow: {
        glow: "0 30px 80px -50px hsl(var(--brand-sky) / 0.55)",
        soft: "0 20px 50px -30px rgba(15, 23, 42, 0.25)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, hsl(var(--brand-deep) / 0.94), hsl(var(--brand-sky) / 0.85), hsl(var(--brand-green) / 0.82))",
        "cta-gradient": "linear-gradient(120deg, hsl(var(--brand-deep)), hsl(var(--brand-purple) / 0.9), hsl(var(--brand-sky)))",
        "mesh": "radial-gradient(circle at 20% 20%, hsl(var(--brand-sky) / 0.22), transparent 45%), radial-gradient(circle at 80% 0%, hsl(var(--brand-yellow) / 0.18), transparent 40%), radial-gradient(circle at 0% 80%, hsl(var(--brand-green) / 0.16), transparent 45%)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
