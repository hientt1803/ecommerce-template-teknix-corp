import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export const PageBreadcrumb = ({
  segment,
  page,
}: {
  segment?: string;
  page?: string;
}) => {
  return (
    <Breadcrumb className="my-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/">Home</Link>
        </BreadcrumbItem>
        {segment && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/${segment}`}>{segment}</Link>
            </BreadcrumbItem>
          </>
        )}
        {page && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="uppercase font-bold">{page}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
