#!/bin/sh

# Sync database schema
echo "Synchronizing database schema..."
npx prisma db push --accept-data-loss

# Execute the CMD
exec "$@"
