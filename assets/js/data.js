/* =============================================================================
   data.js  —  ALL YOUR CONTENT LIVES HERE.
   This is the only file you need to edit for normal updates.
   Rules of thumb:
     • Text goes inside "quotes". Keep the quotes.
     • Every item ends with a comma.
     • To add an entry, copy an existing { ... } block and edit it.
     • url: "" => the card shows a tidy "link pending" badge, never a dead link.
   ========================================================================== */

const SITE = {

  /* ---------------------------------------------------------------- PROFILE */
  profile: {
    eyebrow:  "Remote Sensing · Geospatial AI · Phosphorus Sustainability",
    firstName:"Barira",
    lastName: "Rashid",
    role:     "PhD Scholar, Geosciences & Biological and Agricultural Engineering — University of Arkansas",

    /* THE HEADLINE. Swap in any alternative below — it's one line.
       Alternatives to try:
         "I teach machines to read landscapes from orbit."
         "Every pixel is a place."
         "Ground truth, from 700 km up."
         "The farms no one mapped. The water downstream."
         "Some places aren't on any map. Yet."                                */
    thesis:   "I find what the map left out.",

    quip:     "// serious about water quality · delighted by a good basemap",
    email:    "brashid@uark.edu",

    meta: [
      { label: "LAT", value: "36.0764° N" },
      { label: "LON", value: "94.2088° W" },
      { label: "LAB", value: "NSF STEPS · Muenich Group" }
    ],

    // EDIT: swap the search-page links below for your real profile URLs
    links: {
      linkedin:     "https://www.linkedin.com/in/brashid02/",
      scholar:      "https://scholar.google.com/citations?user=Sm7FDpQAAAAJ&hl=en&oi=ao",
      researchgate: "https://www.researchgate.net/profile/Barira-Rashid",
      orcid:        "https://orcid.org/0000-0002-4601-1675"
    },

    // optional: put a PDF at assets/cv.pdf and set this to "assets/cv.pdf"
    cv: ""
  },


  /* ------------------------------------------------------------------ ABOUT */
  about: {
    lead: "Earth observation, geospatial AI, and the policy questions satellite data can actually answer.",
    paragraphs: [
      "I'm an environmental remote-sensing scientist working where Earth observation meets agricultural and water policy. My research applies object-based deep learning to satellite imagery to locate and characterize animal feeding operations across the United States — the diffuse, often-undocumented sources that shape water quality and the phosphorus cycle.",
      "I trained across two countries and four degrees, from environmental science in Pakistan to cartography at Arizona State, before joining the University of Arkansas and the NSF STEPS Center. Throughout, one commitment has stayed fixed: making Earth-observation tools usable by the communities and decision-makers who need them most."
    ],
    toolkit: ["Google Earth Engine","ArcGIS Pro","QGIS","Python","Object-based Deep Learning","Landscape Ecology"]
  },

  /* --------------------------------------------------------------- RESEARCH */
  /* icon options: "raster" | "water" | "network" | "globe"                    */
  research: [
    {
      icon:  "raster",
      title: "Mapping animal feeding operations from space",
      blurb: "Object-based deep learning on satellite imagery to detect AFOs and CAFOs at parcel scale, nationwide. A U.S.-wide model reached roughly 87% accuracy, with land use, land-surface temperature, and tree cover as key predictors.",
      tag:   "STEPS · Muenich Group"
    },
    {
      icon:  "water",
      title: "Phosphorus sustainability & water quality",
      blurb: "Locating the diffuse pollutant sources that drive nutrient loading in watersheds — foundational data for the NSF STEPS Center's mission to close the phosphorus cycle and protect freshwater.",
      tag:   "NSF STEPS Center"
    },
    {
      icon:  "network",
      title: "Thermal refuges & desert wildlife",
      blurb: "Quantifying how climate change and urbanization reshape the structural and functional connectivity of thermal refuges for desert species — landscape ecology meets remote sensing.",
      tag:   "Published in Land, 2025"
    },
    {
      icon:  "globe",
      title: "Earth observation for equity",
      blurb: "Building open, decision-ready tools through NASA LifeLines that put satellite data — on food security and landslide risk — into the hands of frontline and underserved communities.",
      tag:   "NASA LifeLines Fellowship"
    }
  ],

  /* ---------------------------------------------- SCIENCE COMMUNICATION */
  /* One home for everything that isn't a journal paper.
     type:     "Story map" | "Podcast" | "Essay" | "Dataset" | "Report" | "Talk"
               (filter buttons are generated automatically from the types used)
     links:    [{label, url}]  — use for one OR several buttons on a card
     citation: "" => hides that card's "Copy citation" button
     meta:     small chips under the title
     thumb:    "lulc" | "terrain" | "fields" | "globe" | "wave" | "essay" | "water" | "talk"  */
  scicomm: [
    {
      type:   "Story map",
      kicker: "ArcGIS StoryMaps · 2026",
      title:  "Geospatial Narratives: The Power of GIS Research",
      blurb:  "Charting a course for a sustainable world — a walk through what GIS research can see, and why it matters beyond the discipline.",
      meta:   ["2026", "Featured"],
      links:  [{ label: "Open the story ↗", url: "https://storymaps.arcgis.com/stories/42f79c9264694f269a0581cf37b78dbc" }],
      citation: "",
      thumb:  "globe"
    },
    {
      type:   "Story map",
      kicker: "ArcGIS StoryMaps · 2023",
      title:  "Serpent Sanctuaries: Rattlesnake Habitat in Central Arizona",
      blurb:  "Western Diamondback rattlesnake habitat and connectivity across central Arizona–Phoenix, unveiled through advanced GIS modeling. Top-ten finalist, student category, Esri StoryMaps Competition 2023.",
      meta:   ["2023", "Esri top-10 finalist"],
      links:  [{ label: "Open the story ↗", url: "https://storymaps.arcgis.com/stories/7e4dd52834234beb9f952aba077f4732" }],
      citation: "",
      thumb:  "terrain"
    },
    {
      type:   "Story map",
      kicker: "NASA LifeLines · 2025",
      title:  "Seeing Risk, Saving Lives: NASA Lifelines for Landslides",
      blurb:  "The landslide data studio package as a story — how Earth observation turns slope, rain, and soil into a warning someone can act on.",
      meta:   ["2025", "Data studio"],
      links:  [{ label: "Open the story ↗", url: "https://storymaps.arcgis.com/stories/e12e457e8ed443bcbcfa2f2e6f9a8e2d" }],
      citation: "",
      thumb:  "terrain"
    },
    {
      type:   "Podcast",
      kicker: "PhosForUs",
      title:  "PhosForUs Podcast",
      blurb:  "Co-created podcast translating phosphorus science and sustainability for a general audience — the element you never think about, and the water-quality crisis it quietly drives.",
      meta:   ["Co-host", "NSF STEPS"],
      links:  [
        { label: "Spotify ↗",        url: "https://open.spotify.com/show/5nECIx73y9bkGT8RUQkZSQ" },
        { label: "Apple Podcasts ↗", url: "https://podcasts.apple.com/us/podcast/phosforus/id1687822753" }
      ],
      citation: "",
      thumb:  "wave"
    },
    {
      type:   "Essay",
      kicker: "Lithosphere · GeoScienceWorld",
      title:  "Navigating Earth Sciences: Addressing Equity and Sustainability Through Interdisciplinary Endeavors",
      blurb:  "The essay that won the inaugural GeoScienceWorld Grad Scholar Award — on who gets to do Earth science, and what the field loses when the answer stays narrow.",
      meta:   ["2024", "Award essay"],
      links:  [{ label: "Read the essay ↗", url: "https://doi.org/10.2113/2024/lithosphere_2024_198" }],
      citation: "Rashid, B. 2024. Navigating Earth Sciences: Addressing Equity and Sustainability Through Interdisciplinary Endeavors. Lithosphere, 2024(3). https://doi.org/10.2113/2024/lithosphere_2024_198",
      thumb:  "essay"
    },
    {
      type:   "Essay",
      kicker: "Journal of Biological Engineering · 2026",
      title:  "Beyond linearity: reimagining AI as a participant in circular bioeconomies",
      blurb:  "A rethink of AI's role in circular systems — not as an optimiser bolted onto a linear pipeline, but as a participant in the loop itself.",
      meta:   ["2026", "20(1):52"],
      links:  [{ label: "Read ↗", url: "https://doi.org/10.1186/s13036-026-00672-7" }],
      citation: "Muthukumar A, Rashid B, Yang L. Beyond linearity: reimagining AI as a participant in circular bioeconomies. J Biol Eng. 2026 Mar 27;20(1):52. doi: 10.1186/s13036-026-00672-7. PMID: 41896981; PMCID: PMC13023148.",
      thumb:  "essay"
    },
    {
      type:   "Dataset",
      kicker: "Environmental Data Initiative · CAP LTER",
      title:  "Land use & land cover classification of the CAP LTER study area",
      blurb:  "Extends the CAP LTER long-term LULC series — previously 1985 to 2010 at five-year intervals — with new maps for 2015 and 2020, produced by object-based classification of Landsat imagery. Built to support research on urban sprawl, urban heat islands, and outdoor water consumption across central Arizona.",
      meta:   ["30 m", "Landsat", "2015 · 2020", "ver 2"],
      links:  [{ label: "Open dataset ↗", url: "https://doi.org/10.6073/pasta/bf18e5856215bd2d4dab3b024ba87a7e" }],
      citation: "Sabu, S., A. Frazier, and B. Rashid. 2023. Land use and land cover (LULC) classification of the CAP LTER study area (central Arizona, USA) using Landsat imagery: 2015 and 2020 ver 2. Environmental Data Initiative. https://doi.org/10.6073/pasta/bf18e5856215bd2d4dab3b024ba87a7e",
      thumb:  "lulc"
    },
    {
      type:   "Dataset",
      kicker: "NASA LifeLines",
      title:  "Agriculture, Food Security & Environmental Monitoring",
      blurb:  "An open data studio package turning Earth-observation data into food-security insight for decision-makers without geospatial training.",
      meta:   ["Open access", "Data studio"],
      links:  [{ label: "Open package ↗", url: "https://nasalifelines.org/hfs-data-series/agriculture-food-security-environmental-monitoring-applications/" }],
      citation: "",
      thumb:  "fields"
    },
    {
      type:   "Dataset",
      kicker: "NASA LifeLines",
      title:  "Landslide Risk and Monitoring",
      blurb:  "An open data studio package mapping landslide susceptibility from Earth-observation data, developed with Earth-science review boards, USGS, and humanitarian NGOs.",
      meta:   ["Open access", "Data studio"],
      links:  [{ label: "Open package ↗", url: "https://nasalifelines.org/hfs-data-series/landslide-risk-and-monitoring/" }],
      citation: "",
      thumb:  "terrain"
    },
    {
      type:   "Report",
      kicker: "NASA DEVELOP · Summer 2023",
      title:  "Kankakee Water Resources: monitoring temperature and vegetation to detect river flow impediments",
      blurb:  "With Constellation Nuclear and the USGS: can satellites see the floating vegetation mats that clog power-plant water intakes on the Kankakee River? Landsat, Sentinel-2, PlanetScope and WorldView-3 tested against grassing events — vegetation was detectable at 30 m, but revisit time proved the binding constraint.",
      meta:   ["NASA DEVELOP", "Landsat · Sentinel-2", "USGS partner"],
      links:  [
        { label: "Technical report ↗", url: "https://ntrs.nasa.gov/citations/20230014219" },
        { label: "Presentation ↗",     url: "https://ntrs.nasa.gov/api/citations/20230011112/downloads/2023Sum_PUP_KankakeeWater_Presentation_FD_v2.pdf" }
      ],
      citation: "Smedsrud, M., H. Hoffmeister, O. Orimolade, and B. Rashid. 2023. Kankakee Water Resources: Monitoring Temperature and Vegetation to Detect River Flow Impediments at Energy Intake Structures. NASA DEVELOP Summer 2023 Technical Report, Document ID 20230014219.",
      thumb:  "water"
    },
    {
      type:   "Talk",
      kicker: "ASABE · Invited talk",
      title:  "AI and circularity: reflections",
      blurb:  "An invited talk on what artificial intelligence can and can't contribute to circular systems thinking.",
      meta:   ["Invited", "ASABE"],
      links:  [{ label: "View ↗", url: "https://arcg.is/0XyGqH0" }],
      citation: "",
      thumb:  "talk"
    },
    {
      type:   "Talk",
      kicker: "Outreach",
      title:  "K–12 school outreach",
      blurb:  "Introducing school students to Earth observation and GIS — where satellites come from, and what they let you see about your own town.",
      meta:   ["K–12", "Outreach"],
      links:  [{ label: "View ↗", url: "https://arcg.is/0aHOXL" }],
      citation: "",
      thumb:  "talk"
    }
  ],

  /* ----------------------------------------------------------- PUBLICATIONS */
  /* EDIT: verify author order; ResearchGate lists 8 — add the rest here.
     Wrap your own name in <strong> tags to bold it.                          */
  publications: [
    {
      year:    "2025",
      title:   "Machine learning-based identification of animal feeding operations in the United States on a parcel-scale",
      authors: "Saha, A., <strong>Rashid, B.</strong>, Liu, T., Miralha, L., &amp; Muenich, R. L.",
      venue:   "Science of the Total Environment, 960, 178312.",
      linkLabel: "DOI ↗ 10.1016/j.scitotenv.2024.178312",
      url:     "https://doi.org/10.1016/j.scitotenv.2024.178312"
    },
    {
      year:    "2025",
      title:   "Structural and functional connectivity of thermal refuges in a desert city",
      authors: "<strong>Rashid, B.</strong>, et al. — impacts of climate change and urbanization on desert wildlife",
      venue:   "Land, 14(3), 480.",
      linkLabel: "DOI ↗ 10.3390/land14030480",
      url:     "https://doi.org/10.3390/land14030480"
    },
    {
      year:    "2025",
      title:   "Gaps in U.S. livestock data are a barrier to effective environmental and disease management",
      authors: "Nelson, N. G., <strong>Rashid, B.</strong>, Saha, A., et al.",
      venue:   "PLOS (open access).",
      linkLabel: "Read ↗ PMC11811603",
      url:     "https://pmc.ncbi.nlm.nih.gov/articles/PMC11811603/"
    }
  ],

  /* --------------------------------------------- ACHIEVEMENTS & AWARDS */
  honors: [
    { tag: "2024",       title: "GeoScienceWorld Grad Scholar Award", blurb: "Inaugural recipient. A $5,000 scholarship recognizing graduate students advancing equity in the Earth sciences; winning essay published in Lithosphere." },
    { tag: "Fellowship", title: "NASA LifeLines Fellow",        blurb: "Developing open-access data studio packages that make Earth-observation data actionable for decision-makers without geospatial expertise." },
    { tag: "2023",       title: "Esri StoryMaps Competition — Top 10 Finalist", blurb: "Selected among the top ten in the student category for \'Serpent Sanctuaries\', mapping Western Diamondback rattlesnake habitat and connectivity across central Arizona." },
    { tag: "Program",    title: "NASA DEVELOP",                 blurb: "National capacity-building program. On the Summer 2023 Kankakee Water Resources team with Constellation Nuclear and the USGS, testing whether Earth observation could detect the aquatic vegetation that clogs power-plant intakes." },
    { tag: "Center",     title: "NSF STEPS Graduate Researcher",blurb: "Science and Technologies for Phosphorus Sustainability Center — an NSF-funded national research center (award CBET-2019435)." },
    { tag: "Grant",      title: "ASPRS Student Presentation Grant", blurb: "Awarded for presenting managed-aquifer-recharge water-level analysis using PlanetScope imagery, with complimentary ASPRS membership." },
    { tag: "Research Grant",    title: "CAGIS Student Award",       blurb: "Research grant awarded to grad students pursuing research in geoscience and remote sensing." }
  ],

  /* ---------------------------------------------------------------- CONTACT */
  contact: {
    titleHTML: "Let's <em>map</em> something together",
    lead:  "Open to research collaborations, data partnerships, and science-communication work.",
    colophon: "Barira Rashid · Fayetteville, Arkansas · Built on GitHub Pages · Basemap © OpenStreetMap contributors, © CARTO"
  }
};
