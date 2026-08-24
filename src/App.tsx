import { Button, Input, Textarea } from './index';

function App() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-xl space-y-10">
        <section>
          <h1 className="mb-6 text-3xl font-bold text-neutral-900">
            Miniature UI
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>

            <Button variant="secondary">Secondary</Button>

            <Button variant="outline">Outline</Button>

            <Button variant="ghost">Ghost</Button>

            <Button variant="danger">Danger</Button>

            <Button isLoading loadingText="Saving">
              Save changes
            </Button>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-neutral-900">Inputs</h2>

          <Input
            label="Email address"
            type="email"
            placeholder="you@example.com"
            description="We will never share your email."
          />

          <Input
            label="Username"
            defaultValue="maweu"
            error="That username is already taken."
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <Input
            label="Disabled input"
            defaultValue="Cannot edit this"
            disabled
          />
          <Textarea
            label="Biography"
            placeholder="Tell us about yourself"
            description="Maximum 300 characters."
            maxLength={300}
          />

          <Textarea
            label="Feedback"
            defaultValue="The application..."
            error="Feedback must contain at least 20 characters."
          />

          <Textarea label="Notes" textareasize="large" disabled />
        </section>
      </div>
    </main>
  );
}

export default App;
