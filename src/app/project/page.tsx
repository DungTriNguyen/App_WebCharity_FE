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
import React from 'react';

const ProjectPage = () => {
  return (
    <div className='container mx-auto py-16'>
      <h3 className='text-center font-bold text-3xl'>
        Danh sách chiến dịch gây quỹ
      </h3>
      <div className='flex justify-start gap-4'>
        {/* status dropdown */}
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Trạng thái' />
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

        <div className='relative ml-auto'>
          <Input
            type='search'
            placeholder='Tìm kiếm tên chương trình'
            className='w-[300px] ml-auto pr-10'
          />
          <SearchIcon className='absolute right-4 top-0 bottom-0 m-auto' />
        </div>
      </div>
      <ProjectList />
    </div>
  );
};

export default ProjectPage;
