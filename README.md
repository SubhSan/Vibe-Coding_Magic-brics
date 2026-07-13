# MagicBricks Bhubaneswar clone

A highly aesthetic, premium, and interactive real estate search website focused on properties in Bhubaneswar, Odisha. This is a zero-build React Single Page Application (SPA) designed to load directly in the browser via CDN dependencies, allowing rapid iteration and flawless client-side rendering.

> [!NOTE]
> This website was built using **Vibe Coding** with **Google Antigravity ADE** (Agentic Development Environment).

---

## 📂 Directory Structure & Codebase Map

Here is a breakdown of every folder, markdown (`.md`) file, and key source file in the repository:

### 📁 Root Directory
*   **[index.html](file:///d:/Magic-brics/index.html)**: The main entry point of the application. It configures SEO meta tags, imports the custom Jakarta Sans Google font, loads React 18 & ReactDOM from CDN, and runs the Babel Standalone compiler to process React components in real-time.
*   **[implementation_plan.md](file:///d:/Magic-brics/implementation_plan.md)**: The technical design blueprint detailing the visual concept, color palette, component layout, pre-defined Bhubaneswar property dataset, and validation strategies.
*   **[task.md](file:///d:/Magic-brics/task.md)**: The living development checklist tracking the project progress, component implementations, styles, database seeding, and verification steps.
*   **[walkthrough.md](file:///d:/Magic-brics/walkthrough.md)**: A summary document detailing the final implementation, key features (tabs, filters, forms), local Python server environment setup, and curated image assets.
*   **[README.md](file:///d:/Magic-brics/README.md)**: This file. A guide to the codebase structure, tech stack, and features.
*   **[.gitattributes](file:///d:/Magic-brics/.gitattributes)**: Defines attributes for paths within the Git repository.

---

### 📁 [src](file:///d:/Magic-brics/src) (Source Files)
This folder houses the main logic, components, styling, data, and image assets of the property finder application.

*   **[App.jsx](file:///d:/Magic-brics/src/App.jsx)**: The central React file comprising the core layout components:
    *   `Navbar`: Branded header with responsive actions.
    *   `HeroSection`: Dynamic search bar + Rent/Buy toggles + budget range selector.
    *   `FilterBar`: Chips for filtering by BHK (1, 2, 3, 4 BHK) and property type (Flat, Villa, House, Studio).
    *   `PropertyGrid`: Handles filtering and sorting logic, rendering matching listing cards.
    *   `PropertyCard`: High-fidelity cards featuring property image, pricing badges, address details, and key specifications.
    *   `PropertyModal`: A side-drawer/modal showing detail sheets (description, amenities list, owner details) and an interactive lead inquiry form.
    *   `Footer`: Standard footer with links, locations, and social icons.
*   **[index.css](file:///d:/Magic-brics/src/index.css)**: A premium, vanilla CSS stylesheet defining custom variable-based design system tokens (colors, gradients, shadows), glassmorphism styles, modal slide animations, hover micro-interactions, and mobile-responsive layout media queries.

#### 📁 [src/data](file:///d:/Magic-brics/src/data) (Local Database)
*   **[properties.js](file:///d:/Magic-brics/src/data/properties.js)**: Local Javascript database defining exactly 10 premium Bhubaneswar property listings across hotspots such as Patia, Nayapalli, Jayadev Vihar, Khandagiri, Dumduma, and Sundarpada. Each listing includes descriptive copy, pricing, spec metrics, listing author, and image paths.

#### 📁 [src/assets](file:///d:/Magic-brics/src/assets) (Visual Assets)
Houses premium visual assets used as property listings preview images:
*   [cozy_studio.jpg](file:///d:/Magic-brics/src/assets/cozy_studio.jpg) — Cozy studio spaces.
*   [independent_house.jpg](file:///d:/Magic-brics/src/assets/independent_house.jpg) — Duplex & independent residential structures.
*   [luxury_villa.jpg](file:///d:/Magic-brics/src/assets/luxury_villa.jpg) — Contemporary estates and villa listings.
*   [modern_apartment.jpg](file:///d:/Magic-brics/src/assets/modern_apartment.jpg) — Premium flats and high-rise apartments.

---

## ⚡ Tech Stack & Architecture

1.  **React 18 & ReactDOM**: UI rendering and reactive state management (using CDN imports to avoid heavy local build dependencies).
2.  **Babel Standalone**: In-browser transpiler processing JSX scripts dynamically.
3.  **Vanilla CSS**: Premium bespoke responsive stylesheet custom-crafted for rich, smooth interactions, transitions, and glassmorphism.
4.  **Python SimpleHTTPServer**: Simple local development runner spun up on port `8000`.

---

## 🚀 How to Run the Project Locally

Since this is a buildless client-side SPA, running it is simple. 

You can launch a static web server from the project root directory. For example, using Python:

```bash
python -m http.server 8000
```

Once running, navigate to:
👉 **[http://localhost:8000](http://localhost:8000)**


<img width="1872" height="872" alt="Screenshot 2026-07-08 195048" src="https://github.com/user-attachments/assets/9c01c3f2-7565-4e30-89fc-1258c3749d3f" />




<img width="1872" height="872" alt="Screenshot 2026-07-08 195125" src="https://github.com/user-attachments/assets/9e6f2a25-04dd-4381-ae30-ed722d82f59d" />




<img width="1872" height="872" alt="Screenshot 2026-07-08 195159" src="https://github.com/user-attachments/assets/6b15f400-012e-4fef-b15b-eff7e7fdc343" />

