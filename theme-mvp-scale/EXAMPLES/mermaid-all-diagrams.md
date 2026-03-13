# Mermaid Diagram Test - All Types

Open this file in Cursor's Enhanced Preview (Cmd+Shift+V / Ctrl+Shift+V) to verify that every diagram renders correctly with each MVP Scale theme.

Current theme: ____________________

---

## 1. Flowchart

```mermaid
flowchart TD
    A[Start] --> B{Is it an MVP?}
    B -->|Yes| C[Ship it]
    B -->|No| D[Cut scope]
    D --> B
    C --> E[Get feedback]
    E --> F[Iterate]
    F --> B
```

## 2. Flowchart (Left to Right)

```mermaid
flowchart LR
    Idea --> Prototype --> MVP --> Product --> Scale
```

## 3. Sequence Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant A as App
    participant DB as Database
    participant S as Stripe

    U->>A: Sign up
    A->>DB: Create account
    DB-->>A: OK
    A->>S: Create customer
    S-->>A: customer_id
    A-->>U: Welcome!
    U->>A: Subscribe
    A->>S: Create subscription
    S-->>A: Confirmed
    A-->>U: You're in!
```

## 4. Class Diagram

```mermaid
classDiagram
    class User {
        +String name
        +String email
        +subscribe()
        +cancel()
    }
    class Subscription {
        +String plan
        +Date startDate
        +isActive() bool
    }
    class Payment {
        +float amount
        +Date date
        +process()
        +refund()
    }
    User "1" --> "*" Subscription
    Subscription "1" --> "*" Payment
```

## 5. State Diagram

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Review : Submit
    Review --> Approved : Approve
    Review --> Draft : Request changes
    Approved --> Deployed : Deploy
    Deployed --> Rollback : Issue found
    Rollback --> Draft
    Deployed --> [*]
```

## 6. Entity Relationship Diagram

```mermaid
erDiagram
    USER ||--o{ ORDER : places
    USER {
        int id PK
        string name
        string email
    }
    ORDER ||--|{ LINE_ITEM : contains
    ORDER {
        int id PK
        date created
        string status
    }
    LINE_ITEM }|--|| PRODUCT : references
    PRODUCT {
        int id PK
        string name
        float price
    }
```

## 7. Gantt Chart

```mermaid
gantt
    title MVP Launch Timeline
    dateFormat  YYYY-MM-DD
    section Design
        Wireframes       :done,    d1, 2026-01-01, 7d
        UI Mockups       :done,    d2, after d1, 5d
    section Development
        Backend API      :active,  dev1, 2026-01-13, 14d
        Frontend         :         dev2, after dev1, 10d
        Integration      :         dev3, after dev2, 5d
    section Launch
        Beta testing     :         launch1, after dev3, 7d
        Public launch    :milestone, after launch1, 0d
```

## 8. Pie Chart

```mermaid
pie title Time Allocation This Sprint
    "Feature work" : 45
    "Bug fixes" : 20
    "Code review" : 15
    "Meetings" : 10
    "DevOps" : 10
```

## 9. User Journey

```mermaid
journey
    title New User Onboarding
    section Discovery
        Find landing page: 3: Visitor
        Read features: 4: Visitor
    section Signup
        Create account: 5: User
        Verify email: 3: User
    section First Use
        Complete tutorial: 4: User
        Create first project: 5: User
        Invite teammate: 3: User
```

## 10. Git Graph

```mermaid
gitGraph
    commit id: "init"
    commit id: "add-auth"
    branch feature/payments
    commit id: "stripe-setup"
    commit id: "checkout-flow"
    checkout main
    commit id: "fix-typo"
    merge feature/payments id: "merge-payments"
    commit id: "v1.0" tag: "release"
```

## 11. Mindmap

```mermaid
mindmap
    root((SaaS MVP))
        Auth
            Sign up
            Login
            OAuth
        Billing
            Stripe
            Plans
            Invoices
        Core Features
            Dashboard
            API
            Webhooks
        Infrastructure
            CI/CD
            Monitoring
            Logging
```

## 12. Timeline

```mermaid
timeline
    title Company Milestones
    2024 : Founded
         : First commit
    2025 : Seed round
         : First 100 users
         : Hired team of 5
    2026 : Series A
         : 10k users
         : Launched v2.0
```

## 13. Quadrant Chart

```mermaid
quadrantChart
    title Feature Prioritization
    x-axis Low Effort --> High Effort
    y-axis Low Impact --> High Impact
    quadrant-1 Do First
    quadrant-2 Plan Carefully
    quadrant-3 Delegate
    quadrant-4 Eliminate
    Auth: [0.3, 0.9]
    Dark mode: [0.2, 0.4]
    AI search: [0.8, 0.85]
    Custom fonts: [0.7, 0.2]
    Notifications: [0.4, 0.7]
    Export CSV: [0.15, 0.55]
```

## 14. XY Chart (Bar)

```mermaid
xychart-beta
    title "Monthly Revenue ($k)"
    x-axis [Jan, Feb, Mar, Apr, May, Jun]
    y-axis "Revenue" 0 --> 50
    bar [5, 12, 18, 25, 32, 48]
```

## 15. XY Chart (Line)

```mermaid
xychart-beta
    title "Active Users"
    x-axis [Jan, Feb, Mar, Apr, May, Jun]
    y-axis "Users" 0 --> 1000
    line [50, 120, 310, 480, 720, 950]
```

## 16. Sankey Diagram

```mermaid
sankey-beta

Traffic,Landing Page,500
Landing Page,Sign Up,200
Landing Page,Bounce,300
Sign Up,Onboarding,150
Sign Up,Drop Off,50
Onboarding,Active User,120
Onboarding,Churn,30
```

## 17. Block Diagram

```mermaid
block-beta
    columns 3
    Frontend blockArrowId<["API"]>(right) Backend
    space down1<["Queries"]>(down) space
    space Database space
```

## 18. Packet Diagram

```mermaid
packet-beta
    0-15: "Source Port"
    16-31: "Destination Port"
    32-63: "Sequence Number"
    64-95: "Acknowledgment Number"
    96-99: "Data Offset"
    100-105: "Reserved"
    106-111: "Flags"
    112-127: "Window Size"
```

## 19. Kanban

```mermaid
kanban
    Todo
        Design landing page
        Write API docs
    In Progress
        Build auth flow
        Setup CI/CD
    Done
        Project setup
        Database schema
```

---

## Theme Checklist

After previewing, note which theme you're on and any rendering issues:

| Theme | Diagrams OK? | Text Legible? | Notes |
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
