import { Button } from './components/button/button';

function App() {
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">
        Bullion UI Buttons
      </h1>

      <section className="flex flex-wrap items-center gap-4">
        <Button variant="primary">Primary</Button>

        <Button variant="secondary">Secondary</Button>

        <Button variant="outline">Outline</Button>

        <Button variant="ghost">Ghost</Button>

        <Button variant="danger">Danger</Button>
        <Button isLoading loadingText="saving">
          {' '}
          Save Chnages
        </Button>
      </section>
    </main>
  );
}

export default App;
