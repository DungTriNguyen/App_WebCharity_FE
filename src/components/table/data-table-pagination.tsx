import { Button } from '@/components/ui/button';
import { Table } from '@tanstack/react-table';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className='flex items-center justify-between px-2'>
      <div className='flex-1 text-sm text-muted-foreground'></div>
      <div className='flex items-center space-x-6 lg:space-x-8'>
        <div className='flex w-[100px] items-center justify-center text-sm font-medium'>
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <div className='flex items-center space-x-2'>
          <Button
            className='hidden h-8 w-8 p-0 lg:flex'
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.setPageIndex(0)}
            variant='outline'
          >
            <span className='sr-only'>Go to first page</span>
          </Button>
          <Button
            className='h-8 w-8 p-0'
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            variant='outline'
          >
            <span className='sr-only'>Go to previous page</span>
          </Button>
          <Button
            className='h-8 w-8 p-0'
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            variant='outline'
          >
            <span className='sr-only'>Go to next page</span>
          </Button>
          <Button
            className='hidden h-8 w-8 p-0 lg:flex'
            disabled={!table.getCanNextPage()}
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            variant='outline'
          >
            <span className='sr-only'>Go to last page</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
