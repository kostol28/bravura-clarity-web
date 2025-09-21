import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          hover: "hsl(var(--gold-hover))",
          light: "hsl(var(--gold-light))",
        },
        buff: {
          DEFAULT: "hsl(29 59% 60%)",
          100: "hsl(29 56% 16%)",
          200: "hsl(29 56% 23%)",
          300: "hsl(29 56% 30%)",
          400: "hsl(29 56% 38%)",
          500: "hsl(29 59% 60%)",
          600: "hsl(29 59% 67%)",
          700: "hsl(29 59% 74%)",
          800: "hsl(29 59% 81%)",
          900: "hsl(29 59% 88%)",
        },
        prussian_blue: {
          DEFAULT: "hsl(200 71% 16%)",
          100: "hsl(200 71% 6%)",
          200: "hsl(200 71% 10%)",
          300: "hsl(200 71% 13%)",
          400: "hsl(200 71% 16%)",
          500: "hsl(200 71% 16%)",
          600: "hsl(200 71% 35%)",
          700: "hsl(200 71% 52%)",
          800: "hsl(200 71% 70%)",
          900: "hsl(200 71% 85%)",
        },
        teal_blue: {
          DEFAULT: "hsl(197 65% 28%)",
          100: "hsl(197 65% 9%)",
          200: "hsl(197 65% 14%)",
          300: "hsl(197 65% 20%)",
          400: "hsl(197 65% 24%)",
          500: "hsl(197 65% 28%)",
          600: "hsl(197 65% 43%)",
          700: "hsl(197 65% 58%)",
          800: "hsl(197 65% 73%)",
          900: "hsl(197 65% 87%)",
        },
        gunmetal: {
          DEFAULT: "hsl(200 71% 14%)",
          100: "hsl(200 71% 5%)",
          200: "hsl(200 71% 8%)",
          300: "hsl(200 71% 11%)",
          400: "hsl(200 71% 14%)",
          500: "hsl(200 71% 14%)",
          600: "hsl(200 71% 32%)",
          700: "hsl(200 71% 50%)",
          800: "hsl(200 71% 68%)",
          900: "hsl(200 71% 83%)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        medium: "var(--shadow-medium)",
        large: "var(--shadow-large)",
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-subtle": "var(--gradient-subtle)",
        "gradient-gold": "var(--gradient-gold)",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
