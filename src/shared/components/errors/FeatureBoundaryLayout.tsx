import { Outlet } from "react-router-dom";
import { FeatureErrorBoundary } from "./FeatureErrorBoundary";

interface Props {
  featureName: string;
}

export function FeatureBoundaryLayout({ featureName }: Props) {
  return (
    <FeatureErrorBoundary featureName={featureName}>
      <Outlet />
    </FeatureErrorBoundary>
  );
}
