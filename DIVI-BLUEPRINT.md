# Forging Community Divi Blueprint

This file turns the static prototype into a manual Divi build plan.

Use it as a page-by-page wireframe and module checklist, not as production code.

## Global Direction

### Visual identity
- Base the community section on the current Forge AHEAD top-level site look: white and warm off-white backgrounds, strong blue headlines, orange CTAs, rounded cards, and generous spacing.
- Keep the overall feel clean and institutional, but warmer and more community-facing than a typical academic site.
- Favor large section padding, rounded corners, and soft shadows over dense layouts.

### Core colors
- Primary blue: `#045A7D`
- Dark blue: `#033B52`
- Sky blue: `#69A9C3`
- Accent orange: `#DF883E`
- Off-white background: `#F4F5F2`
- Light blue-gray background: `#E8EDF0`
- Body text: `#17313D`
- Secondary text: `#58707B`

### Typography
- Heading feel: Gotham HTF if available in brand system; otherwise use the closest approved site font in Divi.
- H1: large, heavy, short line length.
- H2: bold, clean, not overly decorative.
- Eyebrow labels: all caps, blue, small tracking.
- Body copy: medium size with comfortable line height.

### Reusable Divi patterns
- `Section`: use full-width background color blocks with large top/bottom padding.
- `Row`: prefer 2-column and 3-column layouts; avoid overly complex grids unless needed.
- `Blurb module`: best for icon-less feature cards, support cards, and pathways.
- `Text module`: for headlines, copy blocks, quote boxes, and list sections.
- `Button module`: orange for primary, blue for secondary, outlined/white for tertiary.
- `Image module`: use once approved community photography is available.
- `Call To Action module`: good fit for pathway cards and section-end CTAs.
- `Email Optin module`: good fit for newsletter capture once connected.
- `Accordion/Toggle module`: optional for FAQs, CAB review steps, or resource guidance.
- `Blog module`: future replacement for the static News cards.
- `Form module` or embed: use only when final routing and consent language are approved.

## Global Template Pieces

### Header for `/community/*`
- Use Divi Theme Builder header scoped to the community section.
- Layout:
  - Top utility bar with: "You are viewing the Forging Community website" and a text link back to the main Forge AHEAD home.
  - Main header row with logo on left, menu center/right, orange `Get Involved` button on far right.
- Menu items:
  - Overview
  - About Us
  - Community Advisory Board
  - Partners
  - Projects
  - Resources
  - News & Updates
- Mobile:
  - Use Divi mobile menu, but keep the CTA visible if possible.

### Footer for all community pages
- Four-column footer.
- Column 1: short Forging Community description.
- Column 2: Explore links.
- Column 3: Resources links.
- Column 4: Connect links.
- Bottom bar:
  - copyright
  - short note or site utility text

## Homepage Blueprint

Source reference: [index.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/index.html)

### Section 1: Utility message
- Divi section with light beige/gray background.
- One row, 2 columns.
- Left text module: "You are viewing the Forging Community website."
- Right text module: "Back to Forge AHEAD home" link.

### Section 2: Hero
- Regular section.
- One row, 2 columns at roughly `60/40`.

Left column:
- Text module for eyebrow: `Forging Community`
- Text module for H1
- Text module for subhead
- Button module row:
  - Primary orange: `Get Involved`
  - Secondary outlined or white: `Explore Projects`
- Three small stat cards under the CTAs:
  - `3` states linked through one community network
  - `CAB` community review built into research and planning
  - `Ongoing` resources, pilots, partnerships, and feedback loops

Right column:
- Replace the prototype tile collage with a 2x2 image grid in Divi once photos are ready.
- For now, use four image placeholders or colored blocks with labels:
  - Community listening and design
  - Partner planning
  - Local implementation support
  - Resource sharing and translation

Design notes:
- Blue background card behind the left column content.
- Large rounded corners.
- White text.
- Strong orange CTA.

### Section 3: Mission and Vision
- Regular section.
- One row, 2 columns.
- Two large text/card modules.
- Card 1:
  - Eyebrow: `Mission`
  - Headline
  - Supporting paragraph
- Card 2:
  - Eyebrow: `Vision`
  - Headline
  - Supporting paragraph

### Section 4: What Forge AHEAD Supports
- Light off-white section.
- Intro row:
  - Eyebrow
  - H2
  - lede paragraph
- Three-column row of support cards.

Each card:
- Small eyebrow/kicker
- Card title
- 2-3 sentence description
- Inline text link

Cards:
- Community-engaged research
- Micro-grants
- Regional collaboration

### Section 5: Community overview + CAB quote
- Standard white section.
- One row, 2 columns.

Left column:
- Text/card module with:
  - Eyebrow
  - H2
  - short paragraph
  - pill/tag list for:
    - Community Advisory Board
    - Coalition & Partners
    - Projects
    - Resources
    - News & Updates
    - Get Involved

Right column:
- Quote-style CTA card with dark blue background.
- Eyebrow
- quote text
- short attribution line
- orange button: `Meet the CAB`

### Section 6: Start with the pathway that fits your role
- Light blue-gray section.
- Intro row:
  - Eyebrow
  - H2
- Three-column row of pathway cards.

Cards:
- Community members and advocates
- Organizations and partner groups
- Researchers and collaborators

Each card:
- Simple icon/avatar block at top
- Title
- short paragraph
- blue button

### Section 7: Stay Connected
- White section.
- Intro row:
  - Eyebrow
  - H2
  - lede
- One row, 2 columns.

Left column:
- Email Optin module or Form module placeholder.
- Fields:
  - Name
  - Email
  - Interest dropdown

Right column:
- Text/card module titled `Next content priorities`
- Bullet list of content still needed

## About Us Blueprint

Source reference: [engagement-core.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/engagement-core.html)

### Section 1: Hero banner
- Full-width hero block with blue gradient background.
- Eyebrow: `About Us`
- H1
- short intro paragraph

### Section 2: How We Work
- White section.
- Intro row.
- Three-column card row:
  - Listen first
  - Build together
  - Translate results

### Section 3: Core Goals + Regional Reach
- Off-white section.
- Two-column layout.

Left:
- card with bullet list of core goals

Right:
- dark quote/highlight card
- regional reach copy
- state pills: Alabama, Mississippi, Louisiana

### Section 4: Community Infrastructure
- White section.
- Intro row.
- Four-column card row:
  - Community Advisory Board
  - Coalition & Partners
  - Projects & Micro-grants
  - Resources & News

## CAB Blueprint

Source reference: [cab.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/cab.html)

### Section 1: Hero
- Blue gradient hero.
- Eyebrow: `Community Advisory Board`
- H1
- brief intro

### Section 2: CAB role and chair feature
- White section.
- Two-column row.

Left:
- text card with CAB responsibilities as a bullet list

Right:
- dark blue leadership card
- Chair name
- Chair title
- affiliation
- orange CTA button: `Request CAB review`

### Section 3: Member directory
- Off-white section.
- Intro row.
- Break into three subgroups by state:
  - Alabama
  - Mississippi
  - Louisiana
- For each state:
  - state heading
  - 3-4 person cards in columns

Each member card:
- image or placeholder headshot
- name
- organization
- one short role tag

Divi note:
- Start with Image + Text + small tag text.
- Later convert to a saved layout or theme builder loop if CAB members become a custom post type.

### Section 4: Project review process
- White section.
- Two-column row.

Left:
- numbered timeline or blurbs for 3 review steps

Right:
- card describing minutes/archive/profile future additions

## Coalition & Partners Blueprint

Source reference: [coalition.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/coalition.html)

### Section 1: Hero
- Blue gradient hero.
- Eyebrow: `Coalition & Partners`
- H1
- intro paragraph

### Section 2: Quick value band
- White section.
- Four-column stat/value row.
- Use Blurb modules or text boxes:
  - Regional
  - Flexible
  - Practical
  - Visible

### Section 3: Partner types
- Off-white section.
- Intro row.
- Four-column cards:
  - Community-based organizations
  - Faith and civic partners
  - Health and public agencies
  - Academic and technical partners

### Section 4: Partner experience + directory readiness
- White section.
- Two-column row.

Left:
- 3-step timeline:
  - Connect
  - Scope the fit
  - Build together

Right:
- card explaining future filterable directory structure
- add small tags:
  - State
  - Role
  - Logo
  - Contact
  - Impact quote

### Section 5: Success story framework
- Light blue-gray section.
- Intro row.
- Three story cards:
  - Food access and healthy living
  - Faith-community outreach
  - Clinical-community bridge
- Bottom CTA button: `Apply to Partner`

## Projects Blueprint

Source reference: [projects.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/projects.html)

### Section 1: Hero
- Blue gradient hero.
- Eyebrow: `Projects`
- H1
- intro paragraph

### Section 2: Filters + project cards
- White section.
- Top row: tag/filter chips
  - Alabama
  - Mississippi
  - Louisiana
  - Community-engaged research
  - Pilot projects
- Three-column project card row.

Each card:
- small label above title
- title
- summary paragraph

### Section 3: Project template explanation + impact reports
- Off-white section.
- Two-column row.

Left:
- card with the standard project page structure

Right:
- card about impact reports / one-page briefs

### Section 4: Related CTA row
- White section.
- Three-column CTA cards linking to:
  - Micro-grants
  - Get Involved
  - Research Collaborations

## Micro-Grants Blueprint

Source reference: [micro-grants.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/micro-grants.html)

### Section 1: Hero
- Blue gradient hero.
- Eyebrow: `Community Micro-Grants`
- H1
- intro paragraph

### Section 2: Three-value card row
- White section.
- Cards:
  - Invest in local solutions
  - Pair funding with technical assistance
  - Share what communities are building

### Section 3: Funding priorities + awardee story slots
- Off-white section.
- Two-column row.

Left:
- bullet list of funding priorities

Right:
- card explaining how awardee spotlights will look

### Section 4: Application journey
- White section.
- Three-step timeline:
  - Review fit
  - Prepare a short concept
  - Receive support

## Resources Blueprint

Source reference: [resources.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/resources.html)

### Section 1: Hero
- Blue gradient hero.
- Eyebrow: `Resources`
- H1
- intro paragraph

### Section 2: Resource categories + cards
- White section.
- Top tag row:
  - One-pagers
  - Toolkits
  - Videos
  - Research summaries
  - Audience-specific guidance
- Three-column resource cards

### Section 3: Library design + language guidance
- Off-white section.
- Two-column row.

Left:
- card about filtering/search structure

Right:
- card linking the library to accessibility/language guidance

### Section 4: Request materials form
- White section.
- One centered form card.
- Fields:
  - Name
  - Organization
  - What do you need?
  - Notes

## News & Updates Blueprint

Source reference: [news.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/news.html)

### Section 1: Hero
- Blue gradient hero.
- Eyebrow: `News & Updates`
- H1
- intro paragraph

### Section 2: Featured content cards
- White section.
- Three-column story/update cards:
  - How community input shaped a project plan
  - Regional meeting, webinar, or listening session
  - New guide, summary, or printable brief

### Section 3: Editorial guidance + WordPress note
- Off-white section.
- Two-column row.

Left:
- card with simple editorial rules

Right:
- card explaining this should later become a WordPress post archive / Divi blog module

## Get Involved Blueprint

Source reference: [get-involved.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/get-involved.html)

### Section 1: Hero
- Blue gradient hero.
- Eyebrow: `Get Involved`
- H1
- intro paragraph

### Section 2: Participation pathways
- White section.
- Three-column cards:
  - Volunteer or participate
  - Attend an event or webinar
  - Refer someone or share an idea

### Section 3: Interest form
- Off-white section.
- One centered form card.
- Fields:
  - Name
  - Email
  - Area of interest
  - Notes

## Research Collaborations Blueprint

Source reference: [research-collaborations.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/research-collaborations.html)

### Section 1: Hero
- Blue gradient hero.
- Eyebrow: `Research Collaborations`
- H1
- intro paragraph

### Section 2: Four-step collaboration process
- White section.
- Single-column stacked timeline or four blurbs:
  - Describe the project in plain language
  - Share materials for review
  - Receive CAB guidance
  - Prepare for launch

### Section 3: Submission checklist + expansion plan
- Off-white section.
- Two-column row.

Left:
- checklist card

Right:
- card about future uploads, routing, rubric, and notifications

## Accessibility Blueprint

Source reference: [accessibility.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/accessibility.html)

### Section 1: Hero
- Blue gradient hero.
- Eyebrow: `Accessibility & Language Guide`
- H1
- intro paragraph

### Section 2: Accessibility + language
- White section.
- Two-column row.

Left:
- alternate formats / access support bullet list

Right:
- respectful language / plain-language guidance card

## Privacy Blueprint

Source reference: [privacy.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/privacy.html)

### Section 1: Hero
- Blue gradient hero.
- Eyebrow: `Privacy & Data`
- H1
- intro paragraph

### Section 2: Privacy topics + approval note
- White section.
- Two-column row.

Left:
- core privacy topics list

Right:
- note card explaining this content needs final institutional approval

## Contact Blueprint

Source reference: [contact.html](/Users/ccampos/Library/CloudStorage/Box-Box/Forge%20AHEAD%20Center/forge-ahead-community/contact.html)

### Section 1: Hero
- Blue gradient hero.
- Eyebrow: `Contact`
- H1
- intro paragraph

### Section 2: Three intake pathways
- White section.
- Three-column cards:
  - General questions
  - Partner and project inquiries
  - Participation and resource requests

### Section 3: Contact form + related links
- Off-white section.
- Two-column row.

Left:
- contact form card
- fields:
  - Name
  - Email
  - Topic
  - Message

Right:
- related pages card with direct links to the main destination pages

## Recommended Divi Build Order

1. Build the global header and footer first.
2. Build the homepage completely.
3. Build the hero template used by all inner pages.
4. Build the CAB, Coalition, and Projects pages next.
5. Add Get Involved, Resources, and News.
6. Finish with Contact, Research Collaborations, Accessibility, and Privacy.

## Content Still Needed Before Final Divi Build

- Approved community photography for the homepage hero and inner-page banners.
- Final CAB quote and member portraits.
- Partner organization list, logos, and short descriptions.
- Final featured project list and summaries.
- Real form routing, email destinations, and consent/privacy language.
- Accessibility contact and alternate-format policy.
- Final privacy/data owner language.

## Practical Divi Notes

- Save recurring blocks as Global Modules or saved sections:
  - utility message bar
  - page hero
  - footer
  - quote card
  - 3-card CTA row
  - 2-column form + info row
- Use Divi presets for:
  - orange primary button
  - blue secondary button
  - white rounded content card
  - dark blue quote card
  - eyebrow text style
- If you need one thing to be visually stronger than the current prototype, prioritize:
  - real photography
  - cleaner spacing rhythm
  - consistent card padding
  - tighter headline line lengths
