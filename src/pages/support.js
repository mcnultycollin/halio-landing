import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export default function Support({ content }) {
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
          className="prose prose-lg max-w-none bg-white rounded-lg shadow-md p-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />
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
  const filePath = path.join(process.cwd(), 'content', 'support.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const content = marked(fileContent);

  return {
    props: {
      content,
    },
  };
}
