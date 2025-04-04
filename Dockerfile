# Base image with Node and pnpm via Corepack
FROM node:20-alpine AS base

# Enable and install specific version of pnpm to match local dev
RUN corepack enable && corepack prepare pnpm

# -----------------------
# Dependencies layer
# -----------------------
FROM base AS deps
WORKDIR /app

# Copy only the files needed to install dependencies
COPY package.json pnpm-lock.yaml ./

# Install deps with frozen lockfile (reproducible build)
RUN pnpm install --frozen-lockfile

# -----------------------
# Builder layer
# -----------------------
FROM base AS builder
WORKDIR /app

# Copy deps from previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the Next.js app using standalone mode
RUN pnpm run build

# -----------------------
# Production Runner
# -----------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Fix ownership
RUN chown -R nextjs:nodejs .next

USER nextjs

EXPOSE 8080
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
