import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="text-center px-6">
        <p className="text-6xl font-extrabold text-accent-500 mb-4">404</p>
        <h1 className="text-2xl font-bold text-text-primary mb-2">Page Not Found</h1>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}
