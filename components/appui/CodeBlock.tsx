"use client";
import { useState } from "react";
import { CodeBlock as ReactCodeBlock, atomOneDark} from "react-code-blocks";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  text: string;
  language?: string;
  showLineNumbers?: boolean;
  theme?: object;
}

export function CodeBlock({ 
  text, 
  language = "jsx", 
  showLineNumbers = true, 
  theme = atomOneDark
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative group">
      {/* Copy Button */}
      <button
        onClick={copyToClipboard}
        className={cn(
          "absolute top-3 right-3 z-10 p-2 rounded-md transition-all duration-200 cursor-pointer ",
          "bg-background/80 dark:bg-neutral-800/80 backdrop-blur-sm",
          "border border-border dark:border-neutral-700",
          "hover:bg-background dark:hover:bg-neutral-800",
          "text-muted-foreground hover:text-foreground"
        )}
        title="Copy to clipboard"
      >
        {copied ? (
          <Check size={16} />
        ) : (
          <Copy size={16} />
        )}
      </button>

      {/* Code Block */}
      <div className="rounded-lg border border-border overflow-hidden">
        <ReactCodeBlock
          text={text}
          language={language}
          theme={theme}
          showLineNumbers={showLineNumbers}
          customStyle={{
            fontSize: "14px",
            lineHeight: "1.5",
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "transparent",
          }}
        />
      </div>
    </div>
  );
} 