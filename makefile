.PHONY: all install run run_backend

all: install run run_backend

install:
	sudo npm i

run:
	sudo npm run dev

run_backend:
	cd backend && python app.py
