## Cursor Cloud specific instructions

### Overview

This is the **GitHub MCP Server** — a Go (1.24+) project implementing the Model Context Protocol for GitHub. It's a stateless stdio-based server with no database dependencies.

### Key commands

- **Lint**: `script/lint` (runs `gofmt -s -w .` then `golangci-lint`; auto-installs linter to `bin/` if missing)
- **Test**: `script/test` (runs `go test -race ./...`)
- **Build**: `go build ./cmd/github-mcp-server`
- **Run**: `GITHUB_PERSONAL_ACCESS_TOKEN=<token> ./github-mcp-server stdio`
- **Update toolsnaps** (after changing MCP tool schemas): `UPDATE_TOOLSNAPS=true go test ./...`
- **Regenerate docs** (after changing tools): `script/generate-docs`

See `.github/copilot-instructions.md` for full contributor workflow, project structure, and coding conventions.

### Gotchas

- The server requires `GITHUB_PERSONAL_ACCESS_TOKEN` to be set at runtime. Without it, the server won't start. For unit tests, this is not needed — tests mock the GitHub API.
- E2E tests (`e2e/`) require Docker and a real GitHub PAT (`GITHUB_MCP_SERVER_E2E_TOKEN`). They are not runnable without these.
- `script/lint` auto-downloads `golangci-lint` v2.5.0 to `bin/` on first run. This is cached across runs.
- The `github-mcp-server` binary is gitignored. Build it fresh with `go build ./cmd/github-mcp-server`.
- All lint/test/build commands are fast (~1-2s each when cached).
