---
name: vanna-protocol-website-content
description: Comprehensive content guide for building the Vanna Protocol website - a composable credit infrastructure for DeFi. Use this skill when creating website content, copy, structure, or design for Vanna Protocol. Contains detailed information about product features, value propositions, technical architecture, and messaging strategy.
version: 1.0
category: web3-protocol-content
---

# Vanna Protocol Website Content Guide

## 1. CORE PRODUCT DEFINITION

### What is Vanna Protocol?

Vanna is a **Composable Credit Infrastructure Layer** for DeFi that provides:

- **Undercollateralized borrowing** (up to 900% LTV / 10× leverage)
- **Unified margin accounts** across multiple DeFi protocols
- **Composable leverage** deployable across any market (perps, options, spot, yield farming)
- **Professional-grade risk management tools** (Greeks Dashboard)

**Tag Line Options:**

- "Composable Credit for DeFi"
- "Leverage Anything & Anywhere in DeFi"
- "Borrow 10x Credit Upfront. Allocate Across DeFi"

## The Problems

### For Traders:

1. **Limited Access to Capital** - 70% of traders globally lack sufficient capital

2. **Overcollateralization = Capital Inefficiency**

In DeFi, you always lock more than you borrow.

👉 Example: Deposit **$150 ETH** just to borrow **$100 USDC** (~66% LTV).

This leads to major problems:

- **Trapped Liquidity** → Collateral stays idle instead of being traded, staked, or farmed.
- **Low Borrowing Power** → Traders can't scale, Degen's can't leverage yields.
- **Liquidity Starvation** → Locked capital = thin DEX volumes, wide spreads & worse execution
- **Poor LP Yields** → Lending pools under-utilized → low returns to LPs.

👉 Due to **Overcollateralization**, DeFi shows high TVL — but the liquidity is frozen, not fueling growth.

3. **Fragmented Liquidity:** liquidity scattered across chains

The result? 👇

- **Low liquidity = High slippage:** Buy $1,000, get only $950 worth
- **Failed orders:** Trades don't fill properly
- **Hidden costs:** Users overpay in fast markets

👉 Even when markets pump, retail traders feel rugged by execution.

4. **Broken User Experience**

DeFi today feels like a juggling act:

- One protocol for spot, another for futures, another for options
- A separate platform again for lending or yield farming
- Constant tab switching & manual tracking
- Users are forced to **shuffle capital across protocols for every move — ending with high gas costs**

👉 No single interface to manage everything — just scattered funds and a frustrating experience that keeps users away.

5. **High Liquidation Risk** - 90% of traders face liquidation due to lack of hedging tools

6. **No Risk Management** - DeFi lacks TradFi-grade tools like Greeks dashboards, payoff graphs, hedge modes

### For Liquidity Providers (LPs):

1. **Low Yields** - Limited returns compared to risk taken
2. **Impermanent Loss** - AMM LPs suffer from price changes
3. **Capital Lockup** - Funds stuck without flexibility

### For DeFi Protocols:

1. **Fragmented Liquidity** - Hard to attract deep liquidity

### The Solution: Vanna's Value Proposition

#### For Traders:

1. **10× Undercollateralized Credit** - Borrow up to 900% LTV (10× leverage) upfront
2. **Composable Leverage** - Use borrowed funds across ANY DeFi protocol:
   - Perpetuals (Hyperliquid, MUX, Avantis, GMX)
   - Options (Derive)
   - Spot Trading (Uniswap, Sushi)
   - Yield Farming (Pendle, katana)
   - Lending (Morpho, Aave, Compound)
3. **Professional Risk Management:**
   - Greeks Dashboard (Delta, Gamma, Theta, Vega tracking)
   - Payoff Graphs
   - Hedge Mode (go long & short simultaneously)
   - Smart Alerts for liquidation protection
4. **Unified Margin Account** - Manage all positions in one place
5. **CEX-like UX** - Simplified trading experience across multiple protocols
6. **Aggregated Liquidity** - Better execution, lower slippage, higher fill rates
7. **Lower Costs** - No funding fees on leveraged spot, simple borrow APR

#### For Liquidity Providers:

1. **Higher Yields** - Earn from:
   - Borrow interest (dynamic APR: 5-15%)
   - Liquidation fees (2.5% share of 20% total penalty)
2. **Zero Impermanent Loss** - Capital not exposed to price changes like AMMs
3. **Sustainable Returns** - Real yield, not ponzinomics

#### For DeFi Protocols:

1. **10× More Liquidity** - Unlock deeper liquidity via composable credit
2. **Instant User Access** - Tap into Vanna's growing user base
3. **Network Effects** - Protocols plug in → liquidity deepens → users multiply

---

## 2. KEY FEATURES & HOW IT WORKS

### Core Feature 1: Undercollateralized Borrowing

**Traditional DeFi Problem:**

- Overcollateralized lending: Lock $1,000 to borrow $700 (70% LTV)
- 30% of capital sits idle
- Limited borrowing power
- High opportunity cost

**Vanna Solution:**

- Borrow up to **900% LTV (10× leverage)**
- Example: Deposit $1,000 → Borrow $9,000 → Total: $10,000 trading power
- Borrowed funds + collateral held in unified margin account
- Dynamic Health Factor monitoring
- Automatic liquidation protection

**Technical Implementation:**

- Margin Account (smart contract wallet via account abstraction)
- Risk Model determines borrow limits
- Rate Model sets dynamic borrow APR
- Oracle system prices collateral & positions
- Liquidation engine protects lenders

**Use Case Example:**

```
Scenario: ETH Perps Trade
1. Trader deposits $1,000 USDC
2. Borrows $9,000 USDC (900% LTV)
3. Opens $10,000 long ETH perp on Hyperliquid
4. ETH rises 5% → Position value = $10,500
5. Profit = $500 (50% ROI on original $1,000)
```

---

### Core Feature 2: Composable Leverage Across Markets

**The Magic of Composable Leverage**

In DeFi, most traders still think leverage is limited to:
👉 Opening a long/short on perps
👉 And praying not to get rekt 😅

But here's the eye-opener 👀

⚡ What if I told you…

In DeFi you can **leverage anything and everything** —

Yield farming, staking, LPing, even restaking.

All from **a single unified margin account**. ⚡

That's the magic of **Composable Leverage**.

And that's exactly what **Vanna** is unlocking 👇

---

**The Problem with Leverage 1.0**

In DeFi today, leverage comes with big flaws 👇

**1. Overcollateralization → The Main Inefficiency**

Want to borrow **$800?** _Sure… just lock **$1,000** first 🤡_

But what if coming up with $1,000 itself is the problem?

And even if you do, that collateral will be locked — **can't be reused anywhere else.**

It remains **unproductive and idle**, creating a massive **opportunity cost.**

This is the core inefficiency of overcollateralized leverage — your capital works once, and then does nothing.

**High Liquidation Risk -** When you borrow near the **80% LTV limit**, your **Health Factor (HF)** drops close to **1**, the liquidation zone. Even a small price dip can instantly put your position at risk of liquidation.

At **HF ≈ 1**, you're **one red candle away from liquidation.** 💀

**2. Perps → Synthetic Leverage, Not Real Borrowed Liquidity**

You don't actually borrow assets — you're just **buying or selling virtual futures contracts.**

You pay **trading fees twice** — once when you enter and once when you exit the position.

And to keep that position alive, you also pay **funding fees**, all while staying exposed to liquidation risk.

👉 That's Leverage 1.0 — **expensive, restrictive, and capital-inefficient.**

---

**Enter Leverage 2.0 — Composable Leverage ⚡**

Composable Leverage lets you borrow **real, composable credit** that moves freely across multiple DeFi protocols through Vanna — instead of being trapped in one protocol.

This unlocks a **new DeFi superpower**: leverage anything & anywhere 👇

📈 Trade with leverage directly on AMM DEXs or your favorite spot markets

🌾 Boost yields with leveraged farming on your fav DeFi protocols

🔄 Stack leverage on perps to amplify positions

⚡ Yes, even options — buy or sell leveraged calls or puts too

🎯 Even You can take leveraged bets on prediction markets

🧩 Build composable strategies to manage risk & reduce liquidation pressure

It's not just leverage on one trade — it's **Leverage-as-a-Service for all of DeFi**.

**Programmable. Permissionless. Composable.** 🚀

---

**Why Composable Leverage Changes the Game ⚡**

Vanna fixes everything Leverage 1.0 got wrong 👇

⚡ **Amplification** – Get up to **10× composable undercollateralized credit** to boost exposure across DeFi.

💰 **No Locked Collateral** – Use your collateral + borrowed funds to **trade, hedge, farm, or bet** all at once means no more idle collateral.

🛡️ **Risk Control** – Borrow the same **$800** against **$1,000** collateral on Vanna — your **Health Factor stays high**, since it's barely **2× leverage** keeping liquidation far away.

💧 **Real Liquidity** – Unlike perps, you borrow **real assets**, not virtual contracts.

No funding fees. No entry or exit trading fees. Just a **simple borrow APR, which is way more cheaper**

🔗 **For Protocols** – Any DeFi protocol can plug into Vanna to **10× its capital efficiency.**

---

**How Composable Leverage Works ⚙️**

Vanna uses unified **margin accounts** to hold both your collateral **and** borrowed funds.

Here's the flow 👇

1️⃣ Let's say you decide to deposit **1 ETH as collateral**

2️⃣ Borrow undercollateralized credit in **USDC** — up to **10x leverage (900% LTV)**

3️⃣ Use the borrowed USDC to **buy BTC on Spot** → you're **indirectly going long on BTC**

4️⃣ Sell covered calls on your BTC holdings on **Options** → to **earn extra premium + offset minor downside moves.**

5️⃣ Deploy your **ETH collateral into Pendle** → to **earn passive yield while you're BTC long**

All inside **one margin account**. -only possible through composable credit. You're **shorting, hedging, and farming** in a single strategy.

💳 Think of it like a **DeFi credit card** — swipe your composable credit across multiple protocols instead of being stuck in one.

👉 **Leverage 1.0 was just hoping not to get rekt.**

**Leverage 2.0 is pure strategy.** 🚀

From now on, when we say **leverage** — we mean **Composable Leverage**. ⚡

Exclusively on **Vanna**.

---

**The DeFi Fragmentation Problem:**

In DeFi today, your positions are scattered everywhere:

👉 **Spot/Swaps** on Uniswap, Hyperliquid, PancakeSwap & more  
👉 **Perps** on Hyperliquid, Aster, Lighter & more  
👉 **Options** on Derive, Aevo & more  
👉 **Lending** on Aave, Compound, Morpho & more

**Result?**

- Fragmented balances across protocols
- Scattered risk with no single dashboard
- No unified PnL or portfolio view
- Extra gas just to shuffle funds
- Never sure of true risk or liquidation price

**CEX:** One account, all markets.  
**DeFi:** 5 wallets, 10 tabs, multiple protocols, scattered positions everywhere.

Making it **impossible to track your portfolio's real performance & risk.**

---

**Vanna's Solution: One Unified Margin Account**

Vanna integrates ALL these protocols into **one margin account:**

**Spot & Swaps:**

- Hyperliquid, Uniswap, Sushi, Soroswap, Aquarius

**Perpetuals (Perps):**

- Hyperliquid, Derive, Aster, Avantis, GMX

**Options:**

- Derive

**Lending:**

- Morpho, Blend, Aave

**Yield Farming:**

- Pendle, Katana & more

Funds move seamlessly across all markets — managed in **one account, one system**.

🔗 Liquidity aggregated  
🖥️ UX simplified  
⚡ No fragmentation. No chaos. Just pure composability.

---

**Aggregated Liquidity = Better Execution**

Instead of liquidity scattered across protocols, Vanna **aggregates it**.

- **Lower slippage**
- **Higher fill rates**
- **Capital efficiency**: every $ reused across strategies

Feels smoother than CEX — but fully on-chain. ⚡

---

**Cross-Protocol Strategy Example:**

**Strategy: Multi-Asset Leveraged Portfolio**

```
Starting Position:
1. Deposit 1 ETH as collateral (~$3,000)

Execution:
2. Borrow $9,000 USDC (10× leverage / 900% LTV)
3. Buy $9,000 worth of BTC on Uniswap (Spot) → Long BTC exposure
4. Sell BTC covered calls on Derive (Options) → Earn premium + hedge downside
5. Deploy ETH collateral into Pendle → Earn passive yield while holding BTC long

Result:
- Total exposure: $12,000 across 3 strategies
- Earning: Option premiums + Yield farming APY + BTC price appreciation
- Risk: Hedged via covered calls, diversified across assets
- All managed in ONE margin account
```

**Why This Matters:**

- **Capital Efficiency**: 1 collateral → multiple strategies
- **Risk Diversification**: Hedge across markets
- **Yield Stacking**: Combine trading + options + lending returns
- **Market Neutrality**: Go long AND short to profit from volatility
- **CEX-like simplicity with DeFi-grade composability**

---

**Not Just for Traders — Protocols Win Too**

Any **DeFi protocol** can integrate with Vanna.

The result?

- The same product they already offer…
- But with **10x more liquidity** (unlocked via composable credit)
- And instant access to Vanna's **growing user base**

**Network Effect:**  
Protocols plug in → liquidity deepens → users multiply → more protocols integrate → ecosystem grows

**Why DeFi Doesn't Lose on Innovation — It Loses on Experience**

DeFi doesn't lose to CEX on innovation.  
It loses on **experience & fragmentation**.

Vanna fixes both by delivering:

- **CEX-like simplicity**
- **DeFi-grade composability**
- **TradFi-like Greeks & risk dashboards**
- **10x capital efficiency**
- **Network effect for protocols**

---

### Core Feature 3: Greeks Dashboard (Professional Risk Management)

**What Are "Greeks"?**
Risk metrics from options trading that show how positions react to market changes:

1. **Delta** - Directional exposure (how much portfolio moves with price)
   - Example: Delta = +5 means portfolio gains $5 for every $1 ETH rises
2. **Gamma** - Rate of change of Delta (acceleration risk)
   - High Gamma = Delta changes fast (good for scalpers, risky for holders)
3. **Theta** - Time decay (options value loss over time)
   - Example: Theta = -$50/day means losing $50 daily if market stays flat
4. **Vega** - Volatility sensitivity (how IV changes affect position)
   - High Vega = portfolio sensitive to volatility spikes

**Vanna's Greeks Dashboard Features:**

- **Real-Time Aggregation** - Greeks calculated across ALL positions (perps, options, spot)
- **Portfolio-Level View** - See total Delta, Gamma, Theta, Vega
- **Payoff Graphs** - Visual P&L at expiry
- **What-If Analysis** - Simulate: "What if ETH drops 10%?"
- **Smart Alerts** - Get notified when:
  - Delta exceeds threshold (too directional)
  - Theta decay accelerates
  - Health Factor drops below safe zone
  - Liquidation risk increases

**Why Greeks Matter in DeFi:**

- Most DeFi traders YOLO into positions without understanding risk
- Greeks provide TradFi-grade portfolio management
- Enables sophisticated strategies (iron condors, straddles, etc.)
- Reduces liquidations via early warnings

**Example Dashboard View:**

```
Current Portfolio Greeks:
Delta: +12.5 ETH (moderately bullish)
Gamma: 0.8 (low acceleration)
Theta: -$120/day (bleeding $120 daily)
Vega: +$300/vol point (benefits from volatility spike)

Health Factor: 1.45 (safe)
Liquidation Price: ETH @ $2,800 (-15%)
```

---

### Core Feature 4: Unified Margin Account

**Traditional DeFi Problem:**

- Separate wallets for each protocol
- Manual bridging between chains
- Multiple approvals, gas fees
- Hard to track total exposure

**Vanna Solution:**

- **Single Margin Account** (smart contract wallet)
- All positions + collateral in one place
- Cross-margined (gains on one position offset losses on another)
- Automatic portfolio balancing

**Account Abstraction Benefits:**

- Gasless transactions (Vanna sponsors gas)
- Session keys (approve once, trade all day)
- Social recovery (recover account via email/phone)
- Cross-chain deployments (Base, Arbitrum, Optimism)

**Portfolio Netting Example:**

```
Position A: Long ETH perp (+$500 unrealized)
Position B: Short BTC perp (-$300 unrealized)
Net P&L: +$200

Health Factor calculated on NET exposure, not individual losses
→ Lower liquidation risk vs. isolated margin
```

---

## 3. TECHNICAL FEATURES TO HIGHLIGHT

### Margin Account Architecture

- **Account Abstraction** via ERC-4337
- **Smart Contract Wallets** per user
- **Modular Design** - plug in new protocols easily
- **Upgradeable** - add features without migration

### Oracle System

- **Multiple Oracles** - Chainlink, Pyth, RedStone
- **Deviation Protection** - Reject prices >2% from median
- **Heartbeat Monitoring** - Ensure freshness
- **Fallback Oracles** - Redundancy for reliability

### Risk Management

- **Dynamic Health Factor** - Real-time solvency check
- **Partial Liquidations** - Only liquidate what's needed
- **Dutch Auction Liquidations** - Fair pricing
- **Insurance Fund** - Backstop for bad debt

### Protocol Integrations (15+ Protocols)

**Perps:** Hyperliquid, GMX, MUX, Avantis  
**Options:** Derive, Premia, Aevo  
**Spot:** Uniswap, Sushi, 1inch  
**Yield:** Pendle, Ethena, Kamino  
**Lending:** Morpho, Aave, Compound

**Chains:** Base, Arbitrum, Optimism, Stellar, Polygon, Avalanche

---

## 4. KEY MESSAGING & TONE

### Primary Messages

1. **"Stop gambling. Start strategizing."**
   - DeFi is moving from casino to capital markets
   - Professional tools for serious traders

2. **"Borrow 10×. Trade Anywhere."**
   - Undercollateralized credit
   - Composable across all DeFi

3. **"Earn real yield. No IL. No ponzinomics."** (For LPs)
   - Sustainable returns from borrow interest + liquidations
   - Not inflationary token rewards

4. **"TradFi Precision. DeFi Freedom."**
   - Greeks Dashboard brings institutional tools to DeFi
   - No KYC, no gatekeeping

### Tone of Voice

- **Professional yet approachable** - Not overly technical, but not dumbed down
- **Empowering** - "You can do this"
- **Educational** - Teach users about Greeks, strategies
- **Confident** - Backed by real tech, not hype
- **Transparent** - Clear about risks (liquidations, volatility)

### What to AVOID

- Crypto hype language ("moon," "wen token," "WAGMI")
- Fear-based messaging ("Don't miss out!")
- Overpromising ("Guaranteed returns")
- Jargon overload (explain terms simply)

---

## 5. CALLS TO ACTION (CTAs)

### Primary CTAs

1. **"Launch App"** - Main CTA (top right, hero section)
2. **"Join Waitlist"** - For unreleased features
3. **"Read Docs"** - For developers/protocols

### Secondary CTAs

4. **"View Strategies"** - Educational content
5. **"Start Earning"** - For LPs
6. **"Integrate Your Protocol"** - For DeFi protocols
7. **"Join Discord"** - Community engagement

### CTA Placement Strategy

- **Hero Section**: "Launch App" + "Join Waitlist"
- **After Problem Statement**: "See How It Works"
- **After LP Section**: "Start Earning"
- **Footer**: "Join Discord" + "Follow on X"

---

## 6. COMPETITIVE POSITIONING

### Vanna vs. Competitors

**vs. Gearbox Protocol (Composable Leverage)**

- ✅ Vanna: Options + Perps + Spot + Yield
- ❌ Gearbox: Limited to lending/farming
- ✅ Vanna: Greeks Dashboard
- ❌ Gearbox: No risk management tools

**vs. Hyperliquid (Perps DEX)**

- ✅ Vanna: Borrow 10× credit THEN trade
- ❌ Hyperliquid: Only isolated margin (5-50× leverage WITHIN perps)
- ✅ Vanna: Use leverage across perps + options + spot
- ❌ Hyperliquid: Perps only

**vs. Derive (Options DEX)**

- ✅ Vanna: Borrow to buy options + trade perps
- ❌ Derive: Only options trading
- ✅ Vanna: Greeks aggregation across protocols
- ❌ Derive: Greeks only for Derive options

**vs. Aave/Compound (Lending)**

- ✅ Vanna: Up to 900% LTV (10×)
- ❌ Aave: Max 80% LTV
- ✅ Vanna: Borrow for trading (productive use)
- ❌ Aave: Borrow same asset (circular, not for leverage)

**Unique Selling Point:**

> "Vanna is the ONLY protocol that combines undercollateralized borrowing + composable leverage across perps, options, spot, AND yield farming + TradFi-grade Greeks dashboard."

---

## 7. FAQ CONTENT

### For Traders

**Q: How much can I borrow?**
A: Up to 900% LTV (10× your collateral). Example: Deposit $1,000 → Borrow $9,000 → Trade with $10,000.

**Q: What collateral is accepted?**
A: USDC, USDT, ETH, WBTC, and protocol-specific tokens (SOL on Stellar, etc.)

**Q: What happens if I get liquidated?**
A: If your Health Factor drops below 1.0, your positions are partially liquidated to repay the loan. You keep remaining equity. There's a 20% liquidation penalty (split: 17.5% to LPs, 2.5% to liquidators).

**Q: Can I withdraw anytime?**
A: Yes, as long as your Health Factor stays above 1.0. You can close positions and withdraw excess collateral.

**Q: What's the borrow interest rate?**
A: Dynamic APR ranges from 5-15% based on utilization. Lower utilization = lower rates.

**Q: Which protocols can I trade on?**
A: 15+ protocols including Hyperliquid, GMX, Derive, Uniswap, Pendle, Morpho. Full list on Integration page.

**Q: Do I need to bridge manually?**
A: No, Vanna handles cross-chain routing automatically. Just approve once and trade.

**Q: How do Greeks help me?**
A: Greeks show your portfolio's risk exposure (directional bias, time decay, volatility sensitivity). This helps you hedge, avoid liquidations, and optimize strategies.

---

### For Liquidity Providers (LPs)

**Q: How do I earn yield?**
A: Deposit USDC/USDT into Vanna's lending pool. Earn from:

1. Borrow interest (5-15% APR)
2. Liquidation fees (2.5% of penalties)
3. Protocol revenue share (50% to stakers)

**Q: Is there impermanent loss?**
A: No. Unlike AMM LPs (Uniswap, Curve), Vanna LPs don't provide liquidity to trading pairs. Your capital is lent to traders, not exposed to price changes.

**Q: What are the risks?**
A: Main risk is bad debt (if liquidations don't fully cover losses). Vanna mitigates this with:

- Conservative LTV limits
- Partial liquidations
- Insurance fund
- Multiple oracles

**Q: Can I withdraw anytime?**
A: Yes, subject to pool liquidity. If utilization is 90%, you can withdraw your portion of the 10% available.

**Q: How is APR determined?**
A: Dynamic rate model: Higher utilization → Higher APR (to attract more deposits).

---

### For DeFi Protocols

**Q: Why integrate with Vanna?**
A: Unlock 10× more liquidity and instant access to Vanna's user base. Example: Derive integrated → Vanna users can now borrow to buy options → Derive gets 10× TVL boost.

**Q: How does integration work?**
A: Technical team builds adapter contract. Vanna's margin accounts can then deploy funds to your protocol. Documentation available.

**Q: Do we pay Vanna?**
A: No integration fees. Vanna earns from borrow interest. Your protocol gets liquidity + users.

**Q: What chains do you support?**
A: Base, Arbitrum, Optimism, Stellar. Expanding to Polygon, Avalanche soon.

---

## 8. CONTENT EXAMPLES FOR REFERENCE

### Homepage Hero Section (Examples)

**Option 1: Aggressive**

```
Headline: "Borrow 10×. Trade Anywhere. Dominate DeFi."
Subheadline: "Undercollateralized credit to leverage perps, options, spot, and yield farming—all from one account."
CTA: "Launch App" | "View Strategies"
```

**Option 2: Professional**

```
Headline: "Composable Credit Infrastructure for DeFi"
Subheadline: "Borrow up to 10× your capital and deploy across Hyperliquid, Derive, Uniswap, and more. Manage risk with TradFi-grade Greeks."
CTA: "Start Trading" | "Read Docs"
```

**Option 3: Educational**

```
Headline: "Stop Gambling. Start Strategizing."
Subheadline: "Get 10× leverage, professional risk tools, and trade across 15+ DeFi protocols—without juggling tabs."
CTA: "See How It Works" | "Launch App"
```

---

### Problem/Solution Framework (Homepage)

**Section 1: The Problem**

```
Headline: "DeFi Trading Is Broken"

Pain Points:
❌ Overcollateralization: Lock $1,000 to borrow $700
❌ Fragmented liquidity across 10+ chains
❌ No risk management: 90% of traders get liquidated
❌ Casino UX: Tab-juggling across protocols

Callout: "70% of traders globally lack capital. DeFi makes it worse."
```

**Section 2: The Solution**

```
Headline: "Vanna Fixes DeFi"

Solutions:
✅ Borrow 10×: Deposit $1,000 → Borrow $9,000 → Trade $10,000
✅ Composable Leverage: Deploy across perps, options, spot, yield
✅ Greeks Dashboard: Track Delta, Gamma, Theta, Vega in real-time
✅ Unified Account: All positions in one place

CTA: "Launch App"
```

---

### Feature Highlights (Product Page)

**Feature Block Template:**

```
[Icon/Graphic]
Feature Name: "10× Undercollateralized Credit"
Description: "Deposit $1,000, borrow $9,000, trade with $10,000. No more locking up 150% collateral to borrow 70%."
Benefit: "Maximize capital efficiency. More buying power = more profit potential."
Technical Detail: "Powered by smart margin accounts and dynamic Health Factor monitoring."
CTA: "Learn More"
```

Repeat for:

- Composable Leverage
- Greeks Dashboard
- Unified Margin Account
- Smart Position Routing

---

### LP Value Proposition (For LPs Page)

```
Headline: "Earn Real Yield. No IL. No Ponzinomics."

Subheadline: "Lend USDC/USDT to traders. Earn sustainable returns from borrow interest, liquidation fees, and protocol revenue."

Earnings Breakdown:
1. Borrow Interest: 5-15% APR (dynamic)
2. Liquidation Fees: 2.5% of every liquidation penalty
3. Revenue Share: 50% of protocol fees distributed to stakers

Example ROI:
- Deposit: $100,000 USDC
- Borrow APR: 10%
- Liquidation earnings: ~2% annually
- Revenue share: ~3% annually
- Total: ~15% APY

No Impermanent Loss: Unlike AMMs, your capital isn't exposed to price changes.

CTA: "Start Earning"
```

---

### Trading Strategies Examples (Strategies Page)

**Strategy 1: Basis Trading (Market Neutral)**

```
Strategy: Basis Trading
Goal: Profit from funding rate arbitrage
Market Condition: Any (works in bull, bear, or sideways)

How It Works:
1. Borrow 10× ($10,000 from $1,000 deposit)
2. Long $5,000 spot ETH on Uniswap
3. Short $5,000 ETH perps on Hyperliquid
4. Collect funding rate (perps pay longs when funding positive)

Greeks Impact:
- Delta: 0 (market neutral)
- Theta: Positive (earn funding daily)
- Risk: Minimal (hedged)

Ideal For: Conservative traders seeking steady income

APY: 10-30% from funding rates
```

**Strategy 2: Covered Calls (Income Generation)**

```
Strategy: Covered Calls
Goal: Earn premium while holding spot
Market Condition: Neutral to slightly bullish

How It Works:
1. Borrow 10× ($10,000 from $1,000 deposit)
2. Buy $10,000 ETH on Uniswap
3. Sell $10,000 worth of ETH call options on Derive (strike: +10% OTM)
4. Collect premium upfront

Greeks Impact:
- Delta: +10 ETH (bullish exposure)
- Theta: Negative (options decay in your favor)
- Vega: Negative (benefit from IV drop)

Ideal For: Bullish traders who want to cap upside for income

APY: 15-40% from premiums
```

**Strategy 3: Gamma Scalping (Volatility Play)**

```
Strategy: Gamma Scalping
Goal: Profit from volatility without direction
Market Condition: High volatility expected

How It Works:
1. Borrow 10× ($10,000 from $1,000 deposit)
2. Buy straddle on Derive (long call + long put at same strike)
3. As ETH moves, adjust Delta by trading perps on Hyperliquid
4. Profit from Gamma (Delta changes)

Greeks Impact:
- Delta: 0 (market neutral initially)
- Gamma: High (Delta changes fast → scalping opportunity)
- Vega: Positive (benefit from IV spike)

Ideal For: Advanced traders who can manage dynamic hedging

APY: 50-100%+ in volatile markets (high risk)
```

**Strategy 4: Iron Condor (Low Volatility)**

```
Strategy: Iron Condor
Goal: Profit from range-bound markets
Market Condition: Low volatility, sideways

How It Works:
1. Borrow 10× ($10,000 from $1,000 deposit)
2. Sell OTM call + OTM put on Derive
3. Buy further OTM call + put (to cap losses)
4. Collect net premium if ETH stays in range

Greeks Impact:
- Delta: 0 (market neutral)
- Theta: Positive (time decay works for you)
- Vega: Negative (want IV to drop)

Ideal For: Traders expecting consolidation

APY: 20-40% from premiums (if price stays in range)
```

**Strategy 5: Delta-Neutral Farming**

```
Strategy: Delta-Neutral Yield Farming
Goal: Earn yield farming APY without price risk
Market Condition: Any

How It Works:
1. Borrow 10× ($10,000 from $1,000 deposit)
2. Deposit $5,000 into Pendle PT-sUSDe (yield farming)
3. Short $5,000 ETH perps on Hyperliquid (hedge price exposure)
4. Earn Pendle yield (~20% APY) + Ethena sUSDe yield (~10% APY)

Greeks Impact:
- Delta: 0 (hedged)
- Theta: Positive (earn yield daily)
- Risk: Minimal (market neutral)

Ideal For: LPs who want leveraged yield without directional risk

APY: 30-50% combined (yield + hedged gains)
```

---

## 9. SEO KEYWORDS & PHRASES

### Primary Keywords

- Composable credit DeFi
- Undercollateralized lending DeFi
- DeFi leverage
- Greeks dashboard DeFi
- Margin trading DeFi
- Cross-protocol leverage

### Long-Tail Keywords

- "How to get 10× leverage in DeFi"
- "Undercollateralized borrowing crypto"
- "Delta neutral strategies DeFi"
- "Greeks tracking for crypto options"
- "Composable DeFi protocols"
- "Best DeFi margin trading platform"
- "How to hedge DeFi positions"
- "Options trading DeFi with leverage"

### Location-Based (if applicable)

- "DeFi trading platform India"
- "Crypto leverage trading USA"
- "DeFi options Europe"

### Competitor Keywords

- "Gearbox alternative"
- "Better than Hyperliquid"
- "Aave leverage trading"
- "GMX with more leverage"

---

## 10. ABOUT VANNA PROTOCOL

### Mission Statement

"Vanna's mission is to democratize access to capital and bring TradFi-grade risk management to DeFi. We believe every trader deserves professional tools, not casino gambling."

### Vision

"Build the composable credit layer that powers the next generation of DeFi capital markets."

### Why We Built Vanna

"DeFi promised financial freedom but delivered fragmented liquidity, overcollateralization, and 90% liquidation rates. We built Vanna to fix this:

- Give traders the leverage they need
- Provide LPs with sustainable yields
- Enable protocols to unlock deeper liquidity
- Bring institutional risk tools to retail"

### Traction & Stats

- **$350,000+ Raised** from Pivot Ventures, Draper University, Gitcoin
- **40,000+ Email Subscribers** from campaigns
- **2M+ Users** via integrated protocols
- **15+ Protocol Integrations** across 5 chains
- **Backed By:** Stellar Foundation, Optimism, Base

### Ecosystem Partners

- **Blockchains:** Base, Arbitrum, Optimism, Stellar
- **Perps:** Hyperliquid, GMX, MUX, Avantis
- **Options:** Derive, Premia, Aevo
- **DEXs:** Uniswap, Sushi, 1inch
- **Yield:** Pendle, Ethena, Kamino
- **Lending:** Morpho, Aave, Compound

---

## 11. RISK DISCLAIMERS & LEGAL

### Risk Disclaimer (Required on Website)

```
⚠️ Trading with leverage involves significant risk of loss. You can lose more than your initial deposit.
- Liquidations can occur rapidly in volatile markets
- Borrow interest accrues daily
- Smart contract risk (audits available)
- Market risk (prices can move against you)


```

### Terms of Service (Simplified)

- Vanna is a non-custodial protocol (users control their funds)

---
