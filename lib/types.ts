export interface ManualStep {
  title: string;
  code: string;
  language: string;
  filename?: string;
}

export interface ComponentData {
  name: string;
  description: string;
  preview: () => Promise<any>;
  demo: string;
  code: string;
  cli: string;
  manualSteps: ManualStep[];
} 