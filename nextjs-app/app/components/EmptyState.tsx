import Link from "next/link";
import { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export default function EmptyState({
  title,
  description,
  children,
}: EmptyStateProps) {
  return (
    <div className="max-w-2xl mx-auto grid grid-flow-row gap-6 py-40 text-center bg-brand-500/80 text-white rounded-lg p-8">
      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/80">{description}</p>
      </div>
      {children}
    </div>
  );
}
