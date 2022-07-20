import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";

function Index() {
  const { isAuthenticated, logout } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.replace("/");
  }, [isAuthenticated]);

  const sendEth = async () => {
    try {
      await Moralis.Web3.enableWeb3();
      const result = await Moralis.Web3.transfer({
        type: "native",
        amount: Moralis.Units.ETH("0.1"),
        receiver: "0x1a8Cc7d74eA6c462a5d200e8fD798307ff3cf822",
      });
      console.log(result);
      alert("Transfer of funds succeeded!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Head>
        <title>Moralis Tutorial - Dashboard</title>
      </Head>
      <button
        className="px-7 py-4 mb-5 text-xl rounded-xl bg-yellow-300"
        onClick={sendEth}
      >
        Send 0.1 ETH to owner
      </button>
      <button
        className="px-7 py-4 text-xl rounded-xl bg-yellow-300"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
export default Index;