'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const SlangSchema = z.object({
  term: z.string().min(2, { message: 'Slang must be at least 2 characters.' }).max(50),
  meaning: z.string().min(10, { message: 'Meaning must be at least 10 characters.' }).max(500),
  example: z.string().min(10, { message: 'Example must be at least 10 characters.' }).max(500),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitSlang(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const validatedFields = SlangSchema.safeParse({
      term: formData.get('term'),
      meaning: formData.get('meaning'),
      example: formData.get('example'),
    });

    if (!validatedFields.success) {
      return {
        success: false,
        message: 'Validation failed. Please check your inputs.',
      };
    }
    
    // Here you would typically save to a database.
    // For this example, we'll just log it.
    console.log('New Slang Submission:', validatedFields.data);
    
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Revalidate the home page to show new data if it were a real DB
    revalidatePath('/');

    return {
      success: true,
      message: `Thanks for submitting "${validatedFields.data.term}"! It's now under review.`,
    };
  } catch (error) {
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}
