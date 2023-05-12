import { useNavigate } from "react-router-dom";
import { Footer } from "../../components";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <div className="pt-3">
        <h3 className="text-center text-lg mb-3 ">page Not Found</h3>
        <div
          onClick={() => navigate("/")}
          className="bg-secondary text-white text-base py-2 px-3 cursor-pointer"
        >
          Back To Home
        </div>
      </div>
      <Footer />
    </div>
  );
};
