# Node.js 22 Compatibility Updates

This document outlines the changes made to ensure compatibility with Node.js v22.14.0.

## Changes Made

### 1. Package.json Updates
- Updated `@vitejs/plugin-react-swc` from `^3.5.0` to `^3.7.1`
- Updated `@types/node` from `^22.5.5` to `^22.14.0`
- Updated `vite` to `^5.4.11` (compatible with lovable-tagger)
- Updated various dev dependencies to latest compatible versions
- Added `engines` field to specify Node.js >= 22.0.0

### 2. Vite Configuration Improvements
- Enhanced SWC plugin configuration
- Added dependency optimization for better performance
- Configured build optimizations for modern Node.js
- Added manual chunk splitting for better bundle optimization

### 3. Configuration Files Added
- `.nvmrc`: Specifies Node.js version 22.14.0
- `.npmrc`: Configures npm for better dependency resolution

### 4. Security Considerations
The npm audit shows moderate vulnerabilities in development dependencies:
- esbuild vulnerability (affects development server only)
- These vulnerabilities do not affect production builds
- Consider updating when fixed versions become available

## Development Server
The development server is now running successfully on:
- Local: http://localhost:8080
- Network: http://[::]:8080

## Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Notes
- All changes maintain backward compatibility
- Production builds are not affected by the audit vulnerabilities
- The project is now optimized for Node.js 22 performance features 