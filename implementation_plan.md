# Implementation Plan - Bhubaneswar Property Search Website (Magicbricks Clone)

Build a modern, highly aesthetic React web application for searching property in Bhubaneswar. The website will showcase 10 carefully curated properties in Bhubaneswar, with advanced search, budget filtering, property type selection, and detailed property views.

## Design Concept
- **Theme**: Premium Real Estate Portal. Modern clean dark/light UI using high-end CSS styles, smooth transitions, card layouts with glassmorphism touches, and clean typography (Inter / Outfit).
- **Primary Color**: Deep Indigo (`#3b82f6` / `#1d4ed8`) and Amber/Gold (`#f59e0b` / `#d97706`) as accent colors, mimicking the premium feel of top-tier property search portals.
- **Micro-interactions**: Scale effects on hover, slide-in details, tab switching transitions, and fade-in search results.

## Proposed Changes

### Project Setup
Initialize a React application using Vite in the workspace directory (`d:/Magic-brics`).
We will run `npx -y create-vite@latest ./ --template react` or `react-ts` (we'll use React with Javascript/JSX or Typescript. Standard React Javascript is fine and easy to iterate on).

### File Structure
- `index.html`: Update title, meta descriptions, and load modern fonts (Outfit/Inter).
- `src/main.jsx`: Main entry point.
- `src/App.jsx`: Main application container housing state (search terms, active tab: Buy/Rent, budget filter, type filter, selected property for modal details).
- `src/data/properties.js`: Dedicated database file containing 10 rich Bhubaneswar property listings.
- `src/components/`:
  - `Navbar.jsx`: Premium header with logo, navigation links, and a "Post Property" dummy action.
  - `HeroSection.jsx`: The search bar hub with Rent/Buy toggle, location input (pre-filled/restricted to Bhubaneswar), budget selector, and search button.
  - `FilterBar.jsx`: Secondary filter controls (BHK, Property Type) for refined searches.
  - `PropertyGrid.jsx`: Container showing matching property cards, with empty states if no results are found.
  - `PropertyCard.jsx`: Individual card presenting property image, price, BHK, area, location, tag (Buy/Rent), and "View Details" action.
  - `PropertyModal.jsx`: Interactive detailed view of the property with full description, amenities list, seller info, and inquiry form.
  - `Footer.jsx`: Sleek footer with dummy links, social icons, and copyright.
- `src/index.css`: Core design system using custom properties (variables) for colors, spacing, borders, shadows, and animations.

### 10 Bhubaneswar Properties Database
We will pre-define exactly 10 properties in Bhubaneswar:
1. **Patia**: 3 BHK Premium Apartment - Buy - ₹85,00,000 (1,600 sqft)
2. **Nayapalli**: 2 BHK Cozy Flat - Rent - ₹18,000/mo (1,100 sqft)
3. **Khandagiri**: 4 BHK Luxury Villa - Buy - ₹1,80,00,000 (3,200 sqft)
4. **Chandrasekharpur**: 1 BHK Furnished Studio - Rent - ₹12,000/mo (600 sqft)
5. **Saheed Nagar**: 3 BHK Independent House - Buy - ₹1,25,00,000 (2,200 sqft)
6. **Jayadev Vihar**: 3 BHK Modern Flat - Rent - ₹25,000/mo (1,450 sqft)
7. **Patia (Infocity)**: 2 BHK Executive Apartment - Rent - ₹16,000/mo (1,050 sqft)
8. **Old Town**: 2 BHK Heritage Floor - Buy - ₹48,00,000 (950 sqft)
9. **Sundarpada**: 4 BHK Penthouse - Buy - ₹95,00,000 (2,400 sqft)
10. **Dumduma**: 3 BHK Builder Floor - Rent - ₹20,000/mo (1,300 sqft)

### Key Features to Implement
1. **Bhubaneswar Focus**: Pre-selected city is Bhubaneswar, with visual indicators that it's localized.
2. **Rent vs. Buy Toggle**: Swapping tabs updates the budget range values and filters properties automatically.
3. **Budget Filter**:
   - For Rent: Min and Max range (e.g., ₹10,000 to ₹30,000+).
   - For Buy: Min and Max range (e.g., ₹40 Lakhs to ₹2 Crores+).
4. **Property Search**: Search by name or locality within Bhubaneswar (e.g. searching "Patia" shows Patia properties).
5. **Detailed Modal**: Clicking a property card opens a rich modal with features, map mockups, inquiry form, and interactive success notification when inquiry is submitted.

## Verification Plan

### Automated Verification
- Run a linter / type checker.
- Verify building compiles successfully via `npm run build`.

### Manual Verification
- Run local development server using `npm run dev`.
- Use the browser subagent or manual checks to test:
  1. Toggle Buy/Rent tabs and verify appropriate budget ranges are loaded.
  2. Perform search queries for "Patia", "Nayapalli", etc., and ensure results update.
  3. Set budget limits and check if listings accurately filter.
  4. Click a property card, open details modal, fill inquiry form, submit and verify confirmation.
  5. Check responsive design on simulated mobile and tablet widths.
