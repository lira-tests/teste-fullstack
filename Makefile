.PHONY: help start stop backend-start-database backend-migrate backend-test
help:
	@grep -E '^[a-zA-Z-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "[32m%-15s[0m %s\n", $$1, $$2}'

start: ## Start all aplications
	@docker-compose start

stop: ## Stop all aplications
	@docker-compose stop

up: ## Start all aplications and sent to background
	@docker-compose up -d

backend-start-database: ## Clean and create database
	@docker exec -it database mysql -proot -e 'DROP DATABASE vehicles_api;CREATE DATABASE vehicles_api'
	@docker exec -it database mysql -proot -e 'DROP DATABASE vehicles_api_test;CREATE DATABASE vehicles_api_test'

backend-migrate: ## Run backend migrations
	@docker exec -it backend npm run seed-migrate
	@docker exec -it backend npm run seed-migrate-test

backend-test: ## Run backend test
	@docker exec -it backend npm run test
