const TASKS = [
  {
    id: "unseen-cell",
    title: "Unseen Cell",
    short: "Generalization to unseen cell lines or patients under random and scFM-based splits.",
    figure: "./assets/figures/fig2-hires.png",
    preview: "./assets/figures/fig2.png",
    figureLabel: "Figure 2",
    color: "#EFF8F7",
    highlights: [
      "scFM-based splits define a harder OOD setting.",
      "Linear Additive, BioLORD, and scLAMBDA remain relatively stable under cell-context shift.",
      "Cell embeddings help selectively rather than uniformly across models."
    ],
    description:
      "This task measures transfer to unseen cellular contexts. Random splits can overestimate robustness because closely related cell states still appear on both sides of the split.",
    mediaType: "image"
  },
  {
    id: "unseen-perturbation",
    title: "Unseen Perturbations",
    short: "Prediction of genetic and chemical perturbations not observed during training.",
    figure: "./assets/figures/fig3-hires.png",
    preview: "./assets/figures/fig3.png",
    figureLabel: "Figure 3",
    color: "#EEF5FB",
    highlights: [
      "Performance declines as perturbation shift increases.",
      "Global reconstruction does not necessarily imply good DEG recovery.",
      "Several models capture broad trends but still miss perturbation-specific signals."
    ],
    description:
      "This task evaluates extrapolation to unseen perturbations in both single and combinational settings. Global expression similarity alone does not capture perturbation-specific recovery.",
    mediaType: "image"
  },
  {
    id: "cross-dataset",
    title: "Cross-Dataset",
    short: "Benchmarking merging, scaling, and alignment across compatible or heterogeneous studies.",
    figure: "./assets/figures/fig4-hires.png",
    preview: "./assets/figures/fig4.png",
    figureLabel: "Figure 4",
    color: "#F6F1FA",
    highlights: [
      "Naive aggregation can degrade performance rather than improve it.",
      "Count scaling helps reduce global count-level shifts.",
      "Merge-after and merge-before favor different metric behaviors."
    ],
    description:
      "This task asks when larger merged datasets help. Gains depend on distribution alignment, feature-space design, and dataset compatibility, not scale alone.",
    mediaType: "image"
  }
];

const EXTRA_SECTIONS = [
  {
    id: "metrics",
    title: "Metric View",
    short: "Metric-dependent evaluation and compute trade-offs.",
    figure: "./assets/figures/fig5-hires.png",
    preview: "./assets/figures/fig5.png",
    figureLabel: "Figure 5",
    color: "#EDF8F8",
    highlights: [
      "Different metrics emphasize different biological aspects.",
      "PCC alone is not sufficient for perturbation benchmarking.",
      "Performance and compute efficiency should be considered together."
    ],
    description:
      "Model ranking depends on the metric. Correlation, DEG recovery, distribution-level metrics, runtime, and GPU memory capture different aspects of perturbation prediction.",
    mediaType: "image"
  },
  {
    id: "guidance",
    title: "Model Selection Guidance",
    short: "Choosing models across tasks and compute constraints.",
    figure: "./assets/figures/fig6.png",
    preview: "./assets/figures/fig6.png",
    figureLabel: "Figure 6",
    color: "#F1EDF9",
    highlights: [
      "Use task type to narrow model choices first.",
      "Consider compute limits together with predictive behavior.",
      "Return to metric-based evaluation before final downstream use."
    ],
    description:
      "The guidance figure links benchmark setting, evaluation target, and compute budget to a narrower set of model choices.",
    mediaType: "image"
  }
];

const DATASETS = [
  "McFarland2020",
  "Kang2018_CD4Tcells",
  "AdamsonWeissman2016_10X001",
  "AdamsonWeissman2016_10X010",
  "Norman2019",
  "ReplogleWeissman2022_K562",
  "SrivatsanTrapnell2020_sciplex3"
];

const MODELS = [
  "Linear Additive",
  "Latent Additive",
  "DecoderOnly",
  "CPA",
  "BioLORD",
  "SAMS-VAE",
  "GEARS",
  "STATE",
  "PRNet",
  "scLAMBDA",
  "GenePert"
];

const DATASET_REFERENCES = [
  {
    label: "AdamsonWeissman2016_10X001 / AdamsonWeissman2016_10X010",
    ref: "[2]",
    citation:
      "Britt Adamson et al. A multiplexed single-cell CRISPR screening platform enables systematic dissection of the unfolded protein response. Cell, 2016."
  },
  {
    label: "SrivatsanTrapnell2020_sciplex3",
    ref: "[4]",
    citation:
      "Sanjay R Srivatsan et al. Massively multiplex chemical transcriptomics at single-cell resolution. Science, 2020."
  },
  {
    label: "ReplogleWeissman2022_K562",
    ref: "[11]",
    citation:
      "Joseph M Replogle et al. Mapping information-rich genotype-phenotype landscapes with genome-scale Perturb-seq. Cell, 2022."
  },
  {
    label: "McFarland2020",
    ref: "[36]",
    citation:
      "James M McFarland et al. Multiplexed single-cell transcriptional response profiling to define cancer vulnerabilities and therapeutic mechanism of action. Nature Communications, 2020."
  },
  {
    label: "Kang2018_CD4Tcells",
    ref: "[37]",
    citation:
      "Hyun Min Kang et al. Multiplexed droplet single-cell RNA-sequencing using natural genetic variation. Nature Biotechnology, 2018."
  },
  {
    label: "Norman2019",
    ref: "[38]",
    citation:
      "Thomas M Norman et al. Exploring genetic interaction manifolds constructed from rich single-cell phenotypes. Science, 2019."
  }
];

const MODEL_REFERENCES = [
  {
    label: "Linear Additive / Latent Additive / DecoderOnly",
    ref: "[15]",
    citation:
      "Adapted from PerturBench baselines. Y Wu et al. PerturBench: Benchmarking machine learning models for cellular perturbation analysis. arXiv, 2025."
  },
  {
    label: "CPA",
    ref: "[21]",
    citation:
      "Mohammad Lotfollahi et al. Predicting cellular responses to complex perturbations in high-throughput screens. Molecular Systems Biology, 2023."
  },
  {
    label: "GEARS",
    ref: "[24]",
    citation:
      "Yusuf Roohani, Kexin Huang, and Jure Leskovec. Predicting transcriptional outcomes of novel multigene perturbations with GEARS. Nature Biotechnology, 2024."
  },
  {
    label: "BioLORD",
    ref: "[54]",
    citation:
      "Zoe Piran et al. Disentanglement of single-cell data with BioLORD. Nature Biotechnology, 2024."
  },
  {
    label: "SAMS-VAE",
    ref: "[55]",
    citation:
      "Michael Bereket and Theofanis Karaletsos. Modelling cellular perturbations with the sparse additive mechanism shift variational autoencoder. NeurIPS, 2024."
  },
  {
    label: "PRNet",
    ref: "[56]",
    citation:
      "Xiaoning Qi et al. Predicting transcriptional responses to novel chemical perturbations using deep generative model for drug discovery. Nature Communications, 2024."
  },
  {
    label: "scLAMBDA",
    ref: "[57]",
    citation:
      "Gefei Wang et al. Modeling and predicting single-cell multi-gene perturbation responses with scLAMBDA. bioRxiv, 2024."
  },
  {
    label: "GenePert",
    ref: "[58]",
    citation:
      "Yiqun T Chen and James Zou. GenePert: Leveraging GenePT embeddings for gene perturbation prediction. bioRxiv, 2024."
  },
  {
    label: "STATE",
    ref: "[59]",
    citation:
      "Abhinav K Adduri et al. Predicting cellular responses to perturbation across diverse contexts with STATE. bioRxiv, 2025."
  }
];

const ALL_SECTIONS = [...TASKS, ...EXTRA_SECTIONS];
const METRICS_SECTION = EXTRA_SECTIONS.find((section) => section.id === "metrics");
const GUIDANCE_SECTION = EXTRA_SECTIONS.find((section) => section.id === "guidance");
let currentZoom = 1;
let dragState = null;
let activeTask = null;

function renderStatCard(label, value, color) {
  return `
    <article class="stat-card" style="background:${color}">
      <div class="label">${label}</div>
      <p class="stat-value">${value}</p>
    </article>
  `;
}

function renderTaskCard(task) {
  const thumb = `<img class="task-thumb" src="${task.preview}" alt="${task.title} preview" />`;

  return `
    <button class="task-card" style="--task-color:${task.color}" data-open-task="${task.id}" type="button">
      <div class="task-card-head">
        <div>
          <h4 class="task-title">${task.title}</h4>
        </div>
        <span class="open-pill">View</span>
      </div>
      <p>${task.short}</p>
      ${thumb}
    </button>
  `;
}

function renderResourceCard(title, items, color) {
  return `
    <article class="resource-card" style="--resource-color:${color}">
      <div class="label">${title}</div>
      <div class="pill-list">
        ${items.map((item) => `<span class="pill">${item}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderReferenceEntry(entry) {
  return `
    <article class="reference-entry">
      <div class="reference-entry-head">
        <strong>${entry.label}</strong>
      </div>
      <p class="reference-citation">${entry.citation}</p>
    </article>
  `;
}

function renderStepCard(step, title, text) {
  return `
    <article class="step-card">
      <div class="step-number">${step}</div>
      <h4 class="step-title">${title}</h4>
      <p>${text}</p>
    </article>
  `;
}

function renderModal(task) {
  const viewer = `
        <img class="modal-image zoomable" id="zoomable-figure" src="${task.figure}" alt="${task.title}" />
      `;
  const content = `
      <div class="modal-toolbar">
        <button class="modal-tool" id="zoom-out" type="button">Zoom out</button>
        <div class="modal-zoom-label" id="zoom-label">100%</div>
        <button class="modal-tool" id="zoom-in" type="button">Zoom in</button>
        <button class="modal-tool" id="zoom-reset" type="button">Reset</button>
      </div>
      <div class="modal-canvas" id="modal-canvas">
        ${viewer}
      </div>
    `;

  return `
    <div class="modal" id="figure-modal" aria-modal="true" role="dialog">
      <div class="modal-card">
        <div class="modal-header" style="background:${task.color}">
          <div>
            <h3 class="section-title" style="font-size:clamp(1.8rem,1.2rem + 1.2vw,2.8rem);margin-top:0.5rem;">${task.title}</h3>
          </div>
          <button class="modal-close" id="close-modal" type="button">Close</button>
        </div>
        <div class="modal-grid">
          <div class="modal-media-wrap">
            <div class="modal-media-card">${content}</div>
          </div>
          <aside class="modal-side">
            <p class="modal-copy">${task.description}</p>
            <section class="takeaways" style="--task-color:${task.color}">
              <div class="label">Key takeaways</div>
              <div class="takeaways-list">
                ${task.highlights
                  .map(
                    (point) => `
                      <div class="takeaway">
                        <span class="dot"></span>
                        <span>${point}</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  `;
}

function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="site-shell">
      <header class="topbar">
        <div class="container topbar-inner">
          <div>
            <div class="brand-kicker">VCBench</div>
            <h1 class="brand-title">Benchmarking Virtual Cell Models for In-the-Wild Perturbation Response</h1>
          </div>
          <nav class="nav" aria-label="Primary">
            <a href="#overview">Overview</a>
            <a href="#resources">Resources</a>
            <a href="#tasks">Tasks</a>
          </nav>
          <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button>
        </div>
        <div class="container mobile-nav" id="mobile-nav">
          <a href="#overview">Overview</a>
          <a href="#resources">Resources</a>
          <a href="#tasks">Tasks</a>
        </div>
      </header>

      <main>
        <section class="hero" id="overview">
          <div class="container">
            <div class="hero-copy-wrap">
              <div class="eyebrow">Benchmark Overview</div>
              <h2>Benchmarking virtual cell models across generalization settings</h2>
              <p class="hero-copy">
                VCBench evaluates virtual cell models on unseen cellular contexts, unseen perturbations,
                and cross-dataset integration, alongside metric-specific performance and compute cost.
              </p>
              <div class="hero-actions">
                <a class="button primary" href="#resources">Datasets and models</a>
                <a class="button secondary" href="#tasks">View tasks</a>
              </div>
              <div class="metrics-strip">
                ${renderStatCard("Scenarios", "Unseen cells, unseen perturbations, and cross-dataset integration.", "#F3FBFA")}
                ${renderStatCard("Metric View", "Global correlation, DEG recovery, and compute cost are reported separately.", "#F2F8FB")}
                ${renderStatCard("Coverage", `${DATASETS.length} datasets and ${MODELS.length} models in this benchmark.`, "#F7F7F1")}
              </div>
            </div>
            <div class="overview-figure-panel">
              <img class="overview-figure" src="./assets/figures/fig1.png" alt="VCBench overview figure" />
              <div class="hero-caption overview-caption">
                <div>
                  <strong>Benchmark overview</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="resources">
          <div class="container resource-grid">
            <div class="section-heading">
              <div class="section-kicker">Resources</div>
              <h3 class="section-title">Datasets and models in the benchmark</h3>
              <p class="section-copy">
                The benchmark includes seven perturbation datasets and eleven models,
                spanning additive baselines, latent-variable models, graph methods, and foundation-model-based approaches.
              </p>
            </div>
            <div class="resource-panels">
              ${renderResourceCard("Datasets", DATASETS, "#F3FBFA")}
              ${renderResourceCard("Models", MODELS, "#E7F1FB")}
            </div>
          </div>
        </section>

        <section class="section alt">
          <div class="container workflow-grid">
            <div class="section-heading">
              <div class="section-kicker">Framework</div>
              <h3 class="section-title">How the benchmark is organized</h3>
              <p class="section-copy">
                The pipeline standardizes preprocessing, evaluates each setting separately,
                and reads results through task-specific metrics and model selection guidance.
              </p>
            </div>
            <div class="steps">
              ${renderStepCard("01", "Standardize data", "Harmonize datasets, preprocessing, gene space, and metadata under a shared benchmark pipeline.")}
              ${renderStepCard("02", "Benchmark by scenario", "Evaluate models under unseen-cell, unseen-perturbation, and cross-dataset integration settings.")}
              ${renderStepCard("03", "Interpret and choose", "Use metric-aware evaluation and the guidance figure to support practical model selection.")}
            </div>
          </div>
        </section>

        <section class="section alt" id="tasks">
          <div class="container">
            <div class="section-heading">
              <div class="section-kicker">Main Tasks</div>
              <h3 class="section-title">Three benchmark tasks</h3>
              <p class="section-copy">
                The benchmark centers on three settings: unseen cells,
                unseen perturbations, and cross-dataset integration.
              </p>
            </div>
            <div class="tasks-grid">
              ${TASKS.map(renderTaskCard).join("")}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="section-heading">
              <div class="section-kicker">Metric View</div>
              <h3 class="section-title">Metric-dependent evaluation</h3>
              <p class="section-copy">
                Model rankings shift across correlation, DEG recovery,
                distribution-level metrics, and compute cost.
              </p>
            </div>
            <div class="extras-grid">
              ${METRICS_SECTION ? renderTaskCard(METRICS_SECTION) : ""}
            </div>
          </div>
        </section>

        <section class="section alt">
          <div class="container">
            <div class="section-heading">
              <div class="section-kicker">Model Selection</div>
              <h3 class="section-title">Selection guidance across models</h3>
              <p class="section-copy">
                The guidance figure maps benchmark setting and compute constraints
                to a smaller set of model choices.
              </p>
            </div>
            <div class="extras-grid">
              ${GUIDANCE_SECTION ? renderTaskCard(GUIDANCE_SECTION) : ""}
            </div>
          </div>
        </section>

        <section class="section compact-section">
          <div class="container">
            <div class="section-heading compact-heading">
              <div class="section-kicker">References</div>
              <h3 class="section-title compact-title">References for datasets and models listed above</h3>
            </div>
            <div class="reference-grid">
              <article class="reference-card">
                <div class="label">Dataset references</div>
                <div class="reference-entry-list">
                  ${DATASET_REFERENCES.map(renderReferenceEntry).join("")}
                </div>
              </article>
              <article class="reference-card">
                <div class="label">Model references</div>
                <div class="reference-entry-list">
                  ${MODEL_REFERENCES.map(renderReferenceEntry).join("")}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

function attachEvents() {
  const app = document.getElementById("app");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-task]");
    if (trigger) {
      const task = ALL_SECTIONS.find((item) => item.id === trigger.dataset.openTask);
      if (task) {
        currentZoom = 1;
        dragState = null;
        activeTask = task;
        document.body.insertAdjacentHTML("beforeend", renderModal(task));
        document.body.style.overflow = "hidden";
        updateZoom();
      }
      return;
    }

    if (event.target.id === "zoom-in") {
      currentZoom = Math.min(currentZoom + 0.25, 4);
      updateZoom();
      return;
    }

    if (event.target.id === "zoom-out") {
      currentZoom = Math.max(currentZoom - 0.25, 0.75);
      updateZoom();
      return;
    }

    if (event.target.id === "zoom-reset") {
      currentZoom = 1;
      updateZoom();
      return;
    }

    if (
      event.target.id === "close-modal" ||
      event.target.id === "figure-modal"
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!document.getElementById("figure-modal")) {
      return;
    }
    if (event.key === "Escape") {
      closeModal();
      return;
    }
    if (event.key === "+" || event.key === "=") {
      currentZoom = Math.min(currentZoom + 0.25, 4);
      updateZoom();
      return;
    }
    if (event.key === "-") {
      currentZoom = Math.max(currentZoom - 0.25, 0.75);
      updateZoom();
    }
  });

  document.addEventListener("mousedown", (event) => {
    const canvas = document.getElementById("modal-canvas");
    const figure = document.getElementById("zoomable-figure");
    if (!canvas || currentZoom <= 1) {
      return;
    }
    if (!figure) {
      return;
    }
    if (!event.target.closest("#zoomable-figure")) {
      return;
    }

    dragState = {
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: canvas.scrollLeft,
      scrollTop: canvas.scrollTop
    };
    canvas.classList.add("is-dragging");
  });

  document.addEventListener("mousemove", (event) => {
    const canvas = document.getElementById("modal-canvas");
    if (!canvas || !dragState) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;
    canvas.scrollLeft = dragState.scrollLeft - deltaX;
    canvas.scrollTop = dragState.scrollTop - deltaY;
  });

  document.addEventListener("mouseup", () => {
    const canvas = document.getElementById("modal-canvas");
    if (canvas) {
      canvas.classList.remove("is-dragging");
    }
    dragState = null;
  });
}

function updateZoom() {
  const figure = document.getElementById("zoomable-figure");
  const label = document.getElementById("zoom-label");
  if (figure) {
    figure.style.width = `${currentZoom * 100}%`;
    figure.style.maxWidth = currentZoom > 1 ? "none" : "1200px";
  }
  if (label) {
    label.textContent = `${Math.round(currentZoom * 100)}%`;
  }
}

function closeModal() {
  const modal = document.getElementById("figure-modal");
  if (modal) {
    modal.remove();
    document.body.style.overflow = "";
    dragState = null;
    activeTask = null;
  }
}

renderApp();
attachEvents();
