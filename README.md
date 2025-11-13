# Gogols.ai Website

Specialized AI agents — digital souls that learn your world and act on your behalf.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🎨 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **TypeScript:** Yes
- **Deployment:** Vercel (planned)

## 📁 Project Structure

```
website/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles + brand tokens
│   ├── components/       # React components
│   │   └── ui/          # shadcn/ui components
│   └── lib/             # Utilities
├── public/              # Static assets
│   └── gogol-corner.svg # Brand accent image
├── _wrk/                # Working docs (gitignored)
│   ├── PROJECT_CONTEXT.md
│   ├── CURSOR_RULES.md
│   └── initial-project-context.txt
└── package.json
```

## 🎨 Brand Design System

### Colors
All colors use design tokens defined in `src/app/globals.css`:

- **Background:** `bg-gogol-bg` (#020617)
- **Surface:** `bg-gogol-surface` (#111827)
- **Primary Accent:** `text-gogol-cyan` (#06b6d4)
- **Secondary Accent:** `text-gogol-purple` (#a855f7)
- **Highlight:** `text-gogol-accent` (#22d3ee)

### Usage
```tsx
// ✅ Correct - Use brand tokens
<div className="bg-gogol-bg text-gogol-cyan">
  Content
</div>

// ❌ Wrong - Don't hardcode colors
<div className="bg-[#0b0c10] text-cyan-300">
  Content
</div>
```

### Background Effects
Pre-built utilities for cyberpunk aesthetic:
- `bg-gogol-grid` - Subtle grid pattern
- `bg-gogol-radial` - Cyan radial gradient
- `bg-gogol-radial-purple` - Purple radial gradient

## 🛠️ Development

### Adding New Pages
1. Create file in `src/app/[route]/page.tsx`
2. Add metadata export
3. Use brand styling patterns from `page.tsx`

### Adding Components
1. Check `src/components/ui/` for shadcn components first
2. Create custom components in `src/components/`
3. Use TypeScript with proper types
4. Use brand tokens for styling

### Styling Guidelines
- Always use brand tokens (see above)
- Use semantic tokens: `text-foreground`, `text-muted-foreground`, `border-border`
- Follow spacing patterns: `px-6 py-16 md:py-24`
- Use shadcn/ui components when possible

## 📚 Documentation

- **Project Context:** `_wrk/PROJECT_CONTEXT.md` - Full project overview
- **Cursor Rules:** `_wrk/CURSOR_RULES.md` - AI collaboration guidelines
- **Original Context:** `_wrk/initial-project-context.txt` - ChatGPT conversation

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Connect repository
4. Deploy automatically on push

### Environment Variables
None required for basic setup. Add as needed for:
- Analytics
- Forms
- API integrations

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Landing page with hero, train, experience, services sections
- ✅ Dark theme with brand styling
- ✅ Responsive design

### Phase 2 (Planned)
- [ ] `/train` - Product onboarding flow
- [ ] `/experience` - Demo gogols gallery with Ethora chat widget
- [ ] `/services` - Professional services booking
- [ ] `/mesh` - Blog/lore content (MDX)

### Phase 3 (Future)
- [ ] Prisoner's Dilemma game integration
- [ ] User dashboard
- [ ] Gogol training interface
- [ ] Reputation system

## 🤝 Contributing

1. Create feature branch
2. Follow code style guidelines
3. Use brand tokens (no hardcoded colors)
4. Test responsive design
5. Submit PR with description

## 📝 License

Private project - All rights reserved

## 🔗 Links

- **Domain:** gogols.ai (planned)
- **Deployment:** Vercel (planned)
- **Tech Stack:** Next.js, Tailwind, shadcn/ui

---

**"Don't just use AI. Create a soul."** 🧠✨
