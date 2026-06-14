export const blogs = [
  {
    id: "realtime-matchmaking",
    tag: "Architecture",
    tagColor: "#00e5c4",
    title: "Building Real-Time Matchmaking with ASP.NET Core & WebSockets",
    excerpt: "How I architected Zinkr's swipe engine — processing 2,500+ concurrent WebSocket sessions at sub-100ms latency using Redis-backed queues and bidirectionality checks.",
    readTime: "8 min read",
    date: "May 2026",
    topics: ["ASP.NET Core", "WebSockets", "Redis", "C#"],
    featured: true,
    content: [
      {
        type: "intro",
        text: "When I started building Zinkr — a modern dating platform — the matchmaking engine was the hardest problem. A swipe is simple. Two simultaneous swipes creating a match, notifying both users instantly, while 2,500 other people are doing the same thing? That's a distributed systems problem. Here's exactly how I solved it."
      },
      {
        type: "heading",
        text: "The Core Challenge"
      },
      {
        type: "para",
        text: "Traditional HTTP request-response doesn't work for real-time matching. If User A swipes right on User B, you need to know immediately whether User B already swiped right on User A — and if so, fire a match event to both simultaneously. A polling approach would add 2-5 seconds of delay and murder the server with requests."
      },
      {
        type: "heading",
        text: "WebSocket Architecture"
      },
      {
        type: "para",
        text: "Each user connecting to Zinkr opens a persistent WebSocket connection handled by ASP.NET Core's built-in WebSocket middleware. On connection, the user's ID is registered in a concurrent in-memory dictionary mapping userId → WebSocket. This allows the server to push events to any specific user in O(1) time."
      },
      {
        type: "code",
        lang: "csharp",
        text: `// WebSocket connection handler
app.Use(async (context, next) => {
    if (context.WebSockets.IsWebSocketRequest) {
        var userId = context.User.FindFirst("sub")?.Value;
        var ws = await context.WebSockets.AcceptWebSocketAsync();
        _wsManager.Register(userId, ws);
        await HandleConnection(userId, ws);
    } else await next();
});`
      },
      {
        type: "heading",
        text: "The Swipe Engine with Redis"
      },
      {
        type: "para",
        text: "When User A swipes right on User B, we store that event in Redis using a sorted set keyed by target user ID. The score is a timestamp for TTL management. Then we immediately check if the reverse key exists — has User B already swiped right on User A? If yes, we fire a match event over WebSocket to both connections simultaneously."
      },
      {
        type: "code",
        lang: "csharp",
        text: `public async Task<MatchResult> ProcessSwipeAsync(string fromId, string toId, bool liked) {
    if (!liked) return MatchResult.NoMatch;

    var key = $"swipe:{toId}:{fromId}";
    await _redis.SetAddAsync($"swipe:{fromId}:{toId}", liked);

    bool isMatch = await _redis.KeyExistsAsync(key);
    if (isMatch) {
        await NotifyBothUsersAsync(fromId, toId);
        return MatchResult.Matched;
    }
    return MatchResult.Pending;
}`
      },
      {
        type: "heading",
        text: "Bidirectionality & Race Conditions"
      },
      {
        type: "para",
        text: "The tricky part: what if A and B swipe on each other within milliseconds? Without locking, you could fire two match notifications. The fix: use a Redis SETNX (set if not exists) on the match key — only the first writer wins and triggers the notification. This makes the operation idempotent."
      },
      {
        type: "callout",
        text: "Key insight: Redis single-threaded command execution eliminates race conditions without needing distributed locks. SETNX is atomic."
      },
      {
        type: "heading",
        text: "Performance Results"
      },
      {
        type: "metrics",
        items: [
          { label: "Avg API Latency", value: "45ms" },
          { label: "Concurrent WS Sessions", value: "2,500+" },
          { label: "Auth Uptime", value: "99.98%" },
          { label: "Match Notification Delay", value: "<80ms" },
        ]
      },
      {
        type: "para",
        text: "The architecture scales horizontally — add more ASP.NET Core instances, point them all at the same Redis cluster, and the swipe engine remains consistent across nodes. WebSocket connections are sticky via load balancer affinity."
      }
    ]
  },
  {
    id: "azure-serverless-40m",
    tag: "Cloud",
    tagColor: "#4dffd9",
    title: "40M Daily Events: Serverless Azure Architecture Deep Dive",
    excerpt: "A technical walkthrough of designing a zero-drop-rate telemetry pipeline using Azure Functions, Service Bus, and Cosmos DB with multi-region replication.",
    readTime: "10 min read",
    date: "Apr 2026",
    topics: ["Azure Functions", "Cosmos DB", "Terraform", "Microservices"],
    featured: false,
    content: [
      {
        type: "intro",
        text: "40 million events per day sounds intimidating. That's roughly 463 events per second on average, with spikes during peak hours hitting 3,000/sec. This is the architecture I built for a cloud telemetry platform — with zero message drops, sub-10ms geo reads, and 45% lower infra costs than the previous VM-based approach."
      },
      {
        type: "heading",
        text: "Why Serverless?"
      },
      {
        type: "para",
        text: "The workload was bursty — quiet for hours, then massive spikes from IoT devices reporting in batches. Running VMs 24/7 for peak capacity is wasteful. Azure Functions auto-scales to exactly the concurrency needed, billing per execution. At 40M events/day we saved 45% vs the previous always-on VM cluster."
      },
      {
        type: "heading",
        text: "Ingestion Layer: Service Bus"
      },
      {
        type: "para",
        text: "Devices POST telemetry to a lightweight HTTP endpoint. Instead of processing synchronously, the endpoint drops messages onto Azure Service Bus queues. This decouples ingestion from processing — the HTTP layer stays fast regardless of backend load, and no messages are lost during processing spikes."
      },
      {
        type: "code",
        lang: "csharp",
        text: `[FunctionName("IngestTelemetry")]
public async Task<IActionResult> Run(
    [HttpTrigger(AuthorizationLevel.Function, "post")] HttpRequest req,
    [ServiceBus("telemetry-queue", Connection = "ServiceBusConn")] IAsyncCollector<TelemetryEvent> queue)
{
    var evt = await JsonSerializer.DeserializeAsync<TelemetryEvent>(req.Body);
    await queue.AddAsync(evt);
    return new AcceptedResult();
}`
      },
      {
        type: "heading",
        text: "Processing Layer: Azure Functions"
      },
      {
        type: "para",
        text: "A Service Bus triggered Azure Function picks up batches of 100 messages at a time for efficient processing. Cosmos DB batch writes replace individual inserts — reducing round trips by 99x at scale."
      },
      {
        type: "heading",
        text: "Storage: Cosmos DB Multi-Region"
      },
      {
        type: "para",
        text: "Telemetry data is written to Cosmos DB with multi-region replication enabled across 3 Azure regions. Reads from the nearest region deliver sub-10ms latency for dashboard queries. The partition key is deviceId + date — keeping hot partitions balanced across IoT fleets."
      },
      {
        type: "callout",
        text: "Terraform tip: Use azurerm_cosmosdb_account with geo_location blocks to declaratively define multi-region failover priorities. Never configure this manually."
      },
      {
        type: "heading",
        text: "Infrastructure as Code"
      },
      {
        type: "code",
        lang: "hcl",
        text: `resource "azurerm_cosmosdb_account" "telemetry" {
  name                = "telemetry-cosmos"
  geo_location {
    location          = "eastus"
    failover_priority = 0
  }
  geo_location {
    location          = "westeurope"
    failover_priority = 1
  }
  consistency_policy {
    consistency_level = "Session"
  }
}`
      },
      {
        type: "metrics",
        items: [
          { label: "Daily Events", value: "40M+" },
          { label: "Message Drop Rate", value: "0%" },
          { label: "Geo Read Latency", value: "<10ms" },
          { label: "Cost Reduction", value: "45%" },
        ]
      }
    ]
  },
  {
    id: "fastapi-ml-pipeline",
    tag: "AI/ML",
    tagColor: "#00d4e8",
    title: "FastAPI + Scikit-Learn: Building a Production ML Pipeline",
    excerpt: "Step-by-step guide to deploying K-Means user segmentation models with Celery async workers, Redis caching, and sub-50ms endpoint latency.",
    readTime: "7 min read",
    date: "Mar 2026",
    topics: ["FastAPI", "Scikit-Learn", "Celery", "Python"],
    featured: false,
    content: [
      {
        type: "intro",
        text: "Most ML tutorials end at model.fit(). Production ML is a different game — you need async inference, caching, background retraining, and APIs that don't block under load. Here's how I built the Wellness App AI backend that segments 10,000+ users and serves recommendations at sub-50ms latency."
      },
      {
        type: "heading",
        text: "Why ML in Production is Hard"
      },
      {
        type: "para",
        text: "Training a K-Means model takes seconds to minutes. If your API blocks waiting for this, every user request times out. The solution: decouple model training from serving. Train asynchronously via Celery workers, cache results in Redis, and serve cached predictions instantly via FastAPI."
      },
      {
        type: "heading",
        text: "The Architecture"
      },
      {
        type: "para",
        text: "FastAPI handles incoming requests. Celery workers run ML tasks in the background on a separate process pool. Redis serves as both the task broker and prediction cache. PostgreSQL stores raw health metrics and user profiles."
      },
      {
        type: "code",
        lang: "python",
        text: `# FastAPI endpoint — serves from cache, queues ML if stale
@app.get("/recommendations/{user_id}")
async def get_recommendations(user_id: str):
    cached = await redis.get(f"recs:{user_id}")
    if cached:
        return json.loads(cached)
    
    # Trigger async ML task
    task = compute_recommendations.delay(user_id)
    return {"status": "computing", "task_id": task.id}`
      },
      {
        type: "heading",
        text: "K-Means Segmentation"
      },
      {
        type: "para",
        text: "Users are clustered by health metrics: step count, sleep quality, heart rate variability, and active minutes. K-Means groups users into 5 segments — sedentary, light, moderate, active, athletic. Each segment maps to a predefined recommendation library. This avoids individual model inference per user, instead doing batch clustering nightly."
      },
      {
        type: "code",
        lang: "python",
        text: `@celery.task
def compute_recommendations(user_id: str):
    metrics = fetch_user_metrics(user_id)
    features = scaler.transform([metrics])
    cluster = kmeans_model.predict(features)[0]
    
    recs = RECOMMENDATION_MAP[cluster]
    redis.setex(f"recs:{user_id}", 86400, json.dumps(recs))
    return recs`
      },
      {
        type: "heading",
        text: "AI & Intelligent Features"
      },
      {
        type: "para",
        text: "Beyond K-Means clustering, the system uses trend detection to identify users whose health metrics are declining week-over-week and proactively escalates their recommendation intensity. A lightweight regression model predicts optimal workout timing based on historical activity patterns — personalized to each user's biological rhythm."
      },
      {
        type: "callout",
        text: "AI insight: The most impactful ML feature wasn't the segmentation model — it was the anomaly detector that flags sudden drops in activity (injury signals) and adjusts recommendations automatically."
      },
      {
        type: "metrics",
        items: [
          { label: "API Latency (cached)", value: "<50ms" },
          { label: "ML Accuracy", value: "94%" },
          { label: "Throughput", value: "4K req/min" },
          { label: "Cache Hit Rate", value: "91%" },
        ]
      }
    ]
  },
  {
    id: "razorpay-webhooks",
    tag: "Full-Stack",
    tagColor: "#00e5c4",
    title: "Razorpay Integration with Cryptographic Webhook Verification",
    excerpt: "How to implement zero-dropped-payment Razorpay checkout with HMAC signature verification, idempotency keys, and automated Brevo invoice delivery.",
    readTime: "6 min read",
    date: "Feb 2026",
    topics: ["Node.js", "Razorpay", "React", "Brevo API"],
    featured: false,
    content: [
      {
        type: "intro",
        text: "Payment integration is where most full-stack devs get it wrong. Race conditions, duplicate orders, failed webhooks, missing invoices — I've seen them all. Here's the exact pattern I used for BellezBuy's Razorpay integration that achieved 0% dropped payments across thousands of transactions."
      },
      {
        type: "heading",
        text: "The Webhook Verification Problem"
      },
      {
        type: "para",
        text: "Razorpay fires a webhook to your server when payment succeeds. But webhooks can be spoofed. Anyone can POST fake payment data to your endpoint. The solution: Razorpay signs every webhook payload with HMAC-SHA256 using your secret key. Verify this signature before processing any order."
      },
      {
        type: "code",
        lang: "javascript",
        text: `// Verify Razorpay webhook signature
const verifyWebhook = (body, signature) => {
  const expectedSig = crypto
    .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(JSON.stringify(body))
    .digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(expectedSig),
    Buffer.from(signature)
  );
};

app.post('/webhook/razorpay', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['x-razorpay-signature'];
  if (!verifyWebhook(req.body, sig)) return res.status(400).send('Invalid');
  processPayment(req.body);
  res.json({ received: true });
});`
      },
      {
        type: "heading",
        text: "Idempotency Keys"
      },
      {
        type: "para",
        text: "Webhooks can fire multiple times for the same payment. Without idempotency, you'd fulfil the same order twice. The fix: store processed payment IDs in the database with a unique constraint. On duplicate webhook, the INSERT fails silently — order stays fulfilled once."
      },
      {
        type: "heading",
        text: "Automated Invoice via Brevo"
      },
      {
        type: "para",
        text: "Once payment is verified, the system generates a PDF invoice and triggers a Brevo transactional email. The invoice is compiled from an HTML template, converted to PDF via Puppeteer, attached to the email, and delivered within 3 seconds of payment confirmation."
      },
      {
        type: "callout",
        text: "Always use crypto.timingSafeEqual for signature comparison — regular === is vulnerable to timing attacks that can bypass webhook verification."
      },
      {
        type: "metrics",
        items: [
          { label: "Payment Drop Rate", value: "0%" },
          { label: "Invoice Delivery", value: "<3 seconds" },
          { label: "Duplicate Orders", value: "0" },
          { label: "Webhook Reliability", value: "99.99%" },
        ]
      }
    ]
  },
  {
    id: "azure-cicd",
    tag: "DevOps",
    tagColor: "#4dffd9",
    title: "Zero-Downtime CI/CD on Azure DevOps: A Practical Guide",
    excerpt: "Setting up blue-green deployment pipelines with Azure DevOps, slot swapping, automated rollback triggers, and environment-specific secret vault injection.",
    readTime: "9 min read",
    date: "Jan 2026",
    topics: ["Azure DevOps", "CI/CD", "Docker", ".NET"],
    featured: false,
    content: [
      {
        type: "intro",
        text: "Deploying during business hours with zero downtime isn't magic — it's a well-designed pipeline. Here's the Azure DevOps CI/CD setup I built for the Sales Inventory SaaS platform, handling weekly deployments to Azure Web Apps with automatic rollback, secret injection, and zero user impact."
      },
      {
        type: "heading",
        text: "Blue-Green Deployment with Slots"
      },
      {
        type: "para",
        text: "Azure App Service slots let you deploy to a 'staging' slot first. Run smoke tests, warm up the app, then swap staging → production. The swap is instant from the user's perspective — no restart, no downtime. If post-swap health checks fail, one command rolls back the slot swap."
      },
      {
        type: "code",
        lang: "yaml",
        text: `# azure-pipelines.yml
stages:
- stage: Deploy
  jobs:
  - job: DeployToStaging
    steps:
    - task: AzureWebApp@1
      inputs:
        appName: 'inventory-app'
        deployToSlotOrASE: true
        resourceGroupName: 'prod-rg'
        slotName: 'staging'
        
  - job: SwapSlots
    dependsOn: SmokeTest
    condition: succeeded()
    steps:
    - task: AzureAppServiceManage@0
      inputs:
        action: 'Swap Slots'
        sourceSlot: 'staging'`
      },
      {
        type: "heading",
        text: "Secret Injection via Azure Key Vault"
      },
      {
        type: "para",
        text: "Never store secrets in pipelines or appsettings. All secrets — DB connection strings, API keys, JWT secrets — live in Azure Key Vault. The pipeline uses a managed identity to pull secrets at deploy time and inject them as environment variables. Each environment (dev/staging/prod) has its own vault."
      },
      {
        type: "heading",
        text: "Automated Rollback"
      },
      {
        type: "para",
        text: "Post-swap, the pipeline runs health checks against the production URL. If 3 consecutive checks fail within 5 minutes, an Azure Logic App triggers automatically to swap the slots back. Engineers get a Slack notification. Total user-facing downtime during a bad deploy: typically under 30 seconds."
      },
      {
        type: "callout",
        text: "Pro tip: Enable Application Insights on both slots. Compare error rates pre/post swap before allowing the staging → production promotion to proceed."
      },
      {
        type: "metrics",
        items: [
          { label: "Deployment Downtime", value: "~0 seconds" },
          { label: "Rollback Time", value: "<30 seconds" },
          { label: "Deploy Frequency", value: "Weekly" },
          { label: "Pipeline Duration", value: "~8 minutes" },
        ]
      }
    ]
  },
  {
    id: "sql-server-tuning",
    tag: "Database",
    tagColor: "#00d4e8",
    title: "SQL Server Performance Tuning: Index Strategies That Actually Work",
    excerpt: "Real-world execution plan analysis, covering indexes, covering queries, EF Core LINQ anti-patterns to avoid, and achieving 65% faster report generation.",
    readTime: "11 min read",
    date: "Dec 2025",
    topics: ["SQL Server", "EF Core", "Performance", "C#"],
    featured: false,
    content: [
      {
        type: "intro",
        text: "The Sales Inventory reports were taking 8-12 seconds to load. After performance profiling, the fix took 2 hours and cut load time by 65%. No hardware upgrades, no caching layer — just proper indexing and fixing 3 EF Core anti-patterns. Here's the full breakdown."
      },
      {
        type: "heading",
        text: "Reading Execution Plans"
      },
      {
        type: "para",
        text: "SQL Server Management Studio's actual execution plan is your best friend. Look for Table Scan and Index Scan operators — these are red flags. A clustered index seek is what you want. The cost percentage shown on each operator tells you exactly where time is being wasted."
      },
      {
        type: "heading",
        text: "The 3 EF Core Anti-Patterns We Fixed"
      },
      {
        type: "para",
        text: "First: loading entire entities to check one field. Second: N+1 queries — a loop making one DB call per iteration. Third: loading navigation properties you don't need (missing .AsNoTracking() on read-only queries). Each of these was contributing to the slow reports."
      },
      {
        type: "code",
        lang: "csharp",
        text: `// Bad — loads entire Product entities, then filters in C#
var lowStock = db.Products.ToList().Where(p => p.Stock < 10);

// Good — filter at DB level, only select needed columns
var lowStock = await db.Products
    .AsNoTracking()
    .Where(p => p.Stock < 10)
    .Select(p => new { p.Id, p.Name, p.Stock })
    .ToListAsync();`
      },
      {
        type: "heading",
        text: "Covering Indexes"
      },
      {
        type: "para",
        text: "A covering index includes all columns needed by a query — the engine never touches the main table. For the inventory report query filtering by (CategoryId, Date) and selecting (ProductName, Quantity, Price), we created a composite index on (CategoryId, Date) with INCLUDE (ProductName, Quantity, Price). Query time dropped from 9s to 0.8s."
      },
      {
        type: "code",
        lang: "sql",
        text: `-- Covering index for inventory report
CREATE NONCLUSTERED INDEX IX_Orders_Category_Date
ON Orders (CategoryId, OrderDate)
INCLUDE (ProductName, Quantity, UnitPrice)
WHERE IsDeleted = 0;`
      },
      {
        type: "callout",
        text: "Rule of thumb: Index columns you filter/sort by. INCLUDE columns you SELECT. Never index low-cardinality columns like boolean flags alone."
      },
      {
        type: "metrics",
        items: [
          { label: "Report Load Time", value: "65% faster" },
          { label: "Before Tuning", value: "~9 seconds" },
          { label: "After Tuning", value: "~0.8 seconds" },
          { label: "Index Added", value: "1 covering index" },
        ]
      }
    ]
  }
];
