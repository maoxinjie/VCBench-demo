const [FRAMEWORK_SECTION, ...FIGURE_SECTIONS] = [
  {
    "id": "framework",
    "title": "Benchmark overview",
    "short": "A shared workflow for comparing out-of-distribution prediction.",
    "color": "#EFF8F7",
    "description": "Holding out a cell line, perturbation or study reserves its responses for testing. Similar examples can still remain in training. VCBench measures that support and evaluates which parts of the response models recover.",
    "highlights": [
      "Nine models, including three baselines, are compared on nine data packages from seven studies.",
      "The holdout protocol specifies which target information the model can use.",
      "Gene recovery, response direction, magnitude and correlation provide complementary evidence."
    ],
    "figure": "./assets/figures/fig1-hires.png",
    "preview": "./assets/figures/fig1.png",
    "figureLabel": "Figure 1"
  },
  {
    "id": "unseen-cell",
    "title": "Unseen cell lines and donors",
    "short": "Guided holdouts exposed losses in DE gene recovery that overall correlation partly concealed.",
    "color": "#EFF8F7",
    "description": "McFarland holds out cell lines and Kang holds out donors. Random splits and splits guided by control-cell representations use matched partition sizes. Target controls are available; target perturbation responses are held out.",
    "highlights": [
      "McFarland guided test lines were farther from training in all three measured embedding spaces: STACK, scGPT and UCE.",
      "On McFarland STACK, top-50 DE overlap fell about 19% from Random while response correlation fell about 5%. Kang showed a similar contrast.",
      "The guided and Random splits use different test identities, so the comparison does not isolate the effect of distance."
    ],
    "figure": "./assets/figures/fig2-hires.png",
    "preview": "./assets/figures/fig2.png",
    "figureLabel": "Figure 2"
  },
  {
    "id": "unseen-perturbation",
    "title": "Unseen genetic and chemical perturbations",
    "short": "Held-out genes and compounds reveal distinct errors in gene recovery, direction and response magnitude.",
    "color": "#EEF5FB",
    "description": "Norman tests held-out single genes and gene pairs. ESM2 guides the single-gene split, and seen 0, 1 and 2 count the genes in a pair that appeared in training. SciPlex3 compares Random, Scaffold, Tanimoto, UniMol and Combined compound holdouts.",
    "highlights": [
      "In the ESM2-guided single-gene split, response MSE fell about 10% while PDCorr and top-50 DE overlap also fell.",
      "Gene pairs with both components seen in training had higher mean response correlation than pairs with neither seen.",
      "Combined separates compounds by both molecular representations and shares no training/test scaffolds. In this test, CPA and Latent Additive had about 81% direction accuracy and mean magnitude ratios below 0.30."
    ],
    "figure": "./assets/figures/fig3-hires.png",
    "preview": "./assets/figures/fig3.png",
    "figureLabel": "Figure 3"
  },
  {
    "id": "cross-dataset",
    "title": "Transfer across studies",
    "short": "On fixed K562 targets, alignment and source choice affected transfer; additional cells did not consistently improve it.",
    "color": "#F6F1FA",
    "description": "Five K562 packages differ in measured genes, perturbation coverage and response distributions. With each target test set fixed, VCBench compares integration, the order of highly variable gene (HVG) selection, added studies and the number of retained source cells.",
    "highlights": [
      "Anchor, MNN and scVI improved mean direction and fold-change ranking and reduced response MSE on Replogle relative to direct concatenation.",
      "Adding A10 improved all six plotted metrics on Replogle on average; adding A01 worsened direction agreement and response MSE.",
      "Changes in perturbation and response similarity were associated with gains in a separate retrospective analysis. Source choices for new targets should be evaluated on validation data."
    ],
    "figure": "./assets/figures/fig4-hires.png",
    "preview": "./assets/figures/fig4.png",
    "figureLabel": "Figure 4"
  },
  {
    "id": "metrics",
    "title": "Metrics and training objectives",
    "short": "Model ranks differ by task, and changing the training loss can improve one response property while worsening another.",
    "color": "#EDF8F8",
    "description": "Figure 5 compares within-experiment metric correlations, mean ranks across six shared metrics, and five MSE:MMD loss ratios for PRNet on a fixed SciPlex3 A549 Random split.",
    "highlights": [
      "Metrics can agree on model ordering without measuring the same property. DE recall and ROC-AUC showed negative median rank correlation.",
      "The best mean rank was BioLORD for cell lines, Linear Additive for donors, and Latent Additive for genetic and chemical perturbations.",
      "In the fixed PRNet comparison, pure MMD improved direction and fold-change ordering relative to pure MSE but reduced top-50 DE overlap, PDCorr and PR-AUC, and increased response MSE."
    ],
    "figure": "./assets/figures/fig5-hires.png",
    "preview": "./assets/figures/fig5.png",
    "figureLabel": "Figure 5"
  },
  {
    "id": "guidance",
    "title": "Computational evaluation workflow",
    "short": "Define the prediction target, compare choices on validation data and report a held-out OOD evaluation.",
    "color": "#F1EDF9",
    "description": "The workflow turns the benchmark findings into an evaluation procedure for new computational prediction tasks.",
    "highlights": [
      "Define what is held out and what controls and related examples are available.",
      "Compare data preparation, sources and model settings on validation using matched budgets.",
      "Report complementary metrics on the held-out OOD test and document the configuration."
    ],
    "figure": "./assets/figures/fig6-hires.png",
    "preview": "./assets/figures/fig6.png",
    "figureLabel": "Figure 6"
  }
];
const TASKS = FIGURE_SECTIONS.slice(0, 3);
const [METRICS_SECTION, GUIDANCE_SECTION] = FIGURE_SECTIONS.slice(3);
const ALL_SECTIONS = [FRAMEWORK_SECTION, ...FIGURE_SECTIONS];

const DATASETS_DRIVE_URL =
  "https://drive.google.com/drive/folders/1GrPW9x5_npnT7ILwDVsFWvfDIcqaSjdk?usp=sharing";

const DATASETS = [
  { name: "McFarland2020", url: DATASETS_DRIVE_URL },
  { name: "Kang2018_CD4Tcells", url: DATASETS_DRIVE_URL },
  { name: "AdamsonWeissman2016_10X001", url: DATASETS_DRIVE_URL },
  { name: "AdamsonWeissman2016_10X010", url: DATASETS_DRIVE_URL },
  { name: "Norman2019", url: DATASETS_DRIVE_URL },
  { name: "Dixit 7-day (D7)" },
  { name: "Dixit 13-day (D13)" },
  { name: "ReplogleWeissman2022_K562", url: DATASETS_DRIVE_URL },
  { name: "SrivatsanTrapnell2020_sciplex3", url: DATASETS_DRIVE_URL }
];

const MODELS = [
  { name: "Linear Additive", url: "https://github.com/altoslabs/perturbench" },
  { name: "Latent Additive", url: "https://github.com/altoslabs/perturbench" },
  { name: "Decoder Only", url: "https://github.com/altoslabs/perturbench" },
  { name: "CPA", url: "https://github.com/theislab/cpa" },
  { name: "BioLORD", url: "https://github.com/nitzanlab/biolord" },
  { name: "SAMS-VAE", url: "https://github.com/insitro/sams-vae" },
  { name: "PRNet", url: "https://github.com/Perturbation-Response-Prediction/PRnet" },
  { name: "scLAMBDA", url: "https://github.com/gefeiwang/scLAMBDA" },
  { name: "GenePert", url: "https://github.com/zou-group/GenePert" }
];

const DATASET_REFERENCES = [
  {
    label: "Dixit 7-day (D7) / Dixit 13-day (D13)",
    url: "https://doi.org/10.1016/j.cell.2016.11.038",
    citation: "Atray Dixit et al. Perturb-Seq: dissecting molecular circuits with scalable single-cell RNA profiling of pooled genetic screens. Cell, 2016."
  },
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
    label: "Linear Additive / Latent Additive / Decoder Only",
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
    label: "PRNet",
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
];

const METRIC_FAMILIES = [
  {
    "name": "DE gene recovery and agreement",
    "color": "#F1EDF9",
    "purpose": "Recover affected genes and compare responses on observed significant DE genes.",
    "metrics": [
      {
        "abbr": "DE ov@50 / @200",
        "full": "Top differential-expression gene overlap"
      },
      {
        "abbr": "DE dir.",
        "full": "Direction agreement"
      },
      {
        "abbr": "DE-LFC rank",
        "full": "Fold-change rank agreement"
      }
    ]
  },
  {
    "name": "Overall response fidelity",
    "color": "#EFF8F7",
    "purpose": "Compare predicted and observed changes from matched controls.",
    "metrics": [
      {
        "abbr": "PDCorr",
        "full": "Pearson correlation between response vectors"
      },
      {
        "abbr": "Response MSE",
        "full": "Mean squared error between response vectors"
      }
    ]
  },
  {
    "name": "Additional readouts",
    "color": "#EEF5FB",
    "purpose": "The full evaluation also covers identification, expression and population properties.",
    "metrics": [
      {
        "abbr": "Pert. cos",
        "full": "Rank of the correct observed response among candidates"
      },
      {
        "abbr": "Population metrics",
        "full": "Complementary measures such as energy distance"
      }
    ]
  }
];

const TASK_RANKS = [
  ["Decoder Only", 6.444444444444444, 4.0, 3.5416666666666665, 4.958333333333333],
  ["GenePert", 5.333333333333333, 7.25, 5.375, 6.583333333333334],
  ["Linear Additive", 3.944444444444444, 2.5, 5.458333333333333, 7.541666666666666],
  ["Latent Additive", 6.055555555555556, 5.333333333333333, 3.2916666666666665, 1.75],
  ["CPA", 2.9444444444444446, 3.8333333333333335, 4.666666666666666, 4.125],
  ["BioLORD", 2.777777777777778, 5.0, 5.125, 3.6666666666666665],
  ["PRNet", 5.055555555555555, 6.416666666666667, 6.208333333333333, 4.291666666666667],
  ["scLAMBDA", 4.0, 5.166666666666667, 5.25, 4.041666666666667],
  ["SAMS-VAE", 8.444444444444445, 5.5, 6.083333333333334, 8.041666666666668]
];

const INTEGRATION_REPO_URL = "https://github.com/maoxinjie/VCBench";
const INTEGRATION_GUIDE_URL =
  "https://github.com/maoxinjie/VCBench/blob/main/NEW_MODEL_INTEGRATION.md";

const GUIDANCE_DECISIONS = [
  { step: "Stage 1", title: "Define the prediction task", text: "Specify the held-out unit and the target information available to the predictor." },
  { step: "Stage 2", title: "Audit training support", text: "Harmonize genes and controls, select highly variable genes from training only, and examine how the test conditions relate to training." },
  { step: "Stage 3", title: "Compare choices on validation", text: "Compare preprocessing, source sets and model settings at matched training budgets." },
  { step: "Stage 4", title: "Evaluate and report", text: "Measure complementary response properties on the held-out OOD test and report the protocol and results." }
];

const INTEGRATION_STEPS = [
  {
    step: "01",
    title: "Implement the model class",
    text: "Create a class that inherits PerturbationModel and implements forward, training_step, validation_step, and predict.",
    code: "src/VCBench/modelcore/models/&lt;your_model&gt;.py"
  },
  {
    step: "02",
    title: "Add a Hydra config",
    text: "Write a YAML config whose _target_ points to your class and whose parameters align with __init__.",
    code: "src/VCBench/configs/model/&lt;your_model&gt;.yaml"
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
    code: "python src/VCBench/modelcore/train.py model=&lt;your_model&gt; trainer.max_epochs=1"
  }
];
let currentZoom = 1;
let dragState = null;
let activeTrigger = null;

function renderStatCard(label, value, color) {
  return `
    <article class="stat-card" style="background:${color}">
      <div class="label">${label}</div>
      <p class="stat-value">${value}</p>
    </article>
  `;
}

function renderTaskCard(task) {
  const thumb = `<img class="task-thumb" loading="lazy" decoding="async" src="${task.preview}" alt="${task.title} preview" />`;

  return `
    <button class="task-card" style="--task-color:${task.color}" data-open-task="${task.id}" type="button">
      <div class="task-card-head">
        <div>
          <div class="figure-number">${task.figureLabel}</div>
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

function renderTaskRanks() {
  const minima = [1, 2, 3, 4].map((i) => Math.min(...TASK_RANKS.map((row) => row[i])));
  return `
    <div class="rank-table-wrap">
      <table class="rank-table">
        <caption>Mean rank by OOD task · 1 is best</caption>
        <thead>
          <tr><th scope="col">Model</th><th scope="col">Cell line</th><th scope="col">Donor</th><th scope="col">Genetic</th><th scope="col">Chemical</th></tr>
        </thead>
        <tbody>
          ${TASK_RANKS.map(([model, ...values]) => `<tr><th scope="row">${model}</th>${values.map((value, i) => `<td>${value === minima[i] ? `<strong>${value.toFixed(2)}</strong>` : value.toFixed(2)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
      <p class="rank-note">For each OOD setting, six core scores are averaged over three seeds before ranking nine models. Metric ranks and settings receive equal weight within each task. Random is excluded; MSE is ranked from low to high. Bold marks the lowest observed mean rank, without a significance claim.</p>
      <a class="rank-download" href="./assets/results/core-mean-ranks.csv" download>Download rank data (CSV)</a>
    </div>
  `;
}

function renderModal(task) {
  const viewer = `
        <img class="modal-image zoomable" id="zoomable-figure" draggable="false" src="${task.figure}" alt="${task.title}" />
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
    <div class="modal" id="figure-modal" aria-modal="true" aria-labelledby="figure-dialog-title" role="dialog">
      <div class="modal-card">
        <div class="modal-header" style="background:${task.color}">
          <div>
            <div class="figure-number">${task.figureLabel}</div>
            <h3 id="figure-dialog-title" class="section-title" style="font-size:clamp(1.8rem,1.2rem + 1.2vw,2.8rem);margin-top:0.5rem;">${task.title}</h3>
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
            <a href="#metrics">Evaluation</a>
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
              <h2>Benchmarking virtual cell models for in-the-wild perturbation response</h2>
              <p class="hero-copy">
                VCBench tests how models predict transcriptional responses when the cell background,
                perturbation or study was held out. It measures how much training support remains
                and which parts of the response the models recover.
              </p>
              <div class="hero-actions">
                <a class="button primary" href="#resources">Datasets and models</a>
                <a class="button secondary" href="#tasks">View tasks</a>
                <a class="button secondary" href="https://doi.org/10.48550/arXiv.2604.27646" target="_blank" rel="noreferrer">arXiv preprint</a>
              </div>
              <div class="metrics-strip">
                ${renderStatCard("Scenarios", "Cell-context, perturbation and cross-study holdouts.", "#F3FBFA")}
                ${renderStatCard("Metric View", "Gene recovery, direction, magnitude and correlation.", "#F2F8FB")}
                ${renderStatCard("Coverage", `${DATASETS.length} packages from seven studies; ${MODELS.length} models.`, "#F7F7F1")}
              </div>
            </div>
            <div class="overview-figure-panel">
              <button class="overview-figure-button" data-open-task="framework" type="button">
                <img class="overview-figure" src="${FRAMEWORK_SECTION.preview}" alt="VCBench training, prediction, benchmark scenarios and evaluation workflow" />
                <span class="hero-caption overview-caption"><strong>Figure 1 · Benchmark overview</strong><span class="open-pill">View</span></span>
              </button>
            </div>
          </div>
        </section>

        <section class="section" id="resources">
          <div class="container resource-grid">
            <div class="section-heading">
              <div class="section-kicker">Resources</div>
              <h3 class="section-title">Datasets and models in the benchmark</h3>
              <p class="section-copy">
                The core benchmark includes nine data packages from seven studies and nine models,
                including three reference baselines.
              </p>
            </div>
            <div class="resource-panels">
              ${renderResourceCard("Data packages", DATASETS, "#F3FBFA")}
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
                Each task specifies what is held out and what training information remains available.
              </p>
            </div>
            <div class="steps">
              ${renderStepCard("01", "Standardize data", "Harmonize datasets, preprocessing, gene space, and metadata under a shared benchmark pipeline.")}
              ${renderStepCard("02", "Benchmark by scenario", "Hold out cellular backgrounds, genetic and chemical perturbations, or study responses.")}
              ${renderStepCard("03", "Interpret and choose", "Compare how well models recover different properties of the response.")}
            </div>
          </div>
        </section>

        <section class="section alt" id="tasks">
          <div class="container">
            <div class="section-heading">
              <div class="section-kicker">Main Tasks</div>
              <h3 class="section-title">Prediction under three kinds of holdout</h3>
              <p class="section-copy">
                Guided splits test conditions farther from training. Fixed-target comparisons test which changes to training data improve cross-study prediction.
              </p>
            </div>
            <div class="tasks-grid">
              ${TASKS.map(renderTaskCard).join("")}
            </div>
          </div>
        </section>

        <section class="section" id="metrics">
          <div class="container">
            <div class="section-heading">
              <div class="section-kicker">Evaluation</div>
              <h3 class="section-title">Metrics and training objectives</h3>
              <p class="section-copy">
                Model rankings depend on the task and on which properties of the response are measured. The six shared metrics summarize model ranks by task; the loss comparison shows why the individual measures still matter.
              </p>
            </div>
            <div class="metric-family-grid">
              ${METRIC_FAMILIES.map(renderMetricFamily).join("")}
            </div>
            <div class="guidance-board metric-results">
              ${renderTaskCard(METRICS_SECTION)}
              ${renderTaskRanks()}
            </div>
          </div>
        </section>

        <section class="section alt">
          <div class="container">
            <div class="section-heading">
              <div class="section-kicker">Guidance</div>
              <h3 class="section-title">From benchmark design to held-out evaluation</h3>
              <p class="section-copy">
                Use the workflow to plan computational validation and report results on a separate OOD test set.
              </p>
            </div>

            <div class="guidance-board">
              <div class="guidance-figure-slot">
                ${GUIDANCE_SECTION ? renderTaskCard(GUIDANCE_SECTION) : ""}
              </div>
              <aside class="guidance-decisions">
                <div class="label">Evaluation steps</div>
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
        activeTrigger = trigger;
        document.body.insertAdjacentHTML("beforeend", renderModal(task));
        document.body.style.overflow = "hidden";
        updateZoom();
        document.getElementById("close-modal").focus();
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
    activeTrigger?.focus({ preventScroll: true });
    activeTrigger = null;
  }
}

renderApp();
attachEvents();
