PATH_APP1 = ./app1
PATH_APP2 = ./app2
PATH_UTILITY = ./utility
PATH_BASE = .

APP1_PORT = 8080:8080
APP2_PORT = 8081:8081
UTILITY_PORT = 8500:8500
BASE_PORT = 9000:9000

APP1_NAME = microfrontend-1
APP2_NAME = microfrontend-2
BASE_APP_NAME = root-config
UTILITY_NAME = utility-module



build: 
	docker build -t app1 "${PATH_APP1}"
	docker build -t app2 "${PATH_APP2}"
	docker build -t utility "${PATH_UTILITY}"
	docker build -t base "${PATH_BASE}"

serve:
	docker run -d --name "${APP1_NAME}" -p "${APP1_PORT}" app1 
	docker run -d --name "${APP2_NAME}" -p "${APP2_PORT}" app2
	docker run -d --name "${UTILITY_NAME}" -p "${UTILITY_PORT}" utility 
	docker run -d --name "${BASE_APP_NAME}" -p "${BASE_PORT}" base

stop:
	docker stop "${BASE_APP_NAME}"
	docker stop "${APP1_NAME}"
	docker stop "${APP2_NAME}"
	docker stop "${UTILITY_NAME}"

start:
	docker start "${APP1_NAME}"
	docker start "${APP2_NAME}"
	docker start "${UTILITY_NAME}"
	docker start "${BASE_APP_NAME}"



