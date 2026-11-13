"use client";

import React, { useEffect } from "react";
import { AlertCircle, RefreshCw, Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/common/Button";
import { GlassCard } from "@/components/common/GlassCard";

export default function GlobalErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception for debugging
    console.error("DocSaathi Client Runtime Exception:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <GlassCard
        variant="elevated"
        className="max-w-md w-full p-8 text-center space-y-6 border border-amber-500/30 shadow-xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-amber-500/15 text-amber-500 mx-auto flex items-center justify-center">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-theme-text font-display">
            Application Recovered
          </h2>
          <p className="text-xs text-theme-textMuted leading-relaxed">
            {error?.message || "An issue was caught while rendering this view."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            variant="primary"
            size="md"
            onClick={() => reset()}
            className="w-full sm:w-auto gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </Button>

          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = "/";
              }
            }}
            className="w-full sm:w-auto gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Button>
        </div>
      </GlassCard>
    </div>
  );
}
