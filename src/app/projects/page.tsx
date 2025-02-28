import ProjectList from '@/components/project';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const tabList = [
  {
    label: 'Tất cả',
    value: 'all',
  },
  {
    label: 'Tổ chức',
    value: 'organization',
  },
  {
    label: 'Cá nhân',
    value: 'individual',
  },
];

const ProjectPage = ({
  searchParams,
}: {
  searchParams: { filter?: string };
}) => {
  const currentFilter = searchParams.filter || 'all';

  return (
    <div className='container 2xl:max-w-[1200px] mx-auto py-16'>
      <div className='flex justify-center gap-8 mb-10'>
        {tabList.map((tab) => (
          <Link
            key={tab.value}
            href={`/projects?filter=${tab.value}`}
            className={cn(
              'text-center font-bold text-2xl transition-colors',
              currentFilter === tab.value
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-gray-700'
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>
      <h3 className='text-center font-bold text-3xl mb-10'>
        Danh sách chiến dịch gây quỹ
      </h3>
      <div className='flex justify-start gap-4 mb-8'>
        {/* status dropdown */}
        {/* Trạng thái */}
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Trạng thái' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='apple'>Đang thực hiện</SelectItem>
              <SelectItem value='banana'>Đạt mục tiêu</SelectItem>
              <SelectItem value='blueberry'>Đã kết thúc</SelectItem>
              <SelectItem value='grapes'>Tạm dừng</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Loại chương trình */}
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Loại chương trình' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='apple'>Apple</SelectItem>
              <SelectItem value='banana'>Banana</SelectItem>
              <SelectItem value='blueberry'>Blueberry</SelectItem>
              <SelectItem value='grapes'>Grapes</SelectItem>
              <SelectItem value='pineapple'>Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Loại đóng góp */}
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Loại đóng góp' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='apple'>Quyên góp tiền</SelectItem>
              <SelectItem value='banana'>Đăng ký tình nguyện viên</SelectItem>
              <SelectItem value='blueberry'>Quyên góp tiền & ĐKTN</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className='relative ml-auto'>
          <Input
            type='search'
            placeholder='Tìm kiếm tên chương trình'
            className='w-[300px] ml-auto pr-10'
          />
          <SearchIcon className='absolute right-4 top-0 bottom-0 m-auto' />
        </div>
      </div>
      <ProjectList filter={currentFilter} />
    </div>
  );
};

export default ProjectPage;
