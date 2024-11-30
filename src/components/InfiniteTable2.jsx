import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  getKeyValue,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";

export default function InfiteTable() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasMore, setHasMore] = React.useState(false);

  // HandleAcrtions


  let list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        setIsLoading(false);
      }

      const res = await fetch(
        cursor || "https://1k6ckr9w-5000.usw3.devtunnels.ms/api/random-books",
        { signal }
      );
      let json = await res.json();

      setHasMore(json.next !== null);

      return {
        items: json,
        cursor: json.next,
      };
    },
  });

  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore,
    onLoadMore: list.loadMore,
  });

  return (
    <Table
      isHeaderSticky
      aria-label="Example table with infinite pagination"
      baseRef={scrollerRef}
      bottomContent={
        hasMore ? (
          <div className="flex w-full justify-center">
            <Spinner ref={loaderRef} color="white" />
          </div>
        ) : null
      }
      classNames={{
        base: "max-h-[520px] overflow-scroll",
        table: "min-h-[400px]",
      }}>
      <TableHeader>
        <TableColumn key="name">
          <div className="flex justify-around">
            <div>#</div>
            <div>ISBN</div>
            <div>Title</div>
            <div>Author(s)</div>
            <div>Publisher</div>
          </div>
        </TableColumn>
        {/* <TableColumn key="height">Height</TableColumn>
        <TableColumn key="mass">Mass</TableColumn>
        <TableColumn key="birth_year">Birth year</TableColumn> */}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={list.items}
        loadingContent={<Spinner color="white" />}>
        {(item) => (
          <TableRow key={item.title}>
            <TableCell>
              {/* <div className="flex justify-around">
                <div>1</div>
                <div>123123</div>
                <div>Maze Runner</div>
                <div>Jash Daniels</div>
                <div>Porrua</div>
              </div> */}
              <Accordion>
                <AccordionItem
                  key="1"
                  title={
                    <div className="flex w-full gap-10">
                      <div>1</div>
                      <div>123123</div>
                      <div>{item.title}</div>
                      <div>{item.author}</div>
                      <div>Porrua</div>
                    </div>
                  }>
                  <div>Book Cover</div>
                  <div>Review Text</div>
                  <div>Review Authors</div>
                  Acordion Prueba
                </AccordionItem>
              </Accordion>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
