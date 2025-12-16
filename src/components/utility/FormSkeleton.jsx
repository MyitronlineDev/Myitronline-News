import React from "react";

function FormSkeleton() {
  return (
    <div className="animate-pulse space-y-6">

      {/* Heading skeleton */}
      <div className="space-y-2">
        <div className="h-8 w-2/3 bg-slate-200 rounded"></div>
        <div className="h-4 w-full bg-slate-200 rounded"></div>
      </div>

      {/* Two column inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="h-4 w-24 bg-slate-200 rounded"></div>
          <div className="h-10 w-full bg-slate-200 rounded-lg"></div>
        </div>

        <div className="space-y-2">
          <div className="h-4 w-24 bg-slate-200 rounded"></div>
          <div className="h-10 w-full bg-slate-200 rounded-lg"></div>
        </div>
      </div>

      {/* Phone input */}
      <div className="space-y-2">
        <div className="h-4 w-32 bg-slate-200 rounded"></div>
        <div className="h-10 w-full bg-slate-200 rounded-lg"></div>
      </div>

      {/* Message textarea */}
      <div className="space-y-2">
        <div className="h-4 w-24 bg-slate-200 rounded"></div>
        <div className="h-24 w-full bg-slate-200 rounded-lg"></div>
      </div>

      {/* Button */}
      <div className="pt-2">
        <div className="h-10 w-32 bg-slate-300 rounded-lg"></div>
      </div>

    </div>
  );
}

export default FormSkeleton;
