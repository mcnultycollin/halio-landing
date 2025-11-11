---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Breathe better. Perform better.
      color: text-dark
    subtitle: A five-minute reset for high performers — calm nervous system, sharper focus, zero fluff.
    text: >
      Halio guides short, science-backed breathwork rounds that fit between meetings.
      iPhone-only at launch for a tight, polished flow. Open, breathe, reset — then get back to it
      with that quiet edge.
    actions:
      - type: Button
        label: Download for iPhone
        url: https://apps.apple.com/   # TODO: replace with your App Store URL
        icon: arrowRight
        iconPosition: right
        style: primary
      - type: Link
        label: Join the newsletter
        url: /community
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: secondary
    media:
      type: ImageBlock
      url: /images/hero-halio.jpg
      altText: Halio breathing session over a calm nature backdrop
    badge:
      type: Badge
      label: iPhone exclusive
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding: [pt-16, pl-16, pb-16, pr-16]

  - type: GenericSection
    title:
      type: TitleBlock
      text: Scan to download
      color: text-dark
    subtitle: Point your camera and you’re in.
    text: >
      Prefer the quick route? Scan the QR to install Halio on iPhone. No account hoops — just
      a clean breathwork routine when you need it.
    media:
      type: ImageBlock
      url: /images/qr-halio.png
      altText: QR code to download Halio on iPhone
      styles:
        self:
          borderRadius: large
    colors: bg-neutral-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
        padding: [pt-8, pl-16, pb-8, pr-16]

  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: Key Benefits
      color: text-dark
      styles: { self: { textAlign: center } }
    subtitle: Built for busy brains and ambitious days.
    items:
      - type: FeaturedItem
        title: 5-minute resets
        subtitle: Inhale, exhale, hold, release
        text: Short guided rounds to clear noise and get you back to work with a steadier pulse.
        image: { type: ImageBlock, url: /images/icon-timer.svg, altText: Timer icon }
        colors: bg-neutralAlt-fg-dark
        styles: { self: { borderRadius: x-large, padding: [pt-8, pl-8, pb-8, pr-8] } }
      - type: FeaturedItem
        title: Immersive backdrops
        subtitle: Swipe to change scenes
        text: Forest, ocean, night sky — soothing loops that make a desk feel like open air.
        image: { type: ImageBlock, url: /images/icon-landscape.svg, altText: Landscape icon }
        colors: bg-neutralAlt-fg-dark
        styles: { self: { borderRadius: x-large, padding: [pt-8, pl-8, pb-8, pr-8] } }
      - type: FeaturedItem
        title: Adaptive cues
        subtitle: Audio + gentle haptics
        text: Light guidance for inhale/exhale timing. Or go silent — your call.
        image: { type: ImageBlock, url: /images/icon-audio.svg, altText: Audio icon }
        colors: bg-neutralAlt-fg-dark
        styles: { self: { borderRadius: x-large, padding: [pt-8, pl-8, pb-8, pr-8] } }
      - type: FeaturedItem
        title: Your rhythm
        subtitle: Slow to fast modes
        text: Tune pace, rounds, and holds. Halio remembers what works for you.
        image: { type: ImageBlock, url: /images/icon-sliders.svg, altText: Controls icon }
        colors: bg-neutralAlt-fg-dark
        styles: { self: { borderRadius: x-large, padding: [pt-8, pl-8, pb-8, pr-8] } }
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-16, pl-16, pb-16, pr-16]

  - type: GenericSection
    title:
      type: TitleBlock
      text: How it fits your day
      color: text-dark
      styles: { self: { textAlign: left } }
    text: |
      **Morning** — shake off the fog, start centered.  
      **Midday** — hit reset between meetings instead of hitting a wall.  
      **Before high-stakes moments** — calm the nerves, steady the voice.  
      **Evening** — downshift smoothly and sleep easier.
    actions: []
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-8, pl-16, pb-8, pr-16]

  - type: GenericSection
    title:
      type: TitleBlock
      text: What’s coming next
      color: text-dark
      styles: { self: { textAlign: left } }
    subtitle: Roadmap highlights
    text: |
      • **Apple Watch + Apple Health** — live heart-rate during sessions and automatic logging to Health.  
      • **Biofeedback tuning** — adjust pacing to your current HR for deeper calm.  
      • **Workout recovery** — breathwork protocols that speed the post-training cooldown.  
      • **Yoga protocol & guided sessions** — light movement timing and themed audio guidance.
    actions:
      - type: Link
        label: See the full roadmap
        url: /roadmap
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding: [pt-12, pl-16, pb-12, pr-16]

  - type: GenericSection
    title:
      type: TitleBlock
      text: Join the community
      color: text-dark
      styles: { self: { textAlign: center } }
    subtitle: Early features, experiments, and breathing breaks in your inbox.
    actions:
      - type: Button
        label: Subscribe to newsletter
        url: /community
        icon: arrowRight
        iconPosition: right
        style: primary
      - type: Link
        label: Explore features
        url: /features
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: secondary
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-12, pl-16, pb-16, pr-16]

seo:
  type: Seo
  metaTitle: Halio — Breathe better. Perform better.
  metaDescription: Halio is an iPhone-only breathwork app for quick midday resets, biofeedback-ready, and built for high performers.
  socialImage: /images/hero-halio.jpg
type: PageLayout
---
