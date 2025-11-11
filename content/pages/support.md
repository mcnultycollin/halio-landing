---
title: Support
slug: /support
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Halio Support
      color: text-dark
    subtitle: We’ll get you breathing again.
    text: >
      Need help with the app, the QR download, or account questions? Start with the quick fixes
      below or contact us directly. We read every message.
    actions:
      - type: Button
        label: Email Support
        url: mailto:support@halio.app
        icon: arrowRight
        iconPosition: right
        style: primary
      - type: Link
        label: Join the community
        url: /community
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: secondary
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-16, pl-16, pb-12, pr-16]

  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: Quick help
      color: text-dark
      styles: { self: { textAlign: center } }
    items:
      - type: FeaturedItem
        title: Can’t install from QR?
        subtitle: Camera opens a weird page
        text: >
          Make sure you’re scanning with the iPhone Camera app.
          If you’re on desktop, open the link on your iPhone instead.
          Still stuck? Email **support@halio.app**.
        image: { type: ImageBlock, url: /images/icon-qr.svg, altText: QR icon }
        colors: bg-neutralAlt-fg-dark
        styles: { self: { borderRadius: x-large, padding: [pt-8, pl-8, pb-8, pr-8] } }
      - type: FeaturedItem
        title: App crashes or won’t open
        subtitle: Basic reset
        text: >
          Restart your iPhone, update iOS, then reinstall Halio.
          If it keeps happening, tell us your iOS version and iPhone model.
        image: { type: ImageBlock, url: /images/icon-bug.svg, altText: Bug icon }
        colors: bg-neutralAlt-fg-dark
        styles: { self: { borderRadius: x-large, padding: [pt-8, pl-8, pb-8, pr-8] } }
      - type: FeaturedItem
        title: No audio / haptics
        subtitle: Guidance not playing
        text: >
          Check iPhone Silent Mode and volume. In Halio, confirm audio cues are enabled in settings.
          Haptics require supported models.
        image: { type: ImageBlock, url: /images/icon-audio.svg, altText: Audio icon }
        colors: bg-neutralAlt-fg-dark
        styles: { self: { borderRadius: x-large, padding: [pt-8, pl-8, pb-8, pr-8] } }
      - type: FeaturedItem
        title: Apple Health / Watch (coming soon)
        subtitle: What to expect
        text: >
          We’re adding Apple Watch and Apple Health logging (heart rate during sessions).
          For early access updates, join the newsletter on **/community**.
        image: { type: ImageBlock, url: /images/icon-heart.svg, altText: Heart icon }
        colors: bg-neutralAlt-fg-dark
        styles: { self: { borderRadius: x-large, padding: [pt-8, pl-8, pb-8, pr-8] } }
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-8, pl-16, pb-16, pr-16]

  - type: GenericSection
    title:
      type: TitleBlock
      text: FAQ
      color: text-dark
    text: |
      **Which devices are supported?**  
      iPhone only at launch for quality and performance. iOS 16+ recommended.

      **How do I restore purchases?**  
      If you made an in-app purchase and don’t see it, make sure you’re on the same Apple ID.
      Open Halio → Settings → Restore Purchases (if available). If you don’t see the option,
      email support and we’ll help.

      **Will Halio work with Apple Watch and Apple Health?**  
      We’re building integration to display live heart rate during sessions and to log mindfulness
      minutes and HR into Apple Health. Watch support is planned for upcoming releases.

      **Is any of this medical advice?**  
      No. Halio provides general wellness guidance. If you have a medical condition, consult
      a professional before changing your breathing practice.
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-12, pl-16, pb-12, pr-16]

  - type: GenericSection
    title:
      type: TitleBlock
      text: Troubleshooting checklist
      color: text-dark
    text: |
      1. **Update iOS** to the latest version available for your device.  
      2. **Force-quit and relaunch** Halio.  
      3. **Reboot your iPhone.**  
      4. **Reinstall** Halio from the App Store.  
      5. If an error persists, email **support@halio.app** with:
         - Your iPhone model and iOS version  
         - Halio app version (Settings → About)  
         - Steps to reproduce and any screenshots
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding: [pt-12, pl-16, pb-12, pr-16]

  - type: GenericSection
    title:
      type: TitleBlock
      text: Contact us
      color: text-dark
      styles: { self: { textAlign: left } }
    text: >
      Prefer a form? Send us a note and we’ll reply by email.
    media:
      type: FormBlock
      elementId: support-form
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: How can we help?
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Send
        style: primary
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-12, pl-16, pb-16, pr-16]

  - type: GenericSection
    title:
      type: TitleBlock
      text: Policies & links
      color: text-dark
    text: |
      • **Privacy Policy** — /privacy  
      • **Terms of Use** — /terms  
      • **Roadmap** — /roadmap  
      • **Community / Newsletter** — /community
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-8, pl-16, pb-16, pr-16]

seo:
  type: Seo
  metaTitle: Halio Support
  metaDescription: Get help with Halio: install issues, audio/haptics, FAQs, and contact support.
type: PageLayout
---
