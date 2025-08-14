import { memo, type FC } from "react";
import type { IProduct } from "../../types";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  data?: IProduct[] | null;
}

const ProductGrid: FC<Props> = ({ title, data }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 border-b border-green-300 pb-2 text-green-800">
        {title}
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div
              onClick={() => navigate(`/recipes/${item.id}`)}
              className="cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate">{item.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-1">
                <span>⭐ {item.rating}</span>
                {item.reviewCount !== undefined && (
                  <span>{item.reviewCount} sharh</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ProductGrid);
