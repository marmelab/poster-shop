.PHONY: default install start test

.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install project's dependencies
	@echo "Install project deps"
	docker-compose run --rm poster-shop yarn install

start: ## Start project
	@echo "Start the project"
	docker-compose up -d


stop: ## Start project
	@echo "Start the project"
	docker-compose down

test: ## Launch the project's tests
	@echo "Launch the tests"

deploy:
	rsync --delete -r -e "ssh -i ${pem}" --filter=':- .gitignore' \
	./ ${user}@${host}:~/poster-shop
	ssh -i ${pem} ${user}@${host} \
	'cd poster-shop &&\
	make install &&\
	make start'
