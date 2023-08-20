"use client";

import Container from "../Container";
import { TbBeach } from "react-icons/tb";
import {
  GiMountains,
  GiIsland,
  GiBoatFishing,
  GiCastle,
  GiCampingTent,
  GiMountainCave,
  GiDesert,
  GiAncientRuins,
  GiMonaLisa,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { MdOutlineNaturePeople } from "react-icons/md";
import { MdPool, MdForest } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is located near the beach",
  },
  {
    label: "Mountains",
    icon: GiMountains,
    description: "This property is located near the mountains",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern",
  },
  {
    label: "Countryside",
    icon: MdOutlineNaturePeople,
    description: "This property is located in the countryside",
  },
  {
    label: "Pools",
    icon: MdPool,
    description: "This property has pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is located in an island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is located near a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property is located near a ski resort",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is located near a castle",
  },
  {
    label: "Camping",
    icon: GiCampingTent,
    description: "This property is located near a camping site",
  },
  {
    label: "Caves",
    icon: GiMountainCave,
    description: "This property is located near a cave",
  },
  {
    label: "Forest",
    icon: MdForest,
    description: "This property is located near a forest",
  },
  {
    label: "Desert",
    icon: GiDesert,
    description: "This property is located near a desert",
  },
  {
    label: "Historic",
    icon: GiAncientRuins,
    description: "This property is located near a historic site",
  },
  {
    label: "Art",
    icon: GiMonaLisa,
    description: "This property is located near an art museum",
  },
  {
    label: "Luxury",
    icon: IoDiamond,
    description: "This property is luxurious",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto bg-white">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
