'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { SearchIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useGetProjectQuery } from '@/hooks/use-project';
import { useDebounce } from '@/hooks/use-debounce';
import { CAMPAIGN_STATUS } from '@/app/enum';

const QuickSearchProjectDropdown = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  const { register, watch, setValue } = useForm();
  const searchKeyword = watch('keyword');
  const debouncedSearch = useDebounce(searchKeyword, 300);
  const { data: searchResults, isLoading } = useGetProjectQuery({
    keyword: debouncedSearch,
    front_status: CAMPAIGN_STATUS.IN_PROGRESS,
  });
  const handleSearch = React.useCallback((keyword: string) => {
    if (keyword) {
      router.push(`/projects?keyword=${encodeURIComponent(keyword)}`);
      setIsSearchOpen(false);
    }
  }, [router]);

  useEffect(() => {
    if (isSearchOpen) {
      setValue('keyword', '');
    }
  }, [isSearchOpen, setValue]);

  const isDisplayResult = useMemo(() => {
    return !!debouncedSearch
  }, [debouncedSearch])

  const renderResult = useMemo(() => {
    if (isLoading) {
      return (<div className='mt-2 text-center py-2 text-gray-500'>
        Đang tìm kiếm...
      </div>)
    } else if (searchResults?.length) {
      return (
        <div className='mt-2'>
          <div className='max-h-[300px] overflow-y-auto'>
            {searchResults?.slice(0, 5).map((project: TCampaign) => (
              <DropdownMenuItem
                key={project.id}
                className='py-2 px-3 cursor-pointer hover:bg-primary/10'
                onClick={() => {
                  router.push(`/projects/${project.id}`);
                  setIsSearchOpen(false);
                }}
              >
                <div className='flex flex-col'>
                  <span className='font-medium'>{project.name}</span>
                  <span className='text-sm text-gray-500' dangerouslySetInnerHTML={{ __html: project.content || '' }}>
                  </span>
                </div>
              </DropdownMenuItem>
            ))}
          </div>
          {searchResults.length > 5 && (
            <Button
              variant='ghost'
              className='w-full mt-2 text-primary hover:bg-primary/10'
              onClick={() => handleSearch(debouncedSearch)}
            >
              Xem thêm {searchResults.length - 5} kết quả
            </Button>
          )}
        </div>
      )
    } else {
      return (<div className='mt-2 text-center py-2 text-gray-500'>
        Không tìm thấy kết quả
      </div>)
    }

  }, [debouncedSearch, handleSearch, isLoading, router, searchResults])

  return (
    <DropdownMenu open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-primary/10'
        >
          <SearchIcon className='h-6 w-6' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-96 p-2' align='end'>
        <div className='relative'>
          <Input
            {...register('keyword')}
            type='text'
            placeholder='Tìm kiếm dự án thiện nguyện...'
            className='w-full pl-4 pr-10 py-2'
            autoFocus
          />
          <SearchIcon className='absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
        </div>

        {isDisplayResult ? renderResult :
          <div className='mt-2 text-center py-2 text-gray-500'>
            Không tìm thấy kết quả
          </div>
        }
      </DropdownMenuContent>
    </DropdownMenu >
  )
}

export default QuickSearchProjectDropdown
