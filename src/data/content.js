// ============================================================
//  DATA — edit this file to update all portfolio content
// ============================================================

export const profile = {
  name: "Vinay Devabhaktuni",
  title: "Software & Data Engineer",
  tagline: "Building scalable systems that actually work.",
  location: "Charlotte, NC — open to anywhere in USA",
  available: "July 2, 2026",
  workAuth: "OPT · STEM Extension Eligible",
  email: "Vinaydevabhaktuni2028@gmail.com",
  phone: "+1 (509) 338-8387",
  github: "https://github.com/VinayD2028",
  linkedin: "https://www.linkedin.com/in/vinay-devabhaktuni-b974162b0",
  photo: "IMG_2802.jpeg",
  resumeDE: "resume_data_engineer.pdf",
  resumeSWE: "resume_software_developer.pdf",
  summary: "I'm a Software & Data Engineer who combines backend expertise with data engineering to solve real problems — not write pointless code. I build robust full-stack applications with Java/Spring, and end-to-end data pipelines on AWS. RAG systems, ML pipelines, and vector search with FAISS are my bread and butter. Co-author, IEEE article on trust engineering for AI-generated code. AWS Academy Data Engineering certified.",
  about: [
    "I build scalable systems that actually work. Backend expertise meets data engineering — end-to-end, production-ready, and documented.",
    "My projects automate job searches, predict crime patterns with 94%+ accuracy, build semantic recommendation engines, and process streaming data at scale. Not toy examples.",
    "I write clean code, document my work, and actually test things. No shortcuts.",
  ],
  currentlyBuilding: [
    { icon: "🔧", text: "RAG-based systems with vector embeddings and semantic search" },
    { icon: "📊", text: "Large-scale data processing pipelines with Spark" },
    { icon: "🤖", text: "LLM integrations for workflow automation" },
  ],
};

export const featured = {
  id: "aws-pipeline",
  title: "AWS Serverless Data Pipeline",
  subtitle: "Production-grade event-driven ETL on AWS",
  description: "End-to-end serverless ETL architecture. S3 PutObject events trigger Lambda → Glue PySpark transforms → Redshift warehouse → Athena queries via REST API. Infrastructure-as-code with CloudFormation. Deployable in one command.",
  gradient: "linear-gradient(135deg, #060810 0%, #0a1628 40%, #091a2e 100%)",
  accentColor: "#00C8F0",
  tags: ["AWS Glue","Lambda","Redshift","Athena","PySpark","CloudFormation","S3"],
  github: "https://github.com/VinayD2028/aws-serverless-data-pipeline",
  impact: "Production-grade · Open source · CloudFormation IaC",
};

export const categories = [
  {
    id: "featured-projects",
    title: "Featured Projects",
    accent: "#00C8F0",
    items: [
      {
        id: "aws-pipeline",
        title: "AWS Serverless Data Pipeline",
        subtitle: "Data Engineering · AWS",
        description: "End-to-end serverless ETL pipeline on AWS. S3 event triggers Lambda → Glue PySpark ETL → Redshift warehouse → Athena → REST API. Infrastructure-as-code with CloudFormation — deploy in one command.",
        longDescription: "A fully automated, event-driven ETL pipeline built entirely on AWS serverless services. An S3 PutObject event triggers a Lambda function which invokes an AWS Glue PySpark job. Transformed data lands in Amazon Redshift for warehousing and is simultaneously queryable via Athena using a REST API endpoint backed by API Gateway. Infrastructure is provisioned entirely via CloudFormation — the entire stack deploys in a single command with no manual console steps. Designed as a reusable open-source template for production data teams.",
        tags: ["AWS Glue","Lambda","Redshift","Athena","PySpark","S3","CloudFormation","API Gateway"],
        accentColor: "#00C8F0",
        impact: "Production-grade · Open source · One-command deploy",
        github: "https://github.com/VinayD2028/aws-serverless-data-pipeline",
        gradient: "linear-gradient(135deg, #060D1F 0%, #0A1628 100%)",
      },
      {
        id: "manhua",
        title: "Manhua Matchmaker",
        subtitle: "AI · Semantic Search",
        description: "Semantic manga recommendation engine using Sentence-BERT + FAISS vector index. 600× faster than fuzzy matching at sub-100ms on CPU — no GPU required. Ingests ~10,000 records via MangaDex REST and AniList GraphQL APIs.",
        longDescription: "Replaced naive string matching with dense vector retrieval. ~10,000 manga records ingested via MangaDex REST and AniList GraphQL APIs, deduplicated using fuzzy matching (600× speedup: 10 min → under 1.5 seconds). Titles and synopses encoded with Sentence-BERT (MiniLM-L6-v2), stored in a FAISS flat index. Pre-computed index eliminates per-query encoding overhead — similarity search takes ~0.3ms for 10,000 titles. Deployed as a Streamlit web app with daily automated ETL pipelines via GitHub Actions.",
        tags: ["FAISS","Sentence-BERT","Python","Vector Search","Embeddings","NLP","Streamlit","GitHub Actions"],
        accentColor: "#A78BFA",
        impact: "600× speedup · sub-100ms CPU · ~10,000 records",
        github: "https://github.com/VinayD2028/manhua-matchmaker",
        live: "https://manhua-matchmaker.streamlit.app",
        gradient: "linear-gradient(135deg, #120A1F 0%, #1A0F2E 100%)",
      },
      {
        id: "hud",
        title: "HUD FMR Fair Pay Dashboard",
        subtitle: "Civic Tech · Data Viz · Team Project",
        description: "Interactive dashboard comparing HUD Fair Market Rents vs wages across all 3,000+ US counties. Features choropleth map, county rankings, pay fairness scan, and relocation calculator built on real federal HUD + BLS data.",
        longDescription: "Co-built with Ajitesh Tippireddy and Sai Priyanka Taduri. Integrates county-level geographic, temporal, and housing-type data from HUD Fair Market Rents 2025 into stakeholder-facing visualizations. Features: (1) a choropleth map of rent-to-wage ratios across the USA, (2) county ranking table sortable by affordability, (3) pay fairness scan — shows how much salary you'd need to maintain your standard of living in any county, and (4) a relocation calculator. Translates public policy data into decision-ready analytics covering all 3,000+ US counties.",
        tags: ["Python","Streamlit","HUD API","BLS Data","Choropleth","Geospatial","SQL","Git"],
        accentColor: "#00E5A0",
        impact: "3,000+ US counties · Real federal HUD + BLS data",
        github: "https://github.com/VinayD2028/HUD-FMR-Dashboard",
        live: "https://jdwexuavexhpsoogak3jjk.streamlit.app/",
        gradient: "linear-gradient(135deg, #041A10 0%, #072018 100%)",
      },
      {
        id: "job-automation",
        title: "Job Search Automation System",
        subtitle: "LLM Automation · Python · End-to-End Pipeline",
        description: "Fully automated job discovery pipeline: Apify scrapes LinkedIn & Indeed daily → Ollama/llama3.2 scores job fit against resume → SQLite tracks 6-state lifecycle → Gmail API delivers curated daily digest.",
        longDescription: "End-to-end job discovery and AI-scoring pipeline. Apify actors scrape LinkedIn, Indeed, and other job boards on a daily cron schedule. Raw postings stored in SQLite with six-state lifecycle tracking (new → reviewed → applied → interview → offer → rejected). Ollama/llama3.2 scores each posting against resume using a structured LLM prompt for JD-aware tailoring. Top-scored roles assembled into a digest — Gmail API (OAuth2) delivers the daily email summary automatically. Streamlit dashboard for full application lifecycle visibility. Deployed with GitHub Actions for CI/CD and scheduled ingestion.",
        tags: ["Apify","Ollama","llama3.2","SQLite","Gmail API","Python","Streamlit","GitHub Actions","OAuth2"],
        accentColor: "#FFB800",
        impact: "Fully automated · Daily digest · AI-scored fit",
        github: "https://github.com/VinayD2028/job-search-automation",
        gradient: "linear-gradient(135deg, #1A1000 0%, #201500 100%)",
      },
      {
        id: "churn-mlops",
        title: "Customer Churn MLOps Pipeline",
        subtitle: "MLOps · PySpark · Enterprise-scale",
        description: "Production-style MLOps pipeline for customer churn prediction at scale. PySpark feature engineering → Spark MLlib gradient-boosted trees → model versioning registry → batch inference. Mirrors real enterprise ML workflows.",
        longDescription: "End-to-end MLOps pipeline for customer churn prediction built to mirror real enterprise workflows. PySpark handles large-scale feature engineering (encoding, aggregation, imputation). Spark MLlib trains gradient-boosted tree classifiers with cross-validation. A model registry pattern versions each trained artifact, and the best-performing model is automatically promoted to batch inference. Includes data contract testing, schema enforcement, and pipeline observability — each stage produces metrics and logs for downstream monitoring.",
        tags: ["PySpark","Spark MLlib","MLOps","Model Registry","Python","Batch Inference","Data Contracts","Schema Enforcement"],
        accentColor: "#FF4D6A",
        impact: "Full ML lifecycle · Enterprise-grade patterns",
        github: "https://github.com/VinayD2028/customer-churn-mlops-spark",
        gradient: "linear-gradient(135deg, #1A0508 0%, #200710 100%)",
      },
      {
        id: "text-motion",
        title: "Text-to-Motion Diffusion (ACMDM)",
        subtitle: "Deep Learning · Generative AI · Research",
        description: "Text-conditioned 3D human motion generation using diffusion models. Given a natural language prompt, the ACMDM architecture generates realistic motion sequences via CLIP embeddings + transformer denoising.",
        longDescription: "Implementation of the ACMDM (Attention-based Conditional Motion Diffusion Model) architecture. Given a natural language prompt such as 'a person walks forward and waves', the model generates realistic 3D human skeleton motion sequences. The pipeline: CLIP text encoder produces prompt embeddings → a transformer-based diffusion denoiser iteratively refines motion tokens → final skeleton pose sequence rendered. Demonstrates deep generative AI capability extending beyond standard data pipelines into motion synthesis research.",
        tags: ["PyTorch","Diffusion Models","CLIP","Transformers","3D Motion","Generative AI","Deep Learning"],
        accentColor: "#A78BFA",
        impact: "ACMDM architecture · Text → 3D motion",
        github: "https://github.com/VinayD2028/Text-to-Motion-Diffusion-ACMDM",
        gradient: "linear-gradient(135deg, #0D0A1F 0%, #150F2E 100%)",
      },
    ],
  },
  {
    id: "more-projects",
    title: "More Open Source",
    accent: "#00E5A0",
    items: [
      {
        id: "safecity",
        title: "SafeCity-ML",
        subtitle: "ML · Social Impact · Crime Prediction",
        description: "Crime prediction model using ensemble methods (Random Forest + Gradient Boosting) achieving 94%+ accuracy. Geospatial feature engineering on real city datasets — encodes location clusters, time-of-day, crime type frequency, and historical incident density to score urban zone safety.",
        longDescription: "Urban crime prediction model built with stacked ensemble ML. Ingests public city crime report datasets, engineers geospatial features (lat/lng clustering, neighborhood density, time patterns), and trains a Random Forest + Gradient Boosting classifier.\n\nFeature engineering: location clustering, hour-of-day/day-of-week encoding, crime type frequency, historical incident density per zone.\n\nAchieves 94%+ prediction accuracy on held-out test data. Output: per-zone safety scores usable for route planning or city resource allocation.",
        tags: ["Python","Scikit-learn","Random Forest","Gradient Boosting","Geospatial","Pandas"],
        impact: "94%+ accuracy · Ensemble methods",
        github: "https://github.com/VinayD2028/SafeCity-ML",
        accentColor: "#00E5A0",
        gradient: "linear-gradient(135deg, #041A10 0%, #0A2018 100%)"
      },
      {
        id: "fakenews",
        title: "Fake News Detection",
        subtitle: "NLP · Text Classification · Misinformation",
        description: "End-to-end NLP pipeline for fake news detection. Multi-feature approach: TF-IDF vectors + sentiment polarity + source credibility scores fed into a fine-tuned BERT classifier with ensemble voting — minimizing false positives on real news while maximizing misinformation recall.",
        longDescription: "NLP pipeline classifying news articles as real or fake.\n\nPreprocessing: tokenization, stopword removal, lemmatization.\nFeatures: TF-IDF vectors, sentiment polarity, readability scores, source domain reputation.\nModels: Logistic Regression baseline → fine-tuned BERT → ensemble soft voting.\n\nEvaluated on precision/recall/F1 to minimize false positives (incorrectly flagging real news). Designed to handle the class imbalance typical in misinformation datasets.",
        tags: ["Python","NLP","BERT","Transformers","TF-IDF","Scikit-learn","Pandas"],
        github: "https://github.com/VinayD2028/Fake-News-Detection",
        accentColor: "#FF4D6A",
        gradient: "linear-gradient(135deg, #1A0508 0%, #200810 100%)"
      },
      {
        id: "sparkmusic",
        title: "SparkStream Music Analytics",
        subtitle: "Real-time Streaming · Spark · Kafka",
        description: "Real-time music streaming analytics pipeline. Kafka producers emit play events → Spark Structured Streaming consumes with 10-second micro-batch windows → computes rolling top-10 artists, per-user session metrics, and genre popularity trends with sub-second latency.",
        longDescription: "Real-time analytics modeled after music platforms. Architecture: Kafka topics receive simulated play events (user, track, artist, timestamp) → Spark Structured Streaming processes with 10-second micro-batch windows.\n\nMetrics: rolling top-10 artists, per-user listening session duration, genre trend detection, track play counts.\n\nDesigned to scale horizontally — Kafka partitioning and Spark parallelism handle higher event throughput without code changes.",
        tags: ["PySpark","Kafka","Structured Streaming","Windowed Aggregations","Python","Real-time"],
        github: "https://github.com/VinayD2028/SparkStream-Music-Analytics",
        accentColor: "#FFB800",
        gradient: "linear-gradient(135deg, #1A1000 0%, #201800 100%)"
      },
      {
        id: "iot",
        title: "IoT Spark Sensor Analytics",
        subtitle: "IoT · Big Data · Anomaly Detection",
        description: "Industrial IoT pipeline processing high-frequency sensor telemetry (temperature, pressure, vibration) via Spark Streaming. Applies Z-score anomaly detection over 30-second rolling windows and flags out-of-range readings — designed for predictive maintenance use cases.",
        longDescription: "Simulates an industrial IoT data pipeline. Sensors emit temperature, pressure, and vibration readings at 10Hz.\n\nSpark Streaming ingests the stream, computes 30-second rolling window statistics (mean, stddev), and flags anomalies using Z-score thresholds (|z| > 2.5).\n\nUse case: predictive maintenance — early detection of equipment degradation before failure. Demonstrates Spark's ability to process thousands of concurrent sensor streams in parallel with low latency.",
        tags: ["PySpark","IoT","Spark Streaming","Anomaly Detection","Z-score","Python","Predictive Maintenance"],
        github: "https://github.com/VinayD2028/iot-spark-sensor-analytics",
        accentColor: "#00C8F0",
        gradient: "linear-gradient(135deg, #041020 0%, #081828 100%)"
      },
      {
        id: "etl",
        title: "Serverless ETL Pipeline",
        subtitle: "Cloud · AWS Lambda · Serverless",
        description: "Serverless ETL template on AWS. S3 file upload triggers Lambda → validates schema (column presence, type checks, null-rate thresholds) → transforms and normalizes data → writes clean output back to S3. Failures notify via SNS, all invocations logged in CloudWatch. Zero cost when idle.",
        longDescription: "Serverless ETL designed for lightweight, cost-efficient data processing.\n\nFlow: Upload CSV/JSON to S3 → EventBridge triggers Lambda → Lambda validates schema → transforms/normalizes → writes to clean S3 prefix.\n\nError handling: validation failures publish to SNS topic. CloudWatch logs all invocations with duration and record counts.\n\nPay-per-invocation — zero cost when idle. Complements the full aws-serverless-data-pipeline repo for lighter workloads.",
        tags: ["AWS Lambda","S3","SNS","CloudWatch","Python","EventBridge","Serverless"],
        github: "https://github.com/VinayD2028/ServerlessETLPipeline",
        accentColor: "#A78BFA",
        gradient: "linear-gradient(135deg, #100A20 0%, #180F2A 100%)"
      },
      {
        id: "social",
        title: "Social Media Analytics",
        subtitle: "Big Data · PySpark · Graph Analytics",
        description: "PySpark batch analytics on social graph data. Computes engagement rates per post, follower-weighted reach propagation scores, and PageRank-style influence rankings across the user graph. Handles millions of posts and edges on distributed Spark clusters without memory bottlenecks.",
        longDescription: "Batch analytics pipeline for social media data at scale.\n\nInput: user graph (follower/following edges) + post engagement events.\n\nMetrics computed:\n• Engagement rate: interactions / impressions per post\n• Reach score: follower-weighted share propagation depth\n• Influence ranking: adapted PageRank on the follower graph\n• Trending topics: TF-IDF on post text with time decay\n\nAll transformations use PySpark DataFrames and Spark SQL — designed to process millions of posts and edges without memory bottlenecks.",
        tags: ["PySpark","Spark SQL","PageRank","Graph Analytics","TF-IDF","Python","Batch"],
        github: "https://github.com/VinayD2028/social-media-analytics-pyspark-spark",
        accentColor: "#00E5A0",
        gradient: "linear-gradient(135deg, #041A10 0%, #0A2018 100%)"
      },
    ],
  },
  {
    id: "research",
    title: "Research & Publications",
    accent: "#A78BFA",
    items: [
      {
        id: "ieee-trust",
        title: "Engineering Trust When AI Writes Your Software",
        subtitle: "IEEE Computer Magazine · Submitted May 2026",
        description: "Research feature proposing a lightweight trust engineering framework for AI-mediated software development. Three constructs: trust hypotheses, trust gates, and claim-evidence-limitation structures — integrated into existing DevOps pipelines.",
        longDescription: "Manuscript ID: COM-2026-05-0175. Submitted May 19, 2026 to IEEE Computer Magazine.\n\nAuthors: Prof. Marco Vieira (Corresponding), Ajitesh Reddy, Vinay Devabhaktuni — all at UNC Charlotte.\n\nAbstract: LLMs generate code, tests, and configurations with apparent confidence, creating tension between probabilistic outputs and a traditionally deterministic domain. Conventional QA (code review, testing, static analysis) relies on interrogative reasoning and predictable error patterns — AI-generated artifacts may encode latent flaws that evade detection. We argue AI-mediated development requires treating trust as an explicit engineering concern.\n\nThe framework proposes three constructs: (1) Trust Hypotheses — classify expectations as must-hold, may-fail, or cannot-guarantee; (2) Trust Gates — pipeline checkpoints that generate behavioral evidence rather than binary pass/fail verdicts; (3) Claim-Evidence-Limitation structures — organize evidence into scoped, defensible trust statements.\n\nEvaluated in a 14-week graduate course (ITCS 6010/8010, UNC Charlotte, Spring 2026) across 3 teams building real AI-heavy systems. Key finding: all 8 students rated all three constructs 4–5/5 for usefulness; 4 estimated 50–80% of defects would not have been caught without the framework.",
        tags: ["IEEE Computer","Trust Engineering","LLM","DevOps","CI/CD","Software Engineering","AI Safety","Co-author"],
        accentColor: "#A78BFA",
        impact: "Submitted · IEEE Computer Magazine · 5,009 words · 1 table · 2 figures",
        gradient: "linear-gradient(135deg, #0D0A1F 0%, #150F2E 100%)",
        stats: [
          { value: "5,009", label: "Words" },
          { value: "3", label: "Constructs" },
          { value: "8", label: "Students Evaluated" },
          { value: "4.6/5", label: "Usefulness Rating" },
        ],
      },
      {
        id: "hallucination",
        title: "LLM Code Hallucination Taxonomy (PROBE)",
        subtitle: "IEEE · In Preparation · Active Research",
        description: "Structured taxonomy of how LLMs hallucinate when writing code. 6 hallucination categories (H1–H6) covering fabricated imports, undefined symbols, fabricated APIs, wrong signatures, API-behaviour errors, and task divergence — validated across 9,900 competitive programming solutions from 6 models.",
        longDescription: "Co-authored with Ajitesh Tippireddy under Prof. Marco Vieira at UNC Charlotte. This is active, ongoing research.\n\nResearch Journey:\n• Phase 1 (Pilot, April 2026): Initial codebook v1 with informal labels. First annotation round on 100 solutions. Inter-rater agreement κ=0.14 — extremely low, signaling systematic disagreements.\n• Phase 2 (Codebook v2, May 2026): Major revision adding: Step 0 markdown corruption check (largest single disagreement source), explicit Correct Code mandate, H6/Mistake boundary rule, Unclear restriction, TLE rule as always-Mistake, and 7 worked examples. Second round κ=0.77 — substantial agreement.\n• Phase 3 (Codebook v3, Current): Expanded H5/H6 decision paths with G/S/L/C grounding tests (H5) and T/I/F/P tests (H6). Introduced 4-way annotator setup with Claude Opus as blind LLM judge.\n\nTaxonomy: H1 (Fabricated Import), H2 (Inconsistent Symbol — ~75% of structural cases), H3 (Fabricated API + markdown corruption), H4 (Wrong Signature), H5 (API-Behaviour Hallucination — partial test failure), H6 (Task-Divergence Hallucination — systematic test failure).\n\nDataset: ~9,900 competitive programming solutions across GPT-4.1-mini, Gemini-2.0-flash, Qwen2.5-14b, Qwen2.5-coder-7b, Qwen2.5-coder-14b, DeepSeek-coder-v2-16b.\n\nKey finding: 1.7% overall structural hallucination rate. H2 (undefined symbols) accounts for ~75% of structural hallucination cases.",
        tags: ["IEEE","LLM Evaluation","Hallucination Taxonomy","NLP","Python","Competitive Programming","Inter-Rater Agreement","Cohen's Kappa"],
        accentColor: "#A78BFA",
        impact: "κ=0.14 → κ=0.77 · 9,900 solutions · 6 LLMs · Active research",
        stats: [
          { value: "9,900", label: "Solutions" },
          { value: "6", label: "LLMs" },
          { value: "κ=0.77", label: "Agreement" },
          { value: "1.7%", label: "Struct. Rate" },
        ],
        gradient: "linear-gradient(135deg, #100A20 0%, #180F2E 100%)",
      },
    ],
  },
  {
    id: "experience",
    title: "Experience",
    accent: "#FFB800",
    items: [
      {
        id: "uncc-gra",
        title: "Graduate Research Assistant",
        subtitle: "UNC Charlotte · Aug 2024 – May 2026",
        description: "Architected serverless event-driven ETL on AWS (S3→Lambda→Glue→Athena→Flask/EC2). Built 4-stage PySpark transformation layer. Automated Airflow workflows eliminating ~15 hrs/week manual ops. Co-authored two IEEE publications on LLM trust and hallucination.",
        longDescription: "Under Prof. Marco Vieira, UNC Charlotte. Contract ended May 15, 2026.\n\n→ Architected a serverless event-driven ETL pipeline on AWS (S3 → Lambda → Glue Crawler → Athena → Flask/EC2), partitioning raw ingestion by date and source to power five self-service analytics queries for research stakeholders.\n\n→ Built a modular four-stage PySpark/Spark SQL transformation layer with reusable feature modules and tested data contracts, processing multi-source structured and semi-structured inputs into curated analytical tables.\n\n→ Automated multi-stage research workflows in Airflow + Lambda under scoped IAM least-privilege roles with CloudWatch monitoring, eliminating ~15 hrs/week of manual operations.\n\n→ Deployed a Flask service on EC2 to expose Athena query results as a stakeholder-facing analytics dashboard.\n\n→ Co-authored two IEEE publications: (1) 'Engineering Trust When AI Writes Your Software' — submitted to IEEE Computer; (2) LLM Code Hallucination Taxonomy — in preparation.",
        tags: ["AWS","PySpark","Airflow","Flask","EC2","LLM Eval","IEEE","Research","CloudWatch","IAM"],
        accentColor: "#A78BFA",
        gradient: "linear-gradient(135deg, #100A20 0%, #180F2E 100%)",
      },
      {
        id: "cognizant-pa",
        title: "Programmer Analyst",
        subtitle: "Cognizant Technology Solutions · Jun 2023 – Jun 2024 · Chennai, India",
        description: "Migrated high-traffic legacy monolith to Docker microservices on AWS, cutting API response times 30%. Established GitHub Actions CI/CD with AI-assisted code review. Improved distributed processing 20% via Java multithreading.",
        longDescription: "Chennai, India — serving Toyota and Walmart enterprise clients.\n\n→ Migrated a high-traffic legacy monolith to Docker-containerized microservices on AWS, reducing long-term technical debt and improving deployment cadence.\n\n→ Tuned Spring Framework REST endpoints and backend SQL (indexing, query plan analysis) to cut API response times 30% under production load.\n\n→ Established GitHub Actions CI/CD quality gates running AI-assisted code review and static analysis, accelerating integration and reducing post-deployment defects across the team.\n\n→ Improved distributed processing efficiency 20% by parallelizing Java algorithms with multithreading.\n\nToyota: Full-stack Java Spring Boot, Angular, React, Angular testing (Karma/Jasmine, 90%+ coverage), AWS, GitHub Copilot integration.\n\nWalmart: Data catalog curation — scaled from 3,000 to 5,000 daily records (67% throughput increase) using GitHub Copilot-assisted PySpark ETL.",
        tags: ["Java","Spring Boot","Angular","React","Docker","AWS","GitHub Actions","GitHub Copilot","MySQL","Microservices"],
        accentColor: "#FFB800",
        gradient: "linear-gradient(135deg, #1A1000 0%, #201800 100%)",
      },
      {
        id: "cognizant-pat",
        title: "Programmer Analyst Trainee",
        subtitle: "Cognizant Technology Solutions · Aug 2022 – Jun 2023 · Hyderabad, India",
        description: "Engineered Python ingestion pipelines with 10+ automated validation workflows, reducing manual reconciliation 40% at 99.9% data integrity. Accelerated SQL queries 25%. Integrated Kafka streaming into Spring Boot microservices stack for sub-second latency.",
        longDescription: "Hyderabad, India — onboarding rotation across enterprise client projects.\n\n→ Engineered Python ingestion pipelines with 10+ automated data validation workflows (schema checks, null-rate thresholds, referential integrity), reducing manual reconciliation 40% while maintaining 99.9% data integrity.\n\n→ Accelerated complex SQL query execution 25% by refactoring with stored procedures, triggers, views, and partition-aware indexing across heterogeneous transactional sources.\n\n→ Orchestrated end-to-end ETL workflows in Airflow, improving scheduling efficiency 20%; deployed via GitHub CI/CD with rollback safeguards, cutting deployment errors 15%.\n\n→ Integrated Kafka real-time streaming into a Java Spring Boot microservices stack backed by MySQL and NoSQL stores, enabling sub-second processing latency for downstream services.\n\n→ Resolved critical production data and integration bugs in collaboration with senior engineers, improving pipeline reliability and observability.",
        tags: ["Python","Airflow","Kafka","SQL","Spring Boot","MySQL","NoSQL","CI/CD","Data Validation"],
        accentColor: "#FFB800",
        gradient: "linear-gradient(135deg, #1A0F00 0%, #201500 100%)",
      },
    ],
  },
];

export const skills = {
  "Programming & Querying": ["Python","SQL / PL/SQL","Java / Spring Boot","JavaScript / Node.js","GraphQL / REST","PHP"],
  "ETL & Orchestration": ["PySpark / Spark SQL","Apache Airflow","Kafka / Spark Streaming","Spark ML","Event-Driven ETL","Automated Data Validation"],
  "Cloud (AWS) & Storage": ["S3 · Glue · Athena","Lambda · EC2 · Redshift","SageMaker · CloudWatch · IAM","Hadoop / HDFS / Hive","MySQL · PostgreSQL · NoSQL"],
  "AI & DevOps": ["LLM Evaluation · RAG","FAISS · SentenceTransformers","Claude · Gemini · Ollama","Git · GitHub Actions · Docker","JUnit · Angular Testing · CI/CD"],
};

export const education = [
  {
    degree: "MS Computer Science",
    school: "UNC Charlotte",
    period: "Aug 2024 – May 2026",
    gpa: "3.9 / 4.0",
    location: "Charlotte, NC",
    note: "Graduated May 9, 2026",
    certs: ["AWS Academy Data Engineering","Generative AI — IBM","Python Data Analytics — Meta","SQL Certification"],
  },
  {
    degree: "BTech Computer Science",
    school: "CMR Technical Campus",
    period: "Aug 2018 – Jul 2022",
    gpa: "7.24 / 10.0",
    location: "Hyderabad, India",
    certs: ["PHP & MySQL — IIT Bombay","Intro to JavaScript — Udemy","A/B Testing — DataCamp","Intro to Data Analytics — Meta"],
  },
];

// AI Chat knowledge base — used by the AIChatWidget
export const aiKnowledge = `
You are the AI portfolio assistant for Vinay Devabhaktuni. Answer only questions about Vinay. Be specific, concise, and cite actual project names and numbers.

IDENTITY: Vinay Devabhaktuni. Email: Vinaydevabhaktuni2028@gmail.com. Phone: +1 (509) 338-8387. GitHub: VinayD2028. LinkedIn: vinay-devabhaktuni-b974162b0. Location: Charlotte NC, open to anywhere USA. Work auth: OPT (STEM extension eligible, ~3 years total). Available: July 2, 2026.

EDUCATION: MS Computer Science, UNC Charlotte, GPA 3.9/4.0, graduated May 9 2026. BTech CS, CMR Technical Campus, GPA 7.24/10.

EXPERIENCE:
- Graduate Research Assistant, UNC Charlotte (Aug 2024–May 2026) under Prof. Marco Vieira: built serverless AWS ETL pipelines, 4-stage PySpark transformation layers, Airflow automation (saved ~15 hrs/week), co-authored 2 IEEE papers.
- Programmer Analyst, Cognizant (Jun 2023–Jun 2024): Docker microservices migration on AWS, 30% API response improvement, GitHub Actions CI/CD, 20% processing efficiency via Java multithreading. Toyota (Spring Boot/Angular/React/AWS) and Walmart (PySpark, 3K→5K records/day = 67% throughput increase) projects.
- Programmer Analyst Trainee, Cognizant (Aug 2022–Jun 2023): 10+ Python data validation workflows (40% less manual reconciliation), 25% SQL optimization, Kafka streaming into Spring Boot stack.

RESEARCH:
1. "Engineering Trust When AI Writes Your Software" — submitted to IEEE Computer Magazine, May 19 2026. Manuscript COM-2026-05-0175. Authors: Marco Vieira, Ajitesh Reddy, Vinay Devabhaktuni. Proposes trust hypotheses/trust gates/claim-evidence-limitation framework for AI-generated code in DevOps pipelines. Evaluated in 14-week graduate course, 8 students, all rated 4-5/5.
2. LLM Code Hallucination Taxonomy (PROBE) — in preparation for IEEE. Co-authored with Ajitesh Tippireddy. 9,900 solutions across 6 LLMs. H1-H6 taxonomy. κ improved from 0.14 to 0.77. 1.7% structural hallucination rate; H2=~75% of structural cases.

PROJECTS: AWS Serverless Data Pipeline (S3→Lambda→Glue→Redshift→Athena→API Gateway, CloudFormation IaC), Manhua Matchmaker (FAISS+Sentence-BERT, 600× speedup, sub-100ms), HUD FMR Dashboard (3000+ US counties, live at streamlit), Job Search Automation (Apify+Ollama+SQLite+Gmail API), Customer Churn MLOps (PySpark+Spark MLlib), Text-to-Motion Diffusion (ACMDM, PyTorch+CLIP).

SKILLS: Python, PySpark, SQL, AWS (Glue/Athena/Lambda/Redshift/S3/EC2/SageMaker), Airflow, Kafka, FAISS, RAG, LLM Evaluation, Java/Spring Boot, Angular, React, Docker, GitHub Actions.
`;
