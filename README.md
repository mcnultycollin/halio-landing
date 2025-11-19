# Halio Landing Page

A simple Next.js landing page with markdown-based content and Netlify Forms integration.

## Features

- 3 simple pages: Home, Privacy, Support
- Content managed via markdown files
- Signup form with Netlify Forms (Name + Email)
- Tailwind CSS for styling
- Easy to deploy to Netlify

## Project Structure

```
/content
  home.md       # Home page content
  privacy.md    # Privacy policy content
  support.md    # Support page content

/src/pages
  index.js      # Home page (includes signup form)
  privacy.js    # Privacy page
  support.js    # Support page
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Editing Content

Simply edit the markdown files in the `/content` directory:
- `/content/home.md` - Home page content
- `/content/privacy.md` - Privacy policy
- `/content/support.md` - Support page

## Deploying to Netlify

### Option 1: Deploy via Netlify Dashboard (Manual Deploy)

1. Build the site:
```bash
npm run build
```

2. Go to [Netlify](https://app.netlify.com/) and drag & drop the `.next` folder

### Option 2: Deploy via Git

1. Push your code to GitHub/GitLab

2. In Netlify dashboard:
   - Click "Add new site" > "Import an existing project"
   - Connect your repository
   - Build settings are already configured in `netlify.toml`
   - Click "Deploy site"

### Option 3: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

## Netlify Forms Setup

The signup form will automatically work once deployed to Netlify. Submissions will appear in your Netlify dashboard under "Forms".

To receive email notifications:
1. Go to your Netlify site dashboard
2. Navigate to "Forms" > "Form notifications"
3. Add email notifications

## Customization

- **Styling**: Edit the Tailwind classes in `/src/pages/*.js` files
- **Form Fields**: Modify the form in `/src/pages/index.js`
- **Navigation**: Update the nav links in each page component
- **Colors/Design**: Customize Tailwind config in `tailwind.config.js`

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS
- Netlify Forms
- Markdown (via marked)
