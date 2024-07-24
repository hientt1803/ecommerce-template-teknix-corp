import { CATEGORIES_SAMPLE_DATA, TAG_SAMPLE_DATA } from "@/lib/data";
import { AccordinFilterItem } from "./accordin-filter-item";

const SIZE_SAMPLE_DATA = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const SIZE_SAMPLE_DATA_2 = [
  "Common",
  "Cotton",
  "Linen",
  "Wool",
  "Wool/Cashmere",
  "Wool/linen",
  "Wool/cotton",
];

export const ShopFilter = () => {
  return (
    <>
      {/* <AccordinFilterItem title="Size" filterData={SIZE_SAMPLE_DATA} /> */}

      {/* <AccordinFilterItem
        title="Fabric Composition"
        filterData={SIZE_SAMPLE_DATA_2}
      /> */}

      <AccordinFilterItem
        title="Categories"
        filterData={CATEGORIES_SAMPLE_DATA}
      />

      <AccordinFilterItem title="Tags" filterData={TAG_SAMPLE_DATA} />

      <AccordinFilterItem title="Price range" searchPrice />
    </>
  );
};
