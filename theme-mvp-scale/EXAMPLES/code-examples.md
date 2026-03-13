# Code Syntax Highlighting Test

Open this file in Cursor to verify code blocks are legible across all MVP Scale themes.
Switch themes via Cmd+K Cmd+T (or Ctrl+K Ctrl+T) and check each block.

Current theme: ____________________

---

## TypeScript / React

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  plan: "free" | "pro" | "enterprise";
  createdAt: Date;
}

type ApiResponse<T> = {
  data: T;
  error: string | null;
  status: number;
};

async function fetchUser(id: string): Promise<ApiResponse<User>> {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) {
    return { data: null as any, error: "Not found", status: 404 };
  }
  const data: User = await res.json();
  return { data, error: null, status: 200 };
}

// React component
const UserCard = ({ user }: { user: User }) => {
  const isPro = user.plan !== "free";
  return (
    <div className={`card ${isPro ? "card--pro" : ""}`}>
      <h2>{user.name}</h2>
      <span className="badge">{user.plan}</span>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
```

## Python

```python
from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional
import asyncio

@dataclass
class Task:
    title: str
    done: bool = False
    priority: int = 0
    tags: list[str] = field(default_factory=list)
    created_at: datetime = field(default_factory=datetime.now)

class TaskManager:
    """Simple task manager with filtering and sorting."""

    def __init__(self):
        self._tasks: list[Task] = []

    def add(self, title: str, priority: int = 0, tags: Optional[list[str]] = None) -> Task:
        task = Task(title=title, priority=priority, tags=tags or [])
        self._tasks.append(task)
        return task

    def pending(self) -> list[Task]:
        return sorted(
            [t for t in self._tasks if not t.done],
            key=lambda t: -t.priority,
        )

    @property
    def stats(self) -> dict[str, int]:
        total = len(self._tasks)
        done = sum(1 for t in self._tasks if t.done)
        return {"total": total, "done": done, "pending": total - done}

async def main():
    mgr = TaskManager()
    mgr.add("Ship MVP", priority=10, tags=["launch"])
    mgr.add("Write tests", priority=5, tags=["quality"])
    mgr.add("Update docs", priority=3)

    for task in mgr.pending():
        print(f"[{task.priority}] {task.title} {task.tags}")

    print(mgr.stats)

if __name__ == "__main__":
    asyncio.run(main())
```

## JavaScript / Node.js

```javascript
const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(express.json());

// Middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,
  message: { error: "Too many requests" },
});
app.use("/api/", limiter);

// In-memory store (replace with DB)
let items = [
  { id: 1, name: "Widget", price: 9.99, inStock: true },
  { id: 2, name: "Gadget", price: 24.99, inStock: false },
];
let nextId = 3;

// Routes
app.get("/api/items", (req, res) => {
  const { inStock } = req.query;
  let result = items;
  if (inStock !== undefined) {
    result = items.filter((i) => i.inStock === (inStock === "true"));
  }
  res.json({ data: result, count: result.length });
});

app.post("/api/items", (req, res) => {
  const { name, price } = req.body;
  if (!name || typeof price !== "number") {
    return res.status(400).json({ error: "name and price required" });
  }
  const item = { id: nextId++, name, price, inStock: true };
  items.push(item);
  res.status(201).json(item);
});

app.listen(3000, () => console.log("Server running on :3000"));
```

## Rust

```rust
use std::collections::HashMap;

#[derive(Debug, Clone)]
struct Config {
    name: String,
    version: (u32, u32, u32),
    features: Vec<String>,
    settings: HashMap<String, String>,
}

impl Config {
    fn new(name: &str) -> Self {
        Self {
            name: name.to_string(),
            version: (0, 1, 0),
            features: Vec::new(),
            settings: HashMap::new(),
        }
    }

    fn with_feature(mut self, feature: &str) -> Self {
        self.features.push(feature.to_string());
        self
    }

    fn set(&mut self, key: &str, value: &str) {
        self.settings.insert(key.to_string(), value.to_string());
    }

    fn version_string(&self) -> String {
        let (major, minor, patch) = self.version;
        format!("{}.{}.{}", major, minor, patch)
    }
}

fn main() {
    let mut config = Config::new("my-app")
        .with_feature("auth")
        .with_feature("billing");

    config.set("log_level", "info");
    config.set("max_connections", "100");

    println!("App: {} v{}", config.name, config.version_string());
    println!("Features: {:?}", config.features);

    for (key, val) in &config.settings {
        println!("  {} = {}", key, val);
    }
}
```

## Go

```go
package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"sync"
	"time"
)

type HealthStatus struct {
	Status    string    `json:"status"`
	Uptime    string    `json:"uptime"`
	Checks    int       `json:"checks"`
	StartedAt time.Time `json:"started_at"`
}

type Server struct {
	mu        sync.RWMutex
	checks    int
	startedAt time.Time
}

func NewServer() *Server {
	return &Server{startedAt: time.Now()}
}

func (s *Server) healthHandler(w http.ResponseWriter, r *http.Request) {
	s.mu.Lock()
	s.checks++
	count := s.checks
	s.mu.Unlock()

	status := HealthStatus{
		Status:    "ok",
		Uptime:    time.Since(s.startedAt).String(),
		Checks:    count,
		StartedAt: s.startedAt,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(status)
}

func main() {
	srv := NewServer()
	http.HandleFunc("/health", srv.healthHandler)

	addr := ":8080"
	fmt.Printf("Listening on %s\n", addr)
	log.Fatal(http.ListenAndServe(addr, nil))
}
```

## SQL

```sql
-- Users and subscriptions schema
CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    email       VARCHAR(255) UNIQUE NOT NULL,
    name        VARCHAR(100) NOT NULL,
    plan        VARCHAR(20) DEFAULT 'free',
    created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE subscriptions (
    id          SERIAL PRIMARY KEY,
    user_id     INTEGER REFERENCES users(id) ON DELETE CASCADE,
    plan        VARCHAR(20) NOT NULL,
    amount      DECIMAL(10, 2) NOT NULL,
    status      VARCHAR(20) DEFAULT 'active',
    started_at  TIMESTAMP DEFAULT NOW(),
    ends_at     TIMESTAMP
);

CREATE INDEX idx_subscriptions_user ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);

-- Monthly recurring revenue by plan
SELECT
    s.plan,
    COUNT(DISTINCT s.user_id) AS subscribers,
    SUM(s.amount) AS mrr,
    ROUND(AVG(s.amount), 2) AS avg_revenue
FROM subscriptions s
JOIN users u ON u.id = s.user_id
WHERE s.status = 'active'
  AND s.started_at >= NOW() - INTERVAL '30 days'
GROUP BY s.plan
ORDER BY mrr DESC;
```

## Bash / Shell

```bash
#!/usr/bin/env bash
set -euo pipefail

# Deploy script
APP_NAME="my-saas"
ENV="${1:-staging}"
TAG="${2:-latest}"

echo "Deploying $APP_NAME ($TAG) to $ENV..."

# Validate environment
if [[ "$ENV" != "staging" && "$ENV" != "production" ]]; then
    echo "Error: environment must be 'staging' or 'production'" >&2
    exit 1
fi

# Build and push
docker build -t "$APP_NAME:$TAG" .
docker tag "$APP_NAME:$TAG" "registry.example.com/$APP_NAME:$TAG"
docker push "registry.example.com/$APP_NAME:$TAG"

# Deploy
kubectl set image "deployment/$APP_NAME" \
    "$APP_NAME=registry.example.com/$APP_NAME:$TAG" \
    --namespace="$ENV"

# Wait for rollout
kubectl rollout status "deployment/$APP_NAME" \
    --namespace="$ENV" \
    --timeout=120s

echo "Deploy complete!"
```

## HTML / CSS

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <style>
        :root {
            --primary: #6366f1;
            --bg: #0f172a;
            --text: #e2e8f0;
            --muted: #64748b;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: system-ui, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
        }

        .hero {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
        }

        .hero h1 {
            font-size: clamp(2rem, 5vw, 4rem);
            background: linear-gradient(135deg, var(--primary), #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .cta {
            margin-top: 2rem;
            padding: 0.75rem 2rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: opacity 0.2s;
        }

        .cta:hover { opacity: 0.85; }
    </style>
</head>
<body>
    <section class="hero">
        <h1>Build something great.</h1>
        <p style="color: var(--muted); max-width: 500px;">
            The fastest way to go from idea to production.
        </p>
        <button class="cta">Get Started</button>
    </section>
</body>
</html>
```

## JSON / Config

```json
{
  "name": "my-saas-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx",
    "test": "vitest run",
    "db:migrate": "prisma migrate dev",
    "db:seed": "tsx prisma/seed.ts"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "stripe": "^14.0.0",
    "@prisma/client": "^5.0.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "vitest": "^1.0.0",
    "eslint": "^8.50.0"
  }
}
```

## YAML

```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: test_db
          POSTGRES_PASSWORD: test
        ports:
          - 5432:5432
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm test
        env:
          DATABASE_URL: postgresql://postgres:test@localhost:5432/test_db

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "Deploying to production..."
```

## Diff

```diff
--- a/src/config.ts
+++ b/src/config.ts
@@ -1,8 +1,12 @@
 export const config = {
   appName: "MySaaS",
-  version: "0.9.0",
+  version: "1.0.0",
   api: {
-    baseUrl: "http://localhost:3000",
+    baseUrl: process.env.API_URL || "http://localhost:3000",
     timeout: 5000,
+    retries: 3,
   },
+  features: {
+    billing: true,
+    analytics: process.env.NODE_ENV === "production",
+  },
 };
```

## Markdown (inline)

```markdown
# Feature Spec: User Dashboard

## Overview

The dashboard shows **key metrics** and _recent activity_ for each user.

### Requirements

1. Display MRR, churn rate, and active users
2. Show a chart of growth over the last `30` days
3. List recent [events](/api/events) with timestamps

> **Note:** All data should refresh every 60 seconds.

| Metric | Source | Update Frequency |
|--------|--------|-----------------|
| MRR | Stripe API | Real-time |
| Users | Database | 5 min cache |
| Churn | Calculated | Daily |

- [x] Design mockup
- [x] API endpoints
- [ ] Frontend implementation
- [ ] Tests
```

---

## Theme Checklist

For each theme, note legibility of: keywords, strings, types, comments, functions, variables, operators.

| Theme | Code Legible? | Contrast OK? | Notes |
|---|---|---|---|
| Founder Mode | | | |
| Ship It | | | |
| Seed Round | | | |
| Series A | | | |
| Ramen Profitable | | | |
| Pivot | | | |
| Unicorn | | | |
| Demo Day | | | |
| Late Night Deploy | | | |
| Exit Strategy | | | |
