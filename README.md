# CollabSpace

CollabSpace is a project-driven collaborative workspace platform built to understand how **real-world full-stack systems** are designed, developed, and scaled.

The goal of this project is not just feature development, but learning *why* certain architectural, performance, and scalability decisions are made while building **production-like systems**.

The project evolves version by version, gradually introducing complexity as the system grows.

---

## Tech Stack (Planned & Evolving)

### Frontend (Planned)
- React
- TypeScript
- Tailwind CSS

### Backend (In Progress)
- Node.js (ESM)
- TypeScript
- Fastify
- Prisma (ORM)

### Database
- PostgreSQL (configured via Prisma)

### Planned (When Required)
- Authentication: JWT, OAuth
- Real-time: WebSockets
- Caching & Messaging: Redis, Kafka

> Not all technologies are used from day one.  
> Each is introduced only when it becomes **necessary for the system**, not pre-emptively.

---

## Current Progress

### ✅ Backend Foundation
- Modern **ESM-based Node.js** setup
- TypeScript configured with `NodeNext` module resolution
- Clear separation of **dev / build / production** workflows
- Fast reload development environment using `tsx`

### ✅ Prisma Integration
- Prisma schema configured correctly
- Prisma Client generation fixed and stabilized
- Centralized Prisma client plugin
- Production-safe setup (no custom generator output)

### ✅ Project Structure
- Scalable backend folder structure
- Plugin-based architecture foundation
- Ready for feature-based modules (auth, users, etc.)

---

## Status

🚧 **Active Development**

The foundational backend setup is complete.  
Next steps include database modeling, API modules, and authentication workflows.

---

## Project Philosophy

- Learn by building **real systems**
- Prefer clarity over cleverness
- Avoid premature optimization
- Keep tooling boring, predictable, and scalable
- Treat this as a **long-term learning codebase**, not a demo

---

## License
MIT License

Copyright (c) 2026 Daksh Pant

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

