# Use Node.js as the base image
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --omit=optional

# Copy the rest of the application
COPY . .

# Build the SvelteKit app
RUN npm run build

# Use a smaller production image
FROM node:18-alpine AS runner
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/.svelte-kit/output /app/build
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

# Expose the correct port
EXPOSE 3000

# Start the server
CMD ["node", "build"]
# CMD ["node", "build/index.js"]

