import { SubmitSlangForm } from "@/components/submit-slang-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SubmitPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline">Submit a New Slang</CardTitle>
          <CardDescription>
            Help grow the hub! Add a new slang you know and its meaning. After review, it will be added to the list.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SubmitSlangForm />
        </CardContent>
      </Card>
    </div>
  );
}
