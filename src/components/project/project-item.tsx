import { CAMPAIGN_TYPE } from '@/app/enum';
import { cn } from '@/lib/utils';
import { CalendarFoldIcon, HandCoinsIcon, HandHeartIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Progress } from '../ui/progress';

const ProjectItem = ({ project }: { project: TCampaign }) => {
  function formatCurrencyToVND(value: number): string {
    return (
      value
        .toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND',
          minimumFractionDigits: 0,
        })
        .replace('₫', '')
        .trim() + ' ₫'
    );
  }
  return (
    <div className='min-w-[350px]'>
      <div
        className={cn(
          'rounded-xl overflow-hidden h-[300px] bg-opacity-10 bg-cover mb-2 flex flex-col p-2 relative'
        )}
        style={{ backgroundImage: `url(${project?.background_image})` }}
      >
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-20'></div>
        <div className='bg-black text-accent bg-opacity-50 mt-auto rounded-full py-4 px-6 flex gap-2 items-center z-10'>
          <div className='w-full'>
            {project?.type === CAMPAIGN_TYPE.DONATE && (
              <div className='flex flex-col gap-2 w-full'>
                <div className='flex justify-between'>
                  <span>
                    {formatCurrencyToVND(
                      Number(project?.donations_sum_amount || 0)
                    )}
                    /
                    {formatCurrencyToVND(Number(project?.donation_target || 0))}
                  </span>
                  <span>
                    {Math.floor(
                      (Number(project?.donations_sum_amount) * 100 || 0) /
                        Number(project?.donation_target || 0)
                    )}
                    %
                  </span>
                </div>
                <Progress value={project?.donation_percent || 0} />
              </div>
            )}
            {project?.type === CAMPAIGN_TYPE.VOLUNTEER && (
              <div className='flex flex-col gap-2 w-full'>
                <div className='flex justify-between'>
                  <span>
                    {project?.volunteers_without_canceled_count || 0} /
                    {project?.volunteer_quantity || 0} TNV
                  </span>
                  <span>
                    {Math.floor(
                      (project?.volunteers_without_canceled_count * 100 || 0) /
                        project?.volunteer_quantity || 0
                    )}
                    %
                  </span>
                </div>
                <Progress value={project?.volunteer_percent || 0} />
              </div>
            )}
            {project?.type === CAMPAIGN_TYPE.MULTIPLE && (
              <>
                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex justify-between'>
                    <span>
                      {formatCurrencyToVND(
                        Number(project?.donations_sum_amount || 0)
                      )}
                      /
                      {formatCurrencyToVND(
                        Number(project?.donation_target || 0)
                      )}
                    </span>
                    <span>
                      {Math.floor(
                        (Number(project?.donations_sum_amount) * 100 || 0) /
                          Number(project?.donation_target || 0)
                      )}
                      %
                    </span>
                  </div>
                  <Progress value={project?.donation_percent || 0} />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex justify-between'>
                    <span>
                      {project?.volunteers_without_canceled_count || 0}/
                      {project?.volunteer_quantity || 0} TNV
                    </span>
                    <span>
                      {Math.floor(
                        (project?.volunteers_without_canceled_count * 100 ||
                          0) / project?.volunteer_quantity || 0
                      )}
                      %
                    </span>
                  </div>
                  <Progress value={project?.volunteer_percent || 0} />
                </div>
              </>
            )}
          </div>
          <Button
            size={'icon'}
            variant={'ghost'}
            className='bg-accent text-accent-foreground rounded-full ml-auto p-1'
          >
            <HandCoinsIcon width={20} height={20} strokeWidth={1} />
          </Button>
        </div>
      </div>
      <Label className='font-bold text-lg mt-2'>
        <Link href={`/projects/${project?.id}`}>{project?.name}</Link>
      </Label>
      <div className='flex justify-between text-gray-400'>
        <span className='flex gap-1 items-center'>
          <HandHeartIcon strokeWidth={1} />
          <div className=''>
            {project?.type === CAMPAIGN_TYPE.DONATE && (
              <p>{project?.donations_count} lượt ủng hộ</p>
            )}
            {project?.type === CAMPAIGN_TYPE.VOLUNTEER && (
              <p>
                {project?.volunteers_without_canceled_count} lượt tham gia tình
                nguyện
              </p>
            )}
            {project?.type === CAMPAIGN_TYPE.MULTIPLE && (
              <div>
                <p>{project?.donations_count} lượt ủng hộ</p>
                <p>
                  {project?.volunteers_without_canceled_count} lượt tham gia
                  tình nguyện
                </p>
              </div>
            )}
          </div>
        </span>
        <span className='flex gap-1 items-center'>
          <CalendarFoldIcon strokeWidth={1} />
          {project?.diff_date}
          {/* {project?.front_status_label} */}
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
