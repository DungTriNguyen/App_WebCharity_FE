'use client';
import React from 'react';
import { Card } from '../ui/card';
import Image from 'next/image';
import { Separator } from '../ui/separator';
import TargetIcon from '../icons/target-icon';
import ClockIcon from '../icons/clock-icon';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { SquareArrowOutUpRightIcon } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { CAMPAIGN_TYPE } from '@/app/enum';
import { formatCurrencyToVND } from '@/lib/utils';

const ProjectStatus = ({ project }: { project: TCampaign }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <Card className='p-6 flex flex-col gap-4'>
      <div>
        <p>Tổ chức / cá nhân đồng hành với chiến dịch </p>
        <div className='flex gap-2 items-center'>
          <Image
            alt='avatar'
            width={48}
            height={48}
            src={project?.user?.avatar_url}
            className='rounded-full aspect-square'
          />
          <p>{project?.user?.name}</p>
        </div>
      </div>
      <Separator />
      <div className='flex justify-around'>
        <div className='flex gap-2'>
          <TargetIcon width='40' height='40' />
          <div className='flex flex-col'>
            <span className='text-gray-500'>Mục tiêu chiến dịch</span>
            {project?.type == CAMPAIGN_TYPE.DONATE && (
              <span className='font-bold'>
                {formatCurrencyToVND(Number(project?.donation_target) || 0)}
              </span>
            )}
            {project?.type == CAMPAIGN_TYPE.VOLUNTEER && (
              <span className='font-bold'>
                {project?.volunteer_quantity} tình nguyện viên
              </span>
            )}
            {project?.type == CAMPAIGN_TYPE.MULTIPLE && (
              <>
                <span className='font-bold'>
                  {formatCurrencyToVND(Number(project?.donation_target) || 0)}
                </span>
                <span className='font-bold'>
                  {project?.volunteer_quantity} tình nguyện viên
                </span>
              </>
            )}
          </div>
        </div>
        <div className='flex gap-2'>
          <ClockIcon width='40' height='40' />
          <div className='flex flex-col'>
            <span className='text-gray-500'>Thời gian còn lại</span>
            <span className='font-bold'>{[project?.diff_date]}</span>
          </div>
        </div>
      </div>
      {project?.type == CAMPAIGN_TYPE.DONATE && (
        <div>
          <p className='font-bold'>Tiền ủng hộ</p>
          <Progress value={project?.donation_percent || 0} />
          <div className='flex w-full'>
            <p>
              đã đạt được{' '}
              <span className='font-bold'>
                {formatCurrencyToVND(
                  Number(project?.donations_with_paid_sum_amount || 0)
                )}
                /{formatCurrencyToVND(Number(project?.donation_target) || 0)}
              </span>
            </p>
            <p className='ml-auto'>{project?.donation_percent || 0}%</p>
          </div>
        </div>
      )}
      {project?.type == CAMPAIGN_TYPE.VOLUNTEER && (
        <div>
          <p className='font-bold'>Tình nguyện viên</p>

          <Progress value={project?.volunteer_percent || 0} />
          <div className='flex w-full'>
            <p>
              đã đạt được{' '}
              <span className='font-bold'>
                {project?.volunteers_without_canceled_count || 0}/
                {project.volunteer_quantity || 0} TNV
              </span>
            </p>
            <p className='ml-auto'>{project?.volunteer_percent || 0}%</p>
          </div>
        </div>
      )}
      {project?.type == CAMPAIGN_TYPE.MULTIPLE && (
        <>
          <div>
            <p className='font-bold'>Tiền ủng hộ</p>
            <Progress value={project?.donation_percent || 0} />
            <div className='flex w-full'>
              <p>
                đã đạt được{' '}
                <span className='font-bold'>
                  {formatCurrencyToVND(
                    Number(project?.donations_with_paid_sum_amount || 0)
                  )}
                  /{formatCurrencyToVND(Number(project?.donation_target) || 0)}
                </span>
              </p>
              <p className='ml-auto'>{project?.donation_percent || 0}%</p>
            </div>
          </div>
          <div>
            <p className='font-bold'>Tình nguyện viên</p>
            <Progress value={project?.volunteer_percent || 0} />
            <div className='flex w-full'>
              <p>
                đã đạt được{' '}
                <span className='font-bold'>
                  {project?.volunteers_without_canceled_count || 0}/
                  {project.volunteer_quantity || 0} TNV
                </span>
              </p>
              <p className='ml-auto'>{project?.volunteer_percent || 0}%</p>
            </div>
          </div>
        </>
      )}

      <div className='flex justify-around'>
        {project?.type === CAMPAIGN_TYPE.DONATE && (
          <Button onClick={() => router.push(`${params.id}/donate`)}>
            Ủng hộ tiền
          </Button>
        )}
        {project?.type === CAMPAIGN_TYPE.VOLUNTEER && (
          <Button
            variant={'outline'}
            onClick={() => router.push(`${params.id}/register-volunteer`)}
          >
            Tham gia tình nguyện
          </Button>
        )}
        {project?.type === CAMPAIGN_TYPE.MULTIPLE && (
          <>
            <Button onClick={() => router.push(`${params.id}/donate`)}>
              Ủng hộ tiền
            </Button>
            <Button
              variant={'outline'}
              onClick={() => router.push(`${params.id}/register-volunteer`)}
            >
              Tham gia tình nguyện
            </Button>
          </>
        )}
      </div>
      <Button variant={'link'} className='ml-auto'>
        Chia sẻ để lan tỏa yêu thương <SquareArrowOutUpRightIcon />
      </Button>
    </Card>
  );
};

export default ProjectStatus;
