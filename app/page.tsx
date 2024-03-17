import { redirect } from "next/navigation";

const Home = () => {
  redirect(`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/en`);
};

export default Home;
