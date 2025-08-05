# 🐱 Awesome Kitties

A modern Next.js website with Decap CMS for content management, featuring a beautiful cat showcase with easy-to-use admin interface.

## ✨ Features

- **🐱 Cat Showcase** - Display your favorite kitties with descriptions
- **📝 Content Management** - Easy-to-use CMS for non-technical users
- **🚀 Static Site Generation** - Fast, SEO-friendly static website
- **🎨 Modern UI** - Clean, responsive design
- **🔐 Simple Authentication** - Local backend with password protection
- **📱 Mobile Friendly** - Responsive design for all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Styling**: CSS Modules
- **Build**: Static Export
- **Deployment**: Any static hosting service

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd awesome-kitties
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build and serve production**
   ```bash
   npm run serve
   ```

## 📖 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run serve` | Build + serve production build |
| `npm run serve:dev` | Serve existing build (quick testing) |
| `npm run start` | Start production server |
| `npm run export` | Export static site |

## 🎛️ CMS Setup

### Accessing the Admin Panel

1. Start the server: `npm run serve`
2. Navigate to: `http://localhost:3000/admin#/`
3. Create an account with any email/password
4. Start managing your content!

### Content Structure

The CMS is configured to manage:

- **Home Page Content**
  - Title
  - Publish Date
  - Body content (Markdown)
  - Cats list with:
    - Name
    - Description

### CMS Configuration

The CMS uses a local backend for simple authentication:
- No external services required
- Create any email/password combination
- Perfect for development and simple deployments

## 📁 Project Structure

```
awesome-kitties/
├── content/           # Markdown content files
│   └── home.md       # Home page content
├── pages/            # Next.js pages
│   └── index.js      # Home page component
├── public/           # Static assets
│   └── admin/        # CMS files
│       ├── config.yml # CMS configuration
│       └── index.html # CMS admin interface
├── scripts/          # Build scripts
│   └── copy-config.js # Copies CMS config to build output
├── next.config.js    # Next.js configuration
├── package.json      # Dependencies and scripts
└── README.md         # This file
```

## 🔧 Configuration

### CMS Configuration (`public/admin/config.yml`)

The CMS is configured with:
- **Backend**: `test-repo` with local authentication
- **Media Folder**: `public/img`
- **Collections**: Pages with home content and cats list

### Next.js Configuration (`next.config.js`)

- Static export enabled
- Markdown support with frontmatter
- Automatic CMS config copying to build output

## 🚀 Deployment

### Static Hosting

This project is configured for static hosting. You can deploy to:

- **Netlify** - Drag and drop the `out` folder
- **Vercel** - Connect your GitHub repository
- **GitHub Pages** - Push to gh-pages branch
- **Any static host** - Upload the `out` folder

### Build Process

1. Run `npm run build` to generate static files
2. The `out` folder contains your deployable site
3. CMS config is automatically copied to the correct location

## 🔐 Authentication

The CMS uses local backend authentication:
- No external OAuth providers required
- Create accounts with any email/password
- Perfect for development and simple use cases

## 📝 Content Management

### Adding Cats

1. Go to `/admin#/`
2. Edit the "Home" page
3. Add cats to the "Cats" list
4. Save your changes

### Content Types

- **Title**: Page title
- **Date**: Publication date
- **Body**: Main content (Markdown supported)
- **Cats**: List of cat objects with name and description

## 🛠️ Development

### Adding New Features

1. **New Pages**: Add to `pages/` directory
2. **New Content**: Add to `content/` directory
3. **CMS Fields**: Update `public/admin/config.yml`
4. **Styling**: Use CSS Modules in your components

### Build Process

The build process automatically:
- Compiles Next.js pages
- Processes markdown content
- Copies CMS configuration
- Generates static files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run serve`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Troubleshooting

### Common Issues

**CMS not loading**
- Ensure `config.yml` is in the root of the served site
- Check that the build process completed successfully

**Build errors**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**Port conflicts**
- The serve command will automatically find an available port
- Check the terminal output for the correct URL

### Getting Help

If you encounter issues:
1. Check the terminal output for error messages
2. Ensure all dependencies are installed
3. Try clearing build cache and rebuilding

---

**Made with ❤️ and �� by [Your Name]** 