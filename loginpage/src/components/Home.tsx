import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

  const back = () => {
    navigate('/')
  };
  return (
    <div className="flex flex-col		items-center		">
      <h1> Welcome Home</h1>
      <button
        className="text-white bg-black text-xl shadow-lg shadow-black-500/50 cursor-pointer   w-[200px] h-[35px] rounded-xl"
        onClick={back}
      >
        Back
      </button>
    </div>
  );
};

export default Home;
