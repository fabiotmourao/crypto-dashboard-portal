import { AppLayout } from "@/components/Layout/AppLayout";

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Welcome to Your Crypto Dashboard</h2>
        <p className="text-muted-foreground">
          Select an exchange from the sidebar to manage your crypto assets.
        </p>
      </div>
    </AppLayout>
  );
};

export default Index;