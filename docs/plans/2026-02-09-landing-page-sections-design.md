# Vanna Finance - Landing Page Section Ideas & Design Document

> **Version:** 1.0 | **Date:** February 9, 2026
> **Project:** Vanna Finance - DeFi Composable Credit Infrastructure
> **Purpose:** 10 innovative section concepts with a recommended 5-section final structure

---

## Table of Contents

1. [Top 10 Section Ideas](#top-10-section-ideas)
2. [Recommended 5-Section Landing Page](#recommended-5-section-landing-page)
3. [Technical Stack Recommendations](#technical-stack-recommendations)
4. [Design System Integration Notes](#design-system-integration-notes)

---

## Top 10 Section Ideas

---

### Section 1: "The Credit Reactor" - 3D Hero Experience

**Purpose:** Instantly communicate Vanna's core value - 10x composable credit - through a visceral, interactive 3D experience that no DeFi competitor offers.

**Visual Concept:**
A dark (#111111) full-viewport hero featuring a central **3D crystalline reactor core** built with Three.js. The reactor is a translucent, faceted polyhedron (icosahedron geometry) pulsing with Vanna's brand gradient energy (Imperial Red #FC5457 flowing into Violet #703AE6). Around it orbit **10 glowing protocol orbs** (Hyperliquid, Uniswap, Derive, Pendle, etc.) connected by luminous particle streams representing liquidity flow.

When the user lands, the reactor assembles from scattered particles into its crystalline form - a 3-second entrance animation conveying "assembling your credit." The headline **"Borrow 10x. Trade Anywhere."** (Plus Jakarta Sans, H1 at 80px, semibold) fades in with a staggered word-by-word reveal. Below it: a subheadline in `.text-subtext` gray-600 and two CTAs: "Launch App" (bg-gradient, radius-3) and "See How It Works" (stroke-1 border, violet-500 text).

**Interactive Elements:**

- **Three.js Reactor:** Custom ShaderMaterial with vertex displacement (wave function on icosahedron), Fresnel rim lighting in Violet-500, and UnrealBloomPass for selective glow on the reactor core. The reactor rotates slowly via `clock.getElapsedTime()` and responds to mouse position through raycaster hover - moving the cursor subtly warps the reactor's displacement amplitude.
- **Particle Streams:** InstancedMesh with custom ShaderMaterial using instanced attributes for position offsets. 500-1000 particles flowing between the reactor and orbiting protocol icons. Gradient coloring from #FC5457 to #703AE6 via uniform interpolation.
- **Scroll-triggered:** As user scrolls past 20vh, GSAP ScrollTrigger scrubs the camera dolly forward (camera.position.z from 8 to 4), zooming into the reactor and transitioning the background from pure dark to a subtle radial gradient.
- **Hover on protocol orbs:** Raycaster detects hover, scales the orb with spring physics (stiffness: 100, damping: 10), and displays a tooltip with the protocol name.
- **Mobile fallback:** Replace Three.js scene with a pre-rendered animated WebM/AVIF loop + CSS particle overlay using `transform: translate3d()` for GPU acceleration.

**Content Strategy:**
First impression = "This is not another DeFi protocol." The reactor metaphor communicates: Vanna is the **engine** that powers your DeFi strategy. The orbiting protocols show breadth. The gradient energy shows dynamism.

**Technical Implementation:**
- Three.js r170+ with React Three Fiber (@react-three/fiber)
- @react-three/drei for environment, Float, and helper components
- Custom GLSL shaders (vertex displacement + Fresnel fragment)
- EffectComposer: RenderPass + UnrealBloomPass (strength: 1.5, radius: 0.4, threshold: 0.85) + ChromaticAberration (amount: 0.003)
- GSAP ScrollTrigger for camera scrub
- Framer Motion for text stagger (staggerChildren: 0.08)
- Lenis for smooth scroll

**Brand Alignment:**
- Background: `--color-base-dark` (#111111)
- Reactor glow: Gradient from `--imperial-red-500` to `--violet-500`
- Protocol orbs: `--electric-blue-500` accent
- Text: `.text-h1` for headline, `.text-subtext` for sub
- CTAs: `.bg-gradient` primary, `.stroke-1` secondary
- Spacing: `--spacing-14` (120px) section padding

**User Engagement:**
Immediate visual spectacle holds attention for 3-5 seconds (reactor assembly). Mouse interactivity rewards exploration. Scroll transition creates curiosity to continue. Protocol orbs signal ecosystem depth.

---

### Section 2: "The Capital Multiplier" - Interactive Leverage Calculator

**Purpose:** Let users *feel* the power of 10x undercollateralized credit by interacting with a real-time financial calculator that shows before/after comparisons.

**Visual Concept:**
Split-screen layout on a `--color-base-platinum` (#F7F7F7) background. Left side: an interactive calculator card (white, radius-4, shadow class). Right side: a dynamic **3D bar chart visualization** that updates in real-time as the user adjusts inputs. The comparison shows "Traditional DeFi" (capped, gray-400 bars) vs "With Vanna" (gradient bars, 10x taller) side by side.

The calculator has three inputs:
1. **Deposit Amount** (number input, no spinners per brand guidelines)
2. **Asset Type** dropdown (ETH, BTC, USDC)
3. **Leverage Slider** (1x to 10x, custom styled with gradient thumb)

Below inputs: a results panel showing Total Trading Power, example scenario, and estimated annual yield range.

**Interactive Elements:**

- **Three.js 3D Bar Chart:** Two groups of 3D bars (BoxGeometry) rendered with React Three Fiber. Traditional bars use MeshStandardMaterial in gray-400. Vanna bars use custom ShaderMaterial with the brand gradient applied via UV mapping. Bars animate height via spring physics when values change. Subtle bloom on Vanna bars only (selective bloom via layers).
- **Slider micro-interaction:** Custom range slider where the track fills with the brand gradient as leverage increases. At each integer step (2x, 3x... 10x), a subtle "snap" haptic-style bounce animation plays (Framer Motion spring). The multiplier number above the thumb scales up briefly.
- **Scroll-triggered entry:** The calculator slides in from left (x: -60, opacity: 0) and the chart from right (x: 60, opacity: 0) via GSAP ScrollTrigger with `start: "top 70%"`.
- **Results counter:** Numbers in the results panel use CountUp.js style animation (Framer Motion `useMotionValue` + `useTransform`) counting from 0 to the calculated value.
- **Hover on Vanna bars:** Tooltip appears showing exact value + "10x your capital" label.

**Content Strategy:**
Message: "See the difference yourself." This section converts skeptics by making the abstract (10x leverage) tangible and personal. Users input THEIR amount and see THEIR potential. Compare directly to traditional DeFi's overcollateralization trap.

**Technical Implementation:**
- React Three Fiber for 3D bar chart
- Framer Motion for slider animations, entrance, and number counters
- GSAP ScrollTrigger for scroll-linked entrance
- React state for calculator logic (deposit * leverage = total)
- Custom CSS for slider track gradient
- `input[type="number"]` with spinners removed per brand guidelines

**Brand Alignment:**
- Background: `--color-base-platinum`
- Calculator card: White, `--radius-4`, `.shadow`
- Input borders: `--gray-300`, focus: `--violet-500`
- Slider gradient: `linear-gradient(135deg, #FC5457 10%, #703AE6 80%)`
- Traditional bars: `--gray-400`
- Vanna bars: Brand gradient
- Typography: `.text-h5` section heading, `.text-body-1` body
- Spacing: `--spacing-7` (32px) between elements

**User Engagement:**
Interactive calculators have 2-5x higher engagement than static content. Personal input creates ownership. Real-time visual feedback is addictive. The dramatic height difference between gray and gradient bars creates an instant "wow" moment.

---

### Section 3: "The Liquidity River" - Scroll-Driven Flow Visualization

**Purpose:** Explain Vanna's composable leverage flow (deposit -> borrow -> deploy across protocols) through an immersive scroll-driven journey.

**Visual Concept:**
A tall section (400vh) with a pinned canvas. As the user scrolls, a luminous "river" of particles flows from a **wallet icon** (left) through a **Vanna reactor** (center) and branches out to **5 protocol destinations** (right). Each scroll phase reveals a step:

1. **0-25% scroll:** Wallet deposits ETH (particles gather, wallet icon pulses)
2. **25-50%:** Particles flow into Vanna, multiply 10x (particle count explodes, reactor glows brighter)
3. **50-75%:** Credit branches split into 5 streams toward protocol icons
4. **75-100%:** All streams active, showing the full composable strategy live

Text panels appear at each phase with sticky positioning - short, punchy copy describing each step.

**Interactive Elements:**

- **Three.js Particle River:** 2000+ particles using InstancedMesh with custom ShaderMaterial. Particle positions update per-frame along bezier curves (computed in JS, passed as uniform arrays). Particles use additive blending for luminous appearance. Color transitions from Electric Blue (#32EEE2) at source to Violet (#703AE6) at destinations.
- **GSAP ScrollTrigger Pin:** The canvas pins for 400vh of scroll distance. `scrub: 1` links scroll position to particle flow progress (0-1 uniform). Each 25% triggers a new text panel.
- **Phase transitions:** At the 25% "multiply" moment, a burst animation plays - particle count quadruples, bloom strength ramps from 0.5 to 2.0 over 200ms, and the reactor's Fresnel intensity peaks.
- **Parallax text panels:** Each text block enters with `opacity: 0, y: 30` and fades in/out as scroll progresses using Framer Motion `useScroll` + `useTransform`.
- **Mobile optimization:** Reduce to 500 particles, simplify bezier curves, use `will-change: transform` on text panels.

**Content Strategy:**
Narrative: "Here's exactly how your $1,000 becomes $10,000 of trading power." Step-by-step storytelling removes complexity. Each phase has one headline + one sentence:
- Phase 1: "Deposit collateral" / "Start with what you have."
- Phase 2: "Borrow 10x credit" / "Vanna multiplies your capital."
- Phase 3: "Deploy anywhere" / "Trade perps, options, spot, yield - all at once."
- Phase 4: "Manage everything" / "One account. One dashboard. Total control."

**Technical Implementation:**
- Three.js with InstancedMesh + custom vertex/fragment shaders
- GSAP ScrollTrigger for pinning and scrub-linked animation
- Bezier curve math via `THREE.CubicBezierCurve3`
- Framer Motion for text panel transitions
- Intersection Observer as fallback for scroll detection
- Canvas resizing via `ResizeObserver`

**Brand Alignment:**
- Background: Deep dark with subtle radial gradient (`--gray-900` center to `--color-base-dark` edges)
- Particles: `--electric-blue-500` to `--violet-500` gradient
- Reactor glow: Brand gradient
- Text: `.text-h6` headlines (white), `.text-body-1` descriptions (`--gray-300`)
- Protocol icons: Monochrome white, with brand accent on hover
- Spacing: Sticky text panels use `--spacing-8` (40px) padding

**User Engagement:**
Scroll-driven storytelling is the most engaging web pattern of 2025-2026. Pinned canvas keeps users in the experience. The "multiply" burst at 25% is a dopamine hit. Gradual reveal maintains curiosity across 4 phases.

---

### Section 4: "Greeks Command Center" - Interactive Dashboard Preview

**Purpose:** Showcase Vanna's professional-grade Greeks Dashboard - the feature that differentiates Vanna from every other DeFi protocol - through a live, interactive preview.

**Visual Concept:**
Dark section (`--gray-900` background) designed to feel like a premium trading terminal. The centerpiece is a **glassmorphic dashboard mockup** (bg-white/10 backdrop-blur-xl, radius-5, stroke-1 border-white/20) containing:

1. **Greeks gauges** - Four circular gauges for Delta, Gamma, Theta, Vega, each with animated arcs
2. **Payoff graph** - An interactive SVG line chart showing P&L curves
3. **Health Factor meter** - A horizontal bar transitioning from green to amber to red
4. **Position cards** - Mini cards showing sample positions across protocols

The dashboard floats slightly above the background with a subtle `box-shadow` and gentle `Float` animation (React Three Fiber's `<Float>` or CSS `@keyframes` for 3px vertical oscillation).

**Interactive Elements:**

- **Animated gauges:** SVG `<circle>` with `stroke-dasharray` and `stroke-dashoffset` animated by Framer Motion on scroll entry. Delta gauge fills to +12.5 (brand gradient stroke), Gamma to 0.8, Theta to -$120 (Imperial Red), Vega to +$300 (Electric Blue).
- **Payoff graph interaction:** Users can hover the SVG chart to see a vertical crosshair line and tooltip showing P&L at that price point. Built with D3.js scales + React event handlers.
- **Health Factor animation:** The bar fills from left to right, color transitioning from Electric Blue (#32EEE2) through Violet (#703AE6) to Imperial Red (#FC5457) based on ratio. A pulsing dot marks "Your Position" at 1.45 (safe zone).
- **Scroll entrance:** Dashboard scales from 0.9 to 1.0 and opacity from 0 to 1, with a slight rotation correction (rotateX: 5deg to 0deg) for a "rising from below" effect via GSAP.
- **Tab switching:** Mini tabs above the dashboard ("Portfolio Greeks" | "Payoff Graph" | "Alerts") switch content panels with Framer Motion `AnimatePresence` crossfade.

**Content Strategy:**
Message: "TradFi precision. DeFi freedom." This section targets sophisticated traders who will immediately recognize the value of portfolio-level Greeks. For newcomers, brief labels explain each metric (e.g., "Delta: Your directional exposure - how much your portfolio moves with the market").

Left of the dashboard: section headline + 3 bullet points:
- "Real-time Greeks across ALL positions"
- "Visual payoff graphs at a glance"
- "Smart alerts before you're at risk"

**Technical Implementation:**
- SVG for gauges and payoff graph (performant, scalable)
- D3.js for chart scales and data mapping
- Framer Motion for entrance animations and tab transitions
- CSS `backdrop-filter: blur(20px)` for glassmorphism
- CSS variables for gauge colors
- `prefers-reduced-motion` media query respected

**Brand Alignment:**
- Background: `--gray-900` (#111111)
- Dashboard card: Glassmorphic (white/10, blur, stroke-1 border)
- Gauge strokes: Brand gradient (Delta), `--electric-blue-500` (Vega), `--imperial-red-500` (Theta)
- Health Factor: Gradient from `--electric-blue-500` to `--imperial-red-500`
- Text in dashboard: `.text-body-2` (14px), monospace for numbers
- Labels: `.text-h10` (14px semibold)
- Section heading: `.text-h3` (48px), white

**User Engagement:**
Interactive dashboard preview lets traders "try before they buy." Gauges and charts trigger pattern recognition in finance-experienced users. The glassmorphic container creates premium feel. Tab switching increases time-on-section.

---

### Section 5: "Protocol Constellation" - 3D Ecosystem Map

**Purpose:** Demonstrate the scale of Vanna's 15+ protocol integrations and multi-chain support through an explorable 3D network visualization.

**Visual Concept:**
Full-width dark section with a **3D constellation map** rendered in Three.js. Vanna sits at the center as a glowing node. Surrounding it in 3D space are **protocol nodes** grouped by category (Perps, Options, Spot, Yield, Lending) arranged in orbital rings at different distances and elevations. Luminous lines connect Vanna to each protocol, with particles traveling along them to represent active liquidity flow.

Category labels float in 3D space near their clusters. Chain badges (Base, Arbitrum, Optimism, Stellar) orbit at the outermost ring.

**Interactive Elements:**

- **Three.js 3D Graph:** SphereGeometry nodes (varying sizes by category importance) with MeshStandardMaterial + emissive glow. Lines rendered with custom ShaderMaterial using dashed patterns. Particles on lines via InstancedMesh.
- **Camera orbit:** Gentle auto-rotation (`controls.autoRotate = true, autoRotateSpeed: 0.5`). OrbitControls enabled with constrained polar angle (min: PI/6, max: PI/2.5) to prevent disorienting views. Damping enabled.
- **Click-to-focus:** Raycaster click detection on protocol nodes. Clicking a node smoothly animates the camera (via GSAP `gsap.to(camera.position, {...})`) to focus on that node, and a detail panel slides in from the right showing: protocol name, integration type, supported actions, and a "Trade on [Protocol]" CTA.
- **Category filter:** HTML buttons overlaid on canvas (Framer Motion) let users filter by category, fading out non-matching nodes and dimming their connections.
- **Hover effect:** Hovered node scales 1.3x (spring physics), its connections brighten, and the cursor changes to pointer.
- **Mobile:** Replace 3D with a beautifully designed 2D grid using Framer Motion stagger animations + CSS hover effects. Each protocol is a card with icon, name, and type.

**Content Strategy:**
Message: "15+ protocols. 5 chains. One account." The constellation metaphor positions Vanna as the gravitational center of the DeFi ecosystem. The sheer visual density of connected nodes conveys scale.

Section headline above the canvas: "Your Gateway to All of DeFi"
Subheadline: "Vanna connects you to the protocols you love - with 10x more capital."

**Technical Implementation:**
- Three.js with React Three Fiber
- @react-three/drei: OrbitControls, Float, Html (for 3D labels)
- Custom force-directed layout algorithm or pre-computed positions
- GSAP for camera animation on node click
- Framer Motion for filter buttons and detail panel
- Raycaster with layers for efficient hover/click detection

**Brand Alignment:**
- Background: `--color-base-dark`
- Vanna center node: Brand gradient emissive
- Protocol nodes: `--violet-300` (Perps), `--electric-blue-500` (Spot), `--rose-400` (Options), `--magenta-400` (Yield), `--imperial-red-300` (Lending)
- Connection lines: `--gray-600` default, `--violet-500` highlighted
- Text: `.text-h4` section heading, `.text-body-2` for detail panel
- Filter buttons: `radius-full`, `--gray-700` default, `--violet-500` active

**User Engagement:**
3D explorable environments have highest time-on-page metrics. Click-to-explore creates discovery moments. Category filtering gives users control. The sheer visual density creates an impression of comprehensive integration.

---

### Section 6: "The Strategy Architect" - Interactive Strategy Builder

**Purpose:** Demonstrate composable leverage through a gamified strategy builder where users can drag-and-drop DeFi actions to construct multi-protocol strategies.

**Visual Concept:**
Light section (`--color-base-platinum`) with a workspace-style layout. On the left: a **toolbox panel** with draggable strategy blocks (Spot Trade, Perp Long, Perp Short, Buy Call, Sell Put, Yield Farm, Lend). On the right: a **canvas area** where blocks snap into a vertical flow, each connecting to the next with animated arrows.

As blocks are added, a **live P&L simulation panel** at the bottom updates: showing projected returns, risk level (color-coded health factor), and Greeks values. Pre-built strategy templates ("Basis Trade," "Covered Calls," "Delta Neutral Farm") are accessible via tabs above the workspace.

**Interactive Elements:**

- **Drag and drop:** React DnD or Framer Motion `Reorder` for drag-and-drop blocks. Each block is a card (white, radius-3, shadow, 64px height) with an icon, name, and a color stripe on the left matching its category.
- **Connection arrows:** SVG paths rendered between blocks with animated dash offset (`stroke-dasharray` + CSS animation) showing flow direction.
- **Live calculation:** As blocks are added/removed, React state recalculates a simulated P&L scenario (simple model: leverage * combined yields - borrow APR). CountUp animation on result values.
- **Template presets:** Clicking a template auto-populates the canvas with the corresponding blocks, each entering with a staggered spring animation.
- **Greeks sidebar:** Mini version of the Greeks gauges (from Section 4) updates as strategy changes. Adding a "Sell Put" block increases Theta, adding a "Perp Long" increases Delta, etc.
- **Scroll entrance:** GSAP ScrollTrigger fades in the toolbox first, then the canvas, then the simulation panel with 200ms delays.

**Content Strategy:**
Message: "Build your strategy. See the result." This section makes composable leverage interactive and understandable. Pre-built templates educate beginners. Advanced users can experiment freely. The live P&L creates instant gratification.

**Technical Implementation:**
- React DnD Kit or Framer Motion Reorder
- React state management for strategy composition
- SVG for connection arrows
- Framer Motion for animations
- Simple financial model (yield % * leverage - borrow APR)
- GSAP ScrollTrigger for entrance

**Brand Alignment:**
- Background: `--color-base-platinum`
- Toolbox: `--gray-50` background, `--gray-200` border
- Strategy blocks: White, `--radius-3`, `.shadow`
- Category stripes: Perps = `--violet-500`, Options = `--rose-500`, Spot = `--electric-blue-500`, Yield = `--magenta-500`
- Connection arrows: `--violet-300`
- P&L positive: `--electric-blue-500`, negative: `--imperial-red-500`
- Typography: `.text-h5` heading, `.text-body-2` block labels

**User Engagement:**
Gamification through building. Drag-and-drop is inherently satisfying. Templates lower the barrier to entry. Live results create a feedback loop. Users will spend 30-60 seconds minimum here.

---

### Section 7: "The Yield Vault" - LP Section with Animated Data

**Purpose:** Convert liquidity providers by showcasing real yield, zero impermanent loss, and transparent earnings - the LP-specific value proposition.

**Visual Concept:**
Alternating dark/light split. Left half: Dark (`--gray-900`) with a **3D vault door** visualization - a metallic circular vault with the Vanna logo engraved, slowly rotating open to reveal glowing coins inside. Right half: White background with clean data presentation.

The data side features:
1. **Yield breakdown:** Three horizontal bars showing Borrow Interest (5-15% APR), Liquidation Fees (2.5%), and Revenue Share (3%) - all animated with gradient fills.
2. **Comparison table:** "Vanna LP" vs "AMM LP (Uniswap)" comparing IL risk, APY, and capital lockup.
3. **Deposit CTA:** "Start Earning" gradient button.

**Interactive Elements:**

- **Three.js Vault:** CylinderGeometry + custom metallic MeshPhysicalMaterial (roughness: 0.2, metalness: 0.9, clearcoat: 1.0). Environment map for reflections. The vault door rotates on scroll via GSAP ScrollTrigger scrub. Coins inside use InstancedMesh with gold material (emissive: #FFD700) + Float animation.
- **Yield bars:** SVG rectangles that fill from 0% to target width on scroll entry, with the brand gradient as fill. Numbers count up alongside.
- **Comparison hover:** Hovering "Vanna LP" column highlights it with violet-50 background. Hovering "AMM LP" dims it slightly and shows a subtle red tint.
- **Scroll parallax:** Vault moves at 0.8x scroll speed, data panel at 1.0x, creating depth.

**Content Strategy:**
Message: "Earn real yield. No IL. No ponzinomics." Targets LPs specifically. The vault metaphor = security + stored value. The comparison table directly addresses the AMM impermanent loss fear. Transparent yield breakdown builds trust.

**Technical Implementation:**
- Three.js with MeshPhysicalMaterial for vault
- GSAP ScrollTrigger for vault rotation + bar fills
- Framer Motion for number counters
- CSS Grid for split layout
- SVG for yield bars

**Brand Alignment:**
- Vault section: `--gray-900` background
- Vault metal: Custom metallic material with subtle violet reflection
- Coins: Gold with `--violet-500` emissive tint
- Yield bars: Brand gradient fill
- Data section: White background
- Comparison: Green checkmarks for Vanna, gray X for competitors
- CTA: `.bg-gradient`, `.radius-3`

**User Engagement:**
The vault opening creates anticipation. Data-driven presentation appeals to analytical LP mindset. Direct comparison creates competitive framing. Transparent yield numbers build trust.

---

### Section 8: "The DeFi Credit Card" - Metaphor Visualization

**Purpose:** Make composable credit instantly understandable to newcomers through the familiar metaphor of a credit card.

**Visual Concept:**
Full-width section with centered content on a subtle gradient background (from `--gray-900` to `--gray-800`). The hero element is a **3D credit card** floating in space, designed in Vanna's brand:

- Card face: Dark with brand gradient edge, "VANNA" logo, chip graphic, "DeFi Credit" label
- Card back: Magnetic stripe, barcode with wallet address pattern

The card floats with a gentle tilt responding to mouse position (parallax tilt). Around the card, **4 floating tags** orbit at different speeds showing where the credit can be spent: "Perps," "Options," "Spot," "Yield."

Below the card: A simple **3-step process** presented as a horizontal timeline:
1. "Deposit collateral" (wallet icon)
2. "Get 10x credit" (card icon with "10x" badge)
3. "Spend across DeFi" (branching arrows icon)

**Interactive Elements:**

- **Three.js Credit Card:** PlaneGeometry with custom ShaderMaterial applying the card texture. Double-sided rendering. Mouse position tracked via `onMouseMove` and passed as uniforms to create a perspective tilt effect (rotateX/Y based on normalized mouse position, clamped to +/- 15 degrees).
- **Floating tags:** `<Html>` components from @react-three/drei positioned in 3D space, orbiting the card. CSS styled with `--radius-full`, `--violet-500` background, white text.
- **Card flip:** Clicking the card triggers a smooth Y-axis rotation (0 to PI via GSAP or spring animation), revealing the back.
- **Timeline steps:** Each step enters sequentially on scroll with Framer Motion `staggerChildren`. Connecting lines draw themselves (SVG path with animated `stroke-dashoffset`).
- **Mobile:** Card rendered as a CSS-animated 2D element with `transform: perspective(1000px) rotateX() rotateY()` driven by device orientation (DeviceOrientationEvent).

**Content Strategy:**
Message: "Think of it like a DeFi credit card." This metaphor appears in Vanna's research document and is their most powerful explanatory tool. Everyone understands credit cards. This section bridges the gap between TradFi and DeFi mental models.

**Technical Implementation:**
- Three.js with PlaneGeometry + custom texture
- @react-three/drei Html for floating tags
- GSAP or Framer Motion for card flip
- Device orientation API for mobile tilt
- SVG for timeline connections
- Framer Motion for step stagger

**Brand Alignment:**
- Background: Gradient from `--gray-900` to `--gray-800`
- Card design: `--color-base-dark` body, brand gradient edge
- Floating tags: `--violet-500` bg, white text, `--radius-full`
- Timeline icons: `--violet-500` fill
- Step titles: `.text-h8` (20px semibold), white
- Step descriptions: `.text-body-2`, `--gray-300`

**User Engagement:**
Familiar metaphors reduce cognitive load. The interactive tilt invites play. Card flip easter egg rewards curiosity. The 3-step process gives a clear mental model.

---

### Section 9: "Social Proof Engine" - Traction & Trust Section

**Purpose:** Build credibility through metrics, partners, and ecosystem validation - critical for DeFi where trust is everything.

**Visual Concept:**
Clean white section with a structured 3-row layout:

**Row 1 - Metrics Bar:** Four large animated counters side-by-side:
- "$350K+ Raised" (gradient text)
- "40K+ Subscribers" (gradient text)
- "2M+ Users" (gradient text)
- "15+ Integrations" (gradient text)

**Row 2 - Partner Logo Marquee:** An infinite-scroll marquee of partner/backer logos (Stellar Foundation, Optimism, Base, Pivot Ventures, Draper University, Gitcoin) in grayscale, colorizing on hover. Two rows scrolling in opposite directions.

**Row 3 - Integration Grid:** Bento-grid layout showing protocol logos grouped by category with subtle category labels. Cards have glassmorphic style with icon + name. Each card has a subtle glow on hover using `box-shadow` in the protocol's accent color.

**Interactive Elements:**

- **CountUp numbers:** Intersection Observer triggers a count-up animation from 0 to target value using Framer Motion `animate` with `duration: 2`. Numbers use a monospace variant for stable width during counting. The "$" and "+" characters remain static while the number animates.
- **Marquee:** CSS animation with `translateX` for infinite horizontal scroll. `animation-play-state: paused` on hover to let users read. Two rows, opposite directions, different speeds (30s and 40s).
- **Bento grid hover:** Each protocol card scales slightly (1.02), gains a colored `box-shadow` matching its brand color, and shows a brief tooltip with integration type ("Perps," "Options," etc.). Framer Motion `whileHover`.
- **Scroll entrance:** Each row enters with a 200ms stagger. Metrics pop in with spring (stiffness: 200), marquee fades in, bento grid staggers from bottom-left to top-right.

**Content Strategy:**
Message: "Backed by the best. Integrated with the leaders." Social proof is the #1 conversion factor for DeFi protocols (per Drift, Aave, dYdX patterns). Concrete numbers > vague claims. Real logos > abstract promises.

**Technical Implementation:**
- Intersection Observer + Framer Motion for counter animation
- CSS `@keyframes` for marquee (no JS needed)
- CSS Grid for bento layout (auto-fill, minmax pattern)
- Framer Motion `whileHover` for card effects
- Next.js Image for optimized logo loading
- `loading="lazy"` for off-screen logos

**Brand Alignment:**
- Background: White (`--color-base-white`)
- Metric numbers: `background-clip: text` with brand gradient
- Metric labels: `.text-body-1`, `--gray-600`
- Partner logos: Grayscale default, color on hover
- Bento cards: White, `--radius-3`, `.shadow`, `--stroke-1` border `--gray-200`
- Category labels: `.text-h11` (12px semibold), `--gray-500`
- Section heading: `.text-h4`, `--color-base-dark`

**User Engagement:**
Animated numbers create excitement. The marquee signals momentum. Hovering logos and cards is a natural interactive behavior. The bento grid encourages scanning - users look for protocols they already know and trust.

---

### Section 10: "The Future Unfolds" - CTA + Footer Closer

**Purpose:** Final conversion section that combines an aspirational message with clear CTAs and a sense of momentum/future.

**Visual Concept:**
Full-viewport dark section (`--color-base-dark`) with a **cinematic gradient background** - the brand gradient (#FC5457 to #703AE6) applied as a large, blurred, slow-moving mesh gradient (not linear - organic, flowing). The gradient pulses subtly, like a living entity.

Center-aligned content:
- **Headline:** "The Future of DeFi is Composable" (`.text-h2`, 64px, white)
- **Subheadline:** "Stop gambling. Start strategizing." (`.text-subtext`, `--gray-300`)
- **Dual CTAs:** "Launch App" (solid white bg, dark text - inverted for contrast) + "Join Discord" (stroke-1, white border, white text)
- **Waitlist email input:** A clean input + button combo for email capture

Below: a **minimal footer** with logo, nav links, social icons, and legal text.

**Interactive Elements:**

- **Mesh gradient background:** CSS `@property` animated gradient with `hue-rotate` and subtle position shifting, or a simple Three.js fullscreen quad with a custom fragment shader doing noise-based gradient animation (fbm noise mixing two gradient colors). The animation is slow (10-20 second cycle) and hypnotic.
- **Headline entrance:** Each word appears with a stagger (100ms delay each), sliding up from y: 30 with opacity transition. The word "Composable" has gradient text styling.
- **CTA hover:** Primary CTA scales to 1.05 with a white glow shadow. Secondary CTA fills with `--violet-500` on hover.
- **Email input:** Focus state adds a violet-500 border glow. Submit triggers a success animation - the button transforms from "Join Waitlist" to a checkmark icon with a satisfying spring.
- **Floating particles:** Sparse, slow particles (30-50) drifting upward in the background, very low opacity (0.1-0.2), using CSS `@keyframes` for performance.
- **Scroll entrance:** Content fades in as a group when the section enters viewport.

**Content Strategy:**
Message: "Join the movement." The final section is emotional, not technical. "Stop gambling. Start strategizing" is Vanna's most powerful tagline (from the research document). Two CTAs: one for ready users (Launch App), one for community (Discord). The email capture catches everyone else.

**Technical Implementation:**
- CSS `@property` for gradient animation OR simple Three.js noise shader
- Framer Motion for text stagger and CTA hover
- React Hook Form for email capture
- CSS particles (no Three.js needed here)
- `backdrop-filter` for email input glass effect

**Brand Alignment:**
- Background: `--color-base-dark` with animated brand gradient
- Headline: White, `.text-h2`
- "Composable" word: `background-clip: text` with brand gradient
- Primary CTA: White bg, `--color-base-dark` text (inverted), `--radius-3`
- Secondary CTA: Transparent, `--stroke-1`, white border, `--radius-3`
- Email input: Dark glass (white/5, blur), `--radius-2`
- Footer text: `--gray-500`, `.text-body-3`
- Social icons: `--gray-400`, hover `--violet-400`

**User Engagement:**
The living gradient background creates atmosphere. The aspirational headline triggers emotion. Dual CTAs reduce friction (no single-path pressure). Email capture is the lowest-commitment conversion. The overall effect is: "This protocol is alive and growing."

---

## Recommended 5-Section Landing Page

After evaluating all 10 sections against these criteria:
- **Conversion impact** (does it move users toward action?)
- **Story arc** (does the page tell a coherent narrative?)
- **Technical feasibility** (can it ship in a reasonable timeline?)
- **Competitive differentiation** (does it set Vanna apart?)
- **Mobile experience** (does it work on all devices?)

### The Final 5:

| Order | Section | Rationale |
|-------|---------|-----------|
| 1 | **Section 1: "The Credit Reactor" - 3D Hero** | First impression. The hero must be unforgettable. The 3D reactor + "Borrow 10x" headline immediately communicates the value prop. No competitor has this level of visual spectacle. |
| 2 | **Section 2: "The Capital Multiplier" - Calculator** | After the emotional hook, give proof. The interactive calculator makes the 10x claim tangible and personal. Users input their own numbers and see the result. This is the highest-engagement section type for fintech. |
| 3 | **Section 3: "The Liquidity River" - Scroll Journey** | Now explain HOW. The scroll-driven flow visualization walks users through the 4-step process (deposit -> borrow -> deploy -> manage) in a cinematic experience. This replaces a static "How It Works" with something memorable. |
| 4 | **Section 4: "Greeks Command Center" - Dashboard** | Differentiate from ALL competitors. No other DeFi protocol offers portfolio-level Greeks. This interactive preview section targets the high-value trader audience and signals institutional-grade tooling. |
| 5 | **Section 10: "The Future Unfolds" - CTA Closer** | Convert. After the journey (spectacle -> proof -> process -> differentiation), close with emotion and action. The living gradient, aspirational copy, and multiple CTAs capture every user type. |

### Why These 5 (and not the others):

**Included:**
- Sections 1-4 form a natural narrative arc: **Wow -> Believe -> Understand -> Differentiate**
- Section 10 closes the loop with **emotion + action**
- Each section targets a different conversion psychology: spectacle, proof, education, sophistication, urgency

**Cut (but available for V2):**
- **Section 5 (Protocol Constellation):** Powerful but redundant with Section 3's protocol references. Save for a dedicated "Ecosystem" page.
- **Section 6 (Strategy Architect):** Incredible feature but complex to build. Better as an in-app feature or dedicated interactive page.
- **Section 7 (Yield Vault):** LP-specific. Better as a dedicated "/earn" page section.
- **Section 8 (Credit Card):** Great metaphor but conflicts with the Reactor metaphor in Section 1. One brand metaphor per page.
- **Section 9 (Social Proof):** Important content, but can be woven INTO the other sections (metrics in hero, logos in footer) rather than needing its own section on V1.

### Page Flow Diagram:

```
[HERO: "The Credit Reactor"]
  |  Emotional hook. "Borrow 10x. Trade Anywhere."
  |  3D spectacle. Brand gradient energy.
  v
[CALCULATOR: "The Capital Multiplier"]
  |  Proof point. "See the difference yourself."
  |  Interactive. Personal. Data-driven.
  v
[SCROLL STORY: "The Liquidity River"]
  |  Education. "Here's how it works."
  |  4-phase scroll journey. Cinematic.
  v
[DASHBOARD: "Greeks Command Center"]
  |  Differentiation. "TradFi precision. DeFi freedom."
  |  Interactive preview. Professional-grade.
  v
[CTA: "The Future Unfolds"]
     Conversion. "Stop gambling. Start strategizing."
     Launch App + Join Discord + Email capture.
```

---

## Technical Stack Recommendations

### Core Framework
| Technology | Purpose | Version |
|-----------|---------|---------|
| **Next.js 15** | App Router, RSC, SSG for landing page | 15.x |
| **React 19** | UI components, server components | 19.x |
| **TypeScript** | Type safety | 5.x |
| **Tailwind CSS 4** | Utility-first styling with Vanna design tokens | 4.x |

### 3D & Visual
| Technology | Purpose | Version |
|-----------|---------|---------|
| **Three.js** | 3D scenes (Hero, Vault, Credit Card) | r170+ |
| **React Three Fiber** | React integration for Three.js | 8.x |
| **@react-three/drei** | Helpers (Float, Html, OrbitControls, Environment) | 9.x |
| **@react-three/postprocessing** | Bloom, chromatic aberration | 2.x |
| **Custom GLSL Shaders** | Reactor material, particle systems, gradient BG | - |

### Animation
| Technology | Purpose | Version |
|-----------|---------|---------|
| **GSAP** | ScrollTrigger (pinning, scrub), complex timelines | 3.12+ |
| **Framer Motion** | React animations, entrance effects, hover states | 11.x |
| **Lenis** | Smooth scroll foundation | 1.x |

### Data Visualization
| Technology | Purpose | Version |
|-----------|---------|---------|
| **D3.js** (scales only) | Chart math for payoff graphs | 7.x |
| **SVG** | Gauges, bars, charts (no library needed) | native |

### Performance
| Technology | Purpose |
|-----------|---------|
| **next/dynamic** | Dynamic imports for Three.js components (no SSR) |
| **React.lazy + Suspense** | Code-split heavy sections |
| **Intersection Observer** | Trigger animations only when visible |
| **ResizeObserver** | Canvas responsive sizing |
| **`prefers-reduced-motion`** | Accessibility compliance |
| **WebP/AVIF** | Optimized images and fallback textures |

### SEO & Performance
| Technology | Purpose |
|-----------|---------|
| **Next.js Metadata API** | Title, description, OG tags |
| **JSON-LD Schema** | Organization + SoftwareApplication markup |
| **`next/image`** | Optimized, lazy-loaded images |
| **Lighthouse CI** | Automated performance auditing |

### Deployment
| Technology | Purpose |
|-----------|---------|
| **Vercel** | Edge deployment, analytics, speed insights |
| **Vercel Analytics** | Real user monitoring |

---

## Design System Integration Notes

### Mapping Vanna Tokens to Tailwind

```js
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'vanna-dark': '#111111',
        'vanna-platinum': '#F7F7F7',
        'violet': {
          50: '#F1EBFD', 100: '#D3C2F7', 200: '#BDA4F4',
          300: '#9F7BEE', 400: '#8D61EB', 500: '#703AE6',
          600: '#6635D1', 700: '#5029A3', 800: '#3E207F',
          900: '#2F1B61',
        },
        'rose': {
          50: '#FFE6F2', 500: '#FF007A', 600: '#E8006F',
        },
        'imperial-red': {
          50: '#FEEEEE', 500: '#FC5457', 600: '#E54C4F',
        },
        'electric-blue': {
          50: '#EBFCFD', 500: '#32EEE2', 600: '#22CED9',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'vanna-1': '4px', 'vanna-2': '8px', 'vanna-3': '12px',
        'vanna-4': '16px', 'vanna-5': '20px',
      },
      boxShadow: {
        'vanna': '0px 7px 15px rgba(0,0,0,0.08), 0px 28px 28px rgba(0,0,0,0.07)',
      },
      backgroundImage: {
        'vanna-gradient': 'linear-gradient(135deg, #FC5457 10%, #703AE6 80%)',
      },
    },
  },
}
```

### Typography Utility Classes

```css
/* globals.css - extend with Vanna type scale */
@layer utilities {
  .text-h1 { font-size: 80px; line-height: 96px; font-weight: 600; }
  .text-h2 { font-size: 64px; line-height: 87px; font-weight: 600; }
  .text-h3 { font-size: 48px; line-height: 72px; font-weight: 600; }
  .text-h4 { font-size: 40px; line-height: 60px; font-weight: 600; }
  .text-h5 { font-size: 34px; line-height: 51px; font-weight: 600; }
  .text-h6 { font-size: 28px; line-height: 42px; font-weight: 600; }
  .text-h7 { font-size: 24px; line-height: 36px; font-weight: 600; }
  .text-h8 { font-size: 20px; line-height: 36px; font-weight: 600; }

  .text-subtext { font-size: 20px; line-height: 30px; font-weight: 400; }
  .text-body-1 { font-size: 16px; line-height: 24px; font-weight: 400; }
  .text-body-2 { font-size: 14px; line-height: 21px; font-weight: 400; }

  .text-heading { color: #1F1F1F; }
  .text-paragraph { color: #4B5563; }

  .text-btn-lg { font-size: 20px; font-weight: 600; }
  .text-btn-md { font-size: 16px; font-weight: 600; }
  .text-btn-sm { font-size: 12px; font-weight: 600; }
}
```

### Three.js Component Loading Pattern

```tsx
// Always dynamic import Three.js components (no SSR)
import dynamic from 'next/dynamic'

const HeroReactor = dynamic(
  () => import('@/components/3d/HeroReactor'),
  { ssr: false, loading: () => <HeroSkeleton /> }
)

const LiquidityRiver = dynamic(
  () => import('@/components/3d/LiquidityRiver'),
  { ssr: false, loading: () => <RiverSkeleton /> }
)
```

### Performance Budget

| Metric | Target | Notes |
|--------|--------|-------|
| LCP | < 2.5s | Hero text loads immediately, 3D loads after |
| FID | < 100ms | Defer all Three.js to after hydration |
| CLS | < 0.1 | Reserve exact dimensions for 3D canvases |
| Total JS | < 400KB initial | Three.js chunk loaded dynamically |
| 3D Assets | < 2MB total | Compressed textures, optimized geometries |
| Lighthouse | > 90 | Performance score target |

### Accessibility Requirements

- `prefers-reduced-motion`: Disable all Three.js animations, GSAP scroll effects, and Framer Motion transitions. Show static fallbacks.
- `prefers-color-scheme`: The landing page is dark-first but should respect system preference for light/dark variants.
- WCAG AA: All text meets 4.5:1 contrast ratio. Interactive elements have visible focus rings (violet-500, 2px offset).
- Keyboard navigation: All CTAs, calculator inputs, and filter buttons are tabbable. Skip-to-content link at page top.
- Screen readers: All 3D scenes have `aria-hidden="true"` with adjacent text descriptions. Canvas elements have `role="img"` with `aria-label`.

### Mobile Strategy

| Section | Desktop | Mobile |
|---------|---------|--------|
| Hero Reactor | Full Three.js scene | Pre-rendered video loop + CSS particles |
| Calculator | 3D bar chart + form | 2D bars (SVG) + stacked form |
| Liquidity River | Pinned Three.js canvas | Vertical card sequence + CSS animations |
| Greeks Dashboard | Full interactive dashboard | Simplified card layout, swipeable |
| CTA Closer | Animated gradient shader | CSS gradient animation |

### File Structure

```
src/
  app/
    page.tsx              # Landing page (SSG)
    layout.tsx            # Root layout with fonts
    globals.css           # Vanna design tokens + utilities
  components/
    sections/
      HeroSection.tsx     # Section 1 wrapper
      CalculatorSection.tsx
      FlowSection.tsx
      DashboardSection.tsx
      CTASection.tsx
    3d/
      HeroReactor.tsx     # Three.js reactor scene
      BarChart3D.tsx      # Three.js bar chart
      LiquidityRiver.tsx  # Three.js particle river
      shaders/
        reactor.vert      # Reactor vertex shader
        reactor.frag      # Reactor fragment shader
        particles.vert    # Particle vertex shader
        particles.frag    # Particle fragment shader
    ui/
      Button.tsx
      Input.tsx
      Card.tsx
      Gauge.tsx           # SVG gauge component
      CountUp.tsx         # Animated counter
    layout/
      Navbar.tsx
      Footer.tsx
  lib/
    calculator.ts         # Financial calculation logic
    greeks.ts             # Greeks simulation logic
  hooks/
    useScrollProgress.ts
    useReducedMotion.ts
    useDeviceCapability.ts
```

---

## Summary

This document provides **10 detailed, innovative section concepts** for the Vanna Finance landing page, each leveraging modern web technologies (Three.js, GSAP, Framer Motion) while strictly adhering to Vanna's brand guidelines (Plus Jakarta Sans, Violet/Rose/Imperial Red palette, brand gradient, spacing system).

The recommended **5-section structure** follows a deliberate psychological arc:

**Spectacle -> Proof -> Education -> Differentiation -> Conversion**

Each section builds on the previous, telling the complete Vanna story in under 3 minutes of engaged scrolling. The technical stack prioritizes performance (Next.js SSG, dynamic Three.js imports, Intersection Observer) while delivering a premium visual experience that positions Vanna as the most sophisticated protocol in DeFi.
