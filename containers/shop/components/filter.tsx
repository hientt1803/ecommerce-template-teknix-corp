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
      <AccordinFilterItem title="Size" data={SIZE_SAMPLE_DATA} />

      <AccordinFilterItem
        title="Fabric Composition"
        data={SIZE_SAMPLE_DATA_2}
      />

      <AccordinFilterItem title="Categories" data={CATEGORIES_SAMPLE_DATA} />

      <AccordinFilterItem title="Tags" data={TAG_SAMPLE_DATA} />

      <AccordinFilterItem title="Price range">PRICE RANGE</AccordinFilterItem>
    </>
  );
};
