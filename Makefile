.PHONY: dependencies lint test build sec dev

dependencies:
	npm ci

lint: dependencies
	npx prettier --check "src/**/*.ts"
	npx eslint src/

test: dependencies
	npx vitest run

build: dependencies
	npx tsc
	test -f dist/index.js
	test -f dist/app.js

sec: dependencies
	npm audit --audit-level=high

dev: dependencies
	npx cross-env NODE_ENV=development npx tsx src/index.ts
