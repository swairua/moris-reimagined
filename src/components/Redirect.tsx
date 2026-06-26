import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface RedirectProps {
  to: string;
}

export const Redirect = ({ to }: RedirectProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Replace history to preserve SEO intent (301 redirect)
    navigate(to, { replace: true });
  }, [navigate, to]);

  return null;
};
