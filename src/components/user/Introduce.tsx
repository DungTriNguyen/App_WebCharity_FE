import { useGetUserProfileQuery } from '@/hooks/use-profile';
import { Card } from '../ui/card';
import { Description } from '@radix-ui/react-toast';

const Introduce = () => {
  const { data: userProfile } = useGetUserProfileQuery();
  console.log(userProfile, 'userProfile');
  return (
    <div>
      <Card>
        <div className='flex flex-col gap-4 p-4 justify-center items-center'>
          <Description>
            {userProfile?.data?.description || 'chưa có thông tin'}
          </Description>
        </div>
      </Card>
    </div>
  );
};

export default Introduce;
