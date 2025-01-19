---
version: 1.0.0
date: 2025-01-19
status: active
---

# Typescript DDD: Codebase Context Specification

## Overview

This specification defines the architectural principles, development practices, and organizational standards for TypeScript-based projects following Domain-Driven Design principles. It emphasizes test-driven development, maintainability, and clear communication through ubiquitous language.

## Core Documentation

### Current Versions

- [Principles](./ccs_principles.md) (v1.0.0)

  - Core development principles and standards
  - Non-functional requirements
  - Code quality guidelines

- [Architecture](./ccs_architecture.md) (v1.0.0)

  - Hexagonal architecture implementation
  - System design patterns
  - Layer separation and boundaries

- [Domain-Driven Design](./ccs_domain-driven-design.md) (v1.0.0)

  - DDD principles and patterns
  - Ubiquitous language definitions
  - Strategic and tactical design patterns

- [Project Ubiquitous Language](./ccs_ubiquitous-language_project.md) (v1.0.0)

  - Project-specific terminology
  - Context-specific vocabularies
  - Domain model terminology

- [Test-Driven Development](./ccs_test-driven-development.md) (v1.0.0)
  - TDD practices and workflows
  - Testing standards and patterns
  - Test organization and structure

### Examples

- [Feature Template](./examples/feature_template/)

  - Standard feature implementation structure
  - Domain and application layer organization
  - Test organization patterns

- [Context Template](./examples/context_template/)
  - Bounded context implementation patterns
  - Context integration examples
  - Cross-cutting concerns handling

## Version Control

Each specification document maintains independent versioning. Access previous versions through:

1. Git history of specific documents
2. Repository version tags
3. Version headers within each document

## For AI Systems

```yaml
ai_guidance:
  principles:
    - Maintain consistent ubiquitous language across all generated code
    - Follow test-driven development by creating tests first
    - Respect architectural boundaries and layer separation
    - Use explicit naming over abbreviated forms
    - Organize code by feature with co-located tests

  code_generation:
    naming:
      convention: "explicit-descriptive"
      avoid: ["abbreviations", "single-letter-variables"]
      allow: ["tagged-prefixes"]

    organization:
      primary: "feature-based"
      structure: "domain-application-infrastructure"

    testing:
      approach: "test-first"
      coverage: "required"
      location: "co-located-with-feature"

  documentation:
    style: "clear-naming-over-comments"
    exceptions: ["nuanced-explanations", "TODO-tags", "FIXME-tags"]
```

## Contributing

Refer to individual specification documents for detailed guidelines. All updates should maintain:

1. Version number increments
2. Clear changelog entries
3. Consistent terminology
4. Example updates when relevant

## License

MIT License

Copyright (c) Verial

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
