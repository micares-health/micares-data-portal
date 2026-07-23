/* eslint-disable prettier/prettier */
import React, { useMemo, useState } from "react";
import NextLink from "next/link";
import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Input,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon, SearchIcon } from "@chakra-ui/icons";

const COLLECTION_ID = "8c54bcd0-d1fa-45d5-bc88-4609de7c786f";

/*
 * DATASET CATALOG
 *
 * Copy the object below once for every dataset or release. The public page is
 * generated from this array. The documentationHref points to a public page in
 * this repository. filesHref points to the portal page used to access files.
 * For individual datasets, it may instead be a folder-specific Globus URL.
 */
const DATASETS = [
  {
    id: "micares-research-data-collection",
    release: "1.0",
    component: "",
    title: "MI-CARES Research Data Collection",
    description:
      "MI-CARES research data collection.",
    documentationHref: "https://micares-health.github.io/micares-data-portal/transfer",
    filesHref: "https://micares-health.github.io/micares-data-portal/transfer",
    filesLocationLabel: "MI-CARES transfer portal",
    formats: "Various",
    access: "Restricted",
    published: "2026-07-23",
    isExample: false,
  },
];

function globusFileManagerUrl(path) {
  const params = new URLSearchParams({
    origin_id: COLLECTION_ID,
    origin_path: path,
  });
  return `https://app.globus.org/file-manager?${params.toString()}`;
}

function uniqueSorted(values) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

export default function DataCatalogPage() {
  const [query, setQuery] = useState("");
  const [release, setRelease] = useState("");
  const [component, setComponent] = useState("");

  const releases = useMemo(
    () => uniqueSorted(DATASETS.map((dataset) => dataset.release)),
    [],
  );
  const components = useMemo(
    () => uniqueSorted(DATASETS.map((dataset) => dataset.component)),
    [],
  );

  const filteredDatasets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return DATASETS.filter((dataset) => {
      const matchesRelease = !release || dataset.release === release;
      const matchesComponent = !component || dataset.component === component;
      const searchableText = [
        dataset.release,
        dataset.component,
        dataset.title,
        dataset.description,
        dataset.formats,
        dataset.access,
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery =
        !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesRelease && matchesComponent && matchesQuery;
    });
  }, [component, query, release]);

  const clearFilters = () => {
    setQuery("");
    setRelease("");
    setComponent("");
  };

  return (
    <VStack align="stretch" spacing={8} py={{ base: 4, md: 8 }}>
      <Box
        borderRadius="xl"
        bgGradient="linear(to-br, primary.800, primary.600)"
        color="white"
        px={{ base: 5, md: 10 }}
        py={{ base: 8, md: 12 }}
        boxShadow="lg"
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "minmax(0, 3fr) minmax(260px, 1fr)" }}
          gap={8}
          alignItems="center"
        >
          <Box>
            <Text
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="primary.100"
              mb={3}
            >
              Questionnaires, datasets, and documentation
            </Text>
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              MI-CARES Data Catalog
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} maxW="3xl" color="whiteAlpha.900">
              
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={3} mt={6}>
              <Button as="a" href="#dataset-table" colorScheme="whiteAlpha">
                Browse datasets
              </Button>
              <Button
                as={NextLink}
                href="/documentation"
                variant="outline"
                borderColor="whiteAlpha.700"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                Browse documentation
              </Button>
            </Stack>
          </Box>

          <Box bg="whiteAlpha.200" borderRadius="lg" p={5}>
            <Text fontWeight="bold" mb={3}>
              How access works
            </Text>
            <VStack align="stretch" spacing={3} fontSize="sm">
              <HStack align="flex-start">
                <Badge colorScheme="blue" mt={0.5}>1</Badge>
                <Text>Request access.</Text>
              </HStack>
              <HStack align="flex-start">
                <Badge colorScheme="blue" mt={0.5}>2</Badge>
                <Text>Read the research data guide.</Text>
              </HStack>
              <HStack align="flex-start">
                <Badge colorScheme="blue" mt={0.5}>3</Badge>
                <Text>Sign in and browse or transfer data.</Text>
              </HStack>
            </VStack>
          </Box>
        </Grid>
      </Box>

      <Box id="dataset-table" scrollMarginTop="6rem">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "stretch", md: "end" }}
          gap={4}
          mb={5}
        >
          <Box>
            <Text
              fontSize="sm"
              color="primary.700"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="0.08em"
            >
              Data files
            </Text>
            <Heading as="h2" size="lg" mt={1}>
              Available datasets
            </Heading>
          </Box>
          <Text color="gray.600" aria-live="polite">
            {filteredDatasets.length} of {DATASETS.length} records shown
          </Text>
        </Flex>

        <Box borderWidth="1px" borderRadius="lg" p={{ base: 4, md: 5 }} mb={5} bg="gray.50">
          <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr 1fr auto" }} gap={4} alignItems="end">
            <FormControl>
              <FormLabel htmlFor="catalog-search">Search datasets</FormLabel>
              <Box position="relative">
                <SearchIcon position="absolute" left={3} top="50%" transform="translateY(-50%)" color="gray.400" />
                <Input
                  id="catalog-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search title, topic, format, or access type"
                  bg="white"
                  pl={10}
                />
              </Box>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="release-filter">Release</FormLabel>
              <Select
                id="release-filter"
                value={release}
                onChange={(event) => setRelease(event.target.value)}
                bg="white"
              >
                <option value="">All releases</option>
                {releases.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="component-filter">Component</FormLabel>
              <Select
                id="component-filter"
                value={component}
                onChange={(event) => setComponent(event.target.value)}
                bg="white"
              >
                <option value="">All components</option>
                {components.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>

            <Button onClick={clearFilters} variant="outline" bg="white">
              Clear
            </Button>
          </Grid>
        </Box>

        <TableContainer borderWidth="1px" borderRadius="lg" overflowX="auto">
          <Table variant="simple" size="md">
            <Thead bg="gray.100">
              <Tr>
                <Th>Release</Th>
                <Th>Component</Th>
                <Th minW="280px">Dataset</Th>
                <Th>Documentation</Th>
                <Th>Data</Th>
                <Th>Date published</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredDatasets.map((dataset) => (
                <Tr key={dataset.id} verticalAlign="top">
                  <Td whiteSpace="normal">
                    <Text fontWeight="semibold">{dataset.release}</Text>
                  </Td>
                  <Td whiteSpace="normal">{dataset.component}</Td>
                  <Td whiteSpace="normal">
                    <HStack mb={1} align="center" wrap="wrap">
                      <Text fontWeight="bold">{dataset.title}</Text>
                      {dataset.isExample && <Badge colorScheme="orange">Template</Badge>}
                      <Badge colorScheme={dataset.access === "Public" ? "green" : "purple"}>
                        {dataset.access}
                      </Badge>
                    </HStack>
                    <Text fontSize="sm" color="gray.700" mb={2}>
                      {dataset.description}
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      Formats: {dataset.formats}
                    </Text>
                  </Td>
                  <Td whiteSpace="normal">
                    <Link
                      as={NextLink}
                      href={dataset.documentationHref}
                      color="primary.700"
                      fontWeight="semibold"
                    >
                      View documentation
                    </Link>
                  </Td>
                  <Td whiteSpace="normal">
                    <Link
                      href={
                        dataset.filesHref ||
                        globusFileManagerUrl(dataset.globusPath)
                      }
                      color="primary.700"
                      fontWeight="semibold"
                      isExternal
                    >
                      Open files <ExternalLinkIcon mx="2px" />
                    </Link>
                    <Text fontSize="xs" color="gray.600" mt={1}>
                      {dataset.filesLocationLabel || dataset.globusPath}
                    </Text>
                  </Td>
                  <Td whiteSpace="normal">{dataset.published}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        {filteredDatasets.length === 0 && (
          <Box borderWidth="1px" borderTopWidth="0" p={8} textAlign="center" bg="gray.50">
            <Heading as="h3" size="sm" mb={2}>
              No matching datasets
            </Heading>
            <Text color="gray.600" mb={4}>
              Try a broader search or clear the filters.
            </Text>
            <Button onClick={clearFilters} size="sm">
              Clear filters
            </Button>
          </Box>
        )}
      </Box>
    </VStack>
  );
}
