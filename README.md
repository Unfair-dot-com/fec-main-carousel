# Project Name - Unfair Main Image and Carousel

> Project description

## Related Projects

  - https://github.com/Unfair-dot-com/reviews
  - https://github.com/Unfair-dot-com/product-detail-carousel

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> This service mimics the main product carousel on the wayfair website. https://www.wayfair.com/outdoor/pdp/design-toscano-celestial-harmony-sun-moon-wall-decor-txg1060.html. ## Related Projects lists other services from the same website.

## Requirements

- Node 14.4.0
- "axios": "^0.19.2",
- "express": "^4.17.1",
- "mongoose": "^5.9.28",
- "mongo": "4.2.8",
- "react": "^16.13.1",
- "react-dev": "0.0.1",
- "react-dom": "^16.13.1",
- "styled-components": "^5.1.1"

### Step 1: Install Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Step 2: Install MongoDB
Follow the instructions for your set up at https://www.mongodb.com/try
The database name is fec

### Seed the Database
npm run seed

If you run into any problems, the seed file is database/seed.js.

### Start the Server
npm start

Current port is set to 5001. You can change this from within server/server.js.

