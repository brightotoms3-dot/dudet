'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitSlang } from '@/app/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const initialState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Submitting...' : 'Submit Slang'}
    </Button>
  );
}

export function SubmitSlangForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(submitSlang, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="term">Slang / Term</Label>
        <Input id="term" name="term" placeholder="e.g., Japa" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="meaning">Meaning</Label>
        <Textarea
          id="meaning"
          name="meaning"
          placeholder="e.g., To flee, escape, or emigrate..."
          required
          rows={3}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="example">Example Usage</Label>
        <Textarea
          id="example"
          name="example"
          placeholder="e.g., My guy don japa go Canada last month."
          required
          rows={3}
        />
      </div>
      <SubmitButton />
    </form>
  );
}
