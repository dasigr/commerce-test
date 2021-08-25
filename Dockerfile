FROM cypress/base:14.15.4

ENV BITBUCKET_BUILD_NUMBER=10
ENV CYPRESS_PROJECT_ID=1y68i3
ENV CYPRESS_RECORD_KEY=42f49b63-e2c7-4c6f-9c47-6ef922519139
ENV CYPRESS_BASE_URL=https://example.cypress.io

RUN pwd

RUN ls -la

# WORKDIR /

# COPY . .

# RUN npm ci

# RUN npm run cy:verify

# RUN npx @bahmutov/print-env BITBUCKET
# RUN npx @bahmutov/print-env CYPRESS
# RUN npm run e2e:record -- --parallel --ci-build-id $BITBUCKET_BUILD_NUMBER
