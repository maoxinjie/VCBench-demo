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

const DATASETS_DRIVE_URL =
  "https://drive.google.com/drive/folders/1GrPW9x5_npnT7ILwDVsFWvfDIcqaSjdk?usp=sharing";

const DATASETS = [
  { name: "McFarland2020", url: DATASETS_DRIVE_URL },
  { name: "Kang2018_CD4Tcells", url: DATASETS_DRIVE_URL },
  { name: "AdamsonWeissman2016_10X001", url: DATASETS_DRIVE_URL },
  { name: "AdamsonWeissman2016_10X010", url: DATASETS_DRIVE_URL },
  { name: "Norman2019", url: DATASETS_DRIVE_URL },
  { name: "ReplogleWeissman2022_K562", url: DATASETS_DRIVE_URL },
  { name: "SrivatsanTrapnell2020_sciplex3", url: DATASETS_DRIVE_URL }
];

const MODELS = [
  { name: "Linear Additive", url: "https://github.com/altoslabs/perturbench" },
  { name: "Latent Additive", url: "https://github.com/altoslabs/perturbench" },
  { name: "DecoderOnly", url: "https://github.com/altoslabs/perturbench" },
  { name: "CPA", url: "https://github.com/theislab/cpa" },
  { name: "BioLORD", url: "https://github.com/nitzanlab/biolord" },
  { name: "SAMS-VAE", url: "https://github.com/insitro/sams-vae" },
  { name: "GEARS", url: "https://github.com/snap-stanford/GEARS" },
  { name: "STATE", url: "https://github.com/ArcInstitute/state" },
  { name: "PRnet", url: "https://github.com/Perturbation-Response-Prediction/PRnet" },
  { name: "scLAMBDA", url: "https://github.com/gefeiwang/scLAMBDA" },
  { name: "GenePert", url: "https://github.com/zou-group/GenePert" }
];

const DATASET_REFERENCES = [
  {
    label: "AdamsonWeissman2016_10X001 / AdamsonWeissman2016_10X010",
    ref: "[2]",
    url: "https://doi.org/10.1016/j.cell.2016.11.048",
    citation:
      "Britt Adamson et al. A multiplexed single-cell CRISPR screening platform enables systematic dissection of the unfolded protein response. Cell, 2016."
  },
  {
    label: "SrivatsanTrapnell2020_sciplex3",
    ref: "[4]",
    url: "https://www.science.org/doi/10.1126/science.aax6234",
    citation:
      "Sanjay R Srivatsan et al. Massively multiplex chemical transcriptomics at single-cell resolution. Science, 2020."
  },
  {
    label: "ReplogleWeissman2022_K562",
    ref: "[11]",
    url: "https://doi.org/10.1016/j.cell.2022.05.013",
    citation:
      "Joseph M Replogle et al. Mapping information-rich genotype-phenotype landscapes with genome-scale Perturb-seq. Cell, 2022."
  },
  {
    label: "McFarland2020",
    ref: "[36]",
    url: "https://www.nature.com/articles/s41467-020-17440-w",
    citation:
      "James M McFarland et al. Multiplexed single-cell transcriptional response profiling to define cancer vulnerabilities and therapeutic mechanism of action. Nature Communications, 2020."
  },
  {
    label: "Kang2018_CD4Tcells",
    ref: "[37]",
    url: "https://www.nature.com/articles/nbt.4042",
    citation:
      "Hyun Min Kang et al. Multiplexed droplet single-cell RNA-sequencing using natural genetic variation. Nature Biotechnology, 2018."
  },
  {
    label: "Norman2019",
    ref: "[38]",
    url: "https://www.science.org/doi/10.1126/science.aax4438",
    citation:
      "Thomas M Norman et al. Exploring genetic interaction manifolds constructed from rich single-cell phenotypes. Science, 2019."
  }
];

const MODEL_REFERENCES = [
  {
    label: "Linear Additive / Latent Additive / DecoderOnly",
    ref: "[15]",
    url: "https://arxiv.org/abs/2408.10609",
    citation:
      "Adapted from PerturBench baselines. Y Wu et al. PerturBench: Benchmarking machine learning models for cellular perturbation analysis. arXiv, 2025."
  },
  {
    label: "CPA",
    ref: "[21]",
    url: "https://www.embopress.org/doi/full/10.15252/msb.202211517",
    citation:
      "Mohammad Lotfollahi et al. Predicting cellular responses to complex perturbations in high-throughput screens. Molecular Systems Biology, 2023."
  },
  {
    label: "GEARS",
    ref: "[24]",
    url: "https://www.nature.com/articles/s41587-023-01905-6",
    citation:
      "Yusuf Roohani, Kexin Huang, and Jure Leskovec. Predicting transcriptional outcomes of novel multigene perturbations with GEARS. Nature Biotechnology, 2024."
  },
  {
    label: "BioLORD",
    ref: "[54]",
    url: "https://www.nature.com/articles/s41587-023-02079-x",
    citation:
      "Zoe Piran et al. Disentanglement of single-cell data with BioLORD. Nature Biotechnology, 2024."
  },
  {
    label: "SAMS-VAE",
    ref: "[55]",
    url: "https://openreview.net/forum?id=DzaCE00jGV",
    citation:
      "Michael Bereket and Theofanis Karaletsos. Modelling cellular perturbations with the sparse additive mechanism shift variational autoencoder. NeurIPS, 2023."
  },
  {
    label: "PRnet",
    ref: "[56]",
    url: "https://www.nature.com/articles/s41467-024-53457-1",
    citation:
      "Xiaoning Qi et al. Predicting transcriptional responses to novel chemical perturbations using deep generative model for drug discovery. Nature Communications, 2024."
  },
  {
    label: "scLAMBDA",
    ref: "[57]",
    url: "https://www.biorxiv.org/content/10.1101/2024.12.04.626878v1",
    citation:
      "Gefei Wang et al. Modeling and predicting single-cell multi-gene perturbation responses with scLAMBDA. bioRxiv, 2024."
  },
  {
    label: "GenePert",
    ref: "[58]",
    url: "https://www.biorxiv.org/content/10.1101/2024.10.27.620513v1",
    citation:
      "Yiqun T Chen and James Zou. GenePert: Leveraging GenePT embeddings for gene perturbation prediction. bioRxiv, 2024."
  },
  {
    label: "STATE",
    ref: "[59]",
    url: "https://www.biorxiv.org/content/10.1101/2025.06.26.661135v2",
    citation:
      "Abhinav K Adduri et al. Predicting cellular responses to perturbation across diverse contexts with STATE. bioRxiv, 2025."
  }
];

const METRIC_FAMILIES = [
  {
    name: "Correlation-based",
    count: 7,
    purpose: "Gene-level agreement and directional consistency between predicted and observed responses.",
    color: "#EFF8F7",
    metrics: [
      { abbr: "PCC", full: "Pearson correlation" },
      { abbr: "PDCorr", full: "Perturbation-delta correlation" },
      { abbr: "PDRCorr", full: "Perturbation-delta rank correlation" },
      { abbr: "LFCSpear", full: "Spearman of log-fold-change" },
      { abbr: "PCA-LFCSpear", full: "PCA-projected LFC Spearman" },
      { abbr: "LogFC", full: "Log-fold-change correlation" },
      { abbr: "RLogFC", full: "Rank LFC correlation" }
    ]
  },
  {
    name: "DEG-related",
    count: 3,
    purpose: "Recovery of differentially expressed genes, central to biological interpretation.",
    color: "#F1EDF9",
    metrics: [
      { abbr: "DEPrec", full: "DEG precision" },
      { abbr: "DERec", full: "DEG recall" },
      { abbr: "DEOverlap", full: "DEG overlap" }
    ]
  },
  {
    name: "Distribution-level",
    count: 3,
    purpose: "Whether the predicted single-cell population matches the observed distribution.",
    color: "#EEF5FB",
    metrics: [
      { abbr: "RMSE", full: "Root mean squared error" },
      { abbr: "Sinkhorn", full: "Sinkhorn divergence" },
      { abbr: "Energy", full: "Energy distance" }
    ]
  }
];

const METRIC_KEY_FINDINGS = [
  {
    title: "PCC alone is uninformative",
    text:
      "Most models score similarly high under PCC, and PCC correlates weakly with other metrics in the correlation matrix below."
  },
  {
    title: "Perturbation-focused metrics are most discriminative",
    text:
      "PDCorr and DEG-related scores show the largest variation across models, separating model behavior much more clearly than global similarity."
  },
  {
    title: "Compute cost matters as much as accuracy",
    text:
      "Models differ substantially in GPU memory usage and runtime, with steeper scaling on larger datasets and batch sizes (see the scaling curves below)."
  }
];

const ALL_SECTIONS = [...TASKS, ...EXTRA_SECTIONS];
const METRICS_SECTION = EXTRA_SECTIONS.find((section) => section.id === "metrics");
const GUIDANCE_SECTION = EXTRA_SECTIONS.find((section) => section.id === "guidance");

const INTEGRATION_REPO_URL = "https://github.com/maoxinjie/VCBench";
const INTEGRATION_GUIDE_URL =
  "https://github.com/maoxinjie/VCBench/blob/main/NEW_MODEL_INTEGRATION.md";

const GUIDANCE_DECISIONS = [
  {
    step: "Stage 1",
    title: "Define the task setting",
    text: "Choose between unseen cells, unseen perturbations, and cross-dataset integration based on the question you want to answer."
  },
  {
    step: "Stage 2",
    title: "Match a model family",
    text: "Use the figure to map task setting and evaluation target to a smaller set of candidate models."
  },
  {
    step: "Stage 3",
    title: "Check compute budget",
    text: "Compare runtime and GPU memory before training, especially on larger datasets and batch sizes."
  },
  {
    step: "Stage 4",
    title: "Re-evaluate with multiple metrics",
    text: "Avoid relying on a single score. Combine correlation, DEG, and distribution-level metrics before final selection."
  }
];

const INTEGRATION_STEPS = [
  {
    step: "01",
    title: "Implement the model class",
    text: "Create a class that inherits PerturbationModel and implements forward, training_step, validation_step, and predict.",
    code: "src/vcbench/modelcore/models/&lt;your_model&gt;.py"
  },
  {
    step: "02",
    title: "Add a Hydra config",
    text: "Write a YAML config whose _target_ points to your class and whose parameters align with __init__.",
    code: "src/vcbench/configs/model/&lt;your_model&gt;.yaml"
  },
  {
    step: "03",
    title: "Register the model",
    text: "Import the new class inside models/__init__.py so Hydra and the entry point can resolve it.",
    code: "from .your_model import YourModel"
  },
  {
    step: "04",
    title: "Wire sweep parameters",
    text: "Extend train.py argparse and the override mapping so wandb sweep injections reach the final config.",
    code: "_build_arg_parser() &middot; _apply_cli_overrides()"
  },
  {
    step: "05",
    title: "Run minimum validation",
    text: "Walk through config-only, one-epoch, full train+test, and a single sweep trial to surface integration issues.",
    code: "python src/vcbench/modelcore/train.py model=&lt;your_model&gt; trainer.max_epochs=1"
  }
];
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
  const renderItem = (item) => {
    if (item && typeof item === "object" && item.url) {
      return `<a class="pill pill-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}</a>`;
    }
    const label = item && typeof item === "object" ? item.name : item;
    return `<span class="pill">${label}</span>`;
  };
  return `
    <article class="resource-card" style="--resource-color:${color}">
      <div class="label">${title}</div>
      <div class="pill-list">
        ${items.map(renderItem).join("")}
      </div>
    </article>
  `;
}

function renderReferenceEntry(entry) {
  const head = entry.url
    ? `<a class="reference-link" href="${entry.url}" target="_blank" rel="noopener noreferrer"><strong>${entry.label}</strong></a>`
    : `<strong>${entry.label}</strong>`;
  return `
    <article class="reference-entry">
      <div class="reference-entry-head">
        ${head}
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

function renderGuidanceDecision(item) {
  return `
    <li class="decision-item">
      <span class="decision-step">${item.step}</span>
      <div class="decision-body">
        <h5 class="decision-title">${item.title}</h5>
        <p class="decision-text">${item.text}</p>
      </div>
    </li>
  `;
}

function renderIntegrationStep(item) {
  const code = item.code ? `<code class="step-code">${item.code}</code>` : "";
  return `
    <article class="step-card integration-step">
      <div class="step-number">${item.step}</div>
      <h4 class="step-title">${item.title}</h4>
      <p>${item.text}</p>
      ${code}
    </article>
  `;
}

function renderMetricFamily(family) {
  return `
    <article class="metric-family" style="--family-color:${family.color}">
      <header class="metric-family-head">
        <div class="metric-family-count">${family.count}</div>
        <div>
          <h4 class="metric-family-name">${family.name}</h4>
          <p class="metric-family-purpose">${family.purpose}</p>
        </div>
      </header>
      <ul class="metric-list">
        ${family.metrics
          .map(
            (m) => `
              <li class="metric-item">
                <span class="metric-abbr">${m.abbr}</span>
                <span class="metric-full">${m.full}</span>
              </li>
            `
          )
          .join("")}
      </ul>
    </article>
  `;
}

function renderMetricFinding(item) {
  return `
    <article class="metric-finding">
      <h4 class="metric-finding-title">${item.title}</h4>
      <p>${item.text}</p>
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
                <a class="button secondary" href="https://github.com/maoxinjie/VCBench" target="_blank" rel="noopener noreferrer">View code</a>
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
                We report 12 metrics across 3 complementary families.
                Each family captures a different biological aspect of perturbation
                response, and model rankings shift accordingly.
              </p>
            </div>
            <div class="metric-family-grid">
              ${METRIC_FAMILIES.map(renderMetricFamily).join("")}
            </div>
            <div class="metric-findings">
              <div class="label">Key findings</div>
              <div class="metric-findings-grid">
                ${METRIC_KEY_FINDINGS.map(renderMetricFinding).join("")}
              </div>
            </div>
            <div class="metric-figure-board">
              <figure class="metric-figure-card">
                <img
                  class="metric-figure-img"
                  src="./assets/figures/fig5-hires_1.png"
                  alt="Metric correlation matrix and pairwise scatter plots between metrics"
                />
                <figcaption class="metric-figure-caption">
                  <strong>Metric relationships.</strong>
                  Pairwise correlations among the 10 evaluation metrics. Correlation-based
                  and distance-based metrics form two distinct clusters, while PCC sits apart
                  with weak ties to the rest.
                </figcaption>
              </figure>
              <figure class="metric-figure-card">
                <img
                  class="metric-figure-img"
                  src="./assets/figures/fig5-hires_2.png"
                  alt="Compute cost: DEOverlap, peak GPU memory, and runtime across models"
                />
                <figcaption class="metric-figure-caption">
                  <strong>Compute cost.</strong>
                  DEOverlap, peak GPU memory, and runtime as functions of cell number and
                  batch size. Models differ substantially in scaling behavior, with several
                  large models showing steep memory and runtime growth.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section class="section alt">
          <div class="container">
            <div class="section-heading">
              <div class="section-kicker">Selection &amp; Integration</div>
              <h3 class="section-title">Selection &amp; Integration Guidance</h3>
              <p class="section-copy">
                Use the workflow on the left to narrow model choices for a given task and compute budget.
                The steps below show how to plug a new model into the benchmark pipeline.
              </p>
            </div>

            <div class="guidance-board">
              <div class="guidance-figure-slot">
                ${GUIDANCE_SECTION ? renderTaskCard(GUIDANCE_SECTION) : ""}
              </div>
              <aside class="guidance-decisions">
                <div class="label">Step-by-step selection</div>
                <ol class="decision-list">
                  ${GUIDANCE_DECISIONS.map(renderGuidanceDecision).join("")}
                </ol>
              </aside>
            </div>

            <div class="integration-block">
              <div class="integration-head">
                <div class="integration-intro">
                  <div class="section-kicker">How to Integrate</div>
                  <h4 class="integration-title">Plug a new model into VCBench</h4>
                  <p class="integration-copy">
                    VCBench builds on a Hydra-based training entry. A new model needs a class,
                    a config, a registration line, and a quick validation pass before full benchmarking.
                  </p>
                </div>
                <div class="integration-actions">
                  <a class="pill pill-link" href="${INTEGRATION_GUIDE_URL}" target="_blank" rel="noopener noreferrer">Integration guide</a>
                  <a class="pill pill-link" href="${INTEGRATION_REPO_URL}" target="_blank" rel="noopener noreferrer">Source repository</a>
                </div>
              </div>
              <div class="steps integration-steps">
                ${INTEGRATION_STEPS.map(renderIntegrationStep).join("")}
              </div>
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
