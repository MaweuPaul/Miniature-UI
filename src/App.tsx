import { useState } from 'react';
import { Button, Input, Textarea, Checkbox, Select, Alert } from './index';

function App() {
  const [accepted, setAccepted] = useState(false);
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
          <Checkbox
            label="Accept the terms"
            description="You must accept before continuing."
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
          />
        </section>

        <Button disabled={!accepted}>Continue</Button>

        <Select
          error="Please select a country"
          label="country"
          options={[
            { label: 'United States', value: 'us' },
            { label: 'Canada', value: 'ca' },
            { label: 'United Kingdom', value: 'uk' },
          ]}
        />

        <Alert title="Information">
          Your profile details can be changed later.
        </Alert>

        <Alert variant="success" title="Changes saved">
          Your account was updated successfully.
        </Alert>

        <Alert variant="warning" title="Subscription ending">
          <Button>Try again</Button>
          Your subscription expires in three days.
        </Alert>

        <Alert variant="danger" title="Unable to save">
          Check the form and try again.
        </Alert>
      </div>
    </main>
  );
}

export default App;
