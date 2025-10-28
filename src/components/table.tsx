import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DotsThreeVerticalIcon } from "@phosphor-icons/react/dist/ssr";

interface TableColumn {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableViewProps {
  heading: TableColumn[];
  data: any[];
  totalPages: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export default function TableView({
  heading,
  data,
  totalPages,
  currentPage: externalCurrentPage,
  onPageChange,
}: TableViewProps) {
  const [internalCurrentPage, setInternalCurrentPage] = useState(1);

  const currentPage = externalCurrentPage ?? internalCurrentPage;

  const handlePageChange = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    } else {
      setInternalCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3);

      if (currentPage > 4) {
        pages.push("...");
      }

      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(currentPage);
      }

      if (currentPage < totalPages - 3) {
        pages.push("...");
      }

      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }

    return [...new Set(pages)];
  };

  const renderCellContent = (column: TableColumn, row: any) => {
    const value = row[column.key];

    if (column.render) {
      return column.render(value, row);
    }

    return value;
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr className="text-left">
              {heading.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-sm font-medium text-gray-600 whitespace-nowrap"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={heading.length}
                  className="px-6 py-12 text-center text-sm text-gray-500"
                >
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {heading.map((column) => (
                    <td
                      key={column.key}
                      className="px-6 py-4 text-sm text-gray-700"
                    >
                      {renderCellContent(column, row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex items-center gap-1">
            {getPageNumbers().map((page, index) => (
              <React.Fragment key={index}>
                {page === "..." ? (
                  <span className="px-3 py-2 text-sm text-gray-500">...</span>
                ) : (
                  <button
                    onClick={() =>
                      typeof page === "number" && handlePageChange(page)
                    }
                    className={`min-w-[40px] px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === page
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
