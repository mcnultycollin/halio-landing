import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export default function Home({ content }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Halio</h1>
            <div className="space-x-6">
              <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/privacy" className="text-gray-700 hover:text-gray-900">Privacy</a>
              <a href="/support" className="text-gray-700 hover:text-gray-900">Support</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Netlify Forms Signup */}
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign Up</h2>
          <form
            name="signup"
            method="POST"
            data-netlify="true"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="signup" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Sign Up
            </button>
          </form>
        </div>
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2024 Halio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'home.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const content = marked(fileContent);

  return {
    props: {
      content,
    },
  };
}
