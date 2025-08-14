import { memo } from "react";
import ProductGrid from "../../components/mapping";
import { useFetch } from "../../hooks/useFetch";
import type { IResponce } from "../../types";

const Home = () => {
  const { data } = useFetch<IResponce>("recipes", { limit: 8, skip: 0 });

  return (
    <div>
      <ProductGrid title="Yangi mahsulotlar" data={data?.recipes} />
    </div>
  );
};

export default memo(Home);
