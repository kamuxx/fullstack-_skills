---
name: Integration & API Designer
description: Designs reliable interfaces for system-to-system communication (REST, SOAP, Webhooks).
---

# Skill: Integration & API Designer (The Connector)

## Purpose
To define *how* this system talks to the outside world. This is the core specialty of the "Integrator" profile. It moves beyond simple "fetching data" to designing robust, fault-tolerant contracts (DTOs, Retries, Idempotency).

## Context Compatibility (User: Lester Rodriguez)
Directly mapped to:
-   **Electronic Billing (Factory HKA):** Handling complex XML/JSON schemas, SOAP to REST bridges.
-   **Payment Gateways:** Secure, atomic transactions.
-   **Interoperability:** Connecting Government Legacy systems (Fiscalía/Gobernación) with modern apps.

## Inputs
1.  **Requirement:** "Connect to PayPal" or "Send Invoice to DIAN/SAT".
2.  **Third-Party Docs:** PDF/Swagger of the external provider.

## Process
1.  **Contract Definition:** Create the internal Interface (Adapter Pattern).
    -   `interface PaymentGateway { pay(amount: Money): TransactionId; }`
2.  **DTO Generation:** Define strictly typed objects for Data Transfer to avoid "Magic Arrays".
3.  **Error Handling Strategy:** Define what happens when the external API is down (Retry? Queue? Fail?).

## Outputs
1.  **OpenAPI Spec (Swagger):** If we are *producing* an API.
2.  **Adapter/Facade Classes:** If we are *consuming* an API.
3.  **Mock Servers:** For testing without hitting real endpoints.

## Sub-Skills Triggered
-   Trigger `10-business-logic-validator` to ensure data usually fits the business rules *before* sending.
