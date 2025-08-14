import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import type { IResponce } from "../../types";
import Mapping from "../../components/mapping";

const Catalog = () => {
  const limit = 8;
  const [params, setParams] = useSearchParams();

  const category = params.get("tag") || "";
  const page = Number(params.get("page")) || 1;

  const { data, loading } = useFetch<IResponce>(
    `/recipes/${category ? `tags/${category}` : ""}`,
    { limit, skip: (page - 1) * limit }
  );

  const { data: tags } = useFetch<string[]>("/recipes/tags");

  const handleCategory = (tag: string) => {
    params.set("tag", tag);
    params.delete("page");
    setParams(params);
  };

  const handlePage = (p: number) => {
    params.set("page", p.toString());
    setParams(params);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Katalog</h2>

      <div className="flex gap-3 overflow-x-auto pb-4">
        <button
          onClick={() => handleCategory("")}
          className={`px-4 py-2 rounded-full border transition ${
            category === ""
              ? "bg-green-600 text-white"
              : "bg-white text-green-700 border-green-600"
          }`}
        >
          Barchasi
        </button>
        {tags?.map((tag) => (
          <button
            key={tag}
            onClick={() => handleCategory(tag)}
            className={`px-4 py-2 rounded-full border transition whitespace-nowrap ${
              category === tag
                ? "bg-green-600 text-white"
                : "bg-white text-green-700 border-green-600"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {loading && <p className="text-gray-500 mt-4">Yuklanmoqda...</p>}

      <Mapping title="Mahsulotlar" data={data?.recipes} />

      <div className="flex justify-center gap-2 mt-6">
        {Array(Math.ceil((data?.total || 0) / limit))
          .fill("")
          .map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePage(idx + 1)}
              className={`px-3 py-1 rounded-md border transition ${
                page === idx + 1
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-green-700 border-green-600 hover:bg-green-100"
              }`}
            >
              {idx + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default memo(Catalog);
