import { HelmetProvider } from 'react-helmet-async'
import CustomRoutes from "./routes/CustomRoutes";

export default function App() {
  return (
    <HelmetProvider>
      <CustomRoutes />
    </HelmetProvider>
  );
}

