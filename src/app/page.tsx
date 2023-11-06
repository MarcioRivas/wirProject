"use client";

import {
  Text,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Tooltip,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import ItemCard from "./components/itemCard";
import { Item, PlataformFilter } from "@/types";
import { usePhones } from "@/utils/parseResponses";

type MemoryFilter = "128gb" | "256gb" | "512gb" | "All";

export default function Home() {
  const { getCommonModel } = usePhones();
  const [memoryFilter, setMemoryFilter] = useState<MemoryFilter>("All");
  const [platformFilter, setPlatformFilter] = useState<PlataformFilter>("Both");
  const [fetchedItems, setFetchedItems] = useState<Item[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [sliderValue, setSliderValue] = useState([0, 100]);

  useEffect(() => {
    const getItems = async () => {
      const items = await getCommonModel();
      setFetchedItems(items);
    };
    getItems();
  }, []);

  const matchedItems = fetchedItems
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.description.toLowerCase().includes(searchInput.toLowerCase())
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(memoryFilter) || memoryFilter === "All"
    ).filter(item => item.price >= sliderValue[0]*2000 && item.price <= sliderValue[1]*2000).filter(item => platformFilter === "Both" || item.platform === platformFilter)  ;

  return (
    <Stack gap="10">
      <Flex gap="3" justifyContent="space-around">
        <Flex gap={5} width="300px">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search..."
              variant="filled"
              _focus={{ borderColor: "orange.300" }}
              width="400px"
            />
          </InputGroup>
        </Flex>
        <Flex gap={5} width="300px" alignItems="center">
          <Text whiteSpace="nowrap">Plataform</Text>
          <Select
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value as PlataformFilter)}
          >      
            <option value="Both">Both</option>
            <option value="Ebay">Ebay</option>
            <option value="Mercado Libre">Mercado Libre</option>
          </Select>
        </Flex>
        <Flex gap={5} width="300px" alignItems="center">
          <Text whiteSpace="nowrap">Memory size</Text>
          <Select
            placeholder="Select memory size"
            value={memoryFilter}
            onChange={(e) => setMemoryFilter(e.target.value as MemoryFilter)}
          >
            <option value="128gb">128gb</option>
            <option value="256gb">256gb</option>
            <option value="512gb">512gb</option>
            <option value="All">All</option>
          </Select>
        </Flex>
        <Flex gap={5} width="300px" alignItems="center">
          <Text whiteSpace="nowrap">Price range</Text>
          <RangeSlider
            aria-label={["min", "max"]}
            defaultValue={[0,200000]}
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <Tooltip
              hasArrow
              bg="teal.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`$${sliderValue[0]*2000}`}
            >
              <RangeSliderThumb index={0} />
            </Tooltip>
            <Tooltip
              hasArrow
              bg="teal.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`$${sliderValue[1]*2000}`}
            >
              <RangeSliderThumb index={1} />
            </Tooltip>
          </RangeSlider>
        </Flex>
      </Flex>
      <Flex gap="10" flexWrap="wrap" overflow="auto">
        {matchedItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </Flex>
    </Stack>
  );
}
